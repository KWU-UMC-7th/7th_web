# React 동작 원리

## 1. SPA (Single Page Application)

`SPA (Single Page Application)` : 단일 페이지 애플리케이션

- 정의
  단일 웹 문서만 로드한 다음 다른 콘텐츠가 표시될 때 `XMLHttpRequest` (서버와 상호작용할 떄 사용하는 객체) 및 Fetch와 같은 JavaScript API를 통해 해당 단일 문서의 본문 콘텐츠를 업데이트하는 웹 앱 구현체
- 장단점
  장점 : 사용자는 서버에서 완전히 새로운 페이지를 로드하지 않고도 웹사이트를 사용할 수 있으므로, 성능이 향상되고 보다 동적인 경험을 얻을 수 있음
  딘잠 : SEO와 같은 일부 절충됨, 상태를 유지하고 탐색을 구현 및 의미 있는 성능 모니터링을 하는 데 더 많은 노력이 필요
- SPA 프레임워크
  React
  Angular
  Vue.JS

## 2. User Interface Library

- 정의
  사용자 인터페이스를 쉽게 구축하고 재사용할 수 있도록 도와주는 프레임워크, 모듈 모음
- React와 User Interface Library
  React는 컴포넌트 기반의 라이브러리로, 애플리케이션의 사용자 인터페이스를 구성하는데 큰 도움을 줌.
  - UI 라이브러리로서의 React의 특징
    1. **컴포넌트 재사용성**: 컴포넌트를 한 번 정의하면 여러 곳에서 재사용할 수 있으며, 각 컴포넌트는 독립적으로 관리됨
    2. **상태 관리**: React 컴포넌트는 자신의 상태를 관리하고, 상태가 변경되면 UI를 자동으로 업데이트함
    3. **Virtual DOM**: React는 변경된 부분만을 다시 렌더링하여 성능을 최적화함
    4. **JSX 문법**: JavaScript와 HTML을 결합한 JSX 문법을 사용하여 더 직관적인 UI 컴포넌트 작성을 지원

## 3. Functional Component (함수형 컴포넌트)

- 정의
  함수 문법을 이용하여 작성함. `return` 문을 이용하여 `UI`를 정의.
  특히 `props`를 이용하여 상태를 관리함. `props`란 부모 컴포넌트에서 전달되는 데이터를 의미함.
  상태를 관리하기 위해 `useState() Hook`을 이용할 수 있음.
- `class component`(클래스형 컴포넌트)와 차이점
  |                     | `class component`                                                                   | `Functional Component`                                               |
  | ------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
  | 문법과 구조         | `ES6`의 클래스 문법을 사용하며 `React.Component`를 상속받아 구현                    | 일반 함수로 작성되며, 별도의 클래스 상속 없이 구현                   |
  | 상태 관리           | `this.state`와 `this.setState`를 사용하여 상태를 관리                               | `useState Hook`을 사용하여 상태를 관리                               |
  | 라이프사이클 메서드 | `라이프사이클 메서드`를 사용하여 컴포넌트의 생성, 업데이트, 제거에 대한 로직을 구현 | `useEffect Hook`을 사용하여 라이프사이클 메서드와 유사한 기능을 구현 |
- 장단점
  장점
  1. 코드의 간결함: `클래스형 컴포넌트`에 비해 코드가 간결하고 가독성이 높음. 함수형 프로그래밍 패러다임을 따르기 때문에 부수적인 효과(side effect)를 최소화하고, 로직이 명확해지는 특징이 있음.
  2. 성능: 인스턴스 생성 과정이 없기 때문에 메모리 사용량이 줄어들고, 렌더링 성능이 비교적 좋음.
  3. `Hook` 사용 가능: `React Hook`을 사용할 수 있으며 이를 통해 `라이프사이클 메서드`와 같은 기능을 구현할 수 있고 상태 관리도 간편해짐.
  단점
  1. `라이프사이클 메서드`: `기존 라이프사이클 메서드`를 사용할 수 없으며 대신 `useEffect Hook`을 사용하여 `라이프사이클 메서드`와 유사한 기능을 구현해야 함
  2. `Hook` 학습 러닝커브: `상태 관리`와 `라이프사이클 메서드` 등의 기능을 위해 `Hook`을 사용하지만 `React Hook`은 처음 사용하는 개발자에게는 새로운 개념일 수 있으며 다소 러닝커브가 존재함

## 4. Virtual DOM (가상 DOM)

- 정의
  `UI`의 이상적인 또는 “가상”적인 표현을 메모리에 저장하고 `ReactDOM`과 같은 라이브러리에 의해 “실제” `DOM`과 동기화하는 프로그래밍 개념
  즉, 실제 `DOM`과 같은 내용을 담고 있는 복사본이라고 할 수 있음. 복사본은 실제 `DOM`이 아닌 `JS 객체형태`로 메모리 안에 저장되어 있음.
- `DOM` vs `Virtual DOM`
  `Virtual DOM`은 실제 `DOM`의 복사본이기 때문에, 실제 `DOM`의 모든 `element`과 속성을 공유.
  차이점 : 브라우저에 있는 문서에 직접적으로 접근할 수 없음. 때문에 화면에 보여지는 내용을 직접 수정할 수 없음

## 5. 동시성 렌더링

- `동시성` 의 정의
  한 번에 둘 이상의 작업이 동시에 진행되는 것. 어떤 작업이 더 긴급한지에 따라 동시 작업이 겹칠 수 있음.
  멀티 스레드가 아닌, 여러 작업을 작은 단위로 나눈 뒤 그 작업들 간의 우선순위를 정하고 그에 따라 작업을 번갈아 수행함(context switch). 작업간의 전환이 매우 빠르에 이루어져 동시에 여러 작업이 수행되는 것 처럼 보임.
- 정의
  `렌더링`을 `긴급한 업데이트`, `전환 업데이트`로 나누어 `긴급한 업데이트`부터 진행함
  - `전환 업데이트` 중 `긴급한 업데이트`가 들어오면 `전환 업데이트`를 중단하고 `긴급한 업데이트` 우선 진행함
  - `동시성 렌더링`은 계산 속도를 개선한 것이 아니라 우선순위를 지정하여 `긴급한 업데이트`를 우선 진행해 `UI` 차단을 최소화시킨 것
- `동시성`을 도입하는 이유
  원래 `react`에서 `렌더링`은 개입할 수 없는 하나의 동기적인 처리였음. 그래서 한 번 `렌더링`이 시작되면 `렌더링`을 중단/재개/폐기할 수 없었음.
  만약 `동시성`이 지원되지 않을 경우 `렌더링`이 오래걸린다면 다음에 수행해야 하는 작업은 블록킹되어 애플리케이션이 버벅이는 현상이 발생할 수 있음.
- `동시성`을 위해 추가된 훅
  - `startTransition` 함수:
    `startTransition`로 감싸진 set 함수는 전환 업데이트로 처리됨
  - `useTransition` 훅:
    `startTransition` 함수와 `isPending`을 반환하는 훅으로, 지연 중일 경우 `isPending`는 `true`가 됨
  - `useDeferredValue` 훅:
    `startTransition` 함수를 사용하지 못하는 경우, 즉 `set` 함수에 접근할 수 없거나 `props`를 지연하고 싶을 경우 사용되는 훅으로, 반환 값으로 화면이 업데이트될 때 지연처리 됨

# JSX 문법에 대해 배워보자! 🍠

### React에서 JSX를 반환할 때 꼭 하나의 태그만 반환해야한다.

Q) 여러개를 반환하고 싶은 경우는 어떻게 해야 할까요?
코드와, 이유를 간략하게 작성해주세요.

A) `React.Fragment` 태그 사용 (빈 태그)

```jsx
// 코드 아래 첨부
function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </React.Fragment>
  );
}

export default App;
```

이유: 태그를 하나로 묶어주지만 기능적으로 아무 의미가 없고, 기능이 없는 태그를 사용하여야 하기 때문.

`<Fragment> </Fragment>` 대신 `<> </>` 이렇게 써도 됨.

### 구조분해할당

우리는 **`JS 구조분해 할당에 대해 이전에 학습`** 했습니다. 어떤 식으로 활용하면 좋을지 본인이 직접 해보고 아래에 **`List.jsx`** 파일을 넣어주세요.

- 구조분해 할당 활용 **`List.jsx`**
  ```jsx
  const List = (props) => {
    console.log(props);
    const { tech } = props;
    return (
      <>
        <li>{tech}</li>
      </>
    );
  };

  export default List;
  ```

### 얕은 복사와 깊은 복사

- 얕은 복사 🍠
  얕은 복사는 **한 단계만 복사**하는 방식
  복사된 객체는 원래 객체와 같은 참조를 가지기 때문에, **내부에 중첩된 객체가 변경되면 원본 객체에도 영향을 미칠 수 있음**
- 깊은 복사 🍠
  깊은 복사는 객체 내부의 중첩된 모든 값까지 **완전히 새로운 복사본**을 만드는 방식.
  복사본을 수정해도 **원본 객체에는 전혀 영향이 없음**
