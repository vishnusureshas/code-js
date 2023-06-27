var car = {
    cname:'Baleno',
    model:'hatch back',
    manufacturer:'maruti',
    price:1000000
}

// print manufacturer
console.log(car['manufacturer']);

// check model present car
if('model' in car){
    console.log('Present in car');
}else{
    console.log('Not present');
}

// add new key as varient
car['Year']=1997
car['varient'] ='Jasil'
car['varient'].push('Automatic')
console.log(car);
