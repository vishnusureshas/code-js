// find() - to find details regarding a particular item and return only item which is satisfy the condition first

// [id,name,price,stock]
products = [
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20],
]

// print details of oreo
oreo=products.find(item =>item[1]=='oreo')
console.log(oreo);