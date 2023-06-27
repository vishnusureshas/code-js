// W A P to print 'fizz' if number/3 , print 'buzz'  if number/5 ,print  'fizzbizz'  if number/15

num=15

if(num%15==0) {
    console.log("fizzbuzz");
}else if(num%5 ==0){
    console.log('buzz');
}
else if(num%15==0) {
    console.log('fizz');
}
else {
    console.log("Not a valid number");
}

// num%3==15?console.log('fizz'): num%5==15?console.log('buzz'): num%15==15?console.log('fizzzbuzz')