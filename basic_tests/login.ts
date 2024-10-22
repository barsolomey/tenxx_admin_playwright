import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tenthousandapp.retool.com/auth/login');
  await page.getByTestId('SignUp::Email').click();
  await page.getByTestId('SignUp::Email').fill('petr.pavlik@strv.com');
  await page.getByTestId('SignUp::Email').press('Tab');
  await page.getByTestId('SignUp::Password').fill('<STRVt3sting>');
  await page.getByTestId('SignUp::SubmitEmailAndPassword').click();
});