const { test, expect } = require('@playwright/test');
const { executeRegistration } = require('../helpers/registration');

test('Browser Context Test', async ({ browser }) => {
    const { newTab, randomString, email } = await executeRegistration(browser);

    // Assertions

    const currentURL = newTab.url();
    expect(currentURL).toBe("https://demoblaze.com/");
    await expect(newTab.locator("[id='nameofuser']")).toContainText(`Welcome ${randomString}@putsbox.com`);
    
});

