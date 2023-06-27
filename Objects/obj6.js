a=[10,10,20,30,20,30,40,50,60,30,20,50,50]
// output={10:2,20:3,30:3,40:1,50:3,60:1}

out={}

for(let data of a){
    if(data in out){
        out[data]+=1
    }
    else{
        out[data]=1
    }
}

console.log(out);
