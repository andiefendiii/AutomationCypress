import baseIteraPage from "../../../support/pageObject/itera/baseItera"
import registerPage from "../../../support/pageObject/itera/auth/registerPage"
const baseIteraInput = require("../../../fixtures/itera/baseItera.json")
const registerInput = require("../../../fixtures/itera/auth/register.json")

describe('register scenario ', () => {
  const RegisterPage = new registerPage()
  const BaseIteraPage = new baseIteraPage

  beforeEach(() => {
    cy.visit('/')
    cy.get(RegisterPage.registerTab).click()
  })


  it('Register Success ', () => {
    cy.url().should('include', registerInput.validateRegisterUrl)
    cy.get(RegisterPage.registerFirstname).type(registerInput.firstName)
    cy.get(RegisterPage.registerSurname).type(registerInput.surName)
    cy.get(RegisterPage.registerEpost).type(registerInput.epost)
    cy.get(RegisterPage.registerMobile).type(registerInput.mobile)
    cy.get(BaseIteraPage.username).type(`${Date.now()}@yopmail.com`)
    cy.get(BaseIteraPage.password).type(baseIteraInput.password)
    cy.get(RegisterPage.registerConfPassword).type(registerInput.confPassword)
    cy.get(RegisterPage.registerSubmitBtn).click()
    cy.get(RegisterPage.registerSuccesMessage).should('contain.text', registerInput.validateRegisterSuccess)
  })

  it('Register Existing ', () => {
    cy.url().should('include', registerInput.validateRegisterUrl)
    cy.get(RegisterPage.registerFirstname).type(registerInput.firstName)
    cy.get(RegisterPage.registerSurname).type(registerInput.surName)
    cy.get(RegisterPage.registerEpost).type(registerInput.epost)
    cy.get(RegisterPage.registerMobile).type(registerInput.mobile)
    cy.get(BaseIteraPage.username).type(baseIteraInput.emailExist)
    cy.get(BaseIteraPage.password).type(baseIteraInput.password)
    cy.get(RegisterPage.registerConfPassword).type(registerInput.confPassword)
    cy.get(RegisterPage.registerSubmitBtn).click()
    cy.get(RegisterPage.registerErrorMessageExisting).should('contain.text', registerInput.validateRegisterExisting)
  })

  it('Register Failed Empty Firstname', () => {
    cy.url().should('include', registerInput.validateRegisterUrl)
    cy.get(RegisterPage.registerSurname).type(registerInput.surName)
    cy.get(RegisterPage.registerEpost).type(registerInput.epost)
    cy.get(RegisterPage.registerMobile).type(registerInput.mobile)
    cy.get(BaseIteraPage.username).type(`${Date.now()}@yopmail.com`)
    cy.get(BaseIteraPage.password).type(baseIteraInput.password)
    cy.get(RegisterPage.registerConfPassword).type(registerInput.confPassword)
    cy.get(RegisterPage.registerSubmitBtn).click()
    cy.get(RegisterPage.registerErrorMessageFirstname).should('contain.text', registerInput.validateRegisterEmptyFirstname)
  })

  it('Register Failed Empty Surname ', () => {
    cy.url().should('include', registerInput.validateRegisterUrl)
    cy.get(RegisterPage.registerFirstname).type(registerInput.firstName)
    cy.get(RegisterPage.registerEpost).type(registerInput.epost)
    cy.get(RegisterPage.registerMobile).type(registerInput.mobile)
    cy.get(BaseIteraPage.username).type(`${Date.now()}@yopmail.com`)
    cy.get(BaseIteraPage.password).type(baseIteraInput.password)
    cy.get(RegisterPage.registerConfPassword).type(registerInput.confPassword)
    cy.get(RegisterPage.registerSubmitBtn).click()
    cy.get(RegisterPage.registerErrorMessageSurname).should('contain.text', registerInput.validateRegisterEmptySurname)
  })

  it('Register Failed Empty Username ', () => {
    cy.url().should('include', registerInput.validateRegisterUrl)
    cy.get(RegisterPage.registerFirstname).type(registerInput.firstName)
    cy.get(RegisterPage.registerSurname).type(registerInput.surName)
    cy.get(RegisterPage.registerEpost).type(registerInput.epost)
    cy.get(RegisterPage.registerMobile).type(registerInput.mobile)
    cy.get(BaseIteraPage.password).type(baseIteraInput.password)
    cy.get(RegisterPage .registerConfPassword).type(registerInput.confPassword)
    cy.get(RegisterPage.registerSubmitBtn).click()
    cy.get(RegisterPage.registerErrorMessageUsername).should('contain.text', registerInput.validateRegisterEmptyUsername)
  })


})