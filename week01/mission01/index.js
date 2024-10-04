const input = document.getElementById('input');
const todos = document.getElementById('todos');
const done = document.getElementById('done');

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
        const newLi = document.createElement('li');
        const newBtn = document.createElement('button');
        const newSpan = document.createElement('span');

        const doneLi = document.createElement('li');
        const doneBtn = document.createElement('button');

        newLi.appendChild(newSpan);
        newLi.appendChild(newBtn);
        newSpan.textContent = e.target.value;
        todos.appendChild(newLi);

        newBtn.textContent = '완료';
        doneBtn.textContent = '삭제';

        newBtn.addEventListener('click', () => {
            newLi.remove();
            doneLi.appendChild(newSpan);
            doneLi.appendChild(doneBtn);
            done.appendChild(doneLi);
        });

        e.target.value = '';

        doneBtn.addEventListener('click', () => {
            doneLi.remove();
        })
    }
})