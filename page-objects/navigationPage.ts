import {expect, Locator, Page} from "@playwright/test"
import { HelperBase } from "./helperBase"

export class NavigationPage extends HelperBase{
    constructor(page: Page){
        super(page)
    }

    async categoriesNewArrivals(){
        await this.waitForNumberOfSeconds(1) // 🚧>1?
    }

    async submitSignInOrCreateAccount(){
        await this.page.getByRole('link', { name: 'Sign in' }).click()
        await this.waitForNumberOfSeconds(1) // 🚧>1?
        // const frame = this.page.frameLocator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/f/ov2/av0/rch/jfdd4/0x4AAAAAAAAjq6WYeRDKmebM/light/fbE/new/normal?lang=auto"]')

    }


    async submitSignout(){
        await this.waitForNumberOfSeconds(1) // 🚧>1?
    }
}