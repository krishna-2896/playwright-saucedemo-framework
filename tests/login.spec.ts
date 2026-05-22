import { test } from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';


import { users } from '../utils/testData';

test.describe('Login Scenarios', () => {

  test('Valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );

    await loginPage.verifyLoginSuccess();
  });

  test('Invalid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );

    await loginPage.verifyErrorMessage(
      'Username and password do not match'
    );
  });

  test('Locked User Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      users.lockedUser.username,
      users.lockedUser.password
    );

    await loginPage.verifyErrorMessage(
      'Sorry, this user has been locked out.'
    );
  });

});