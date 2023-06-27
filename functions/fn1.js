// create add function

function add(num1,num2){
    result = num1+num2
    console.log(result);
    return result
}

// arrow function
var add = (num1,num2) => {
    result = num1+num2
    console.log(result);
    return result
}

console.log("Addition of 2 numbers :");
// function call
console.log(`Result is ${add(20,30)}`);


