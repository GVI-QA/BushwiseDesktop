/* eslint-disable playwright/expect-expect */
import { expect, test } from '@playwright/test';
import AlumniStoriesPage from '../pages/alumniStories.page';
import BasePage from '../pages/base/basePage.page';

test.describe('Alumni stories', () => {
  let alumniStoriesPage: AlumniStoriesPage;
  let basePage: BasePage;

  test.beforeEach(async ({ page }) => {
    alumniStoriesPage = new AlumniStoriesPage(page);
    await alumniStoriesPage.navigateTo();
  });

  test("Verify Alumni stories heading", async () => {
    await expect(alumniStoriesPage.alumniStoriesHeading).toHaveText(
      'Alumni stories'
    );
  });

  test("Navigate to Bushwise Employment Guarantee page via link and verify title", async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.navigateAndVerifyTitle(
      () => alumniStoriesPage.navigateToEmploymentGuaranteePage(),
      "Employment Guarantee | Get employed with Bushwise"
    );
  });

  test('Verify Alumni 1 information', async () => {
    const name = 'Tabisane Ernest';
    const location = 'Mala Mala, South Africa';
    const testimonialSubstring = 'I had been freelancing around the Lowveld';
  
    await alumniStoriesPage.verifyAlumni1Info(name, location, testimonialSubstring);
  });

  test('Verify Alumni 2 information', async () => {
    const name = 'Anel Olivier';
    const location = 'Majete Wildlife Reserve, Malawi';
    const testimonialSubstring = 'After Bushwise,';
  
    await alumniStoriesPage.verifyAlumni2Info(name, location, testimonialSubstring);
  });

  test('Verify Alumni 3 information', async () => {
    const name = 'Tim Connelly';
    const location = 'Explora Hotel, Patagonia';
    const testimonialSubstring = 'After graduating from Bushwise I';
  
    await alumniStoriesPage.verifyAlumni3Info(name, location, testimonialSubstring);
  });

  test('Verify Alumni 4 information', async () => {
    const name = 'Maddy Prior';
    const location = 'Garonga Safari, South Africa';
    const testimonialSubstring = 'I first fell in love with Africa';
  
    await alumniStoriesPage.verifyAlumni4Info(name, location, testimonialSubstring);
  });

  test('Verify Alumni 5 information', async () => {
    const name = 'Ebenezer Mnyene';
    const location = 'Four Seasons Lodge, Tanzania';
    const testimonialSubstring = 'I am currently working at The Four Seasons Safari Lodge Serengeti';
  
    await alumniStoriesPage.verifyAlumni5Info(name, location, testimonialSubstring);
  });

  test('Verify Alumni 6 information', async () => {
    const name = 'Ashleigh Donaldson';
    const location = 'University of Witswatersrand';
    const testimonialSubstring = 'In the bush, I learned the value of teamwork and collaboration.';
  
    await alumniStoriesPage.verifyAlumni6Info(name, location, testimonialSubstring);
  });

  test('Verify Alumni 7 information', async () => {
    const name = 'Jenika Pohl';
    const location = "Ant's Nest, Waterberg";
    const testimonialSubstring = 'Sophie, the co-founder of Bushwise, knows the owner of the Ant Collection';
  
    await alumniStoriesPage.verifyAlumni7Info(name, location, testimonialSubstring);
  });

  test('Verify Alumni 8 information', async () => {
    const name = 'Kutlwano Mahube';
    const location = 'Mankwe Game Trackers';
    const testimonialSubstring = 'From early as I can remember';
  
    await alumniStoriesPage.verifyAlumni8Info(name, location, testimonialSubstring);
  });

  test('Verify Alumni 9 information', async () => {
    const name = 'Ryan Jack';
    const location = 'Africa On Foot, South Africa';
    const testimonialSubstring = 'It was a great place to start my career';
  
    await alumniStoriesPage.verifyAlumni9Info(name, location, testimonialSubstring);
  });

  
});