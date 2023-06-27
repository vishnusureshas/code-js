// to view content inside result whenever we click on the button

function displayNum(num){
    result.value += num
}

function allClear(){
    result.value = ""
}

function evalExp() {
   result.value = eval(result.value)
}

function lastDigit(){
  result.value = result.value.slice(0,-1)
}