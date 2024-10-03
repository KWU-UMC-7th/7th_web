const planInput = document.querySelector('#planInput');
const todoList = document.querySelector('#todoList');
const doneList = document.querySelector('#doneList');

const todoItem = document.querySelector('#todoItem');
const doneItem = document.querySelector('#doneItem');

const todoBtn = document.querySelector('.todoBtn');
const doneBtn = document.querySelector('.doneBtn');

//아이템 추가 함수
const addItem = (text) => {
  //기존 태그 복사하여 버튼에 이벤트 추가
  const cloneItem = todoItem.cloneNode(true);
  cloneItem.childNodes[0].textContent = text;
  cloneItem.setAttribute('style', 'display: flex;');
  cloneItem.querySelector('.todoBtn').addEventListener('click', () => {
    moveToDone(cloneItem);
  });

  todoList.appendChild(cloneItem); //해야할일에 추가
}


//인풋 함수 연결
planInput.addEventListener('keydown', (event) => {
  if (event.key == "Enter" && planInput.value.trim() !== "") {
    const text = planInput.value;
    planInput.value = "";
    addItem(text); //아이템 추가
  }
})

//완료 버튼
const moveToDone = (item) => {
  //기존 아이템 복사하여 버튼 이벤트 수정
  const doneItem = item.cloneNode(true);
  const doneBtn = doneItem.querySelector('.todoBtn');
  doneBtn.textContent = '삭제';
  doneBtn.addEventListener('click', () => {
    doneItem.remove();
  })

  item.remove(); //todo 아이템 삭제
  doneList.appendChild(doneItem); //해낸 일에 추가
}

const planInput = document.querySelector('#planInput');
const todoList = document.querySelector('#todoList');
const doneList = document.querySelector('#doneList');

const todoItem = document.querySelector('#todoItem');
const doneItem = document.querySelector('#doneItem');

const todoBtn = document.querySelector('.todoBtn');
const doneBtn = document.querySelector('.doneBtn');

//아이템 추가 함수
const addItem = (text) => {
  //기존 태그 복사하여 버튼에 이벤트 추가
  const cloneItem = todoItem.cloneNode(true);
  cloneItem.childNodes[0].textContent = text;
  cloneItem.setAttribute('style', 'display: flex;');
  cloneItem.querySelector('.todoBtn').addEventListener('click', () => {
    moveToDone(cloneItem);
  });

  todoList.appendChild(cloneItem); //해야할일에 추가
}


//인풋 함수 연결
planInput.addEventListener('keydown', (event) => {
  if (event.key == "Enter" && planInput.value.trim() !== "") {
    const text = planInput.value;
    planInput.value = "";
    addItem(text); //아이템 추가
  }
})

//완료 버튼
const moveToDone = (item) => {
  //기존 아이템 복사하여 버튼 이벤트 수정
  const doneItem = item.cloneNode(true);
  const doneBtn = doneItem.querySelector('.todoBtn');
  doneBtn.textContent = '삭제';
  doneBtn.addEventListener('click', () => {
    doneItem.remove();
  })

  item.remove(); //todo 아이템 삭제
  doneList.appendChild(doneItem); //해낸 일에 추가
}


