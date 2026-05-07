import nextVitals from 'eslint-config-next/core-web-vitals'

const config = [
  {
    ignores: [
      '.netlify/**',
    ],
  },
  ...nextVitals,
  {
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]

export default config
