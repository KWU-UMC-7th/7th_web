const input = document.querySelector('#input_component');
const todo_c = document.querySelector('#todo_container');
const todo_l = document.querySelector('#todo_list');
const done_l = document.querySelector('#done_list');

// 해야 할 일에 item 생성
const create_item = (text) => {
    const item = todo_c.cloneNode(true);  
    const itemText = item.querySelector('p');      
    itemText.textContent = text;
    const todo_button = item.querySelector('.btn');  //버튼에 click event 추가
    todo_button.addEventListener('click', () => move_item(item));
    item.style.display = 'flex';
    return item;
}

// 해야 할 일에 item 추가
const add_item = (text) => {
    const item = create_item(text);  
    todo_l.appendChild(item);        
}

// event 추가
input.addEventListener('keydown', (event) => {
    // enter 키가 눌러지지 않은 경우, input이 비어 있는 경우 return; 
    if (event.key !== "Enter" || input.value.trim() === "") return;
    // 아이템 추가
    add_item(input.value.trim());
    input.value = "";
})

// item 이동
const move_item = (item) => {
    const done_item = create_doneitem(item);    
    item.remove();                            
    done_l.appendChild(done_item);           
}

// 해낸 일 item 
const create_doneitem = (item) => {
    const done_item = item.cloneNode(true);  
    const done_button = done_item.querySelector('.btn');  
    done_button.textContent = '삭제'; 
    done_button.removeEventListener('click', move_item);            // 완료 event 제거
    done_button.addEventListener('click', () => done_item.remove());  // 삭제 event 추가
    done_item.style.display = 'flex'; 
    return done_item; 
}