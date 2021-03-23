/// <reference types="cypress" />


describe('Assignment script ', ()=>{
    
    it('visit target page',()=>{
        
        cy.visit('https://www.aceinvoice.com/')
        
        // click on signup
        cy.get('a:contains("Sign up for FREE")').should('be.visible').click()
           
    })

    it('Fill dynamic email',()=>{
        
        const dateTimeArray = Cypress.moment().format("MMMM DD YYYY, HH:mm").split(' ');
        let dateArray = dateTimeArray[1].toString()+'-'+dateTimeArray[2].split(',')[0].toString()
        let timeNow = dateTimeArray[3].split(':')


        // put the dynamic email 
        cy.get('input.form-control').type(`gourav741-${dateTimeArray[0].toLowerCase()}-${dateArray}-${timeNow[0]}${timeNow[1]}@example.com`)

        // click button
        cy.get('input.btn').contains('Get Started').click()
    })

    it('set password',()=>{
        // type password
        cy.get('input[type="password"]').type(`welcome1234!`)

        //click button to set things up
        cy.get('input[type="submit"]').contains('Continue').click()
    })

    it('filling up the basic detail form',()=>{

        // type name
        cy.get('[data-test-id="introduction-first-name"]').type('Oliver')
        cy.get('[data-test-id="introduction-last-name"]').type('Smith')
        
        //select from dropdown
        cy.get('[data-test-id="introduction-timezone"]').select("New Delhi")
        
        //select radio and checkboxes
        cy.get('.p-2').contains('DD/MM/YYYY').click()
        cy.get('[data-test-id="introduction-terms-service"]').click()
        cy.get('[data-test-id="introduction-marketing-email-consent"]').click()

        // click continue btn
        cy.get('[data-test-id="introduction-submit"]').contains('Continue').click()
    })

    it('putting company name',()=>{

        //filling company name gourav741 Private Limited
        cy.get('[data-test-id="organization-name"]').type('gourav741 Private Limited')
        
        // click Continue button
        cy.get('[data-test-id="organization-submit"]').contains('Continue').click() 

    })

    it('skip the step & assert congratulation',()=>{
            
        // click skip
        cy.get('[data-test-id="client-form-skip"]').contains('Skip this step').click()


        //assert 'Congratulations, you are all set'
        cy.get('h4.pl-4').contains("Congratulations, you're all set!")


        // click Continue
        cy.get('.btn').contains('Continue').click()

    })
        
        
    it('Assert text & get to Clients tab',()=>{

            
            // .should('contain','Verification email sent to')
            cy.get("html").should("contain","Verification email sent to")

            // click on 'Clients' tab           
            cy.get('[data-test-id="header-clients"]').should('be.visible').click()

            // click on 'add a new client'
            cy.get('[data-test-id="client-add-new"]').contains('Add a new client').click()
            
    })
    
    it('put client company name',()=>{
        // put company name in input field
        cy.get('[data-test-id="client-name"]').type('Trix Inc')
            
            
        // click submit
        cy.get('input[type="submit"]').contains('Submit').click()
    })
        
    it('put project details',()=>{

        //assert 'Add New Project'
        cy.get('[data-test-id="project-add-new"]').should('have.text','Add New Project')
        
        
        //put project name 'Trix Web Development'
        cy.get('[data-test-id="project-name"]').type('Trix Web Development')
        
        
        //select hourly rate
        cy.get('[data-test-id="project-billing-method"]').select("hourly_project_rate")
        
        
        // hourly rate put 20 project-rate
        cy.get('[data-test-id="project-rate"]',{delay:300}).type('20')

        
        // click Submit button 
        cy.get('div.form-actions > [data-test-id="project-save"]',{delay:300}).contains('Submit').click({force:true})
    })
    
    it('Check multiple assertions',()=>{
        
        // assert that page has:
        
        // Trix Web Development
        cy.get("html").should("contain","Trix Web Development")
  
        // Hourly Project Rate
        cy.get("html").should("contain","Hourly Project Rate")


        // No rounding 
        cy.get("html").should("contain","No rounding")
        
        
        // Oliver Smith
        cy.get("html").should("contain","Oliver Smith")

    })

})
    

