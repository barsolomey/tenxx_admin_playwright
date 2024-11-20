import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //login
  await page.goto('https://tenthousandapp.retool.com/auth/login');
  await page.getByTestId('SignUp::Email').fill('petr.pavlik@strv.com');
  await page.getByTestId('SignUp::Email').press('Tab');
  await page.getByTestId('SignUp::Password').fill('STRVt3sting');
  await page.getByTestId('SignUp::Password').press('Enter');
  
  //go to Ten Thousand project
  await page.getByRole('link', { name: 'Ten Thousand' }).click();

  //pick env
  await page.goto('https://tenthousandapp.retool.com/auth/login');
  await page.getByTestId('Navigation::RetoolPill').click();
  await page.getByTestId('Presentation::CanvasContainer').locator('div').filter({ hasText: /^production$/ }).nth(1).click();
  await page.getByText('staging').click();

  //users page opens by default
  await expect(page.locator('#users--0')).toBeVisible();

  //sorting username column
  await page.getByRole('columnheader', { name: 'User Name' }).click();
  await expect(page.getByTestId('TableWrapper::ScrollableContainer').getByText('0000000000')).toBeVisible();
  await page.getByRole('columnheader', { name: 'User Name' }).click();
  await expect(page.getByTestId('TableWrapper::ScrollableContainer').getByText('zarifabdalimov')).toBeVisible();
  
  //cancel sorting by username
  await page.getByRole('columnheader', { name: 'User Name' }).click();

  //find user 'applepetr' using filter
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByTestId('textInput13--0').getByPlaceholder('Enter value').click();
  await page.getByTestId('textInput13--0').getByPlaceholder('Enter value').fill('applepetr');
  await page.getByLabel('Close').click();
  
  //select user, verify Clip and profile tabs visibility
  await expect(page.getByRole('gridcell', { name: 'applepetr' })).toBeVisible();
  await page.getByRole('gridcell', { name: 'applepetr' }).click();
  await expect(page.getByTestId('Tabs::Tab::1_selected').getByText('Clips')).toBeVisible();
  await page.getByTestId('Tabs::Tab::1_selected').getByText('Clips').click();
  await expect(page.locator('li > div > ._container_hee9p_1 > ._droppable_y8qu3_1 > ._positionable_yck9x_1 > ._margin_zygox_1').first()).toBeVisible();
  await expect(page.getByText('Profile')).toBeVisible();
  await page.getByText('Profile').click();

  //change user role to viewer and back to creator, verify that confirmation toast is displayed
  await expect(page.getByTestId('Trigger::RoleSelect--0')).toBeVisible();
  await page.getByTestId('Trigger::RoleSelect--0').click();
  await page.getByTestId('ListBox::ListBoxItem::1').getByText('VIEWER').click();
  await page.getByTestId('Widgets::SelectInput_input').click();
  await expect(page.getByTestId('toast')).toBeVisible();
  await page.getByTestId('Widgets::SelectInput_input').click();
  await page.getByTestId('ListBox::ListBoxItem::0').getByText('CREATOR').click();
  await expect(page.getByTestId('toast')).toBeVisible();
  
  //cancel filtering by username
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByTestId('Input::ClearButton_button').click();
  await page.getByLabel('Close').click();

  //going back and forth between pages works
  //NOTE verifying the Showing 11-20 probably is not sufficient, how do I assert changes of tables content?
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByTestId('Input::ClearButton_button').click();
  await page.getByLabel('Close').click();
  await expect(page.getByRole('gridcell', { name: 'Showing 1-10 of' })).toBeVisible();
  await page.getByLabel('Next page').click();
  await expect(page.getByRole('gridcell', { name: 'Showing 11-20 of' })).toBeVisible();
  await page.getByLabel('Previous page').click();

});