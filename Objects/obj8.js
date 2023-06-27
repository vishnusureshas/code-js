accounts = [
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:5000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
]

// 1.total number of accounts
console.log('Number of accounts :',accounts.length);

// 2.print account number whose ac_type is savings
console.log('Account number whose ac_type is savings');
accounts.filter(item => item.ac_type=='savings').forEach(p1 => console.log(p1.acno))

// 3.print the balance of account number 1000
console.log('Print the balance of account number 1000 :',
accounts.find(item=>item.acno==1000).balance);

// 4.print all gpay transactions
console.log('gpay transactions');
accounts.map(item => item.transaction).flat().filter(data=>data.mode=='gpay').forEach(i=>console.log(i))  

// 5.print all transaction whose amount > 5000
console.log('Print all transaction whose amount > 5000 :');
accounts.map(item =>item.transaction).flat().filter(data =>data.amount > 5000).forEach(i =>console.log(i))

// 6.print credit transaction of account 1002
console.log('Credit transaction of account 1002 :');
credit=accounts.map(item =>item.transaction).flat().filter(data => data.to ==1002)
console.log(credit);

// 7.print debit transaction of account 1002
console.log('debit transaction of account 1002 :');
debit=accounts.find(item=>item.acno==1002).transaction
console.log(debit);

// 8.print transaction history of 1002
console.log('Transaction history of 1002 :');
transactionHistory ={
    credit,
    debit
}
console.log(transactionHistory);

// 9.print highest balance account details
console.log('Highest balance account details :');
console.log(accounts.reduce((d1,d2)=> d1.balance>d2.balance?d1:d2).acno);

