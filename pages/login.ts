
import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  
  page: Page;
  emailInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  loginURL: string;

  constructor(page: Page) {
    
    this.page = page;
    
    // Define selectors
    this.emailInput = page.getByTestId ('SignUp::Email');
    this.passwordInput = page.getByTestId('SignUp::Password');
    this.loginButton = page.getByTestId('SignUp::SubmitEmailAndPassword');
    this.loginURL = 'https://tenthousandapp.retool.com/auth/login';
  }

  // Method to navigate to the page
  async navigate() {
    await this.page.goto(this.loginURL);
  }
  // Method to insert email
  async fillEmail() {
    await this.emailInput.click();
    await this.emailInput.fill('petr.pavlik@strv.com');
  }
  // Method to insert passwoed
  async fillPassword() {
    await this.passwordInput.click();
    await this.passwordInput.fill('STRVt3sting');
  }
// Method to click on Submit
  async SignUp() {
    await this.loginButton.click();
  }

// Method to check availability of Ten Thousand
  async prjSelect() {
    await expect(this.page.getByTestId('TopNavigation::Nav')).toBeVisible();
    await expect(this.page.getByText('Ten Thousand')).toBeVisible();
    await this.page.getByText('Ten Thousand').click();
  }

  


}

