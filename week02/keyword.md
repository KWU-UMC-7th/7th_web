- **`useState` 기초**
  React에서 **상태(state)**를 관리하기 위한 기본적인 훅(Hook)입니다. 함수형 컴포넌트에서 상태값을 저장하고 그 상태를 변경할 수 있는 방법을 제공합니다. useState는 컴포넌트의 상태가 변경될 때마다 해당 컴포넌트를 다시 렌더링하는 역할을 합니다.

  ```jsx
  import { useState } from "react";

  const [state, setState] = useState("초기값");
  ```

  두번째 `setState`를 활용해서 `state의 값을 변경`할 수 있습니다.

- 얕은 복사
  객체나 배열의 **참조(reference)**만 복사하는 방식입니다. 얕은 복사는 객체의 **첫 번째 레벨의 속성들**만 복사하고, 그 속성들이 참조하는 다른 객체나 배열은 그대로 참조됩니다. 즉, **복사된 객체의 중첩된 객체나 배열은 원본 객체와 같은 메모리 주소를 공유**합니다.
  얕은 복사 방법:

  - `Object.assign()`
  - 스프레드 연산자 `...`

  ```jsx
  // 원본 객체
  const obj1 = {
    name: "John",
    address: { city: "Seoul", zip: 12345 },
  };

  // 얕은 복사
  const shallowCopy = { ...obj1 };

  // 얕은 복사 후의 변화 확인
  shallowCopy.name = "Doe"; // 원본에는 영향 없음
  shallowCopy.address.city = "Busan"; // 원본 객체의 주소 값도 변경됨

  console.log(obj1.address.city); // "Busan" - 주소 값은 참조가 공유됨
  console.log(shallowCopy.address.city); // "Busan"
  ```

- 깊은 복사
  객체의 모든 중첩된 객체나 배열까지도 **새로운 메모리 공간에 복사**하는 방식입니다. 즉, 깊은 복사된 객체는 원본 객체와 **독립적**으로 동작하며, 어느 한쪽을 수정해도 다른 쪽에 영향을 주지 않습니다.
  깊은 복사 방법:

  - `JSON.parse(JSON.stringify())` (단, 이 방법은 **함수**나 **`undefined`** 등의 값을 처리하지 못함)
  - 외부 라이브러리 사용 (`lodash`의 `cloneDeep()`, `structuredClone()` 등)
    예제

  ```jsx
  // 원본 객체
  const obj2 = {
    name: "John",
    address: { city: "Seoul", zip: 12345 },
  };

  // 깊은 복사
  const deepCopy = JSON.parse(JSON.stringify(obj2));

  // 깊은 복사 후의 변화 확인
  deepCopy.name = "Doe"; // 원본에는 영향 없음
  deepCopy.address.city = "Busan"; // 원본 객체에는 영향 없음

  console.log(obj2.address.city); // "Seoul" - 원본 객체는 변하지 않음
  console.log(deepCopy.address.city); // "Busan"
  ```
