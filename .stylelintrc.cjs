module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  overrides: [
    {
      files: ['*.astro', '**/*.astro'],
      customSyntax: 'postcss-html',
    },
  ],
};
