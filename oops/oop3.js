// spread operators ...

function add(...args) {
    console.log('Argument method');
    console.log(args);
    return args.reduce((a,b)=>a+b)
}

console.log("Total sum:",add(10,20,30,100)); 