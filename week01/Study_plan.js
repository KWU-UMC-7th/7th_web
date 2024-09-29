let inputbox = document.getElementById('inputbox');

let rightul = document.querySelector('.right-list');

inputbox.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    let content = inputbox.value;
    // 새로운 항목 요소 생성
    let newItem = document.createElement('li');
    let leftul = document.querySelector('.left-list');
    newItem.setAttribute('class', 'add');
    // 내용 추가
    newItem.textContent = content;
    // 버튼 생성
    let button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.textContent = '완료';
    // '완료' 버튼 클릭 이벤트 처리
    button.addEventListener('click', function () {
      // 해당 항목을 '해낸 일' 목록으로 이동
      rightul.appendChild(newItem);
      // 버튼의 텍스트를 '삭제'로 변경
      button.textContent = '삭제';
      // '삭제' 버튼 클릭 이벤트 처리
      button.addEventListener('click', function () {
        // 해당 항목 삭제
        newItem.remove();
      });
    });
    // 요소에 버튼 추가
    newItem.appendChild(button);
    // 새로운 항목을 '해야 할 일' 목록에 추가
    leftul.appendChild(newItem);

    inputbox.value = '';
    inputbox.focus();
  }
});

rightul.addEventListener('click', function (event) {
  if (event.target.className === 'button') {
    event.target.parentNode.remove();
  }
});
