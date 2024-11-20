import { test, expect } from '@playwright/test';
import { ClipsPage } from '../pages/clipspage';

test.use({ storageState: './auth.json' }); // Load Signed-in state from previous file

test('clips_table', async ({ page }) => {

    const clipspage = new ClipsPage(page);

    await clipspage.navigate();
    await clipspage.openClips();
    //await clipspage.sortByDesc();
    await clipspage.filterByDesc();
    await clipspage.clipDetail();
    await clipspage.cancelFiltering();
    await clipspage.tablePagination();

    await page.context().storageState({ path: './auth.json' });  // Save state
})



