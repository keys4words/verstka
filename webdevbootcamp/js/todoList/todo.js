var todos = ['test'];
var input = prompt('What would like to do?');


while(input !== 'quit'){
    if (input === 'show'){
        showList();
    } else if(input === 'new'){
        addTodo();
    } else if(input === 'delete'){
        deleteTodo();
    }
    input = prompt('What would like to do?').toLowerCase();
}
console.log('OK, you quit to app');

function showList(){
    console.log('*********************');
    todos.forEach(function(todo, i){
        console.log('#' + i + ": " + todo);
    });
    console.log('*********************');
}

function addTodo(){
    var newTodo = prompt('Enter new todo:');
    todos.push(newTodo);
    console.log('Todo added');
}

function deleteTodo(){
    var index = prompt("Enter index of todo to delete:");
    todos.splice(index, 1);
    console.log('Todo deleted');
}