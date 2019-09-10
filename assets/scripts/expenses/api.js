'use strict'

const config = require('./../config')
const store = require('./../store')

const newExpense = (data) => {
  return $.ajax({
    url: config.apiUrl + '/expenses',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  newExpense
}
