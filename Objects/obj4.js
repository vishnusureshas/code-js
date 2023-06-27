text="hai hello hai hello hello"
// output ={hai:2,hello:2}

out={}
// words=text.split(' ')
// console.log(words);

// for(let word of words){
//     if(word in out){
//         out[word]+=1
//     }
//     else {
//         out[word]=1
//     }
// }

text.split(' ').map(word => word in out? out[word]+=1: out[word]=1)
console.log(out);
