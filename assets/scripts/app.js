'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const expenseEvents = require('./expenses/events.js')

$(() => {
  $('.toggle-on-sign-in').hide()
  $('.toggle-off-sign-in').show()

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password-modal').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#modal-close').on('click', authEvents.onClose)
  $('#modal-close-x').on('click', authEvents.onClose)

  $('#refresh-index').on('click', expenseEvents.onIndexExpenses)
  $('#add-transaction-modal').on('submit', expenseEvents.onNewExpense)
})
