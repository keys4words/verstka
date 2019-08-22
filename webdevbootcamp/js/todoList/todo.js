var todos = ['test'];
var input = prompt('What would like to do?').toLowerCase();


while(input !== 'quit'){
    if (input === 'list'){
        console.log(todos);
    } else if(input === 'new'){
        var newTodo = prompt('Enter new todo:');
        todos.push(newTodo);
    }
    input = prompt('What would like to do?').toLowerCase();
}
console.log('OK, you quit to app');