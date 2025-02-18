describe(' Home page About elemets',()=>{

    it("Verify  Analystics  sidebar navigation and  elements", () => {
      
        cy.visit("https://the-republic-six.vercel.app/");
        cy.get(":nth-child(3) > a").click({force:true});
        cy.get(".text-sm > .flex > :nth-child(1) > .w-full")
          .should("be.visible")
          .and("exist");
        cy.get(".text-sm > .flex > :nth-child(1) > .w-full").should(
          "have.attr", 
          "aria-current"
        );
        cy.get(".mb-2").should("be.visible").and("exist");
        cy.get(".mb-2").contains("Comprehensive Report on Issues.");
        cy.get(
          ":nth-child(1) > .w-full > .card > .card-body > .echart > div > canvas"
        )
          .should("be.visible")
          .and("exist");
           cy.get(
          ":nth-child(2) > .w-full > .card > .card-body > .echart > div > canvas"
           )
          .should("exist")
          .scrollIntoView();
        //cy.get('[style="position: relative; width: 943px; height: 400px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"] > canvas').should('be.visible').and('exist');
        //cy.get('[style="position: relative; width: 943px; height: 400px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"] > canvas').should('exist').scrollIntoView();
        cy.get(
          ":nth-child(3) > .w-full > .card > .card-body > .echart > div > canvas"
        )
          .should("be.visible")
          .and("exist");
        cy.get(
          ":nth-child(3) > .w-full > .card > .card-body > .echart > div > canvas"
        )
          .should("exist")
          .scrollIntoView();
        // cy.get(':nth-child(4) > .w-full > .card > .card-body > .echart > [style="position: relative; width: 943px; height: 400px; padding: 0px; margin: 0px; border-width: 0px;"] > canvas').should('be.visible').and('exist');
        // cy.get('[style="position: relative; width: 943px; height: 400px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"] > canvas').should('exist').scrollIntoView();
        // cy.get('[style="position: relative; width: 943px; height: 600px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"] > canvas').should('be.visible').and('exist');
        // cy.get('[style="position: relative; width: 943px; height: 600px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"] > canvas').should('exist').scrollIntoView();
        cy.get(".relative > .absolute > .p-2").dblclick();
        cy.get(".relative > .absolute > .p-2").should("be.visible").and("exist");
        cy.get(".justify-end > .flex").click();
        cy.get(".justify-end > .flex").should("exist").and("be.visible");
        cy.get(".justify-end > .flex").contains("Filter Charts");
        cy.get(".absolute > .flex-col > :nth-child(1)").click();
        cy.get(".absolute > .flex-col > :nth-child(1)")
          .should("exist")
          .and("be.visible");
        cy.get(".absolute > .flex-col > :nth-child(1)").contains(
          "Transition Of Parliament"
        );
        cy.get(".absolute > .flex-col > :nth-child(2)").click();
        cy.get(".absolute > .flex-col > :nth-child(2)")
          .should("exist")
          .and("be.visible");
        cy.get(".absolute > .flex-col > :nth-child(2)").contains("Bar Chart");
        cy.get(".absolute > .flex-col > :nth-child(3)").click();
        cy.get(".absolute > .flex-col > :nth-child(3)")
          .should("exist")
          .and("be.visible");
        cy.get(".absolute > .flex-col > :nth-child(3)").contains("Radar Chart");
        cy.get(".flex-col > :nth-child(4)").click();
        cy.get(".flex-col > :nth-child(4)").should("exist").and("be.visible");
        cy.get(".flex-col > :nth-child(4)").contains("Line Chart");
        cy.get(".flex-col > :nth-child(5)").click({ force: true });
        cy.get(".flex-col > :nth-child(5)").should("exist").and("be.visible");
        cy.get(".flex-col > :nth-child(5)").contains("Donut Chart");
        cy.get(".absolute > .flex-col > .bg-green-500").click({ force: true });
        //cy.get('.absolute > .flex-col > .bg-green-500').should('exist').and('be.visible');
        // cy.get('.absolute > .flex-col > .bg-green-500',{timeout:10000}).contains('Stacked Line Chart');
        cy.get(".Custom_sidebarLinks__E_21W > :nth-child(1) > span").click({force:true});
        cy.get(".Custom_sidebarLinks__E_21W > :nth-child(5)").should("exist");
        cy.get(".Custom_sidebarLinks__E_21W > :nth-child(5)").contains("About");
    
      });

});
