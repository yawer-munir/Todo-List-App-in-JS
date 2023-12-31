const newTask = document.getElementById ('new-task');

const todoForm = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');
todoForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(newTask.value==="" || newTask.value===" "){
      console.log("please add some text");
    }
    else{
const newLi = document.createElement('li');
    let newLiValue = newTask.value;
    newLi.innerHTML = ` <span class="text">${newLiValue}</span>
    <button class="remove ">Remove</button>
    <button class="done ">Done</button>
    `; 
    todoList.prepend(newLi)
    newTask.value = ""; 
    }
    
}); 
 
todoList.addEventListener('click',(e)=>{
    
     if(e.target.classList.contains('remove')){
        e.target.parentNode.remove();
       
     } 
     if(e.target.classList.contains('done')){
        e.target.parentNode.firstElementChild.style.textDecoration="line-through";
     }
})