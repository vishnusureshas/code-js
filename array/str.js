str='hello hai'
// print all vowels
vowels=['a','e','i','o','u','A','E','I','O','U']
// strArray=Array.from(str);

// for(let char of strArray){
//     if(vowels.includes(char)) {
//         console.log(char);
//     }
// }

console.log('Vowels are :');
Array.from(str).filter(char => vowels.includes(char)).forEach(vowel=>console.log(vowel))


