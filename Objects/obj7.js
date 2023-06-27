weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]

//1. print district with highest temperature

//1. create output emply object
output={}
for(let record of weatherData) {
    // fetch district from array wheatherData and assign to distName 
    distName=record['district']
    // fetch weather from array wheatherData and assign to curTemp
    curTemp=record['weather']
    // check district is present in output object
    if(distName in output) {
    // if yes then get the newTemp from the record then compare it with curTemp
    // update object value as it highest temperature
    oldTemp=output[distName]
    if(oldTemp>curTemp) {
        output[distName]=oldTemp
    }else {
        output[distName]=curTemp
    }
   
    }else{
        // if not present: add key as district and value as curtemp to objecct output
        output[distName]=curTemp
    }
}
// display output object
console.log(output);




