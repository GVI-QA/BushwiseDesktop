import { Page, Locator, expect } from "@playwright/test";
import BasePage from "./base/basePage.page";

class AlumniStoriesPage extends BasePage {
    page: Page;
    url: string = '/alumni';
    alumniStoriesHeading: Locator;
    bushwiseEmploymentGuaranteeLink: Locator;
    alumni1Name: Locator;
    alumni1Location: Locator;
    alumni1Testimonial: Locator;
    alumni2Name: Locator;
    alumni2Location: Locator;
    alumni2Testimonial: Locator;
    alumni3Name: Locator;
    alumni3Location: Locator;
    alumni3Testimonial: Locator;
    alumni4Name: Locator;
    alumni4Location: Locator;
    alumni4Testimonial: Locator;
    alumni5Name: Locator;
    alumni5Location: Locator;
    alumni5Testimonial: Locator;
    alumni6Name: Locator;
    alumni6Location: Locator;
    alumni6Testimonial: Locator;
    alumni7Name: Locator;
    alumni7Location: Locator;
    alumni7Testimonial: Locator;
    alumni8Name: Locator;
    alumni8Location: Locator;
    alumni8Testimonial: Locator;
    alumni9Name: Locator;
    alumni9Location: Locator;
    alumni9Testimonial: Locator;
 

    constructor(page: Page) {
      super(page);
        this.page = page;
        this.alumniStoriesHeading = page.locator("//span[normalize-space()='Alumni stories']");
        this.bushwiseEmploymentGuaranteeLink = page.locator("//a[normalize-space()='Bushwise Employment Guarantee here']");
        this.alumni1Name = page.locator("//h3[normalize-space()='Tabisane Ernest']");
        this.alumni1Location = page.locator("//span[normalize-space()='Mala Mala, South Africa']");
        this.alumni1Testimonial  = page.locator("//span[contains(text(),'I had been freelancing around the Lowveld when I r')]");
        this.alumni2Name = page.locator("//h3[normalize-space()='Anel Olivier']");
        this.alumni2Location = page.locator("//h4[normalize-space()='Majete Wildlife Reserve, Malawi']");
        this.alumni2Testimonial = page.locator("//span[contains(text(),'After Bushwise,  I went to Majete Wildlife Reserve')]");
        this.alumni3Name = page.locator("//h3[normalize-space()='Tim Connelly']");
        this.alumni3Location = page.locator("//h4[normalize-space()='Explora Hotel, Patagonia']");
        this.alumni3Testimonial = page.locator("//h2[contains(text(),'After graduating from Bushwise I contacted a Frenc')]");
        this.alumni4Name = page.locator("//h3[normalize-space()='Maddy Prior']");
        this.alumni4Location = page.locator("//span[normalize-space()='Garonga Safari, South Africa']");
        this.alumni4Testimonial = page.locator("//span[contains(text(),'I first fell in love with Africa while watching do')]");
        this.alumni5Name = page.locator("//h3[normalize-space()='Ebenezer Mnyene']");
        this.alumni5Location = page.locator("//h4[normalize-space()='Four Seasons Lodge, Tanzania']");
        this.alumni5Testimonial = page.locator("(//h2[@class='font_7 wixui-rich-text__text'])[5]");
        this.alumni6Name = page.locator("//h3[normalize-space()='Ashleigh Donaldson']");
        this.alumni6Location = page.locator("//h4[normalize-space()='University of Witswatersrand']");
        this.alumni6Testimonial = page.locator("//h2[contains(text(),'In the bush, I learned the value of teamwork and c')]");
        this.alumni7Name = page.locator("//h3[normalize-space()='Jenika Pohl']");
        this.alumni7Location = page.locator('(//span[normalize-space()="Ant\'s Nest, Waterberg"])[1]');
        this.alumni7Testimonial = page.locator("//span[contains(text(),'Sophie, the co-founder of Bushwise, knows the owne')]");
        this.alumni8Name = page.locator("//h3[normalize-space()='Kutlwano Mahube']");
        this.alumni8Location = page.locator("//h4[normalize-space()='Mankwe Game Trackers']");
        this.alumni8Testimonial = page.locator("//p[contains(text(),'From early as I can remember, I have been surround')]");
        this.alumni9Name = page.locator("//h3[normalize-space()='Ryan Jack']");
        this.alumni9Location = page.locator("//h4[normalize-space()='Africa On Foot, South Africa']");
        this.alumni9Testimonial = page.locator("//p[contains(text(),'It was a great place to start my career in the ind')]");
    }

    async navigateTo() {
        await this.page.goto(this.url);
        await this.page.waitForLoadState();
    }

    async navigateToPageAndClick(link: Locator) {
        await link.click();
        await this.page.waitForLoadState('domcontentloaded', { timeout: 60000 });
        return this.page;
    }

    async navigateToEmploymentGuaranteePage() {
        return this.navigateToPageAndClick(this.bushwiseEmploymentGuaranteeLink);
    }

    async verifyAlumni1Info(name: string, location: string, testimonialSubstring: string) {
        await expect(this.alumni1Name).toHaveText(name);
        await expect(this.alumni1Location).toHaveText(location);
        const testimonialText = await this.alumni1Testimonial.textContent();
        expect(testimonialText).toContain(testimonialSubstring);
      }

      async verifyAlumni2Info(name: string, location: string, testimonialSubstring: string) {
        await expect(this.alumni2Name).toHaveText(name);
        await expect(this.alumni2Location).toHaveText(location);
        const testimonialText = await this.alumni2Testimonial.textContent();
        expect(testimonialText).toContain(testimonialSubstring);
      }

      async verifyAlumni3Info(name: string, location: string, testimonialSubstring: string) {
        await expect(this.alumni3Name).toHaveText(name);
        await expect(this.alumni3Location).toHaveText(location);
        const testimonialText = await this.alumni3Testimonial.textContent();
        expect(testimonialText).toContain(testimonialSubstring);
      }

      async verifyAlumni4Info(name: string, location: string, testimonialSubstring: string) {
        await expect(this.alumni4Name).toHaveText(name);
        await expect(this.alumni4Location).toHaveText(location);
        const testimonialText = await this.alumni4Testimonial.textContent();
        expect(testimonialText).toContain(testimonialSubstring);
      }

      async verifyAlumni5Info(name: string, location: string, testimonialSubstring: string) {
        await expect(this.alumni5Name).toHaveText(name);
        await expect(this.alumni5Location).toHaveText(location);
        const testimonialText = await this.alumni5Testimonial.textContent();
        expect(testimonialText).toContain(testimonialSubstring);
      }

      async verifyAlumni6Info(name: string, location: string, testimonialSubstring: string) {
        await expect(this.alumni6Name).toHaveText(name);
        await expect(this.alumni6Location).toHaveText(location);
        const testimonialText = await this.alumni6Testimonial.textContent();
        expect(testimonialText).toContain(testimonialSubstring);
      }

      async verifyAlumni7Info(name: string, location: string, testimonialSubstring: string) {
        await expect(this.alumni7Name).toHaveText(name);
        await expect(this.alumni7Location).toHaveText(location);
        const testimonialText = await this.alumni7Testimonial.textContent();
        expect(testimonialText).toContain(testimonialSubstring);
      }

      async verifyAlumni8Info(name: string, location: string, testimonialSubstring: string) {
        await expect(this.alumni8Name).toHaveText(name);
        await expect(this.alumni8Location).toHaveText(location);
        const testimonialText = await this.alumni8Testimonial.textContent();
        expect(testimonialText).toContain(testimonialSubstring);
      }

      async verifyAlumni9Info(name: string, location: string, testimonialSubstring: string) {
        await expect(this.alumni9Name).toHaveText(name);
        await expect(this.alumni9Location).toHaveText(location);
        const testimonialText = await this.alumni9Testimonial.textContent();
        expect(testimonialText).toContain(testimonialSubstring);
      }

    private async verifyAlumniInfo(nameLocator: Locator, locationLocator: Locator, testimonialLocator: Locator, expectedName: string, expectedLocation: string, expectedTestimonial: string) {
        await expect(nameLocator).toHaveText(expectedName);
        await expect(locationLocator).toHaveText(expectedLocation);
        await expect(testimonialLocator).toHaveText(expectedTestimonial);
    }
}

export default AlumniStoriesPage;
