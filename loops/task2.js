// print number in reverse order
// input - 123
// output - 321

input=123
console.log("Input:",input);
str=""
while(input>0){
    // get last digit
    lastDigit=input%10
    // convert it to string
    str+=lastDigit
    // input update as Math.floor(input/10)
    input = Math.floor(input/10)
}
console.log("Output:",str);