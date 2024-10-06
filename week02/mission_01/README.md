# 2주차 키워드

## 여러개 코드 반환
태그 하나만 반환할 수 있다고 했으니
한 태그에 전부 넣으면 가능하지 않을까??

```js
// 코드 아래 첨부
import './App.css'

function App() {

  return (
    <div>
      <strong>UMC Web react</strong>
      <div>Reily Looney</div>
    </div>
  )
}

export default App
```

---
## 깊은 / 얕은 복사

깊은 복사 : 값을 복사해 원본과 다른 메모리 공간에 저장
(원본 수정해도 복사본은 유지, 구조적으로 동일)

얕은 복사 : 포인터 변수처럼 메모리에 어떤 값을 가리켜 표현
(원본 변형되면 복사본도 변형, 같은 객체가 아님)

https://developer.mozilla.org/ko/docs/Glossary/Shallow_copy
https://developer.mozilla.org/ko/docs/Glossary/Deep_copy