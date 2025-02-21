module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@modules': './src/modules',
          '@utils': './src/utils',
          '@typings': './src/typings',
          '@stores': './src/stores',
        },
      },
    ],
  ],
};
