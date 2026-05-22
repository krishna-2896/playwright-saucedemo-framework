import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { ProductsPage } from '../pages/ProductsPage';

import { CartPage } from '../pages/CartPage';

import { CheckoutPage } from '../pages/CheckoutPage';

import { users } from '../utils/testData';

test('Complete Product Order', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const productsPage = new ProductsPage(page);

  const cartPage = new CartPage(page);

  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();

  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await productsPage.addProductToCart();

  await productsPage.openCart();

  await cartPage.clickCheckout();

  await checkoutPage.enterCheckoutInfo();

  await checkoutPage.continueCheckout();

  await checkoutPage.finishOrder();

  await checkoutPage.verifyOrderSuccess();

});