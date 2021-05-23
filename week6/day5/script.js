








const todos = localStorage.getItem('todosList') ? JSON.parse(localStorage.getItem('todosList')) : []
console.log(todos)

const showTodos = document.querySelector('.showTodos')

function addTodo(){
    const taskName = document.querySelector('#taskName').value
    const description = document.querySelector('#description').value
    const startDate = document.querySelector('#startDate').value
    const endDate = document.querySelector('#endDate').value
    todos.push({
        name: taskName,
        desc: description,
        start: startDate,
        end: endDate
    })
    createTodos(todos)
    localStorage.setItem('todosList',JSON.stringify(todos))
    console.log(todos)
}

function createTodos(todosArr){

    console.log('todosArr:',todosArr)
    todosArr.forEach((todo,i)=>{
        const tName = document.querySelector('#tName')
        const dec = document.querySelector('#des')
        const div = document.createElement('div')
        showTodos.appendChild(div)
        div.appendChild(tName)
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        p1.innerText = todo.name
        tName.appendChild(p1)
        p2.innerText = todo.desc
        dec.appendChild(p2)
    })
}

// let items = localStorage.getItem('listOfItems') ? JSON.parse(localStorage.getItem('listOfItems')) : [];
// let ul = document.getElementById('toDoList');
// function createAllItems(){
//     if(items.length>0){
//         items.forEach( objItem => {
//             createToDoItem(objItem.name);
//         })
//     }
// }
// createAllItems();
//
// function createToDoItem(value){
//     let li = document.createElement('LI');
//     li.innerText = value;
//     ul.appendChild(li);
// }