import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager'

// [DONE] ✅
test.beforeEach(async({page})=>{
  await page.goto('https://target.com/');
  await page.waitForTimeout(1000) //✅
})

test('navigate to page', async({page})=> {
    const pm = new PageManager(page)
    // Login handled by global setup - storage state is already authenticated
    await page.waitForTimeout(1000) //✅
})