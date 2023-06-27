// proto type inheritance

baleno = {
    company:'maruti',
    varients:['manuel','automatic'],
    color:['red','white','blue']
}

glanza = {
    company:'toyota',

}

glanza.__proto__ = baleno
console.log(glanza.color);