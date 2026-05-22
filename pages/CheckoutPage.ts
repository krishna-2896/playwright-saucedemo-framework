import { Page, expect } from '@playwright/test';

export class CheckoutPage {

  constructor(private page: Page) {}

  firstName = '#first-name';
  lastName = '#last-name';
  postalCode = '#postal-code';

  continueBtn = '#continue';

  finishBtn = '#finish';

  successMsg = '.complete-header';

  async enterCheckoutInfo() {

    await this.page.fill(this.firstName, 'Krishna');

    await this.page.fill(this.lastName, 'Kumar');

    await this.page.fill(this.postalCode, '600100');
  }

  async continueCheckout() {

    await this.page.click(this.continueBtn);
  }

  async finishOrder() {

    await this.page.click(this.finishBtn);
  }

  async verifyOrderSuccess() {

    await expect(this.page.locator(this.successMsg))
      .toContainText('Thank you for your order!');
  }
}