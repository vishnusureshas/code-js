//  w.a.p to print a valid gmail

function validate(email) {
   return email.endsWith('@gmail.com')?'Valid':'Not valid'

// if(email.endsWith=="@gmail.com"){
//     return 'Valid email'
// }else{
//     return 'Invalid email'
// }
}
console.log(validate('vishnu@gmail.com'));