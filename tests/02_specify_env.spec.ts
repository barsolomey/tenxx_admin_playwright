import { test, expect } from '@playwright/test';
import { SpecifyEnv } from '../pages/specifyEnv';  

test.use({ storageState: './auth.json' }); // Load Signed-in state from previous file

test('specify environment', async ({ page }) => {
  
    const specifyEnv = new SpecifyEnv(page);
    await specifyEnv.navigate();
    await specifyEnv.specifyEnv();

    await page.context().storageState({ path: './auth.json' });  // Save state

});