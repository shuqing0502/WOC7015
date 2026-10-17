const { test, expect } = require('@playwright/test');

test('TC01: Login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/.*inventory\.html/);
  await expect(page.locator('.app_logo')).toContainText('Swag Labs');
});

test('TC02: Login with incorrect username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'wrong_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toContainText('do not match');
});

test('TC03: Login with incorrect password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
   await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'wrong_password');
  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');
});

test('TC13: Click product image and name navigates to detail page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('.inventory_item_name');
  await expect(page).toHaveURL(/.*inventory-item\.html\?id=\d+/);

  await page.goBack();

  await page.click('.inventory_item_img');
  await expect(page).toHaveURL(/.*inventory-item\.html\?id=\d+/);
});

test('TC16: Add Sauce Labs Backpack to cart, badge shows 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');

  await expect(page.locator('.shopping_cart_badge')).toContainText('1');
});

test('TC19: Logout from side menu', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

  await expect(page).toHaveURL(/.*\/$/);
});

test('TC20: All Items returns to product list from cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('.shopping_cart_link');
  await expect(page).toHaveURL(/.*cart\.html/);

  await page.click('#react-burger-menu-btn');
  await page.click('#inventory_sidebar_link');

  await expect(page).toHaveURL(/.*inventory\.html/);
});

test('TC21: About opens new tab', async ({ page, context }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#react-burger-menu-btn');

  const newPage = context.waitForEvent('page');
  await page.click('#about_sidebar_link');
  const aboutPage = await newPage;

  await expect(aboutPage).toHaveURL(/.*saucelabs\.com/);
  await aboutPage.close();
});