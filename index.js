// LAB: Implement a function called saturdayFun. It should return a String like "This Saturday, I want to ....!" 
// Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "roller-skate". 
// Use the learn program to verify you've gotten a working implementation. 
// Come back here once you've gotten just this set of tests passing.

function saturdayFun(whatToDo = "roller-skate"){
    return (`This Saturday, I want to ${whatToDo}!`);
};

// LAB: Implement a function called mondayWork. It should return a String like "This Monday, I will ... ." 
// Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office". 
// Use the learn program to verify you've gotten a working implementation. Come back here once you've gotten just this set of tests passing.

function mondayWork(activity = "go to the office"){
    return (`This Monday, I will ${activity}.`)
};

// LAB: Implement a function called wrapAdjective.
// It should return a function
// This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
// Call example: let encouragingPromptFunction = wrapAdjective("!!!")
// Thus a total call should be: wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"


function wrapAdjective(visualFlair = "*"){
    return function(adjective = "special"){
        let part1 = "You are"
        return `${part1} ${visualFlair}${adjective}${visualFlair}!`

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