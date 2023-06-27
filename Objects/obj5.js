pattern="ABAABBC"
// print  first recursive character from the string
// out=A
out={}
flag=0
letters=pattern.split('')

for(let char of letters) {
    if(char in out){
        flag++
        console.log('First recursive character :',char);
        break;
    }else {
        out[char]=1
    }
}

if(flag==0) {
    console.log('No repeated character in the gievn string');
}