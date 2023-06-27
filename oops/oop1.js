// class
class Employee{
    // properties 

    // functions
    setEmployee(empName,age,gender,salary){
       this.eName = empName,
       this.age = age,
       this.gender = gender,
       this.salary = salary
       
    }

    printEmployee(){
        console.log(`
        Employee name: ${this.eName}
        Employee age: ${this.age}
        Employee gender: ${this.gender}
        Employee salary: ${this.salary}
        `);
    }
}

// object-1
var emp = new Employee()
emp.setEmployee('Vishnu',23,'M',10000)
emp.printEmployee()

// object-2
var emp1 =new Employee()
emp1.setEmployee('Gautham',22,'M',20000)
emp1.printEmployee()
