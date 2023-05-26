import baseIteraPage from "../../../support/pageObject/itera/baseItera"
import loginPage from "../../../support/pageObject/itera/auth/loginPage"
const baseIteraInput = require("../../../fixtures/itera/baseItera.json")
const loginPageInput = require("../../../fixtures/itera/auth/login.json")

describe('login scenario', () => {
  const BaseIteraPage = new baseIteraPage
  const LoginPage = new loginPage

  beforeEach(() => {
    cy.visit('/')
    cy.get(LoginPage.loginTab).should('be.visible').click()
    cy.url().should('include', loginPageInput.validateUrlLogoutSuccess)
  })

  it('Login Success & Logout', () => {
    cy.get(BaseIteraPage.username).type(baseIteraInput.emailExist)
    cy.get(BaseIteraPage.password).type(baseIteraInput.password)
    cy.get(LoginPage.loginBtn).click()
    cy.url().should('include', loginPageInput.validateUrlLoginSuccess)
    cy.get(LoginPage.logoutTab).click()
    cy.url().should('include', loginPageInput.validateUrlLogoutSuccess)
    cy.get(LoginPage.validateLogoutSuccess).should('contain.text', loginPageInput.validateLogoutSuccess)
  })

  it('Login Failed Empty Username', () => {
    cy.get(BaseIteraPage.password).type(baseIteraInput.password)
    cy.get(LoginPage.loginBtn).click()
    cy.get(LoginPage.loginErrorMessage).should('contain.text', loginPageInput.validateLoginErrorMessage)
  })

  it('Login Failed Empty Password', () => {
    cy.get(BaseIteraPage.username).type(baseIteraInput.emailExist)
    cy.get(LoginPage.loginBtn).click()
    cy.get(LoginPage.loginErrorMessage).should('contain.text', loginPageInput.validateLoginErrorMessage)
  })

})