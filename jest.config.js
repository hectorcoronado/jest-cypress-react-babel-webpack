module.exports = {
  // ascertain that jest is simulating a browser:
  testEnvironment: 'jest-environment-jsdom',
  // import css modules!
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
}
