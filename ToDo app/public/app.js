var clear = document.querySelector(".clear");

clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

var dateElement = document.getElementById("date")



const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

var list = document.getElementById("list")

function addTodo(){
var todo_item = document.getElementById("todo-item")

var li = document.createElement('li')
var liText = document.createTextNode(todo_item.value)

li.appendChild(liText)

var delBtn = document.createElement('button')
var delIcn = document.createElement('i')
delBtn.setAttribute("class","btn")
delIcn.setAttribute("class","fas fa-trash-alt")
delIcn.setAttribute("id","orange")
delBtn.setAttribute("onClick","deleteItem(this)")
delBtn.appendChild(delIcn)

var editBtn = document.createElement("button")
var editIcn = document.createElement('i')
editBtn.setAttribute("class","btn") 
editBtn.setAttribute("onClick","editItem(this)") 
editIcn.setAttribute("class","fas fa-edit") 
editIcn.setAttribute("id","orange") 
editBtn.appendChild(editIcn)

li.appendChild(delBtn)
li.appendChild(editBtn)



list.appendChild(li)

todo_item.value = ""
}

function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){

    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value",val)

    e.parentNode.firstChild.nodeValue = editValue
    
}