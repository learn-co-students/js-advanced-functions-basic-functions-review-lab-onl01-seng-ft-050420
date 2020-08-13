function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function( work = 'go to the office'){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(string = '*'){
    return function(name = 'special'){
        return `You are ${string}${name}${string}!`
    }
}

const Calculator = {
    add: function(){return 1 + 3},
    subtract: function(){return 1 - 3},
    multiply: function(){return 1 * 3},
    divide: function(){return 10 / 5}
}

function actionApplyer(start, array){
    if (array.length === 0){
        return start
    } else {
        let base = start
        for (let func of array){
            base = (func)(base)
        }
        return base
    }
}
