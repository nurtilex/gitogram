module.exports = {
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\js$': 'babel-jest',
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
  }
};
