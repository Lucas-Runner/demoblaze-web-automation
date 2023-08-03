const { test, expect } = require('@playwright/test');
const { executeRegistration } = require('../helpers/registration');

test('Browser Context Test', async ({ browser }) => {
    const { newTab, randomString, page } = await executeRegistration(browser);

    // Product 1 selection

    const firstItemLocator = 'a[href="prod.html?idp_=1"].hrefch';
    const firstItemName = await newTab.locator(firstItemLocator).textContent();
    await newTab.locator(firstItemLocator).click();
    await newTab.locator(".btn.btn-success.btn-lg").click();
    await newTab.locator("[id='nava']").click();

    // Product 2 menu navigation

    const submenuSelector = 'a#itemc[onclick="byCat(\'notebook\')"].list-group-item';
    await newTab.locator(submenuSelector).click();

    // Product 2 selection

    const secondItemLocator = 'a[href="prod.html?idp_=8"].hrefch';
    const secondItemName = await newTab.locator(secondItemLocator).textContent();
    await newTab.locator(secondItemLocator).click();
    await newTab.locator(".btn.btn-success.btn-lg").click();
    await newTab.locator("[id='cartur']").click();

    // Order placement

    await newTab.locator(".btn.btn-success").click();

    await newTab.locator("[id='name']").click();
    await newTab.locator("[id='name']").type("Lucas");
    await newTab.locator("[id='country']").type("Brasil");
    await newTab.locator("[id='city']").type("São Paulo");
    await newTab.locator("[id='card']").type("0000 1111 2222 3333");
    await newTab.locator("[id='month']").type("02");
    await newTab.locator("[id='year']").type("2025");

    await newTab.locator("button[onclick='purchaseOrder()']").click();
    await newTab.locator(".confirm.btn.btn-lg.btn-primary").click();

    await expect(newTab.locator('.sweet-alert')).toContainText("Thank you for your purchase!");

});

