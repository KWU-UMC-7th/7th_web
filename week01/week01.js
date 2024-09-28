const planInput = document.querySelector('#input_component');
const todoItemTemplate = document.querySelector('#todo_container');
const todoList = document.querySelector('#todo_list');
const doneList = document.querySelector('#done_list');

// 해야 할 일에 item 생성
const createTodoItem = (text) => {
    const item = todoItemTemplate.cloneNode(true);  
    const itemText = item.querySelector('p');      
    itemText.textContent = text;
    const todoButton = item.querySelector('.btn');  //버튼에 click event 추가
    todoButton.addEventListener('click', () => moveToDone(item));
    item.style.display = 'flex';
    return item;
}

// 해야 할 일에 item 추가
const addItem = (text) => {
    const item = createTodoItem(text);  
    todoList.appendChild(item);        
}

// event 추가
planInput.addEventListener('keydown', (event) => {
    // enter 키가 눌러지지 않은 경우, input이 비어 있는 경우 return; 
    if (event.key !== "Enter" || planInput.value.trim() === "") return;
    // 아이템 추가
    addItem(planInput.value.trim());
    planInput.value = "";
})

// 해야 할 일의 완료를 누르면 해낸 일로 이동
const moveToDone = (item) => {
    const doneItem = createDoneItem(item);    
    item.remove();                            
    doneList.appendChild(doneItem);           
}

// 해낸 일에 item 생성
const createDoneItem = (item) => {
    const doneItem = item.cloneNode(true);  
    const doneButton = doneItem.querySelector('.btn');  
    doneButton.textContent = '삭제'; 
    doneButton.removeEventListener('click', moveToDone);            // 완료 event 제거
    doneButton.addEventListener('click', () => doneItem.remove());  // 삭제 event 추가
    doneItem.style.display = 'flex'; 
    return doneItem; 
}