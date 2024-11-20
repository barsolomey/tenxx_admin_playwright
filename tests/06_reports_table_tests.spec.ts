import { test, expect } from '@playwright/test';
import { ReportsPage } from '../pages/reportspage';

test.use({ storageState: './auth.json' }); // Load Signed-in state from previous file

test('reports_table', async ({ page }) => {

    const reportspage = new ReportsPage(page);

    await reportspage.navigate();
    await reportspage.openReports();
    await reportspage.sortByDate();
    await reportspage.filterByStatus();
    await reportspage.cancelFiltering();
    await reportspage.tablePagination();

    await page.context().storageState({ path: './auth.json' });  // Save state
})



