// check whether is armstrong number or not
// input =  153
// output = 1^3 + 5^3 + 3^3 = 1+125+27=153

input=151
num=input
sum=0

while(num>0){
    lastDigit=num%10
    sum+=lastDigit**3
    num=Math.floor(num/10)
}
if(input==sum){
    console.log(input,"Armstrong number");
}else{
    console.log(input,"Not an Armstrong number");
}