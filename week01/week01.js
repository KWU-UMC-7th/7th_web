document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".textbox");
  const todoList = document.querySelector(".todo_todo");
  const successList = document.querySelector(".todo_success");

  let keyCount = 0;

  const addTodo = () => {
    // 입력 양식에 값이 없으면 작동
    if (input.value.trim() === "") {
      alert("아무것도 작성되지 않았습니다");
      return;
    }

    const item = document.createElement("div");
    const text = document.createElement("span");
    const btn = document.createElement("input");

    // 객체 식별 키
    const key = keyCount;
    keyCount += 1;

    // item 객체 조정
    item.setAttribute("data-key", key);
    item.className = "todo_item"; //보통 setAttribute로 많이함
    item.appendChild(text);
    item.appendChild(btn);
    todoList.appendChild(item);

    // text 객체 조정
    text.className = "font";
    text.textContent = input.value;

    // btn 객체 조정
    btn.type = "button";
    btn.value = "완료";
    btn.classList.add("btn", "success_btn");
    btn.addEventListener("click", () => {
      successTodo(key, text.textContent); //요소 복제 -> html에 미리 넣어놓고 css로 숨기기, 복제
      todoList.removeChild(item);
    });

    // text box 내용 지우기
    input.value = "";
  };

  const successTodo = (key, textValue) => {
    const item = document.createElement("div");
    const text = document.createElement("span");
    const btn = document.createElement("input");

    // item 객체 조정
    item.setAttribute("data-key", key);
    item.className = "todo_item";
    item.appendChild(text);
    item.appendChild(btn);
    successList.appendChild(item);

    // text 객체 조정
    text.className = "font";
    text.textContent = textValue;

    // btn 객체 조정
    btn.type = "button";
    btn.value = "삭제";
    btn.classList.add("btn", "remove_btn");
    btn.addEventListener("click", () => {
      successList.removeChild(item);
    });
  };

  const removeTodo = (key) => {
    const item = document.querySelector('[data-key="${key}"]');
    successList.removeChild(item);
  };

  input.addEventListener("keyup", (event) => {
    const ENTER = 13;
    if (event.keyCode === ENTER) {
      addTodo();
    }
  });
});
