

describe('Describe the filter function',()=>{

    it('Test the filter functionality', ()=> {  

        cy.visit("https://the-republic-six.vercel.app/");
        cy.get('.p-2 > .relative > .flex').click();
        cy.get(':nth-child(2) > a').click({force:true});
        cy.get('.justify-end > .inline-flex').click();
        cy.get('[aria-controls="radix-:r2:"]').click();
        cy.contains('Oldest').click();
        cy.wait(2000);

        cy.get('[aria-controls="radix-:r2:"]').click();
        cy.contains('Newest').click();
        cy.wait(2000);

        cy.get('[aria-controls="radix-:r2:"]').click();
        cy.contains('Most Comments').click();

        cy.get('[aria-controls="radix-:r3:"]').click();
        cy.contains('Water').click();

        cy.wait(2000);
  
        cy.get('[aria-controls="radix-:r3:"]').click();
        cy.contains('Public Safety').click();

        cy.wait(2000);
  
        cy.get('[aria-controls="radix-:r3:"]').click();
        cy.contains('Transportation').click();

        cy.wait(2000);

        cy.get('[aria-controls="radix-:r4:"]').click();
        cy.get('[aria-controls="radix-:r4:"]').type('Edenvale,Gauteng').click();//Doesn't want to select
        cy.get('.p-4 > .justify-center').click({force:true});

    });   
});