function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = "*"){
    return function inner(parameter = "special"){
        return `You are ${string}${parameter}${string}!`
}
}
wrapAdjective("a dedicated programmer")("||")
let encouragingPromptFunction = wrapAdjective("!!!")


//encouragingPromptFunction("dedicated", "||")
// function demoChain(name) {
//     let part1 = 'hi'
//     return function() {
//       let part2 = 'there'
//       return function() { // Innermost
//         console.log(`${part1.toUpperCase()} ${part2} ${name}`);
//       }
//     }
//   }

const Calculator = {
    add: function add(a,b){
      return a + b
    },
    subtract: function subtract(a,b){
      return a - b
    },
    multiply: function multiply(a,b){
        return a * b
      },
    divide: function divide(a,b){
        return a / b
      }
  };

  function actionApplyer(starting, array){ 
      console.log(array)
  //if (array = []){
    if (array.length <= 0){
    return starting;
  } else{
    array.forEach((elementFn)=> {
        starting = elementFn(starting) // new number
    });return starting
} 
} 
//bracket pair colorize 2
  
