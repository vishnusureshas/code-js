// employee = nested array
employee = [
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','tvm',15000,2],
    [1002,'Maxwell','QA','kochi',35000,4],
    [1003,'Vyom','QAr','kochi',45000,5],
    [1004,'Laisha','tester','tvm',55000,7],
    [1005,'Ahaan','developer','tvm',15000,1],
    [1006,'Aahil','QA','kochi',15000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]



//1. print all employee name
// for(let emp of employee){
//     console.log(emp[1]);
// }
names=empName=employee.map(emp =>emp[1])
console.log(names);

// 2.print total number of employee
console.log('Total number of employee :',employee.length);

// 3.print developer employee details
console.log('developer employee');
devEmp = employee.filter(emp => emp[2]=="developer")
console.log(devEmp);

// 4.print employee whose salary > 30000
empSal = employee.filter(emp=>emp[4]>30000)
console.log(empSal);
// for(let emp of employee){
//     if(emp[4]>30000 ){
//         console.log(emp);
//     }
// }

// 5.print deatils of employee Laisha
console.log('details of employee Laisha :');
// for(let emp of employee){
//     if(emp[1]=='Laisha') {
//         console.log(emp);
//     }
// }
a=employee.find(emp => emp[1]=="Laisha")
console.log(a);

// 6.sort employee based on their salary in descending order
console.log('Employee based on their salary in descending order');
employee.sort((a,b)=>b[4]-a[4])
console.log(employee);

// 7.sort employee based on their experience in acending order
console.log('Employee based on their experience in acending order');
employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(employee);