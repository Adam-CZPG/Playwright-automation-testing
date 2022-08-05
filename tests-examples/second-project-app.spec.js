// @ts-nocheck
const { test, expect } = require('@playwright/test');
const { globalTimeout } = require('../tests/example.spec');

test ('Class central Test', async ({page})=>{
await page.goto('https://www.classcentral.com/')
await page.locator('.text-1 weight-semi color-charcoal').click()
    page.locator('#email'),fill ('test@gmail.com')
    page.locator('#password'),fill ('A1254789w')
await page.locator('.btn-blue padding-horz-xxlarge btn-large margin-top-medium').click()

expect(page.locator('.text-1 weight-semi color-charcoal')).toBevisible 

await page.screenshot({ path:'screenshot/LogIn.jpg' });


});