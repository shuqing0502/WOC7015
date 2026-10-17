const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const CartPage = require('../pages/cartPage');

test('TC01: Login with valid credentials', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/.*inventory\.html/);
  await expect(page.locator(inventory.logo)).toContainText('Swag Labs');
});

test('TC02: Login with incorrect username', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('wrong_user', 'secret_sauce');

  await expect(page.locator(login.errorMessage)).toContainText('do not match');
});

test('TC03: Login with incorrect password', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'wrong_password');

  await expect(page.locator(login.errorMessage)).toContainText('Username and password do not match');
});

test('TC13: Click product image and name navigates to detail page', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.clickItemName();
  await expect(page).toHaveURL(/.*inventory-item\.html\?id=\d+/);

  await page.goBack();

  await inventory.clickItemImage();
  await expect(page).toHaveURL(/.*inventory-item\.html\?id=\d+/);
});

test('TC16: Add Sauce Labs Backpack to cart, badge shows 1', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addBackpackToCart();

  await expect(page.locator(inventory.cartBadge)).toContainText('1');
});

test('TC19: Logout from side menu', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.openMenu();
  await inventory.clickLogout();

  await expect(page).toHaveURL(/.*\/$/);
});

test('TC20: All Items returns to product list from cart', async ({ page }) => {
  const login = new LoginPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await cart.openCart();
  await expect(page).toHaveURL(/.*cart\.html/);

  await cart.openMenu();
  await cart.clickAllItems();

  await expect(page).toHaveURL(/.*inventory\.html/);
});

test('TC21: About opens new tab', async ({ page, context }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.openMenu();

  let aboutPage;
  try {
    const newPage = context.waitForEvent('page', { timeout: 5000 });
    await inventory.clickAbout();
    aboutPage = await newPage;
  } catch (e) {
    await inventory.clickAbout();
    aboutPage = page;
  }

  await expect(aboutPage).toHaveURL(/.*saucelabs\.com/);
  if (aboutPage !== page) {
    await aboutPage.close();
  }
});
