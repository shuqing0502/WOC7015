class InventoryPage {
  constructor(page) {
    this.page = page;
    this.logo = '.app_logo';
    this.itemName = '.inventory_item_name';
    this.itemImage = '.inventory_item_img';
    this.cartBadge = '.shopping_cart_badge';
    this.addToCartBackpack = '#add-to-cart-sauce-labs-backpack';
    this.burgerButton = '#react-burger-menu-btn';
    this.logoutLink = '#logout_sidebar_link';
    this.aboutLink = '#about_sidebar_link';
  }

  async clickItemName() {
    await this.page.click(this.itemName);
  }

  async clickItemImage() {
    await this.page.click(this.itemImage);
  }

  async addBackpackToCart() {
    await this.page.click(this.addToCartBackpack);
  }

  async openMenu() {
    await this.page.click(this.burgerButton);
  }

  async clickLogout() {
    await this.page.click(this.logoutLink);
  }

  async clickAbout() {
    await this.page.click(this.aboutLink);
  }

  async getLogoText() {
    return await this.page.locator(this.logo).textContent();
  }

  async getCartBadgeText() {
    return await this.page.locator(this.cartBadge).textContent();
  }
}

module.exports = InventoryPage;
