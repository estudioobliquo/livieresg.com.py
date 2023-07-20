module.exports = {
  extends: [
    'stylelint-config-standard-scss', // configure for SCSS
    'stylelint-config-recommended-vue', // add overrides for .Vue files
    'stylelint-config-recess-order', // use the recess order for properties
  ],
  rules: {
    'no-descending-specificity': null,
    'media-feature-range-notation': 'prefix',
  },
}
