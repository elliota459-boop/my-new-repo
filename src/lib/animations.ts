import { Variants } from 'framer-motion'

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Fade in from top
export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Simple fade in
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

// Scale up fade in
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// Stagger container with more delay
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

// Stagger item
export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Slide in from bottom with spring
export const slideInSpring: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      mass: 1
    }
  }
}

// Hover scale effect
export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1]
  }
}

// Hover lift effect
export const hoverLift = {
  y: -8,
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1]
  }
}

// Card hover effect (combined)
export const cardHover = {
  scale: 1.02,
  y: -4,
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1]
  }
}

// Page transition variants
export const pageTransition: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
}

// Reveal text character by character
export const charReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.03,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

// Blur in effect
export const blurIn: Variants = {
  hidden: { 
    opacity: 0, 
    filter: 'blur(10px)'
  },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

// Viewport settings for scroll animations
export const viewportConfig = {
  once: true,
  amount: 0.2,
  margin: '-50px'
}
