// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(special="*") {
    return function (param="special"){
        return `You are ${special}${param}${special}!`
    }
}

let Calculator = {
    add: function add(a, b) {
        return a + b;
    },
    subtract: function subtract(a, b) {
        return a - b;
    },
    multiply: function multiply(a, b) {
        return a * b;
    },
    divide: function divide(a, b) {
        return a / b;
    }
}

function actionApplyer(int, ary) {
    if (ary.length > 0) {
        const reducer = (acc, cur) => cur(acc)
        return ary.reduce(reducer, int);
    } else {
        return int;
    }
}