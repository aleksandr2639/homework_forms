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

  test('test', async () => {
    await page.goto('http://localhost:9000');
    await page.waitForSelector('body');
  });
  afterAll(async () => {
    await browser.close();
  });
});
