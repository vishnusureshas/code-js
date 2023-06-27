// fetch

fetch('https://jsonplaceholder.typicode.com/todos')
.then((res)=>{
    res.json()
    .then((data)=>{
        // console.log(data);
        populateTodos(data)
    })
})

function populateTodos(todos){
  console.log(todos);
  html_data = ``
  for(let todo of todos){
    html_data += `
    <tr>
    <td>${todo.userId}</td>
    <td>${todo.id}</td>
    <td>${todo.title}</td>
    <td>${todo.completed}</td>
    </tr>
  `
    result.innerHTML = html_data
  }
}