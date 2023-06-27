
var pro = new Promise((res,rej) =>{
    let watchTime = 2
    if(watchTime > 1){
        res("Success")
    }else{
        rej("Fail")
    }
})

pro.then((result)=>{
    console.log(result);
})
.catch((result)=>{
    console.log(result);
})