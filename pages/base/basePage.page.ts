import { Page, expect } from "@playwright/test";

class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateAndVerifyTitle(link: () => Promise<Page>, expectedTitle: string | null = null) {
        const newPage = await link();
        if (expectedTitle !== null) {
            await expect(newPage).toHaveTitle(expectedTitle);
        }
        await newPage.close();
    }
}

export default BasePage;