const { test, expect } = require('@playwright/test');
const { executeRegistration } = require('../helpers/registration');

test('Browser Context Test', async ({ browser }) => {
    const { newTab, randomString, page } = await executeRegistration(browser);

    // Product 1 selection

    const firstItemLocator = 'a[href="prod.html?idp_=1"].hrefch';
    const firstItemName = await newTab.locator(firstItemLocator).textContent();
    console.log(firstItemName);
    await newTab.locator(firstItemLocator).click();
    await newTab.locator(".btn.btn-success.btn-lg").click();
    await newTab.locator("[id='nava']").click();

    // Product 2 menu navigation

    const submenuSelector = 'a#itemc[onclick="byCat(\'notebook\')"].list-group-item';
    await newTab.locator(submenuSelector).click();

    // Product 2 selection

    const secondItemLocator = 'a[href="prod.html?idp_=8"].hrefch';
    const secondItemName = await newTab.locator(secondItemLocator).textContent();
    console.log(secondItemName);
    await newTab.locator(secondItemLocator).click();
    await newTab.locator(".btn.btn-success.btn-lg").click();
    await newTab.locator("[id='cartur']").click();

    // Cart assertions

    expect(await newTab.locator("[id='tbodyid']")).toContainText(firstItemName);
    expect(await newTab.locator("[id='tbodyid']")).toContainText(secondItemName);
    
    await page.waitForTimeout(5000);

});

