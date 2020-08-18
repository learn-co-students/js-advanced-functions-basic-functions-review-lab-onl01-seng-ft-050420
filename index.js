// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(ad = "*") {
    return function (advice = "special") {
        return `You are ${ad}${advice}${ad}!`
    }
}

let Calculator = {
    add(a,b){ 
        return a + b
    },

    subtract(a,b){
        return a - b
    },

    multiply(a,b){
        return a * b
    },

    divide(a,b){
        return a / b
    }
}

function actionApplyer(a , b) {
    if (b == false) {
        return a
    } else {
        for (let i = 0; i < b.length; i++ ){
            a = b[i](a)
          }
        
          return a
    }
}