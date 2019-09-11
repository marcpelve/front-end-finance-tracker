'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  const signInUp = () => {
    api.signIn(formData)
      .then(ui.signInSuccess)
      .catch(ui.failure)
  }

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .then(setTimeout(signInUp, 500))
    .catch(ui.failure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onClose = event => {
  if (typeof store.updateExpense !== 'undefined') {
    store.updateExpense = undefined
  }
  $('form').trigger('reset')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onClose
}
