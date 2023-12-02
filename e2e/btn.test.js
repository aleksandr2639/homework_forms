import puppeteer from 'puppeteer';

describe('Puppeteer', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devTools: true,
    });
    page = await browser.newPage();
  });

  test('Button should render on page start', async () => {
    await page.goto('http://localhost:9000');
    await page.waitForSelector('.container');
    const btn = await page.$('.button');
    await btn.click();
    await page.waitForSelector('.popover-container');
  });
  afterAll(async () => {
    await browser.close();
  });
});
