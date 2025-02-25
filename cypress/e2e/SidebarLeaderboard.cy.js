
describe("Enter the user description name", () => {
  
  it("Test the vulnerable system", () => {
    cy.visit("https://the-republic-six.vercel.app/");
    cy.get(".justify-between > .p-2").click();
    cy.get(":nth-child(4) > a").click();
    cy.get(":nth-child(2) > .text-2xl").should("have.text", "Login");
    cy.get("#email").clear().type("Lehlohonolo.best@gmail.com");
    cy.get("#password").clear().type("68684$aB");
    cy.get(".inline-flex").click();
    cy.get(".p-2 > .relative > .aspect-square").click({ force: true });
    cy.get(':nth-child(5) > a').click({force:true});
    cy.get('.z-10 > .border').click();
    cy.contains("Suburb Ranking").click({force:true});
  });
});
