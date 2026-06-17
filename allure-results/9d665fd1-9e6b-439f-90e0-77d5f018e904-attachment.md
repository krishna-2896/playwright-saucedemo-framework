# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Scenarios >> Invalid Login 
- Location: tests\login.spec.ts:23:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByTestId('error')
Expected substring: "Username and password do not match"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for getByTestId('error')

```

```yaml
- text: Swag Labs
- textbox "Username": wrong_user
- textbox "Password": wrong_password
- 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
  - button
  - text: "Epic sadface: Username and password do not match any user in this service"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  | 
  5  |   constructor(private page: Page) {}
  6  | 
  7  |   username =  () => this.page.getByPlaceholder('Username');
  8  |   password =  () => this.page.getByPlaceholder('Password');
  9  |   loginBtn =  () => this.page.getByRole('button', {name:'Login'});
  10 |   errorMsg =  () => this.page.getByTestId('error');
  11 | 
  12 | 
  13 |   // #user-name';
  14 |   // password = '#password';
  15 |   // loginBtn = '#login-button';
  16 |   // errorMsg = '[data-test="error"]';
  17 | 
  18 |   async navigate() {
  19 |     await this.page.goto('https://www.saucedemo.com/');
  20 |   }
  21 | 
  22 |   async login(username: string, password: string) {
  23 | 
  24 |     await this.username().fill( username);
  25 |     await this.password().fill( password);
  26 | 
  27 | 
  28 |     await this.loginBtn().click();
  29 |   }
  30 | 
  31 |   async verifyLoginSuccess() {
  32 | 
  33 |     await expect(this.page).toHaveURL(/inventory/);
  34 |   }
  35 | 
  36 |   async verifyErrorMessage(text: string) {
  37 |     await expect(this.errorMsg())
> 38 |       .toContainText(text);
     |        ^ Error: expect(locator).toContainText(expected) failed
  39 |     console.log("invalid credentials : ",text);
  40 |       
  41 |   }
  42 | }
```