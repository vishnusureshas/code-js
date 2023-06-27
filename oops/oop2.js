// class

class Student {
    // properies

    // functions
    constructor(uname,age,gender,dept){
       this.uname = uname,
       this.age = age,
       this.gender = gender,
       this.dept = dept
    }

    printStudent(){
       console.log(
`Student name: ${this.uname},
Student age: ${this.age},
Student gender: ${this.gender},
Student Department: ${this.dept}
        `
       );
    }
}

// Object-1
var stud = new Student('Vishnu',23,'M',"BCA")
// stud.setStudent('Vishnu',23,'M',"BCA")
stud.printStudent()

// Object-2
var stud1 = new Student('Arif',24,'M','ECE')
// stud.setStudent('Arif',24,'M','ECE')
stud.printStudent()