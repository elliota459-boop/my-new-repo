'use client';

import React, { useEffect, useRef, useState } from 'react';
import type * as THREE from 'three';

/* ─────────────────────────────────────────────
   HorizonHero — Three.js immersive demo scene
   All CSS is inline so no external stylesheet
   is required. SSR-safe: all window/canvas
   access happens inside useEffect.
───────────────────────────────────────────── */

export const HorizonHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const titleRef     = useRef<HTMLHeadingElement>(null);
  const subtitleRef  = useRef<HTMLDivElement>(null);

  const smoothCameraPos = useRef({ x: 0, y: 30, z: 100 });

  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const totalSections = 3;

  // Typed bucket for all Three.js refs — avoids any repeated `any` casts
  const threeRefs = useRef<{
    scene:       import('three').Scene       | null;
    camera:      import('three').PerspectiveCamera | null;
    renderer:    import('three').WebGLRenderer     | null;
    composer:    { render: () => void; setSize: (w: number, h: number) => void } | null;
    stars:       import('three').Points[];
    nebula:      import('three').Mesh        | null;
    mountains:   import('three').Mesh[];
    animationId: number | null;
    locations:   number[];
    targetCameraX: number;
    targetCameraY: number;
    targetCameraZ: number;
  }>({
    scene: null, camera: null, renderer: null, composer: null,
    stars: [], nebula: null, mountains: [], animationId: null,
    locations: [], targetCameraX: 0, targetCameraY: 30, targetCameraZ: 100,
  });

  /* ── Three.js bootstrap ── */
  useEffect(() => {
    let cancelled = false;

    const boot = async () => {
      const THREE  = await import('three');
      const { EffectComposer } = await import('three/examples/jsm/postprocessing/EffectComposer.js');
      const { RenderPass }     = await import('three/examples/jsm/postprocessing/RenderPass.js');
      const { UnrealBloomPass }= await import('three/examples/jsm/postprocessing/UnrealBloomPass.js');

      if (cancelled || !canvasRef.current) return;

      const refs = threeRefs.current;

      /* scene */
      refs.scene = new THREE.Scene();
      refs.scene.fog = new THREE.FogExp2(0x000000, 0.00025);

      /* camera */
      refs.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
      refs.camera.position.set(0, 20, 100);

      /* renderer */
      refs.renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
      refs.renderer.setSize(window.innerWidth, window.innerHeight);
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      refs.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      refs.renderer.toneMappingExposure = 0.5;

      /* post-processing */
      const composer = new EffectComposer(refs.renderer);
      composer.addPass(new RenderPass(refs.scene, refs.camera));
      const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.8, 0.4, 0.85);
      composer.addPass(bloom);
      refs.composer = composer;

      /* ── stars ── */
      for (let layer = 0; layer < 3; layer++) {
        const count = 5000;
        const geo = new THREE.BufferGeometry();
        const pos   = new Float32Array(count * 3);
        const col   = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        for (let j = 0; j < count; j++) {
          const r     = 200 + Math.random() * 800;
          const theta = Math.random() * Math.PI * 2;
          const phi   = Math.acos(Math.random() * 2 - 1);
          pos[j*3]   = r * Math.sin(phi) * Math.cos(theta);
          pos[j*3+1] = r * Math.sin(phi) * Math.sin(theta);
          pos[j*3+2] = r * Math.cos(phi);

          const c = new THREE.Color();
          const rand = Math.random();
          if (rand < 0.7)       c.setHSL(0, 0, 0.8 + Math.random() * 0.2);
          else if (rand < 0.9)  c.setHSL(0.08, 0.5, 0.8);
          else                  c.setHSL(0.6, 0.5, 0.8);
          col[j*3] = c.r; col[j*3+1] = c.g; col[j*3+2] = c.b;
          sizes[j] = Math.random() * 2 + 0.5;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
        geo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

        const mat = new THREE.ShaderMaterial({
          uniforms: { time: { value: 0 }, depth: { value: layer } },
          vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            uniform float time;
            uniform float depth;
            void main() {
              vColor = color;
              vec3 pos = position;
              float angle = time * 0.05 * (1.0 - depth * 0.3);
              mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
              pos.xy = rot * pos.xy;
              vec4 mvp = modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = size * (300.0 / -mvp.z);
              gl_Position = projectionMatrix * mvp;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            void main() {
              float d = length(gl_PointCoord - vec2(0.5));
              if (d > 0.5) discard;
              float opacity = 1.0 - smoothstep(0.0, 0.5, d);
              gl_FragColor = vec4(vColor, opacity);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

        const starMesh = new THREE.Points(geo, mat);
        refs.scene?.add(starMesh);
        refs.stars.push(starMesh);
      }

      /* ── nebula ── */
      const nebGeo = new THREE.PlaneGeometry(8000, 4000, 100, 100);
      const nebMat = new THREE.ShaderMaterial({
        uniforms: {
          time:    { value: 0 },
          color1:  { value: new THREE.Color(0x2cBFAE) },
          color2:  { value: new THREE.Color(0x5a4fcf) },
          opacity: { value: 0.25 },
        },
        vertexShader: `
          varying vec2 vUv;
          varying float vEl;
          uniform float time;
          void main() {
            vUv = uv;
            vec3 p = position;
            float el = sin(p.x*0.01+time)*cos(p.y*0.01+time)*20.0;
            p.z += el; vEl = el;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          uniform float opacity;
          uniform float time;
          varying vec2 vUv;
          varying float vEl;
          void main() {
            float m = sin(vUv.x*10.0+time)*cos(vUv.y*10.0+time);
            vec3 col = mix(color1, color2, m*0.5+0.5);
            float a = opacity*(1.0-length(vUv-0.5)*2.0);
            a *= 1.0+vEl*0.01;
            gl_FragColor = vec4(col, a);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const nebula = new THREE.Mesh(nebGeo, nebMat);
      nebula.position.z = -1050;
      refs.scene?.add(nebula);
      refs.nebula = nebula;

      /* ── mountains ── */
      const layers = [
        { distance: -50,  height: 60,  color: 0x0B0F12, opacity: 1   },
        { distance: -100, height: 80,  color: 0x12181C, opacity: 0.8 },
        { distance: -150, height: 100, color: 0x1a2744, opacity: 0.6 },
        { distance: -200, height: 120, color: 0x253553, opacity: 0.4 },
      ];

      layers.forEach((layer, idx) => {
        const pts: import('three').Vector2[] = [];
        for (let i = 0; i <= 50; i++) {
          const x = (i / 50 - 0.5) * 1000;
          const y = Math.sin(i * 0.1) * layer.height +
                    Math.sin(i * 0.05) * layer.height * 0.5 +
                    Math.random() * layer.height * 0.2 - 100;
          pts.push(new THREE.Vector2(x, y));
        }
        pts.push(new THREE.Vector2(5000, -300));
        pts.push(new THREE.Vector2(-5000, -300));

        const shape   = new THREE.Shape(pts);
        const mGeo    = new THREE.ShapeGeometry(shape);
        const mMat    = new THREE.MeshBasicMaterial({ color: layer.color, transparent: true, opacity: layer.opacity, side: THREE.DoubleSide });
        const mountain = new THREE.Mesh(mGeo, mMat);
        mountain.position.z = layer.distance;
        mountain.position.y = layer.distance;
        mountain.userData  = { baseZ: layer.distance, index: idx };
        refs.scene?.add(mountain);
        refs.mountains.push(mountain);
      });

      /* store initial z positions */
      refs.locations = refs.mountains.map(m => m.position.z);

      /* ── atmosphere sphere ── */
      const atmGeo = new THREE.SphereGeometry(600, 32, 32);
      const atmMat = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 } },
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          uniform float time;
          void main() {
            float i = pow(0.7 - dot(vNormal, vec3(0,0,1)), 2.0);
            vec3 atm = vec3(0.3,0.6,1.0) * i;
            float p = sin(time*2.0)*0.1+0.9;
            atm *= p;
            gl_FragColor = vec4(atm, i*0.25);
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });
      refs.scene?.add(new THREE.Mesh(atmGeo, atmMat));

      /* ── render loop ── */
      const animate = () => {
        if (cancelled) return;
        refs.animationId = requestAnimationFrame(animate);
        const t = Date.now() * 0.001;

        refs.stars.forEach(sf => {
          const mat = sf.material as THREE.ShaderMaterial;
          if (mat.uniforms) mat.uniforms.time.value = t;
        });

        if (refs.nebula) {
          const mat = refs.nebula.material as THREE.ShaderMaterial;
          if (mat.uniforms) mat.uniforms.time.value = t * 0.5;
        }

        if (refs.camera) {
          const ease = 0.05;
          smoothCameraPos.current.x += (refs.targetCameraX - smoothCameraPos.current.x) * ease;
          smoothCameraPos.current.y += (refs.targetCameraY - smoothCameraPos.current.y) * ease;
          smoothCameraPos.current.z += (refs.targetCameraZ - smoothCameraPos.current.z) * ease;

          refs.camera.position.x = smoothCameraPos.current.x + Math.sin(t * 0.1) * 2;
          refs.camera.position.y = smoothCameraPos.current.y + Math.cos(t * 0.15) * 1;
          refs.camera.position.z = smoothCameraPos.current.z;
          refs.camera.lookAt(0, 10, -600);
        }

        refs.mountains.forEach((m, i) => {
          const pf = 1 + i * 0.5;
          m.position.x = Math.sin(t * 0.1) * 2 * pf;
          m.position.y = 50 + Math.cos(t * 0.15) * 1 * pf;
        });

        if (refs.composer) refs.composer.render();
      };

      animate();
      setIsReady(true);
    };

    boot();

    const handleResize = () => {
      const refs = threeRefs.current;
      if (refs.camera && refs.renderer && refs.composer) {
        (refs.camera as import('three').PerspectiveCamera).aspect = window.innerWidth / window.innerHeight;
        (refs.camera as import('three').PerspectiveCamera).updateProjectionMatrix();
        refs.renderer.setSize(window.innerWidth, window.innerHeight);
        refs.composer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelled = true;
      const refs = threeRefs.current;
      if (refs.animationId) cancelAnimationFrame(refs.animationId);
      window.removeEventListener('resize', handleResize);
      refs.stars.forEach(s => { s.geometry.dispose(); (s.material as THREE.Material).dispose(); });
      refs.mountains.forEach(m => { m.geometry.dispose(); (m.material as THREE.Material).dispose(); });
      if (refs.nebula) { refs.nebula.geometry.dispose(); (refs.nebula.material as THREE.Material).dispose(); }
      if (refs.renderer) refs.renderer.dispose();
    };
  }, []);

  /* ── GSAP entrance animations ── */
  useEffect(() => {
    if (!isReady) return;
    const { gsap } = require('gsap');

    const tl = gsap.timeline();
    if (titleRef.current) {
      tl.from(titleRef.current.querySelectorAll('.title-word'), {
        y: 120, opacity: 0, duration: 1.4, stagger: 0.12, ease: 'power4.out',
      });
    }
    if (subtitleRef.current) {
      tl.from(subtitleRef.current.querySelectorAll('.sub-line'), {
        y: 40, opacity: 0, duration: 1, stagger: 0.18, ease: 'power3.out',
      }, '-=0.8');
    }
    return () => tl.kill();
  }, [isReady]);

  /* ── scroll → camera ── */
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
      setCurrentSection(Math.min(Math.floor(progress * totalSections), totalSections - 1));

      const refs = threeRefs.current;
      const totalProgress = progress * totalSections;
      const sectionIndex  = Math.min(Math.floor(totalProgress), totalSections - 1);
      const sectionProgress = totalProgress % 1;

      const camPositions = [
        { x: 0, y: 30,  z: 300  },
        { x: 0, y: 40,  z: -50  },
        { x: 0, y: 50,  z: -700 },
      ];

      const cur  = camPositions[sectionIndex]     || camPositions[0];
      const next = camPositions[sectionIndex + 1] || cur;

      refs.targetCameraX = cur.x + (next.x - cur.x) * sectionProgress;
      refs.targetCameraY = cur.y + (next.y - cur.y) * sectionProgress;
      refs.targetCameraZ = cur.z + (next.z - cur.z) * sectionProgress;

      refs.mountains.forEach((m, i) => {
        const speed   = 1 + i * 0.9;
        const targetZ = m.userData.baseZ + scrollY * speed * 0.5;
        m.position.z  = progress > 0.7 ? 600000 : refs.locations[i];
        if (refs.nebula) refs.nebula.position.z = targetZ - 100;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [totalSections]);

  /* ── section content ── */
  const sections = [
    {
      label: '01 — HORIZON',
      headline: ['WE BUILD', 'WEBSITES'],
      sub1: 'Custom websites, web applications,',
      sub2: 'and Web3 products — built to actually work.',
    },
    {
      label: '02 — DEPTH',
      headline: ['BUILD.', 'FIX.', 'LAUNCH.'],
      sub1: 'New websites from scratch. Broken sites rescued.',
      sub2: 'Half-built projects shipped. One team, full stack.',
    },
    {
      label: '03 — ORBIT',
      headline: ['START A', 'PROJECT'],
      sub1: 'Send us what you have — an idea, a Figma file,',
      sub2: 'a broken repo. We will get it to production.',
    },
  ];

  const current = sections[currentSection] || sections[0];

  /* ── inline style constants ── */
  const S = {
    container: {
      position: 'relative' as const,
      width: '100%',
      background: '#000',
    } as React.CSSProperties,
    canvas: {
      position: 'fixed' as const,
      inset: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
    } as React.CSSProperties,
    sticky: {
      position: 'sticky' as const,
      top: 0,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'flex-end',
      padding: '0 4vw 5vh',
      zIndex: 10,
      pointerEvents: 'none' as const,
    } as React.CSSProperties,
    label: {
      fontFamily: 'monospace',
      fontSize: '0.7rem',
      letterSpacing: '0.25em',
      textTransform: 'uppercase' as const,
      color: 'rgba(255,255,255,0.4)',
      marginBottom: '1.5rem',
    } as React.CSSProperties,
    title: {
      fontFamily: "'Instrument Serif', serif",
      fontWeight: 700,
      lineHeight: 0.88,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: 0,
      fontSize: 'clamp(3.5rem, 13vw, 14rem)',
    } as React.CSSProperties,
    word: {
      display: 'inline-block',
      marginRight: '0.25em',
    } as React.CSSProperties,
    subtitle: {
      marginTop: '2rem',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '0.25rem',
    } as React.CSSProperties,
    subLine: {
      fontFamily: 'monospace',
      fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
      color: 'rgba(255,255,255,0.55)',
      display: 'block',
    } as React.CSSProperties,
    scrollbar: {
      position: 'fixed' as const,
      bottom: '2rem',
      right: '2rem',
      zIndex: 20,
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'flex-end',
      gap: '0.5rem',
    } as React.CSSProperties,
    track: {
      width: '120px',
      height: '2px',
      background: 'rgba(255,255,255,0.15)',
      borderRadius: '1px',
      overflow: 'hidden',
    } as React.CSSProperties,
    fill: {
      height: '100%',
      background: '#2cBFAE',
      borderRadius: '1px',
      transition: 'width 0.1s linear',
      width: `${scrollProgress * 100}%`,
    } as React.CSSProperties,
    counter: {
      fontFamily: 'monospace',
      fontSize: '0.65rem',
      letterSpacing: '0.2em',
      color: 'rgba(255,255,255,0.35)',
    } as React.CSSProperties,
    scrollSections: {
      position: 'relative' as const,
      zIndex: 5,
    } as React.CSSProperties,
    scrollSection: {
      height: '100vh',
    } as React.CSSProperties,
  };

  return (
    <div ref={containerRef} style={S.container}>
      {/* Three.js canvas — fixed behind everything */}
      <canvas ref={canvasRef} style={S.canvas} />

      {/* Sticky hero text — updates per section */}
      <div style={S.sticky}>
        <span style={S.label}>{current.label}</span>

        <h1 ref={titleRef} style={S.title}>
          {current.headline.map((word, i) => (
            <span key={i} className="title-word" style={{ ...S.word, display: 'block' }}>
              {word}
            </span>
          ))}
        </h1>

        <div ref={subtitleRef} style={S.subtitle}>
          <span className="sub-line" style={S.subLine}>{current.sub1}</span>
          <span className="sub-line" style={S.subLine}>{current.sub2}</span>
        </div>
      </div>

      {/* Scroll spacer sections — drive the camera */}
      <div style={S.scrollSections}>
        {Array.from({ length: totalSections }).map((_, i) => (
          <div key={i} style={S.scrollSection} />
        ))}
      </div>

      {/* Progress bar — bottom right */}
      <div style={S.scrollbar}>
        <span style={S.counter}>
          {String(currentSection + 1).padStart(2, '0')} / {String(totalSections).padStart(2, '0')}
        </span>
        <div style={S.track}>
          <div style={S.fill} />
        </div>
        <span style={{ ...S.counter, fontSize: '0.6rem', letterSpacing: '0.3em' }}>SCROLL</span>
      </div>
    </div>
  );
};

export default HorizonHero;
