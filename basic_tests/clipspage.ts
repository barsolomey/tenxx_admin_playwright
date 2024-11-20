import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Login
  await page.goto('https://tenthousandapp.retool.com/apps/52d357bc-346e-11ef-a9d9-c743b529333d/Ten%20Thousand\';');
  await page.goto('https://tenthousandapp.retool.com/auth/login');
  await page.getByTestId('SignUp::Email').fill('petr.pavlik@strv.com');
  await page.getByTestId('SignUp::Email').press('Tab');
  await page.getByTestId('SignUp::Password').fill('STRVt3sting');
  await page.getByTestId('SignUp::Password').press('Enter');
  
  // Choose staging
  await page.getByTestId('Navigation::RetoolPill').click();
  await page.getByTestId('Presentation::CanvasContainer').locator('div').filter({ hasText: /^production$/ }).nth(1).click();
  await page.getByText('staging').click();
  
  // Click on Clips
  await page.getByTestId('navigation1--0_1--trigger').click();
});