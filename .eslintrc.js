module.exports = {
  extends: [require.resolve('amper-scripts/config/eslint')],
  rules: {
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }]
  }
};
