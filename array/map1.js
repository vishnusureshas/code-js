// map()- craeting a new array for calling a function for every element inside the array

a = [10,11,12,13,14,15]
// print square of all elements
square=a.map(num => num**2)
console.log(square);

// create a array with numbers , if number>13 then increment number else decrement number
newA=a.map(num => num>13?num+1:num-1)
console.log(newA);