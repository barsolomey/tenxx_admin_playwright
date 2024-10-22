import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';  

const email = 'strv.testing@gmail.com';
const password = '<STRVt3sting>';   

test('login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(email, password);

});