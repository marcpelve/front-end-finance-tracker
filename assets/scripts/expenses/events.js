'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onIndexExpenses = (event, time) => {
  if (!time) time = 0
  if (!(event === null)) event.preventDefault()

  setTimeout(function () {
    api.indexExpenses()
      .then(ui.indexExpensesSuccess)
      .catch(ui.failure)
  }, time)
}

const onNewExpense = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.newExpense(formData)
    .then(ui.newExpenseSuccess)
    .catch(ui.failure)
}

module.exports = {
  onIndexExpenses,
  onNewExpense
}
