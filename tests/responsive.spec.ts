import { test, expect, devices } from '@playwright/test';
const viewports = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1024, height: 768 },
  desktopLarge: { width: 1440, height: 900 },
};

test.describe('Responsive Design Tests', () => {
  Object.entries(viewports).forEach(([device, viewport]) => {
    test(`should display correctly on ${device}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');

      await page.waitForLoadState('networkidle');

      await expect(page.getByRole('main')).toBeVisible();
    });
  });

  test('should adapt grid layout based on screen size', async ({ page }) => {
    await page.goto('/');

    // Desktop: 3 columns
    await page.setViewportSize(viewports.desktop);
    const desktopGridItems = page.locator('[data-testid="grid-item"]');
    const desktopFirstRow = desktopGridItems.nth(0);
    const desktopSecondRow = desktopGridItems.nth(3);

    if ((await desktopGridItems.count()) >= 4) {
      const pos1 = await desktopFirstRow.boundingBox();
      const pos2 = await desktopSecondRow.boundingBox();
      expect(pos1?.y).toBeLessThan(pos2?.y || 0); // Different lines
    }

    // Mobile: 1 column (stacked items)
    await page.setViewportSize(viewports.mobile);
    const mobileGridItems = page.locator('[data-testid="grid-item"]');

    if ((await mobileGridItems.count()) >= 2) {
      const mobilePos1 = await mobileGridItems.nth(0).boundingBox();
      const mobilePos2 = await mobileGridItems.nth(1).boundingBox();
      expect(mobilePos1?.y).toBeLessThan(mobilePos2?.y || 0);
    }
  });

  ['iPad Pro', 'Desktop Chrome'].forEach((deviceName) => {
    test(`should work on ${deviceName}`, async ({ browser }) => {
      const context = await browser.newContext({
        ...devices[deviceName],
      });

      const page = await context.newPage();
      await page.goto('/');
      await expect(page.getByRole('main')).toBeVisible();

      await context.close();
    });
  });
});
