var a = [10,11,12,13,4,15]
// find number 4 is present or not
isPresent=false
search=4
for(let num of a){
    if(num==search){
        isPresent =true
        break;
    }
}
console.log(isPresent?'Number is found':'Number is not found'); 
