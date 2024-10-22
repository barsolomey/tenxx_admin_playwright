import { expect, type Page } from '@playwright/test';
import { emailInputId, passwordInputId, loginButtonText } from '../locators';

export class LoginPage {

  page: Page;
  baseURL: string;
  emailInput: string;
  passwordInput: string;
  loginButton: string;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('data-testid', { hasText: 'SignUp::Email'});
    this.passwordInput = page.locator('data-testid', { hasText: 'SignUp::Password'});
    this.loginButton = page.locator('data-testid', { hasText: 'SignUp::SubmitEmailAndPassword'});
    this.baseURL = 'https://tenthousandapp.retool.com/auth/login';  
  }

  async navigate() {
    await this.page.goto(this.baseURL);
  }

  async login(email: string, password: string) {
    await this.page.locator(this.emailInput).fill(email);
    await this.page.locator(this.passwordInput).fill(password); 
    await this.page.locator(this.loginButton).click(); 
  }

 // async isLoginSuccessful() {
 //   await this.page.waitForSelector('text=Dashboard');  
 //   return this.page.isVisible('text=Dashboard');
//  }
}

export default LoginPage;