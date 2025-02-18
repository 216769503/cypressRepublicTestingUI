

  describe(' Home Page and Analytics Features', ()=>{

    it.only('Test the functionality of filter  ', ()=>{

        cy.visit("https://the-republic-six.vercel.app/");
        cy.get('.justify-between > .p-2').click();
        cy.get(':nth-child(4) > a').click();
        cy.get(':nth-child(2) > .text-2xl').should('have.text','Login');
        cy.get('#email').clear().type('Lehlohonolo.best@gmail.com');
        cy.get('#password').clear().type('68684$aB');
        cy.get('.inline-flex').click();
        cy.get('.p-2 > .relative > .aspect-square').click({force:true});
        cy.get(':nth-child(4) > a').click({force:true});
        cy.get('[aria-controls="radix-:rre:"]').click({force:true});
        cy.contains('Political').click();
        cy.get('[aria-controls^="radix-"]:nth-of-type(1)').click({ force: true });

        cy.contains('Burgersfork, Limpopo', { timeout: 10000 }).click({ force: true });
        // cy.get('.hover\:bg-muted').click();
        cy.get('[aria-controls="radix-:rrf:"]').click({force:true});
        cy.get('[data-testid="confirm-delete-button"]').click();
        //Issue:The DOM Iis not Found in the element
    
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
        //cy.get(":nth-child(3) > a", { timeout: 10000 }).should("exist");
        cy.wait(1000);
        
      });


      it('Verify the Post Selection', ()=> {

        cy.visit("https://the-republic-six.vercel.app/");
        cy.get('.justify-between > .p-2').click();
        cy.get(':nth-child(4) > a').click();
        cy.get(':nth-child(2) > .text-2xl').should('have.text','Login');
        cy.get('#email').clear().type('Lehlohonolo.best@gmail.com');
        cy.get('#password').clear().type('68684$aB');
        cy.get('.inline-flex').click();
        cy.get('.p-2 > .relative > .aspect-square').click({force:true});
        cy.get('.p-2 > .relative > .aspect-square').click({force:true});
        cy.get(':nth-child(4) > a').click({force:true});

      });
    
    
  })

