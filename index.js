// Your code here
function saturdayFun(action = 'roller-skate') {
  return 'This Saturday, I want to ' + action + '!'
}
function mondayWork(action = 'go to the office') {
  return 'This Monday, I will ' + action + '.'
}
function wrapAdjective(flair = '*') {
  return function(param = 'special') {
    return 'You are ' + flair + param + flair + '!'
  }
}

const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
}

function actionApplyer(int, functions) {
  if (!functions) {
    return int
  }
  let num = int
  functions.forEach((f) => {
    num = f(num)
  })
  return num
}
