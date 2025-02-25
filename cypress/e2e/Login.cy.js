
describe('Test User Login and Navigation Tests', ()=> {

      it('Create Account/Sign Up for New User', ()=> {

        cy.visit("https://the-republic-six.vercel.app/");
        cy.get('.justify-between > .p-2').click();
        cy.get(':nth-child(4) > a').click();
        cy.get(':nth-child(2) > .text-2xl').should('have.text','Login');
        cy.get('.mt-4 > .text-green-700').click({force:true});
        cy.get('#fullname').type('Lehlohonolo');
        cy.get('#email').type('Lehlohonolo.best@gmail.com');
        cy.get('#username').type('Lehlohonolo96');
        cy.get('#password').type('68684$aB');
        cy.get('.inline-flex').click();
        cy.wait(1000);
        cy.get('.mt-4 > .text-green-700').click({force:true});
        //If the user email exist the alert descrittion doesn't specify

      });

      it('Verify login page',()=>{

        cy.visit("https://the-republic-six.vercel.app/");
        cy.get('.justify-between > .p-2').click();
        cy.get(':nth-child(4) > a').click();
        cy.get(':nth-child(2) > .text-2xl').should('have.text','Login');
        cy.get('#email').clear().type('Lehlohonolo.best@gmail.com');
        cy.get('#password').clear().type('68684$aB');
        cy.get('.inline-flex').click();
        
      });


      it('Login in using a Google account', ()=> {

        cy.visit("https://the-republic-six.vercel.app/");
        cy.get('.justify-between > .p-2').click();
        cy.get(':nth-child(4) > a').click();
        cy.get(':nth-child(2) > .text-2xl').should('have.text','Login');
        cy.get('.mt-4 > .text-green-700').click({force:true});
        cy.get('.text-gray-700').click();
        //Issue:The google account doesn't want to navigate  when clicked to next page returns 403
  
      });

     
      it('Login logout account ', ()=>{

        cy.visit("https://the-republic-six.vercel.app/");
        cy.get('.justify-between > .p-2').click();
        cy.get(':nth-child(4) > a').click();
        cy.get(':nth-child(2) > .text-2xl').should('have.text','Login');
        cy.get('#email').clear().type('Lehlohonolo.best@gmail.com');
        cy.get('#password').clear().type('68684$aB');
        cy.get('.inline-flex').click();
        cy.get('.p-2 > .relative > .aspect-square').click({force:true});
        cy.get('.Custom_userAccount__OnDqA').click();
         //cy.get('.Custom_userAccount__OnDqA').dblclick({force:true});
         cy.get('.Custom_logoutOverlay__l9ytL > .Custom_sidebarLinks__E_21W').dblclick({force:true});
        
      });

});