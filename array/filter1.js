// filter() - it will create new array with items satisfying a condition which is pass by a function

a=[10,11,12,13,14,15]

// print even number

// for(let num of a){
//     if(num%2==0){
//         console.log(num);
//     }
// }

evenNum=a.filter(num => num%2==0)
console.log(evenNum);

// print all numbers>12
selected=a.filter(n => n>12)
console.log("The numbers greater than 12 is:",selected);