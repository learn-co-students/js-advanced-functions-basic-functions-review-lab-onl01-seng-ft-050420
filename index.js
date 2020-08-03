// Your code here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = '*') {
  return function(adjective = 'special') {
    return `You are ${visualFlair}${adjective}${visualFlair}!`;
  }
}

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function(num1, num2) {
    return num1 / num2;
  }
}

function actionApplyer(int, arr) {
  if (arr.length === 0) {
    return int;
  } else {
    return arr.reduce((previousResult, fn) => fn(previousResult), int);
  }
}