import { expect, type Locator, type Page } from '@playwright/test';

export class UsersPage {
  
  readonly page: Page;
  readonly searchInput: Locator;
  readonly submitButton: Locator;
  readonly results: Locator;
  readonly userFullNameColumnId: Locator;
  readonly usersSideNavigationId: Locator;
  readonly usersTableHeaderText: Locator;
  readonly retoolGridUsersId: Locator;
  readonly retoolGridClipsLabel: Locator;
  readonly userNameColumnId: Locator;
  readonly retoolGridProfileLabel: Locator;
  readonly baseURL: string;

  constructor(page: Page) {
    this.page = page;
    
    // Define selectors
    this.userFullNameColumnId = page.locator('data-testid', { hasText: 'RetoolGrid:usersContainer'});
    this.usersTableHeaderText = page.locator('h4', { hasText: 'Users'});
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

module.exports = UsersPage