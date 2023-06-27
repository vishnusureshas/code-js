// W A  P to input 3 numbers and print 2nd largest number and display all 3 numbers in sorted order

num1=10
num2=20
num3=30

if(num1>num2 && num1>num3) {
    console.log('Largest number is num1');
    if(num2>num3) {
        console.log('2nd largest num2');
        console.log('Sorted in ascending :',num3,num2,num1);
    }else {
        console.log('2nd largest num1');
        console.log('Sorted in ascending :',num2,num3,num1);
    }
}else if(num2>num3 && num2>num1){
    console.log('Largest number is num2');
    if(num1>num3) {
        console.log('2nd largest num1');
        console.log('Sorted in ascending :',num3,num1,num2);
    }else {
        console.log('2nd largest num3');
        console.log('Sorted in ascending :',num1,num,num2);
    }
}else if(num3>num1 && num3>num1){
    console.log('Largest number is num3');
    if(num2>num1) {
        console.log('2nd largest num2');
        console.log('Sorted in ascending :',num1,num2,num3);
    }else {
        console.log('2nd largest num1');
        console.log('Sorted in ascending :',num2,num1,num3);
    }
}
else {
    console.log('Equal');
}