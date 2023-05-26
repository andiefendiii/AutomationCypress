import baseIteraPage from "../../../support/pageObject/itera/baseItera"
import loginPage from "../../../support/pageObject/itera/auth/loginPage"
import dashboardPage from "../../../support/pageObject/itera/dash/dashboardPage"
const baseIteraInput = require("../../../fixtures/itera/baseItera.json")
const loginPageInput = require("../../../fixtures/itera/auth/login.json")
const dashboardPageInput = require("../../../fixtures/itera/dash/dashboard.json")

describe('user scenario', () => {
    const BaseIteraPage = new baseIteraPage
    const LoginPage = new loginPage
    const DashboardPage = new dashboardPage
  
    beforeEach(() => {
      cy.visit('/')          //// setup env => cy.visit(Cypress('urlStaging')) <=  look in cypress.config.js ////
      cy.get(LoginPage.loginTab).should('be.visible').click()
      cy.url().should('include', loginPageInput.validateUrlLogoutSuccess)
      cy.get(BaseIteraPage.username).type(baseIteraInput.emailExist)
      cy.get(BaseIteraPage.password).type(baseIteraInput.password)
      cy.get(LoginPage.loginBtn).click()
      cy.url().should('include', loginPageInput.validateUrlLoginSuccess)
    })
  
    it('Create User', () => {
      cy.get(DashboardPage.userCreateBtn).click()
      cy.get(DashboardPage.userFieldName).type(dashboardPageInput.name)
      cy.get(DashboardPage.userFieldCompany).type(dashboardPageInput.company)
      cy.get(DashboardPage.userFieldAddress).type(dashboardPageInput.address)
      cy.get(DashboardPage.userFieldCity).type(dashboardPageInput.city)
      cy.get(DashboardPage.userFieldPhone).type(dashboardPageInput.phone)
      cy.get(DashboardPage.userFieldEmail).type(dashboardPageInput.email)
      cy.get(DashboardPage.userSubmitBtn).click()
      cy.get(DashboardPage.validateTableName).should('contain.text', dashboardPageInput.validateTableName)
    })

    it('Detail User', () => {
        cy.get(DashboardPage.usserSearchField).type(dashboardPageInput.name)
        cy.get(DashboardPage.userSearchBtn).click()
        cy.get(DashboardPage.userDetailBtn).click()
        cy.get(DashboardPage.validateDetailText).should('contain.text', dashboardPageInput.validateDetailText)
      })

    it('Edit User', () => {
        cy.get(DashboardPage.usserSearchField).type(dashboardPageInput.name)
        cy.get(DashboardPage.userSearchBtn).click()
        cy.get(DashboardPage.userEditBtn).click()
        cy.get(DashboardPage.userFieldAddress).clear()
        cy.get(DashboardPage.userFieldAddress).type(dashboardPageInput.addressEdit)
        cy.get(DashboardPage.userEditSaveBtn).click()
        cy.get(DashboardPage.usserSearchField).type(dashboardPageInput.name)
        cy.get(DashboardPage.userSearchBtn).click()
        cy.get(DashboardPage.validateEdit).should('contain.text', dashboardPageInput.addressEdit)
      })  
    
    it('Delete User', () => {
      cy.get(DashboardPage.usserSearchField).type(dashboardPageInput.name)
      cy.get(DashboardPage.userSearchBtn).click()
        cy.get(DashboardPage.userDeleteBtn).click()
        cy.get(DashboardPage.userDeleteBtn).click()
        cy.get(DashboardPage.usserSearchField).type(dashboardPageInput.name)
        cy.get(DashboardPage.userSearchBtn).click()
        cy.get(DashboardPage.validateDelete).should('contain.text', dashboardPageInput.validateDelete)
        
      })  
    
  
  })