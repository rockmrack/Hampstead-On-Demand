import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage with hero section', async ({ page }) => {
    await page.goto('/');
    
    // Check main heading
    await expect(page.locator('h1')).toContainText(/Hampstead|On-Demand|Property|Home/i);
    
    // Check search input exists
    const searchInput = page.getByPlaceholder(/search|find|service/i);
    await expect(searchInput).toBeVisible();
    
    // Check navigation exists
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Check services link
    const servicesLink = page.getByRole('link', { name: /services/i });
    await expect(servicesLink).toBeVisible();
    
    // Check login link
    const loginLink = page.getByRole('link', { name: /login|sign in/i });
    await expect(loginLink).toBeVisible();
  });

  test('should display service categories', async ({ page }) => {
    await page.goto('/');
    
    // Wait for categories to load
    await page.waitForLoadState('networkidle');
    
    // Check that category cards or links exist
    const categoryElements = page.locator('[data-testid="category"], a[href*="/services"]');
    const count = await categoryElements.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Services Page', () => {
  test('should load services page', async ({ page }) => {
    await page.goto('/services');
    
    // Should have services heading
    await expect(page.locator('h1')).toContainText(/services/i);
  });

  test('should display multiple services', async ({ page }) => {
    await page.goto('/services');
    
    // Wait for services to load
    await page.waitForLoadState('networkidle');
    
    // Check for service cards (looking for price indicators)
    const priceElements = page.locator('text=/£\\d+/');
    const count = await priceElements.count();
    expect(count).toBeGreaterThan(5);
  });
});

test.describe('Authentication', () => {
  test('should load login page', async ({ page }) => {
    await page.goto('/login');
    
    // Should have login form
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/password/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /sign in|login|log in/i })).toBeVisible();
  });

  test('should load signup page', async ({ page }) => {
    await page.goto('/signup');
    
    // Should have signup form
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /sign up|register|create/i })).toBeVisible();
  });

  test('should show validation errors on empty login submit', async ({ page }) => {
    await page.goto('/login');
    
    // Click login without filling form
    await page.getByRole('button', { name: /sign in|login|log in/i }).click();
    
    // Should show validation (HTML5 or custom)
    const emailInput = page.getByLabel(/email/i);
    const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBe(true);
  });
});

test.describe('Booking Flow', () => {
  test('should navigate to booking page from services', async ({ page }) => {
    await page.goto('/services');
    await page.waitForLoadState('networkidle');
    
    // Find and click first "Book Now" button
    const bookButton = page.getByRole('link', { name: /book|view/i }).first();
    
    if (await bookButton.isVisible()) {
      await bookButton.click();
      
      // Should be on booking page
      await expect(page.url()).toContain('/book/');
    }
  });
});

test.describe('Chatbot', () => {
  test('should have chatbot button visible', async ({ page }) => {
    await page.goto('/');
    
    // Look for chatbot toggle button
    const chatButton = page.locator('button[aria-label*="chat" i], button:has(svg)').last();
    await expect(chatButton).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test('homepage should have no critical accessibility issues', async ({ page }) => {
    await page.goto('/');
    
    // Check for main landmark
    await expect(page.locator('main')).toBeVisible();
    
    // Check for skip link or proper heading hierarchy
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // Check images have alt text (if any)
    const images = page.locator('img');
    const imgCount = await images.count();
    for (let i = 0; i < imgCount; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).not.toBeNull();
    }
  });
});
