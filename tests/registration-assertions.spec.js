const { test, expect } = require('@playwright/test');
const { executeRegistration } = require('../helpers/registration');

test('Browser Context Test', async ({ browser }) => {
    const { newTab, randomString, page } = await executeRegistration(browser);

    // Assertions

    const searchPage = String(randomString);
    const currentURL = newTab.url();
    expect(currentURL).toBe("https://demoblaze.com/");

    await page.waitForTimeout(5000);

});

