const path = require('path')

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
  // add this so that you get nice CSS classes in snapshots:
  snapshotSerializers: ['jest-emotion'],
  // add this so that your modules resolve as expected
  // (the way they are resolved by webpack):
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  // execute these files after setting up test env:
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
