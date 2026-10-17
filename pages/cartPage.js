class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = '.shopping_cart_link';
    this.burgerButton = '#react-burger-menu-btn';
    this.allItemsLink = '#inventory_sidebar_link';
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }

  async openMenu() {
    await this.page.click(this.burgerButton);
  }

  async clickAllItems() {
    await this.page.click(this.allItemsLink);
  }
}

module.exports = CartPage;
