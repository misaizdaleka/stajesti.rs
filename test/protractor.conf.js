exports.config = {
  specs: [
    'e2e/*.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://localhost:9001',
  framework: 'jasmine'
};
