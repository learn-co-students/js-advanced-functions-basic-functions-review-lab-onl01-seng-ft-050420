// Your code here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`    
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
//wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"

function wrapAdjective(wrap="*") {
    let wrapped = function(adj="special") {
        return `You are ${wrap}${adj}${wrap}!`
    }
    return wrapped;
}

let Calculator = {
    add: function(num1, num2) { return num1 + num2 },
    subtract: function(num1, num2) {return num1 - num2},
    multiply: function(num1, num2) {return num1 * num2},
    divide: function(num1, num2) {return num1/num2}
}

function actionApplyer (startInt, arrayFn) {
    if (arrayFn.length === 0){
        return startInt;
    } else {
        for (let i = 0; i < arrayFn.length; i++) {
            startInt = arrayFn[i](startInt)
        } 
        return startInt
        // arrayFn.forEach(func => {
        //     let total = func(startInt)
        // })  
        // arrayFn.reduce(function(total, startInt) {
        //     total = startInt
        // }, 0) 
    }
}


