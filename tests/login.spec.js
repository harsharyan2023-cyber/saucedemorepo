import { test, expect } from '@playwright/test';
import LoginPage   from '../pages/LoginPage'

test.describe('Login Scenarios',async()=>{
    test('Valid login',async({page})=>{
        await page.goto("https://www.saucedemo.com/");
        const loginPage = new LoginPage(page);
        await loginPage.enterUsername();
        await loginPage.enterPassword();
        await loginPage.clicklogin();

    })
})