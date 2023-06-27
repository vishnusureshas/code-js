// W.A.P to find prime number or not
num=11
prime=true
for(i=2;i<num;i++){
    if(num%2==0){
        prime=false
        break;
    }
}
if(prime){
    console.log(`${num} is a prime number`);
}else{
    console.log(`${num} is not a prime number`);
}
