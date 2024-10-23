const config = {
  use: {
    browserName: 'chromium',  // You can set it to 'chromium', 'firefox', or 'webkit'
    headless: true,           // Run headless by default
    baseURL: 'https://example.com', // Optional base URL for the tests
    viewport: { width: 1280, height: 720 },
    video: 'on',              // Record video on failure
  },
  testDir: './tests',          // Directory where tests are stored
  timeout: 30000,              // Timeout for each test in milliseconds
};

module.exports = config;