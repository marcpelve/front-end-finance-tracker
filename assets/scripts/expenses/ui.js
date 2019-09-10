'use strict'

const messages = require('./../auth/messages')

const newExpenseSuccess = data => {
  messages.changeMessage('Successfully created new expense.', 'alert alert-primary')

  $('form').trigger('reset')
}

module.exports = {
  newExpenseSuccess
}
