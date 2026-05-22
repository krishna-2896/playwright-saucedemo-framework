import { Page, expect } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  username = '#user-name';
  password = '#password';
  loginBtn = '#login-button';
  errorMsg = '[data-test="error"]';

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {

    await this.page.fill(this.username, username);

    await this.page.fill(this.password, password);

    await this.page.click(this.loginBtn);
  }

  async verifyLoginSuccess() {

    await expect(this.page).toHaveURL(/inventory/);
  }

  async verifyErrorMessage(text: string) {

    await expect(this.page.locator(this.errorMsg))
      .toContainText(text);
  }
}