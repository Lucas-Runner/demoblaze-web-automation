const { test, expect } = require('@playwright/test');
const { executeRegistration } = require('../helpers/registration');

test('Browser Context Test', async ({ browser }) => {
    const { newTab, randomString, page } = await executeRegistration(browser);

    // Product 1 selection

    const firstItem = 'a[href="prod.html?idp_=1"].hrefch';
    await newTab.locator(firstItem).click();
    await newTab.locator(".btn.btn-success.btn-lg").click();
    await newTab.locator("[id='nava']").click();

    const submenuSelector = 'a#itemc[onclick="byCat(\'notebook\')"].list-group-item';
    await newTab.locator(submenuSelector).click();

    const secondItem = 'a[href="prod.html?idp_=8"].hrefch';
    await newTab.locator(secondItem).click();
    await newTab.locator(".btn.btn-success.btn-lg").click();
    await newTab.locator("[id='cartur']").click();

    await page.waitForTimeout(5000);

});

