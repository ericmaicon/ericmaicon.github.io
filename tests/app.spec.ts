import { test, expect } from '@playwright/test';

test('go to hero when click at Home button', async ({ page }) => {
  await page.goto('/');

  await page.waitForLoadState('networkidle');

  const targetSection = page.locator('#home');
  await expect(targetSection).toBeVisible();

  await page.getByRole('button', { name: 'Home' }).click();
  await page.waitForTimeout(1000);

  const finalScrollY = await page.evaluate(() => window.scrollY);
  expect(finalScrollY).toBe(0);

  await expect(targetSection).toBeInViewport();
});

test('go to about when click at About button', async ({ page }) => {
  await page.goto('/');

  await page.waitForLoadState('networkidle');

  const targetSection = page.locator('#about');
  await expect(targetSection).toBeVisible();

  const initialScrollY = await page.evaluate(() => window.scrollY);
  await page.getByRole('button', { name: 'About' }).click();
  await page.waitForTimeout(1000);

  const finalScrollY = await page.evaluate(() => window.scrollY);

  expect(finalScrollY).toBeGreaterThan(initialScrollY);

  await expect(targetSection).toBeInViewport();
});

test('go to technologies when click at Technologies button', async ({ page }) => {
  await page.goto('/');

  await page.waitForLoadState('networkidle');

  const targetSection = page.locator('#tech');
  await expect(targetSection).toBeVisible();

  const initialScrollY = await page.evaluate(() => window.scrollY);
  await page.getByRole('button', { name: 'Technologies' }).click();
  await page.waitForTimeout(1000);

  const finalScrollY = await page.evaluate(() => window.scrollY);

  expect(finalScrollY).toBeGreaterThan(initialScrollY);

  await expect(targetSection).toBeInViewport();
});

test('go to contact when click at Contact button', async ({ page }) => {
  await page.goto('/');

  await page.waitForLoadState('networkidle');

  const targetSection = page.locator('#contact');
  await expect(targetSection).toBeVisible();

  const initialScrollY = await page.evaluate(() => window.scrollY);
  await page.getByRole('button', { name: 'Contact' }).click();
  await page.waitForTimeout(1000);

  const finalScrollY = await page.evaluate(() => window.scrollY);

  expect(finalScrollY).toBeGreaterThan(initialScrollY);

  await expect(targetSection).toBeInViewport();
});
