'use strict'

const config = require('./../config')
const store = require('./../store')

const newExpense = (data) => {
  return $.ajax({
    url: config.apiUrl + '/expenses',
    method: 'POST',
    headers: {
      Authorization: 'Token token= ' + store.user.token
    },
    data: {
      amount: data[0],
      currency: data[1],
      description: data[2],
      transaction_date: data[3]
    }
  })
}

module.exports = {
  newExpense
}
