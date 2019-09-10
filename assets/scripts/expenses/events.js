'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onNewExpense = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.newExpense(formData)
    .then(ui.newExpenseSuccess)
    .then(ui.failure)
}

module.exports = {
  onNewExpense
}
