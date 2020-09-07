// grab input and button elements

var submitBtn = document.getElementById("submit-btn");
var todoInput = document.getElementById("todo-input");
var todoList = document.querySelector(".todo-list");
var todoItemArray = [""];

submitBtn.addEventListener("click", function (event){
    // 1. to test ===== console anything
    // console.log("anything");
    event.preventDefault();
    var todoValue = todoInput.value;
    //  2. console.log(todoValue)//create element on click
    var todoItemDiv = document.createElement("div");
    //  3. add class todo created 
    todoItemDiv.setAttribute("class", "todo-item-div");
    //  4. get text of todo and attach element
    todoItemDiv.innerHTML = "<div class= 'd-flex'>" + "<p>" + todoValue + "</p>"
    //  5. attach element to todo list string
    todoList.appendChild(todoItemDiv);
    pushItemsToArray(todoValue);
    loopThruWordsArray();
    // get rid of text once input is received
    todoInput.value = "";
});
// 6. create array to push todo's to
// 7. create function to push items to array 
function pushItemsToArray(todotext){
    // use push method to add items to array
    todoItemArray.push(todotext);
    console.log(todoItemArray);
}

function loopThruWordsArray(){
    clearTodoListHtml();
    for(var i = 0; i < todoItemArray.length; i++){
        var todoItemDiv = document.createElement("div");
    //  3. add class todo created 
    todoItemDiv.setAttribute("class", "todo-item-div");
    //  4. get text of todo and attach element
    todoItemDiv.innerHTML = "<p>" + todoItemArray[i] + "</p>"
    //  5. attach element to todo list string
    todoList.appendChild(todoItemDiv);
    }
}

function clearTodoListHtml (){
todoList.innerHTML = ""
}