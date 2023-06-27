// array creation
// const array-name = [a,b,c,d....n]

var framework = ['express','angular','django',100]

console.log(framework);

// display number of items inside the array
console.log('Number of elements inside the array',framework.length);

// to access item inside the array - using its index number
// aaray-name[index-number]
console.log('First item inside framework array :',framework[0]);
console.log('Last item inside framework array :',framework[framework.length-1]);

// to add new item to an existing array -array-name.push(item)
framework.push(200)
console.log(framework);

// remove an item from an array - pop()
framework.pop()
console.log(framework);

// print item one by one from the array
console.log('Using normal for loop');
// using normal for loop
for(i=0;i<framework.length;i++){
    console.log(framework[i]);
}

// Using for of
console.log('Using for of :');
for(let i of framework) {
    console.log(i);
}

// Using for in 
for(let i in framework){
    console.log(framework[i]);
}


