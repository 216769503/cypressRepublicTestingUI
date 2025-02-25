

describe("Test User Interface Tests for The Republic App", () => {

  it("Verify URL consistency and page reload functionality", () => {
    cy.visit("https://the-republic-six.vercel.app/");
    cy.url().should("include", "vercel.app/");
    cy.url().should("eq", "https://the-republic-six.vercel.app/");
    cy.url().should("contain", "the-republic-six");
    cy.wait(200);
    cy.location("href")
      .should("include", "republic-six")
      .and("contains", "vercel");
    cy.reload();
  });

  
  it("Validate the Home  elements in sidebar", () => {

    cy.visit("https://the-republic-six.vercel.app/");
    cy.get(".justify-between > .p-2").click();
    cy.get(".Custom_sidebarLinks__E_21W > :nth-child(1) > span").click();
    cy.contains("General").should("be.visible");
    cy.get(":nth-child(2) > a", { timeout: 10000 }).click();
    cy.contains("Home").should("be.visible");
    cy.wait(2000);
    cy.go("back");
    cy.wait(1000);

  });

 
});
