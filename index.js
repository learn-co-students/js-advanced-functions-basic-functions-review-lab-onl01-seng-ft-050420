// Your code here
function saturdayFun(activity="roller-skate") {
   return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(wrapper="*") {
    return function(adjectiv ="special") {
        return `You are ${wrapper}${adjectiv}${wrapper}!`
    };
  
};

let Calculator = {
    add: function add(num1, num2){return num1+num2 },
    subtract: function subtract(num1, num2) {return num1-num2},
    multiply: function multiply(num1, num2) {return num1*num2},
    divide: function divide(num1, num2) {return num1/num2}
};

function actionApplyer(integer, functionsArr) {
    if (functionsArr.length === 0){
        return integer  
    }
    else 
    return functionsArr.reduce(
        (total, currentFunction) => currentFunction(total), integer
      )
    
};
