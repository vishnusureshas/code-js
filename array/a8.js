// Nested array
// print numbers<10

a=[
    [1,2],
    [11,13],
    [5,6],
    [8,9],
    [23,34],
    [45,56]
]

// output = 1,2,5,6,8,9
for(let subArray of a){
    for(let num of subArray) {
        if(num<10) {
            console.log(num);
        }
    }
}