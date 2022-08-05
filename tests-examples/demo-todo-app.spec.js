// @ts-nocheck
const { test, expect } = require('@playwright/test');
const { globalTimeout } = require('../tests/example.spec');

test ('Grinfer Test', async ({page})=>{
page.goto('https://grinfer.com/')
page.locator('.sc-2aalce-2').click()
page.locator('#email'),fill ('test@gmail.com')
page.locator('#password'),fill ('A1254789w')
page.locator('.sc-p4qn9p-0').click()
expect(page.locator('.sc-2aalce-2')).toBeVisible

page.screenshot({ path:'screenshot/LogIn.jpg' });


});