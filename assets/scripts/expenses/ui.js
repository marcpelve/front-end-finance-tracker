'use strict'

const messages = require('./../auth/messages')
const store = require('./../store')
const indexExpensesTemplate = require('./../templates/expense-listing.handlebars')

const indexExpensesSuccess = data => {
  messages.changeMessage(`Welcome ${store.user.email}`, 'alert alert-primary')

  const indexExpensesHtml = indexExpensesTemplate({ expenses: data.expenses })
  $('.transaction-content').html(indexExpensesHtml)

  $('form').trigger('reset')
}

const newExpenseSuccess = data => {
  messages.changeMessage('Successfully created new expense.', 'alert alert-primary')

  $('form').trigger('reset')
}

const failure = data => {
  messages.changeMessage('There was an error with your action.', 'alert alert-danger')

  $('form').trigger('reset')
}

module.exports = {
  indexExpensesSuccess,
  newExpenseSuccess,
  failure
}
