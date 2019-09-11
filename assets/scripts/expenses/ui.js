'use strict'

const messages = require('./../auth/messages')
const store = require('./../store')
const indexExpensesTemplate = require('./../templates/expense-listing.handlebars')

const indexExpensesSuccess = data => {
  const indexExpensesHtml = indexExpensesTemplate({ expenses: data.expenses })
  $('.transaction-content').html(indexExpensesHtml)

  const transactionsList = data.expenses

  let total = 0
  for (const transaction in transactionsList) {
    total += transactionsList[transaction].amount
  }

  $('#transaction-total').text('$' + total)

  $('form').trigger('reset')
}

const newExpenseSuccess = data => {
  messages.changeMessage('Successfully created transcation.', 'alert alert-primary')

  $('.modal-message').text('Successfully created transaction')
  $('.modal-message').show().delay(3000).fadeOut()

  $('form').trigger('reset')
}

const updateStoreSuccess = data => {
  store.updateExpense = data.expense

  $("input[name*='expense[amount]']").val(store.updateExpense.amount)
  $("input[name*='expense[currency]']").val(store.updateExpense.currency)
  $("input[name*='expense[description]']").val(store.updateExpense.description)
  $("input[name*='expense[transaction_date]']").val(store.updateExpense.transaction_date)
}

const updateExpenseSuccess = data => {
  messages.changeMessage('Successfully updated transaction', 'alert alert-primary')
  $('.modal-message').text('Successfully updated transaction')
  $('.modal-message').show().delay(3000).fadeOut()

  store.updateExpense = undefined
  $('form').trigger('reset')
}

const deleteExpenseSuccess = data => {
  messages.changeMessage('Successfully deleted transaction', 'alert alert-primary')

  $('form').trigger('reset')
}

const failure = data => {
  messages.changeMessage('There was an error with your action.', 'alert alert-danger')
  $('.modal-message').text('There was an error with your action')
  $('.modal-message').show().delay(3000).fadeOut()

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
