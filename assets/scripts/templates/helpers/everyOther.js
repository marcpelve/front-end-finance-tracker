'use strict'

const everyOther = (index, amount, scope) => {
  if (++index % amount) {
    return scope.inverse(this)
  } else {
    return scope.fn(this)
  }
}

module.exports = everyOther
