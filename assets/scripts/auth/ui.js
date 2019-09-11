'use strict'

const store = require('./../store')
const messages = require('./messages')
const expenseEvents = require('./../expenses/events')

const signUpSuccess = (data) => {
  messages.changeMessage('Successfully signed up.', 'alert alert-primary')

  $('form').trigger('reset')
}

const signInSuccess = data => {
  store.user = data.user
  messages.changeMessage('Successfully signed in.', 'alert alert-primary')

  $('#signed-in-user').text('User: ' + store.user.email)
  $('.toggle-on-sign-in').show()
  $('.toggle-off-sign-in').hide()

  $('form').trigger('reset')

  expenseEvents.onIndexExpenses(null)
}

const changePasswordSuccess = data => {
  messages.changeMessage('Successfully changed password', 'alert alert-primary')

  $('#modal-message').text('Successfully changed password')
  $('#modal-message').show().delay(3000).fadeOut()

  $('form').trigger('reset')
}

const changePasswordFailure = data => {
  messages.changeMessage('Failure to change password', 'alert alert-danger')

  $('#modal-message').text('Failure to change password')
  $('#modal-message').show().delay(3000).fadeOut()

  $('form').trigger('reset')
}

const signOutSuccess = data => {
  store.user = null

  messages.changeMessage('Successfully signed out.', 'alert alert-primary')

  $('#signed-in-user').text('')
  $('#data-message').text('')
  $('.toggle-on-sign-in').hide()
  $('.toggle-on-new-game').hide()
  $('.toggle-off-sign-in').show()

  $('form').trigger('reset')
}

const failure = data => {
  messages.changeMessage('Operation error', 'alert alert-danger')

  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  failure
}
