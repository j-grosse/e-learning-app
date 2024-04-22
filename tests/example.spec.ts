import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// const baseUrl = 'http://localhost:5173/';
const baseUrl = 'https://e-learn-68it.onrender.com/';

test('check pages', async ({ page }) => {
  await page.goto(baseUrl);
  await page.click('text=Login');
  await page.getByText('Log in').click();
  await page.goto(`${baseUrl}dashboard/course/1`);
  await page.click('text=Cart');
});
