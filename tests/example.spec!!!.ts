const { chromium } = require('playwright');

async function runScript() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Perform actions on the page
  await page.goto('https://wikipedia.org/');
  await page.screenshot({ path: 'wiki_screenshot_playwright.png' });
  await context.close();
  await browser.close();
}

runScript();
