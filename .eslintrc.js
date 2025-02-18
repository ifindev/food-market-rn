module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'unused-imports'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn', // Optional: Keeps unused variables as a warning
    'unused-imports/no-unused-imports': 'error', // Removes unused imports
  },
};
