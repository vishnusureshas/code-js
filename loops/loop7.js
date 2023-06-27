// power=2 check 8 <= number^2 <=36 then print the number
// output: 3 4 5 6

power=2 
low=8
upper=36

i=1

while(i<=upper){
    result=i**power
    if(result>=low && result<=upper){
        console.log(i);
    }
    i++
}