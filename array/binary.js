// binary search
// sort
// find mid value
// compare mid with search key
// mid==search key print
// mid>search key ,left array search
// mid<search - right array search

var a = [10,11,12,13,4,15]
search=49

low=0
up=a.length-1
flag=0
counter=0

a.sort((a,b)=>b-a)

mid=Math.floor((low+up)/2)
while(low<up){
    if(search==a[mid]){
        counter++
        console.log('Number found');
        flag=1
        break;
    }
    else if(search>a[mid]){
        low=mid+1
    }
    else if(search<a[mid]){
       up=mid
    }   
}
console.log('Total iteration',counter);

console.log(flag==0?'Not found':'found');  

