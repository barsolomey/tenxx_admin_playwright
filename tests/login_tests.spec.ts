import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';  // Adjust the path based on your folder structure

const EMAIL = 'strv.testing@gmail.com';
const PASSWORD = '<STRVt3sting>';   

test('login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(email, password);

});