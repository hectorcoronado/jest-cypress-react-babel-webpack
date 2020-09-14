module.exports = {
  // ascertain that jest is simulating a browser:
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // "mock" classNames that are set dynamically according
    // to some CSS import:
    '\\.module\\.css$': 'identity-obj-proxy',
    // import css modules!
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  snapshotSerializers: ['jest-emotion'],
}
