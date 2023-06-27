input = [4,5,6]
console.log('input',input);
sum=0
output=[]

for(let num of input) {
    sum+=num
}
for(let num of input){
    output.push(sum-num)
}
console.log('Output',output);
// output = [11,10,9]

