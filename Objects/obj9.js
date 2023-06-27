// array of objects
products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsung',band:'5g',price:120000,display:'led'},
    {pid:102,pName:'blackberry',band:'5g',price:120000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

// 1.print products name only
console.log('Products names :');
products.forEach(item =>console.log(item.pName))

// 2.print all mobile details whose display is lcd
console.log('Mobile details whose display is lcd');
products.filter(item =>item.display=='lcd').forEach(item =>console.log(item.pName))

// 3.print 5g mobile phone number
console.log('5g mobile phone number');
products.filter(item =>item.band=='5g').forEach(item => console.log(item.pName))

// 4.filter mobile based on price
console.log('Mobile based on price');
products.sort((p1,p2)=>p2.price-p1.price).forEach(item => console.log(item.pName))

// 5.print costly mobile
console.log('costly mobile :');
console.log(products.reduce((n1,n2)=>n1.price>n2.price?n1:n2).pName);

// 6.print low cost mobile
console.log(' low cost mobile :');
console.log(products.reduce((n1,n2) => n1.price<n2.price?n1:n2).pName);

