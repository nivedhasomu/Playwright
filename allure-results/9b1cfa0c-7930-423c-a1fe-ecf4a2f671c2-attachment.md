# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> flipcart
- Location: tests\example.spec.js:22:5

# Error details

```
Error: page.goto: NS_ERROR_UNKNOWN_HOST
Call log:
  - navigating to "https://www.flipcart.in/", waiting until "load"

```

# Page snapshot

```yaml
- article [ref=e3]:
  - generic [ref=e6]:
    - heading "Server Not Found" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - text: Nightly can’t connect to the server at
      - strong [ref=e9]: www.flipcart.in
      - text: .
    - generic [ref=e10]:
      - heading "What can you do about it?" [level=3] [ref=e11]
      - list [ref=e12]:
        - listitem [ref=e13]: Check to make sure you’ve typed the website address correctly and try again in a few moments.
        - listitem [ref=e14]: Check your network connection.
        - listitem [ref=e15]: Check that Nightly has permission to access the web (you might be connected but behind a firewall).
    - paragraph [ref=e16]:
      - link "Learn more…" [ref=e17] [cursor=pointer]:
        - /url: https://support.mozilla.org/1/firefox/157.0/WINNT/en-US/server-not-found-connection-problem
    - button "Try Again" [ref=e20]
```

# Test source

```ts
  1  | // @ts-check
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | test('has title', async ({ page }) => {
  5  |   await page.goto('https://playwright.dev/');
  6  | 
  7  |   // Expect a title "to contain" a substring.
  8  |   await expect(page).toHaveTitle(/Playwright/);
  9  | });
  10 | 
  11 | test('get started link', async ({ page }) => {
  12 |   await page.goto('https://playwright.dev/');
  13 | 
  14 |   // Click the get started link.
  15 |   await page.getByRole('link', { name: 'Get started' }).click();
  16 | 
  17 |   // Expects page to have a heading with the name of Installation.
  18 |   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  19 | });
  20 | 
  21 | 
  22 | test('flipcart', async ({page})=>{
> 23 | await page.goto("https://www.flipcart.in/")
     |            ^ Error: page.goto: NS_ERROR_UNKNOWN_HOST
  24 | });
  25 | 
  26 | 
  27 | 
  28 | 
```