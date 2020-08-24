// Your code here

function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = '*'){
  return  function(arg){
    return `You are ${flair}${arg}${flair}!`
  }
}

let Calculator = {
  add: function(num1, num2){return (num1 + num2)},
  subtract: function(num1, num2){return (num1 - num2)},
  multiply: function(num1, num2){return (num1 * num2)},
  divide: function(num1, num2){return (num1 / num2)}
};

function actionApplyer(int, arr){
  if (arr.length === 0){
    return int
  } 
  else{
    for(const func of arr){
      int = func(int)
    }
  return int;
  }
}