// reduce()-apply a reduce function to get a single result and  return a single value

a= [1,2,3,4,5,6,7]
// tottal sum of numbers
sum=a.reduce((num1,num2)=>num1+num2)
console.log(sum);
// smallest number
smallest=a.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(smallest);
// highest number
highest=a.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest);