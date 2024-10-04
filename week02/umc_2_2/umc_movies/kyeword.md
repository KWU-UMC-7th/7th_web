참조

[https://velog.io/@apro_xo/React.js-state값은-사본으로-Feat.-얕은-복사-깊은-복사](https://velog.io/@apro_xo/React.js-state%EA%B0%92%EC%9D%80-%EC%82%AC%EB%B3%B8%EC%9C%BC%EB%A1%9C-Feat.-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC)

### 1. 얕은 복사

얕은 복사는 **한 단계만 복사**하는 방식입니다. 

복사된 객체는 원래 객체와 같은 참조를 가지기 때문에, **내부에 중첩된 객체가 변경되면 원본 객체에도 영향을 미칠 수 있습니다.**

```jsx
const [person, setPerson] = useState({
  name: "김용민",
  age: 26,
  nickname: "매튜"
});

const newPerson = {...person}; // 얕은 복사
newPerson.nickname = "야호";

console.log(person.nickname); // 여전히 "매튜" 임을 확인할 수 있다.
```

### 2. 깊은 복사

깊은 복사는 객체 내부의 중첩된 모든 값까지 **완전히 새로운 복사본**을 만드는 방식입니다. 이 경우, 복사본을 수정해도 **원본 객체에는 전혀 영향이 없습니다.**

깊은 복사는 **재귀적으로** 객체의 모든 속성을 복사해야 하므로, 직접 구현하거나 `lodash`와 같은 라이브러리의 `cloneDeep`을 활용하거나, **`JSON 방식을 이용`**해서 **`깊은 복사`**를 진행합니다.

```jsx
const newPersonDeep = JSON.parse(JSON.stringify(person)); // 깊은 복사
```

객체가 단순한 경우 이 방법을 사용할 수 있지만, 함수나 `undefined` 값이 있을 때는 적합하지 않습니다.