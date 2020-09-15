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
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    'shared',
    path.join(__dirname, 'test'),
  ],
  // execute these files after setting up test env:
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  // get accurate information when running test coverage reports:
  collectCoverageFrom: ['**/src/**/*.js'],
  // set a threshold for coverage:
  coverageThreshold: {
    global: {
      statements: 34,
      branches: 19,
      functions: 32,
      lines: 35,
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
}
