'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const messages = require('./../auth/messages')

const onIndexExpenses = event => {
  if (event !== null) {
    messages.changeMessage('Successfully retrieved transactions', 'alert alert-primary')
  }

  api.indexExpenses()
    .then(ui.indexExpensesSuccess)
    .catch(ui.failure)
}

const onNewExpense = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  if (typeof store.updateExpense !== 'undefined') {
    onUpdateExpense(formData)
  } else {
    api.newExpense(formData)
      .then(ui.newExpenseSuccess)
      .then(function () {
        onIndexExpenses(null)
      })
      .catch(ui.failure)
  }
}

const onUpdateStore = event => {
  event.preventDefault()

  store.expenseId = $(event.target).closest('section').data('id')
  api.showExpense(store.expenseId)
    .then(ui.updateStoreSuccess)
    .catch(ui.failure)
}

const onUpdateExpense = data => {
  api.updateExpense(data, store.expenseId)
    .then(ui.updateExpenseSuccess)
    .then(function () {
      onIndexExpenses(null)
    })
    .catch(ui.failure)
}

const onDeleteExpense = event => {
  event.preventDefault()

  const expenseId = $(event.target).closest('section').data('id')

  api.deleteExpense(expenseId)
    .then(ui.deleteExpenseSuccess)
    .then(function () {
      onIndexExpenses(null)
    })
    .catch(ui.failure)
}

const onClearContent = () => {
  $('.transaction-content').empty()
  $('#transaction-total').empty()
}

module.exports = {
  onIndexExpenses,
  onNewExpense,
  onUpdateExpense,
  onUpdateStore,
  onDeleteExpense,
  onClearContent
}
