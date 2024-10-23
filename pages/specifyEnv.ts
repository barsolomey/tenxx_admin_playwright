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
    this.envMenu = page.getByTestId('Presentation::CanvasContainer').locator('div');
    this.envOpt = page.getByRole('menuitem', { name: 'staging' });
    this.baseURL = 'https://tenthousandapp.retool.com/apps/52d357bc-346e-11ef-a9d9-c743b529333d/Ten%20Thousand';
  }

  // Method to navigate to the page
  async navigate() {
    await this.page.goto(this.baseURL);
    
  }

  // Method to click on retool menu
  async openMenu() {
    await expect(this.retoolMenu).toBeVisible;
    await this.retoolMenu.click();
  
  }

  // Method to pick staging environment in retoolMenu
  async pickEnv() {
    await expect(this.envMenu).toBeVisible;
    await this.envMenu.click();
    await expect(this.envMenu.filter({ hasText: /^production$/ }).nth(1)).toBeVisible;
    await this.envOpt.click();
    await expect(this.envMenu.filter({ hasText: /^staging$/ }).nth(1)).toBeVisible;
  
  }


  


}

