expenses=[10000,20000,30000,12000,23000]
// find total expense
total=0
for(let amount of expenses){
    total+=amount
}
console.log('Total amount is :',total);

// find maximum expense
maxExp=0
for(let amt of expenses) {
    if(amt>maxExp){
        maxExp=amt
    }
}
console.log('Maximum expense :',maxExp);

// find minimum expense
minExp=expenses[0]
for(let amt of expenses){
    if(amt<minExp){
        minExp=amt
    }
}
console.log('Minimum expense :',minExp);