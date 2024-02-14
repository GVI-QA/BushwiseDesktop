import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
        
     })
    test('Navigate to HomePage and verify title', async ({ page }) => {
        await expect(page).toHaveTitle('Best Field Guide Training #1 Courses in South Africa | Bushwise')
    })

    test('Navigate to the Wildlife Courses page and verify title', async ({ page }) => {
        await homePage.navigateToWildlifeCoursesPage();
        await expect(page).toHaveTitle(
            "Wildlife Courses | Study Wildlife in South Africa"
          );
    })

    test('Navigate to the Online Courses page and verify title', async ({ page }) => {
        await homePage.navigateToOnlineCoursesPage();
        await expect(page).toHaveTitle(
            "Online Wildlife Courses | Study Wildlife and Field Guiding Online"
          );
    })

    test('Navigate to the Conservation with GVI page and verify title', async ({ page }) => {
        await homePage.navigateToConservationWithGVIPage();
        await expect(page).toHaveTitle(
            "Top Wildlife Internships | GVI Limpopo South Africa"
          );
    })

    test('Navigate to the Campus Open Day page and verify title', async ({ page }) => {
        homePage.eventsComponent().navigateToCampusOpenDayPage();
        await expect(page).toHaveTitle(
            "Join us for our upcoming Campus Open Day | Bushwise"
          );
    })

    test('Navigate to the Virtual Open Day page and verify title', async ({ page }) => {
        homePage.eventsComponent().navigateToVirtualOpenDayPage();
        await expect(page).toHaveTitle(
            "Sign up to our free Virtual Open Day | Bushwise"
          );
    })

    test.skip('Navigate to the Webinar page and verify title', async ({ page }) => {
        homePage.eventsComponent().navigateToWebinarPage;
        await expect(page).toHaveTitle(
            "Sign up to our free Virtual Open Day | Bushwise"
          );
    })

    test('Click the Go into the wild button using CSS Selector', async () => {
        const instagramPage = await homePage.navigateToGVIInstagramPage();
        await expect(instagramPage).toHaveURL(/.*instagram.*/i), { timeout: 10000 };
        await instagramPage.close();
        
    })
})