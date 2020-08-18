function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(sym = "*"){
    return function(str = "special"){
        return `You are ${sym}${str}${sym}!`;
    };
};

const Calculator = {
    add: function add(a,b){
        return a + b;
    },
    subtract: function subtract(a,b){
        return a - b;
    },
    multiply: function multiply(a,b){
        return a * b;
    },
    divide: function divide(a,b){
        return a / b; 
    }
}

function actionApplyer(str,arr){
    for (let i = 0; i < arr.length; i++){
        str = arr[i](str);
    }
    return str;
}
