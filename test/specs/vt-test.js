//1- check if the logo is displayed Virginia Tech for search engine optimization (SEO)
const { expect } = require("chai");

describe("Virginia Tech website", function () {
  it('should have a header in the "#vt_theme_one" element', async () => {
    await browser.url("https://www.vt.edu/");

    const header = await browser.$("#vt_theme_one > header");
    await header.waitForDisplayed();
    const headerTagName = await header.getTagName();
    expect(headerTagName).to.equal("header");
  });

  //Note for Dev team Changed the expected text to "Virginia Tech" for better SEO

  //2- Test search function
  describe("Search function", function () {
    it('should search for the word "test"', async function () {
      await browser.url("https://www.vt.edu/");
      const searchButton = await browser.$(".vt-search-toggle");
      await searchButton.click();
      const searchInput = await browser.$("#vt_search_box");
      await searchInput.setValue("test");
      const submitButton = await browser.$("#vt_go_button");
      await submitButton.click();
      await browser.pause(3000); // Wait for search results to load
    });
    //3- Test search function with 2 string

    it('should search for the word "Virginia Tech"', async function () {
      await browser.url("https://www.vt.edu/");
      const searchButton = await browser.$(".vt-search-toggle");
      await searchButton.click();
      const searchInput = await browser.$("#vt_search_box");
      await searchInput.setValue("Virginia Tech");
      const submitButton = await browser.$("#vt_go_button");
      await submitButton.click();
      await browser.pause(3000);
    });

    //4- Test search function with a long string
    it('should search for the word "Hello! My name is Saad, Nice meeting you all"', async function () {
      await browser.url("https://www.vt.edu/");
      const searchButton = await browser.$(".vt-search-toggle");
      await searchButton.click();
      const searchInput = await browser.$("#vt_search_box");
      await searchInput.setValue(
        "Hello! My name is Saad, Nice meeting you all"
      );
      const submitButton = await browser.$("#vt_go_button");
      await submitButton.click();
      await browser.pause(3000);
    });
  });

  //5- Test if the dropdown menu is working
  describe("Dropdown menu", () => {
    it("Clicking the dropdown menu button should open the menu", () => {
      browser.url("https://www.vt.edu/");
      const dropdownButton = $("#vt_nav");

      dropdownButton.click();
      const isMenuOpen = $("#vt_nav").isDisplayed();
    });
  });
});

//6- Admissions page check
it('Admissions should navigate to the "Admissions" page', () => {
  browser.url("https://www.vt.edu/");
  const admissionsLink = $('a[href="/admissions.html"]');
  admissionsLink.waitForClickable({ timeout: 5000 });
  admissionsLink.click();
  browser.waitUntil(
    () => {
      return browser.getUrl() === "https://www.vt.edu/admissions.html";
    },
    { timeout: 5000, timeoutMsg: "Failed to navigate to Admissions page" }
  );
});
//7- Campus page check
it('should navigate to the "Campus Life" page', () => {
  browser.url("https://www.vt.edu/");
  const campusLifeLink = $('a[href="https://www.vt.edu/campus-life.html"]');
  campusLifeLink.waitForClickable({ timeout: 5000 });
  campusLifeLink.click();
  browser.waitUntil(
    () => {
      return browser.getUrl() === "https://www.vt.edu/campus-life.html";
    },
    { timeout: 5000, timeoutMsg: "Failed to navigate to Campus Life page" }
  );
});

//8- InclusiveVT page check
it('Should navigate to the "InclusiveVT" page', () => {
  browser.url("https://www.vt.edu/");
  const inclusiveVTLink = $(
    'a[href="https://www.vt.edu/inclusive-vt-rdr.html"]'
  );
  inclusiveVTLink.waitForClickable({ timeout: 5000 });
  inclusiveVTLink.click();
  browser.waitUntil(
    () => {
      return browser.getUrl() === "https://www.vt.edu/inclusive-vt-rdr.html";
    },
    { timeout: 5000, timeoutMsg: "Failed to navigate to InclusiveVT page" }
  );
});
//9- Engagement and Outreach page check
it("Engagement and Outreach should navigate to the correct page", () => {
  browser.url("https://www.vt.edu/");
  const engagementLink = $(
    'a[href="https://www.vt.edu/engagement-outreach.html"]'
  );
  engagementLink.waitForClickable({ timeout: 5000 });
  engagementLink.click();
  browser.waitUntil(
    () => {
      return browser.getUrl() === "https://www.vt.edu/engagement-outreach.html";
    },
    {
      timeout: 5000,
      timeoutMsg: "Failed to navigate to Engagement and Outreach page",
    }
  );
});

//10- Research page check

it("Should navigate to the Research page from the homepage", () => {
  browser.url("https://www.vt.edu/");
  const researchLink = $('a[href="https://www.vt.edu/research.html"]');
  researchLink.waitForClickable({ timeout: 5000 });
  researchLink.click();
  browser.waitUntil(
    () => {
      return browser.getUrl() === "https://www.vt.edu/research.html";
    },
    { timeout: 5000, timeoutMsg: "Failed to navigate to Research page" }
  );
});

//11- failing test case for Research page check (note* this test case is failing on purpose)
it("Should verify the presence of Research news section", () => {
  browser.url("https://www.vt.edu/research.html");
  const newsSection = $("#research-news");
  expect(newsSection.isDisplayed()).toBe(true);
});

//Thank you for your time and consideration
//Saad,
