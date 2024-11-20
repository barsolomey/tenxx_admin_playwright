import { expect, type Locator, type Page } from '@playwright/test';

export class UsersPage {
  
  page: Page;
  header: Locator;
  usernameColumn: Locator;
  table: Locator;
  filterButton: Locator;
  filterByUsername: Locator;
  filterCloseButton: Locator;
  filteredUsername: Locator;
  clipTabDetail: Locator;
  clipContainer: Locator;
  profileTabDetail: Locator;
  profileRoleSelector: Locator;
  profileSelectViewer: Locator;
  profileSelectCreator:Locator;
  profileSelectToast: Locator;
  filerClearButton: Locator;
  firstPage: Locator;
  nextPage: Locator;
  prevPage: Locator;
  secondPage: Locator;
  
  baseURL: string;

  constructor(page: Page) {
    
    this.page = page;
    
    // Define selectors
    this.header = page.getByRole('heading', { name: 'Users' });
    this.usernameColumn = page.getByRole('columnheader', { name: 'User Name' });
    this.table = page.getByTestId('TableWrapper::ScrollableContainer');
    this.filterButton = page.getByRole('button', { name: 'Filter' });
    this.filterByUsername = page.getByTestId('textInput13--0').getByPlaceholder('Enter value');
    this.filterCloseButton = page.getByLabel('Close');
    this.filteredUsername = page.getByRole('gridcell', { name: 'applepetr' }); //adjust username based on which username was used for filtering in filterByUserName
    this.filerClearButton = page.getByTestId('Input::ClearButton_button');
    this.clipTabDetail = page.getByTestId('Tabs::Tab::1').getByText('Clips');
    this.clipContainer = page.locator('li > div > ._container_hee9p_1 > ._droppable_y8qu3_1 > ._positionable_yck9x_1 > ._margin_zygox_1').first();
    this.profileTabDetail = page.getByText('Profile');
    this.profileRoleSelector = page.getByTestId('Widgets::SelectInput_input');
    this.profileSelectViewer = page.getByTestId('ListBox::ListBoxItem::1').getByText('VIEWER');
    this.profileSelectCreator = page.getByTestId('ListBox::ListBoxItem::0').getByText('CREATOR');
    this.profileSelectToast = page.getByTestId('toast');
    this.firstPage = page.getByRole('gridcell', { name: 'Showing 1-10 of' });
    this.secondPage = page.getByRole('gridcell', { name: 'Showing 11-20 of' });
    this.nextPage = page.getByLabel('Next page');
    this.prevPage = page.getByLabel('Previous page');
    this.baseURL = 'https://tenthousandapp.retool.com/apps/52d357bc-346e-11ef-a9d9-c743b529333d/Ten%20Thousand';
  }

  // Navigate to the page
  async navigate() {
    await this.page.goto(this.baseURL);
  }

  // Check that user is on Users page
  async checkHeader() {
    await this.header.isVisible();
  }

  // Sorting by username
  async sortByUserName() {
    await this.usernameColumn.click();
    await this.table.getByText('0000000000').isVisible();
    await this.usernameColumn.click();
    await this.table.getByText('zarifabdalimov').isVisible();
    await this.usernameColumn.click();
  }

  // Filtering
  // find user 'applepetr' using filter
  async filterByUserName(){
    await this.filterButton.click();
    await this.filterByUsername.click();
    await this.filterByUsername.fill('applepetr');
    await this.filterCloseButton.click();
  }

  // Select user, verify Clip and profile tabs visibility
  async verifyUserDetail(){
    await this.filteredUsername.isVisible();
    await this.filteredUsername.click();
    await this.clipTabDetail.isVisible();
    await this.clipTabDetail.click();
    await this.clipContainer.isVisible();
    await this.profileTabDetail.isVisible();
    await this.profileTabDetail.click();
  }

  // Change user role to viewer and back to creator, verify that confirmation toast is displayed
  async changeUserRole(){
    await this.profileRoleSelector.isVisible();
    await this.profileRoleSelector.click();
    await this.profileSelectViewer.click();
    await this.profileSelectToast.isVisible();
    await this.profileRoleSelector.click()
    await this.profileSelectCreator.click();
    await this.profileSelectToast.isVisible();
  }

  // Delete filtering parameter. Can be reused if only one parameter is chosen.
  async cancelFiltering(){
    await this.filterButton.click();
    await this.filerClearButton.click();
    await this.filterCloseButton.click();
  }

  // Going back and forth between pages works
  //NOTE verifying displayed results number probably is not sufficient, how do I assert changes of tables content?
 
  async tablePagination(){
    await this.firstPage.isVisible();
    await this.nextPage.click();
    await this.secondPage.isVisible();
    await this.prevPage.click();
    await this.firstPage.isVisible();
  }

}
