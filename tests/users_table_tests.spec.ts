import { test, expect } from '@playwright/test';
import { UsersPage } from '../pages/userspage';

test('C44380_open_users_table', async ({ page }) => {
    
    const usersPage = new UsersPage(page);

    await usersPage.navigate()
    await usersPage.checkHeader();
})


//asdfasdf
