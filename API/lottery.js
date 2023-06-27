var luckContest = new Promise((res,rej)=>{
    let lotteryNum = 4
    let priceLottery = Math.floor(Math.random()*10)

    if(priceLottery == lotteryNum){
        res("You won the lottery")
    }else {
        rej("Sorry better luck next time")
    }
})

luckContest.then((result)=>{
    console.log(result);
})
.catch((result)=>{
    console.log(result);
})