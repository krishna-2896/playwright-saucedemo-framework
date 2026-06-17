import { Page, expect } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  username =  () => this.page.getByPlaceholder('Username');
  password =  () => this.page.getByPlaceholder('Password');
  loginBtn =  () => this.page.getByRole('button', {name:'Login'});
  errorMsg =  () => this.page.getByRole('heading', { level: 3 });


  // #user-name';
  // password = '#password';
  // loginBtn = '#login-button';
  // errorMsg = '[data-test="error"]';

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {

    await this.username().fill( username);
    await this.password().fill( password);


    await this.loginBtn().click();
  }

  async verifyLoginSuccess() {

    await expect(this.page).toHaveURL(/inventory/);
  }

  async verifyErrorMessage(text: string) {
    await expect(this.errorMsg())
      .toContainText(text);
    console.log("invalid credentials : ",text);
      
  }
}