class dashboardPage {

    /// Add
    userCreateBtn = ':nth-child(4) > .btn'
    userFieldName = '#Name'
    userFieldCompany = '#Company'
    userFieldAddress = '#Address'
    userFieldCity = '#City'
    userFieldPhone = '#Phone'
    userFieldEmail = '#Email'
    userSubmitBtn = '.col-md-offset-2 > .btn'
    validateTableName = '.table-primary > :nth-child(1)'

    /// Details
    usserSearchField = '#searching'
    userSearchBtn = '.container > div > form > .btn'
    userDetailBtn = '.btn-outline-info'
    validateDetailText = 'h2'

    /// Edit
    userEditBtn = '.btn-outline-primary'
    userEditSaveBtn = '.col-md-offset-2 > .btn'
    validateEdit = 'tbody > :nth-child(2) > :nth-child(3)'

    /// Delete
    userDeleteBtn = '.btn-outline-danger'
    validateDelete = 'td'

}
export default dashboardPage