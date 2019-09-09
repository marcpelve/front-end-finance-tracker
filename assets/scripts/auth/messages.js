'use strict'

const changeMessage = (message, classOperation) => {
  $('#message').text(message)
  $('#message').removeClass()
  $('#message').addClass(classOperation)
}

module.exports = {
  changeMessage
}
