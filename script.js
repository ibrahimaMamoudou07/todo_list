const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search");

//add todos
function generateTemplate(todo) {
  const html=  `
        <li class="list-group-item">
            <span>${todo}</span>
            <i class="fas fa-check-circle cross"></i>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `
    list.innerHTML += html;
};

addForm.addEventListener("submit",event =>{
    event.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length > 0){
        generateTemplate(todo);
    }
    
    addForm.reset();
})
//delete todos
list.addEventListener("click",event =>{
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
    }
    if(event.target.classList.contains("cross")){
        event.target.parentElement.classList.toggle('done');
    }
})
//search todos
function filterTodos(term){
    Array.from(list.children)
    .filter(element =>{
        return !element.textContent.toLowerCase().includes(term);
    }
    )
    .forEach(todo =>{
        todo.classList.add("filtered")
    })
    Array.from(list.children)
    .filter(element =>{
        return element.textContent.toLowerCase().includes(term);
    }
    )
    .forEach(todo =>{
        todo.classList.remove("filtered")
    })
};
search.addEventListener("keyup",event =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})
//add date&time
const clock = document.querySelector(".clock");
function tick(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const html  = `
    <span>${hours}</span>:
    <span>${minutes}</span>:
    <span>${seconds}</span>:
    `;
    clock.innerHTML = html;

}

setInterval(tick,1000);