function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(str="*") {
    return function(param="special") {
        return `You are ${str}${param}${str}!`;
    }
}

const Calculator = {
    add: function(){return 1 + 3},
    subtract: function(){return 1 - 3},
    multiply: function(){return 1 * 3},
    divide: function(){return 10 / 5}
};

function actionApplyer(num, arrFn) {
    if (arrFn) {
        for (const fn of arrFn) {
            num = fn(num);
        }
    }
    return num;
}