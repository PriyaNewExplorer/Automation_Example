import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://dca-test.gsk.com/DCA/RevokeReasons
  await page.goto('https://dca-test.gsk.com/DCA/RevokeReasons');

  // Click text=Add Document
  await page.locator('text=Add Document').click();
  await expect(page).toHaveURL('https://dca-test.gsk.com/DCA/AddDocument');

  // Click li[role="menuitem"]:has-text("Documents")
  await page.locator('li[role="menuitem"]:has-text("Documents")').click();
  await expect(page).toHaveURL('https://dca-test.gsk.com/DCA/Documents');

  // Click text=aaa >> nth=1
  await page.locator('text=aaa').nth(1).click();
  await expect(page).toHaveURL('https://dca-test.gsk.com/DCA/EditDocument/9');

  // Uncheck input[type="checkbox"]
  await page.locator('input[type="checkbox"]').uncheck();

  // Click text=Submit
  await page.locator('text=Submit').click();
  await expect(page).toHaveURL('https://dca-test.gsk.com/DCA/Documents');

});