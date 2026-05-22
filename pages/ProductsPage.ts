import { Page } from '@playwright/test';

export class ProductsPage {

  constructor(private page: Page) {}

  addBackpack = '#add-to-cart-sauce-labs-backpack';

  cartIcon = '.shopping_cart_link';

  async addProductToCart() {

    await this.page.click(this.addBackpack);
  }

  async openCart() {

    await this.page.click(this.cartIcon);
  }
}