module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 100,
  overrides: [
    {
      files: '*.json.ts',
      options: {
        quoteProps: 'preserve',
        singleQuote: false,
      },
    },
  ],
};
