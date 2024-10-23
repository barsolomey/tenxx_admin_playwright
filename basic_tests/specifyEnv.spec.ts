import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tenthousandapp.retool.com/auth/login');
  await page.getByTestId('Navigation::RetoolPill').click();
  await page.getByTestId('Presentation::CanvasContainer').locator('div').filter({ hasText: /^production$/ }).nth(1).click();
  await page.getByText('staging').click();
});