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

// print employee with least salary
least=employee.reduceRight((n1,n2)=>n1[4]<n2[4]?n1:n2)
console.log('Employee with least salary :',least);

// print employee with highest salary
highest=employee.reduce((n1,n2)=>n1[4]>n2[4]?n1:n2)
console.log('Employee with high salary :',highest);

// print total salary
total = employee.map(emp =>emp[4]).reduce((n1,n2)=> n1+n2)
console.log('Total salary :',total);