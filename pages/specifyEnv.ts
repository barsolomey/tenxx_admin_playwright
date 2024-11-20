import { expect, type Locator, type Page } from '@playwright/test';

export class SpecifyEnv {
  
  page: Page;
  retoolMenu: Locator;
  envMenu: Locator;
  envOpt: Locator;
  baseURL: string;

  constructor(page: Page) {
    
    this.page = page;
    
    // Define selectors
    this.retoolMenu = page.getByTestId ('Navigation::RetoolPill');
    this.envMenu = page.getByTestId('Icon::IconCaretRight').first();
    this.envOpt = page.getByText('staging');
    this.baseURL = 'https://tenthousandapp.retool.com/apps/52d357bc-346e-11ef-a9d9-c743b529333d/Ten%20Thousand';
  }

  // Method to navigate to the page
  async navigate() {
    await this.page.goto(this.baseURL);
    
  }

  // Method to click on retool menu
  async specifyEnv() {
    await this.retoolMenu.isVisible;
    await this.retoolMenu.click();
    await this.envMenu.click();
    await this.envOpt.click();
  
  }


  


}

