import { test, expect } from '@playwright/test';
import { UsersPage } from '../pages/userspage';

test.use({ storageState: './auth.json' }); // Load Signed-in state from previous file

test('users_table', async ({ page }) => {

    const usersPage = new UsersPage(page);

    await usersPage.navigate()
    await usersPage.checkHeader();
    await usersPage.sortByUserName();
    await usersPage.filterByUserName();
    await usersPage.verifyUserDetail();
    await usersPage.changeUserRole();
    await usersPage.cancelFiltering();
    await usersPage.tablePagination();

    await page.context().storageState({ path: './auth.json' });  // Save state

})



