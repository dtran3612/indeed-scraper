import {Locator, Page} from "@playwright/test"
import { HelperBase } from "./helperBase"

export class FrozenFoodsGrocery extends HelperBase{
    constructor(page: Page){
        super(page)
    }

    async clickFrozenFoodsGrocery(){
        await this.page.getByRole('link', { name: 'Ice Cream & Novelties' }).click()
    }
}