'use strict'

const config = require('./../config')
const store = require('./../store')

const indexExpenses = data => {
  return $.ajax({
    url: config.apiUrl + '/expenses',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showExpense = expenseId => {
  return $.ajax({
    url: config.apiUrl + '/expenses/' + expenseId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newExpense = data => {
  return $.ajax({
    url: config.apiUrl + '/expenses',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateExpense = (data, expenseId) => {
  return $.ajax({
    url: config.apiUrl + '/expenses/' + expenseId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteExpense = expenseId => {
  return $.ajax({
    url: config.apiUrl + '/expenses/' + expenseId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexExpenses,
  showExpense,
  newExpense,
  updateExpense,
  deleteExpense
}
