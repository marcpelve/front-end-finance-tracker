'use strict'

const messages = require('./../auth/messages')
const store = require('./../store')
const indexExpensesTemplate = require('./../templates/expense-listing.handlebars')

const indexExpensesSuccess = data => {
  const indexExpensesHtml = indexExpensesTemplate({ expenses: data.expenses })
  $('.transaction-content').html(indexExpensesHtml)

  $('form').trigger('reset')
}

const newExpenseSuccess = data => {
  messages.changeMessage('Successfully created transcation.', 'alert alert-primary')

  $('form').trigger('reset')
}

const updateStoreSuccess = data => {
  store.updateExpense = data.expense
}

const updateExpenseSuccess = data => {
  messages.changeMessage('Successfully updated transaction', 'alert alert-primary')

  store.updateExpense = undefined
  $('form').trigger('reset')
}

const deleteExpenseSuccess = data => {
  messages.changeMessage('Successfully deleted transaction', 'alert alert-primary')

  $('form').trigger('reset')
}

const failure = data => {
  messages.changeMessage('There was an error with your action.', 'alert alert-danger')

  $('form').trigger('reset')
}

module.exports = {
  indexExpensesSuccess,
  newExpenseSuccess,
  updateStoreSuccess,
  updateExpenseSuccess,
  deleteExpenseSuccess,
  failure
}
