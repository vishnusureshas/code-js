// some() - apply where we have to return true/false

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

// 1.Is there any item can purchase by rs.10
isAvailable = products.some(item => item[2]<=10)
console.log('Item can purchase by rs.10 :',isAvailable?'Yes':'No');

// 2.Is there any product with availalble stock > 100
stocks=products.some(item => item[3]>100)
console.log('Product with availalble stock > 100 :',stocks?'Available':'Not available');

// 3.Is any product available in the price range of 20 to 50
product=products.some(item => item[2]>=20 && item[2]<=50)
console.log('Product available in the price range of 20 to 50 :',product?'Yes':'No');

// 4.print all products in price of 20 to 50
price = products.filter(item => item[2]>=20 && item[2]<50)
console.log('Products in price of 20 to 50');
price.forEach(item =>console.log(item[1]))
