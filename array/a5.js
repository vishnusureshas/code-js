// print dublicates elements
a=[10,20,10,20,11,12]

len=a.length
flag=0

for(i=0;i<len;i++){
    for(j=i+1;j<len;j++){
        if(a[i]==a[j]){
            flag++
            console.log(a[i]);
        }
    }
}

if(flag==0) {
    console.log("No dublicate");
}



