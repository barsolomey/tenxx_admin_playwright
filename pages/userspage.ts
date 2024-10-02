import { expect, type Locator, type Page } from '@playwright/test';

export class UsersPage {
  
  page: Page;
  searchInput: Locator;
  submitButton: Locator;
  results: Locator;
  userFullNameColumnId: Locator;
  usersSideNavigationId: Locator;
  usersTableHeaderText: Locator;
  retoolGridUsersId: Locator;
  retoolGridClipsLabel: Locator;
  userNameColumnId: Locator;
  retoolGridProfileLabel: Locator;
  baseURL: string;

  constructor(page: Page) {
    
    this.page = page;
    
    // Define selectors
    this.userFullNameColumnId = page.locator('data-testid', { hasText: 'RetoolGrid:usersContainer'});
    this.usersTableHeaderText = page.locator('h4', { hasText: 'Users'});
    this.baseURL = 'https://tenthousandapp.retool.com/apps/52d357bc-346e-11ef-a9d9-c743b529333d/Ten%20Thousand'
  }

  // Method to navigate to the page
  async navigate() {
    await this.page.goto(this.baseURL);
  }

  // Method to check header of the page
  async checkHeader() {
    await expect(this.usersTableHeaderText).toBeVisible()
  }

  // another method
  async sortByUserName() {
    // here code
  }
}

export default UsersPage