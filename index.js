function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = `go to the office`) {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*') {
  return function (adjective = 'special') {
    return `You are ${flair}${adjective}${flair}!`
  }
}

const Calculator = {
  add: function (x, y) {
    return x + y
  },
  subtract: function (x, y) {
    return x - y
  },
  multiply: function (x, y) {
    return x * y
  },
  divide: function (x, y) {
    return x / y
  },
}

function actionApplyer(startingNumber, functions) {
  if (functions === undefined || functions.length === 0) {
    return startingNumber
  } else {
    return functions.reduce((total, func) => func(total), startingNumber) // coooooool
  }
}
