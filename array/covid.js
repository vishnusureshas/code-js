// [no,district,+ve cases,death rate ,curred rate,1st dose vaccine,2nd dose vaccine]

covid_data = [
    [1,'Ernankulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]
]

// 1.district having highest +ve cases
console.log('District having highest +ve cases');
highestPositive=covid_data.reduce((n1,n2) => n1[2]>n2[2]?n1:n2)
console.log(highestPositive[1]);

// 2.district having highest 1st dose vaccine
console.log('District having highest 1st dose vaccine');
firstdose=covid_data.reduce((n1,n2)=>n1[5]>n2[5]?n1:n2)
console.log(firstdose[1]);

// 3.district having lowest death rate
console.log('District having lowest death rate');
deathRate=covid_data.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2)
console.log(deathRate[1]);

// 4.sort data with +ve case in decending order
console.log('Data with +ve case in decending order');
covid_data.sort((n1,n2)=>n2[2]-n1[2])
console.log(covid_data);

// 5.is district with +ve cases >15000
console.log('District with +ve cases >15000');
// for(let data of covid_data) {
//     if(data[2] > 15000){
//         console.log(data);
//     }
// }
selected=covid_data.filter(d=>d[2] > 15000)
console.log(selected[1]);

// 6.sort data with 1st dose vaccine 
console.log('Data with 1st dose vaccine :');
covid_data.sort((d1,d2)=>d1[5]-d2[5]).forEach(d=>console.log(d[1]))
// console.log(covid_data);

// 7.print thrissur details
console.log('Thrissur details :');
details=covid_data.find(item => item[1]=='Thrissur')
console.log(details);

// 8.print total number of positive cases 
console.log('total number of positive cases ');
totalsum=covid_data.map(d1=>d1[2]).reduce((n1,n2)=>n1+n2)
console.log(totalsum);

// 9.print total number of curred cases
console.log('Total number of curred cases');
curredcases=covid_data.map(n1=>n1[4]).reduce((d1,d2)=>d1+d2)
console.log(curredcases);

// 10.Print cured cases in idukki
console.log('Cured cases in idukki :');
cured=covid_data.find(item =>item[1]=='Idukki')
console.log(cured[4]);

