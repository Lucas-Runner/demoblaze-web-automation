async function executeRegistration(browser) {

    // Random character generator and e-mail creator with PutsBox
    const randomString = Math.random().toString(36).substring(2, 10);
    const baseUrl = "https://putsbox.com/random/inspect";
    const newUrl = baseUrl.replace("random", randomString);
    const email = `${randomString}@putsbox.com`

    // E-mail page execution
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(newUrl);

    // New tab for website navigation / Website Registration

    const numPassword = "123456789"

    const newTab = await context.newPage();
    const signUpButtonSelector = 'button[onclick="register()"]';
    const logInButtonSelector = 'button[onclick="logIn()"]';

    await newTab.goto("https://demoblaze.com/");
    await newTab.locator("[id='signin2']").click();
    await newTab.locator("[id='sign-username']").click();
    await newTab.locator("[id='sign-username']").type(email);
    await newTab.locator("[id='sign-password']").click();
    await newTab.locator("[id='sign-password']").type(numPassword);
    await newTab.locator(signUpButtonSelector).click();

    await newTab.locator("[id='login2']").click();
    await newTab.locator("[id='loginusername']").click();
    await newTab.locator("[id='loginusername']").type(email);
    await newTab.locator("[id='loginpassword']").click();
    await newTab.locator("[id='loginpassword']").type(numPassword);
    await newTab.locator(logInButtonSelector).click();

    return { email, newTab, numPassword, page, randomString };
}

module.exports = { executeRegistration }; 



