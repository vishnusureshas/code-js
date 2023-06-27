// inheritance - classical inheritance

class Parent {
    bike() {
        console.log('Duke');
    }
}

class Child extends Parent{
    bike() {
        console.log('Kawasaki');
    }
}

ch = new Child()
ch.bike()



