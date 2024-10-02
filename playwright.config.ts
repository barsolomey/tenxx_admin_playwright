import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({
  use: {
    headless: false, // Set to true if you want to run headless
    browserName: 'chromium', // or 'firefox', 'webkit'
    baseURL: 'https://tenthousandapp.retool.com/apps/52d357bc-346e-11ef-a9d9-c743b529333d/Ten%20Thousand', // Base URL of TenThousand Admin
    screenshot: 'on', // Capture screenshots on test failure
    video: 'on-first-retry', // Record video on test failure
  },
  testDir: './tests', // Directory containing tests
  timeout: 30000, // Timeout for each test
  retries: 1, // Number of retries if a test fails
});
