import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('login success', async ({ page }) => {
  
    const loginPage = new LoginPage(page);  
    await loginPage.navigate();
    await loginPage.fillEmail();
    await loginPage.fillPassword();
    await loginPage.SignUp();
    await loginPage.prjSelect();

    await page.context().storageState({ path: './auth.json' });  // Save Signed-in state
});

