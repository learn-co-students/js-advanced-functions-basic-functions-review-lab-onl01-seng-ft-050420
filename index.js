// Your code here
const Calculator = {
  add: (n, x) => {return n + x},
  subtract: (a,b) => a-b,
  multiply: (a,b) => a*b,
  divide: (a,b) => a/b
}

const mondayWork = (activity = 'go to the office') => {
  return `This Monday, I will ${activity}.`
}

function actionApplyer(int, arr){
  
  arr.forEach((fn)=>{
    int = fn(int)
  })
  return int
}

function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

function wrapAdjective(string = '*'){
  return function(wish = 'special'){
    return `You are ${string}${wish}${string}!`
  }
}
