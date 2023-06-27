// print pairs whose sum=6

a=[2,3,4,5]
len=a.length
flag=0

for(i=0;i<len;i++){
    for(j=i+1;j<len;j++){
        if(a[i]+a[j]==6){
            flag++
            console.log(`(${a[i]}, ${a[j]})`);
        }
    }
}

if(flag==0){
    console.log('No pair present');
}