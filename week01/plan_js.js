//BOX1(텍스트 박스) -> BOX2(해야 할 일)----------------
const inputbox = document.getElementById('inputbox');   //텍스트 박스에서 받아서
const output = document.getElementById('BOX2');         //box2에서 출력한다

inputbox.addEventListener('keypress', function(event){
if(event.key === 'Enter'){
    const text = inputbox.value;     //inputbox에서 값 가져오기
        if(text){
            output.innerHTML += '<div class="user_element">' + text + '<input type="button" class="btn_done" value = "완료" onclick="todo_to_done(this.parentElement)">' + '</div>';
            /**/
            inputbox.value = '';
        }
        event.preventDefault();
    }
});

//BOX2(해야 할 일) -> BOX3(해낸 일)--------------------
function todo_to_done(todoElement){
    const serve = todoElement.firstChild.nodeValue;
    const receive = document.getElementById('BOX3');

    if(serve){
        receive.innerHTML += '<div class="user_element">' + serve + '<input type="button" class="btn_delete" value = "삭제" onclick="remove_done(this.parentElement)">' + '</div>';
        todoElement.remove();
    }
}

//BOX3(해낸 일) -> 삭제--------------------------------
function remove_done(doneElement){
    doneElement.remove();
}
            