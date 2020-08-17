// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(work = "go to the office") { return `This Monday, I will ${work}.`}

function wrapAdjective(flair = "*" ) {
    return function(par = "special" ) {
        return `You are ${flair}${par}${flair}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b
    }, 
    subtract: function(a, b) {
        return a - b 
    }, 
    multiply: function(a, b) {
        return a * b
    }, 
    divide: function(a, b) {
        return a / b 
    }
}

const actionApplyer = function(startingNum, arrayOfFunctions) {
    let result = startingNum
    for (let i = 0; i < arrayOfFunctions.length; i++ ) {
        result = arrayOfFunctions[i](result)
    }
    return result 
}

let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
arrayOfTransforms = [
  function(a){ return a * 2 },
  function(a){ return a + 1000},
  function(a){ return a % 7 }
]