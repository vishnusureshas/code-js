// flat() - to convert multidimentional-array to single dimentional array
a=[
    [10,50],
    [20,70],
    [30,40],
    [1,60],
    [5,80]
]

// print all numbers > 30
console.log(a.flat().filter(num=>num>30)); 
 
// print squares of all numbers 
 console.log( a.flat().map(num=>num**2));   
// find total of all numbers 
console.log( a.flat().reduce((n1,n2)=>n1+n2));  
// print highest number 
console.log(a.flat().reduce((n1,n2)=>n1>n2?n1:n2));  