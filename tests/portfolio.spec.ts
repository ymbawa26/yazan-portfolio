import { expect, test } from "@playwright/test";

test("portfolio loads core sections and interactions", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Yazan Bawaqna" })).toBeVisible();
  await page.getByRole("link", { name: /View Projects/ }).click();
  await expect(page).toHaveURL(/\/projects/);
  await expect(page.locator("#projects")).toBeInViewport();
  await expect(page.getByRole("heading", { name: "WorldGuess" })).toBeVisible();

  await page.goto("/skills");
  await expect(page).toHaveURL(/\/skills/);
  await page.getByRole("tab", { name: "Direct Stakeholder Experience" }).click();
  await expect(page.getByText("Good analysis is not finished")).toBeVisible();
  await expect(page.locator("#skills")).toContainText("A capability map, not a keyword pile.");
});

test("project and contact actions lead somewhere", async ({ page }) => {
  await page.goto("/projects");

  await expect(page.getByRole("link", { name: /Open Vercel/ }).first()).toHaveAttribute("href", /vercel\.app/);
  await expect(page.getByRole("link", { name: /Open Vercel/ })).toHaveCount(5);
  await expect(page.getByRole("link", { name: /Try WildWhere/ })).toHaveAttribute("href", /github\.io/);

  await page.goto("/contact");
  await expect(page.getByRole("link", { name: /Send me an email/ })).toHaveAttribute("href", /^mailto:/);
  await expect(page.getByRole("link", { name: /Call me/ })).toHaveAttribute("href", /^tel:/);
  await page.getByRole("button", { name: /Copy email/ }).click();
  await expect(page.getByRole("status")).toContainText(/Email copied|browser blocked one-click copy/);
});

test("education, language, and goals sections render", async ({ page }) => {
  await page.goto("/education");
  await expect(page.getByText("Computer Science, AI Concentration", { exact: true })).toBeVisible();
  await expect(page.getByText("Data Analysis & Visualization")).toBeVisible();

  await page.goto("/skills");
  await expect(page.locator("#languages")).toContainText("English");
  await expect(page.locator("#languages")).toContainText("Arabic");

  await page.goto("/goals");
  await expect(page.getByText("Become a deep expert in applied data and AI")).toBeVisible();
});

test("nature field note expands", async ({ page }) => {
  await page.goto("/perspective");
  await page.getByRole("button", { name: /Open my field note/ }).click();
  await expect(page.getByText("I enjoy hiking, wildlife spotting")).toBeVisible();
});
