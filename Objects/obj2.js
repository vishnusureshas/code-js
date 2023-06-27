var student = {
    uname:'Jasil',
    dept:'BCA',
    age:22,
    desg:'Developer',
    salary:40000,
    exp:1
}

console.log(student['uname']);
console.log(student.desg);

if('desg' in student) {
    console.log('Present');
}else{
    console.log('Not present');
}

student['gender']='Male'
student.isVaccinated = true
student.salary+=5000
console.log(student);