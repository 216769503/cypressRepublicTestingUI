

describe('Test the functionality of Switch theme ', ()=> {


    it.only("Verify the fuctionality of Switch Theme", () => {

      cy.visit("https://the-republic-six.vercel.app/");
      cy.get('.justify-between > .p-2').click();
      cy.get(':nth-child(4) > a').click();
      cy.get(':nth-child(2) > .text-2xl').should('have.text','Login');
      cy.get('#email').clear().type('Lehlohonolo.best@gmail.com');
      cy.get('#password').clear().type('68684$aB');
      cy.get('.inline-flex').click();
      cy.get('#radix-\\:r4\\:').click();
      cy.contains('Light').click({force:true});
      cy.get('#radix-\\:r4\\:').click();
      cy.contains('Dark').click({force:true});
      cy.get('#radix-\\:r4\\:').click();
      cy.contains('System').click({force:true});
      cy.get('#item-0-feed-issues > [data-testid="issue-item"] > .gap-4 > .cursor-pointer').click();
      cy.get('div.flex-grow > div.relative > .relative').clear().type('Its not a promblem');
      //cy.get('.peer').check();
      cy.get('.justify-between > .inline-flex').click();
      cy.get('.text-red-600').click();

      });
    
});