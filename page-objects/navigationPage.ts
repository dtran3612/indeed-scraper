import {expect, Locator, Page} from "@playwright/test"
import { HelperBase } from "./helperBase"

export class NavigationPage extends HelperBase{
    constructor(page: Page){
        super(page)
    }

    async categoriesNewArrivals(){
        await this.waitForNumberOfSeconds(1) // 🚧>1?
    }

    /**
     * Login method
     * @param username [Input][String]username
     * @param password [Input][String]password
     */
    async submitSignInOrCreateAccount(username: string, password: string){
        await this.waitForNumberOfSeconds(1) // 🚧>1?
    }


    async submitSignout(){
        await this.waitForNumberOfSeconds(1) // 🚧>1?
    }
}