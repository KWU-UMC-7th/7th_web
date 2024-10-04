- 원시 타입 🍠

  ### 원시 타입 (Primitive Type)

  자바스크립트에서 원시타입은, 쉽게 정의하면 객체가 아닌 다른 모든 타입을 의미합니다. 객체가 아니기에, 이러한 원시 타입은 메서드를 갖고 있지 않습니다.

  - boolean

    ### boolean

    거짓과 참을 가질 수 있는 데이터 타입입니다. 주로 조건문에서 많이 사용됩니다.
    true / false와 같은 boolean 형의 값 외에도 조건문에서 마치 true와 false 처럼 취급되는 truthy, falsy 값이 존재한다.

    ```jsx
    if (1) {
      // 1을 true로 사용할 수 있다.
    }

    if (0) {
      // 0을 false로 사용할 수 있다.
    }

    if (NaN) {
      // NaN을 false로 사용할 수 있다.
    }

    // 그 외에도 null / undefined / 공백이 없는 빈 문자열도 falsy한 값이다.
    ```

  - null
    ### null
    아직 값이 없거나, 비어 있는 값을 표현할 떄 사용합니다.
    의도적으로 변수에 값이 없음을 표현하고 싶을 때 null을 사용합니다.
    ```jsx
    let matthew = null;
    console.log(matthew); // null
    ```
    null이 가지고 있는 특별한 점은 다른 원시 타입 값과 다르게 타입을 체크했을 때, ‘object’라는 결과가 반환 된다는 점 입니다.
    ```jsx
    typeof null === "object"; // true
    ```
    왜 이렇게 개발했을지 의문을 충분히 갖을 수 있습니다. 이는, 초창기 자바스크립트, 개발 시 발생한 문제이고 **`typeof null을 진짜로 null로 표현하고자 하는 많은 시도`**가 있지만, 호환성 문제가 다른 코드에 영향을 주어 받아들여지지 않았다고 합니다.
    [Why is typeof null "object"?](https://stackoverflow.com/questions/18808226/why-is-typeof-null-object)
  - undefined

    ### undefined

    `undefined`는 선언한 후 값을 할당하지 않은 변수. 즉, 아직 변수 또는 프로퍼티가 할당되지 않았음을 의미합니다.

    ```jsx
    let matthew;
    matthew; // undefined;

    const matthewObject = {};
    matthewObject.key; // undefined
    ```

  - number 🍠
    자바스크립트는 bigint가 등장하기 전에는, 모든 숫자를 number라는 타입에 넣기 시작했습니다.
    ECMAScript 표준에 따르면

    $$
    -(2^{53}-1)과 2^{53}-1
    $$

    사이의 값을 저장할 수 있다.

    ```jsx
    42; // 정수 리터럴
    3.14159; // 부동 소수점 리터럴
    0b1010; // 2진수 리터럴 (binary literal)
    0o755; // 8진수 리터럴 (octal literal)
    0x1a3; // 16진수 리터럴 (hexadecimal literal)

    // 천 단위를 읽기 쉽게 해주는 표현(가독성)
    1_000_000; // 숫자 구분 기호 (Numeric Separators)
    ```

    - JS에서 사칙연산을 하는 방법
      - 더하기
        ```jsx
        let sum = 5 + 3; // 결과는 8
        ```
      - 빼기
        ```jsx
        let difference = 10 - 6; // 결과는 4
        ```
      - 곱하기
        ```jsx
        let product = 4 * 7; // 결과는 28
        ```
      - 나누기
        ```jsx
        let quotient = 20 / 5; // 결과는 4
        ```
      - 나머지 구하기
        ```jsx
        let remainder = 10 % 3; // 결과는 1
        ```
      - 거듭 제곱
        1. 거듭제곱 연산자 \*\*
        2. Math.pow() 함수
        ```jsx
        let result = Math.pow(2, 3); // 2의 3제곱 = 8
        console.log(result); // 출력: 8
        ```

  - string

    ### string

    문자 시퀀스를 나타내는 기본 데이터 타입입니다. 문자열을 작성할 때는 작은따옴표(’), 큰따옴표(”), 또는 백틱(`)을 사용할 수 있습니다. 문자열은 불변(immutable)하며, 이는 문자열을 변경하려고 하면 항상 새로운 문자열이 생성된다는 것을 의미합니다.

  - symbol
    ### Symbol
    Symbol 타입은 ES6에서 새롭게 추가된 7번쨰 타입입니다. 중복되지 않는, 고유한 값들을 나타내기 위해서 만들어 졌습니다. 심벌을 생성하기 위해서는 `Symbol()`을 사용해야 합니다.
    왜 Symbol을 사용할까요?
    아래의 yongmin이라는 사람도 Matthew라는 영어 이름을 갖고 있고, sua 라는 사람 또한 Matthew 라는 영어 이름을 갖고 있다고 합시다.
    ```jsx
    const yongmin = "Matthew";
    const sua = "Matthew";
    ```
    둘을 `일치 연산자(===)`로 비교하면 어떻게 될까요?
    ```jsx
    yongmin === sua; // true
    ```
    당연히 true가 나옵니다.
    하지만, 우리가 원하는 시나리오는, 용민이라는 사람과, 수아라는 사람은 엄연히 다른 사람이기에, false가 나오기를 원한다고 가정해봅시다. 이런 경우 **`Symbol을 활용`**할 수 있습니다.
    ```jsx
    const yongmin = Symbol("Matthew");
    const sua = Symbol("Matthew");
    ```
    다시 `일치 연산자(===)`로 비교해봅시다.
    ```jsx
    yongmin === sua; // false
    ```
    이처럼 중복되지 않는 어떠한 고유한 값을 나타내고 싶으면 **`Symbol 타입`**을 활용하는 것이 매우 유용합니다.
  - bigint 🍠

    ### bigint

    매우 큰 정수를 표현하기 위해 사용됩니다. 기존의 Number 타입은 **2^53 - 1** (약 9,007,199,254,740,991)까지의 숫자만 안전하게 표현할 수 있지만, BigInt는 이 한계를 넘는 숫자까지 다룰 수 있습니다. BigInt는 임의의 크기를 가진 정수를 정확하게 표현할 수 있도록 설계되었습니다.

    - 다양한 `Array method`에 대해 정리해주세요. 🍠
      - sort 🍠
        배열을 **사전순 또는 숫자순**으로 정렬합니다. 기본적으로 문자열 기반으로 정렬되기 때문에 숫자를 정렬할 때는 정렬 함수를 제공해야 합니다.
      - join 🍠
        배열의 모든 요소를 **하나의 문자열**로 결합하고, 원하는 구분자를 넣을 수 있습니다. 배열을 변경하지 않고, 새로운 문자열을 반환합니다.
      - reverse 🍠
        배열의 순서를 **역순**으로 뒤집습니다. 원본 배열을 변경합니다.
      - splice 🍠
        - 배열의 기존 요소를 **추가하거나 제거**합니다. 특정 인덱스에서 요소를 삽입, 삭제 또는 교체할 수 있습니다.
        - 원본 배열을 변경합니다.
      - slice 🍠
        - 배열의 일부분을 **새로운 배열**로 반환합니다. 시작 인덱스와 종료 인덱스를 지정합니다.
        - 원본 배열은 변경되지 않습니다.
      - find 🍠
        - 배열에서 **조건을 만족하는 첫 번째 요소**를 반환합니다. 요소가 없으면 `undefined`를 반환합니다.
        - 원본 배열은 변경되지 않습니다.
      - filter 🍠
        - 주어진 조건을 만족하는 모든 요소를 **새로운 배열**로 반환합니다.
        - 원본 배열은 변경되지 않습니다.
      - map 🍠
        - 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과를 **새로운 배열**로 반환합니다.
        - 원본 배열은 변경되지 않습니다.
      - reduce 🍠
        - 배열의 각 요소에 대해 콜백 함수를 실행하여 **하나의 값**을 반환합니다. 축적된 결과를 유지하며, 최종 값을 반환합니다.
        - 원본 배열은 변경되지 않습니다.
      - some 🍠
        - 배열의 **최소 하나의 요소**가 주어진 조건을 만족하는지 검사하여 `true` 또는 `false`를 반환합니다.
        - 원본 배열은 변경되지 않습니다.
      - every 🍠
        - 배열의 **모든 요소**가 주어진 조건을 만족하는지 검사하여 `true` 또는 `false`를 반환합니다.
        - 원본 배열은 변경되지 않습니다.
      - forEach 🍠
        - 배열의 각 요소에 대해 주어진 함수를 실행하지만, 값을 반환하지 않습니다.
        - 배열을 순회하는 데 주로 사용되며, 배열을 변경하지 않습니다.

    ### 호이스팅 (Hoisting)

    호이스팅은 JavaScript의 고유한 동작 방식 중 하나로, 변수 선언과 함수 선언이 코드가 실제로 실행되기 전에 상단으로 끌어올려지는 현상을 의미합니다. 그러나 호이스팅은 코드의 실행 순서를 바꾸지는 않으며, 그저 선언이 끌어올려질 뿐입니다. 호이스팅은 변수와 함수 선언에 각각 다르게 적용됩니다. 값을 할당하기 전에 접근하면 undefined가 반환됩니다.

### DOM 조작 🍠

- 태그 가져오기
  - **`document.getElementById()`**: 주어진 `id` 속성에 해당하는 요소를 반환합니다.
    ```jsx
    let element = document.getElementById("myElement");
    ```
  - **`document.querySelector()`**: CSS 선택자 규칙을 사용해 첫 번째 일치하는 요소를 반환합니다.
    ```jsx
    let element = document.querySelector(".className");
    ```
  - **`document.querySelectorAll()`**: CSS 선택자에 일치하는 모든 요소를 NodeList로 반환합니다.
    ```jsx
    let elements = document.querySelectorAll("div");
    ```
- 이벤트 리스너 추가하기
  **`addEventListener()`** 메서드를 사용해 요소에 이벤트 리스너를 추가할 수 있습니다. 이벤트가 발생할 때 특정 작업을 수행합니다.
  ```jsx
  let button = document.getElementById("myButton");
  button.addEventListener("click", function () {
    alert("Button was clicked!");
  });
  ```
- 이벤트 리스너 제거하기
  `removeEventListener()`를 통해 제거할 수 있습니다. 단, 동일한 함수 참조가 필요합니다.
  ```jsx
  function handleClick() {
    alert("Button was clicked!");
  }
  button.addEventListener("click", handleClick);
  button.removeEventListener("click", handleClick);
  ```
- 키보드와 마우스 이벤트
  **키보드 이벤트**: `keydown`, `keypress`, `keyup` 이벤트를 통해 사용자가 키보드를 입력할 때 반응할 수 있습니다.
  ```jsx
  document.addEventListener("keydown", function (event) {
    console.log(`Key pressed: ${event.key}`);
  });
  ```
  **마우스 이벤트**: `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout` 등 다양한 마우스 관련 이벤트를 다룰 수 있습니다.
- 태그 속성 다루기
  **`getAttribute()`**, **`setAttribute()`**: 요소의 속성을 가져오거나 설정할 수 있습니다.
  **`removeAttribute()`**: 요소에서 속성을 제거합니다.
- 부모와 자식 태그 찾기
  **`parentNode`**: 특정 요소의 부모 요소를 반환합니다.
  **`children`**, **`firstElementChild`**, **`lastElementChild`**: 자식 요소를 참조할 수 있습니다.
- 새로운 태그 만들기
  `createElement()`를 사용해 새로운 HTML 요소를 동적으로 생성할 수 있습니다.
  ```jsx
  let newDiv = document.createElement("div");
  newDiv.textContent = "Hello, World!";
  document.body.appendChild(newDiv);
  ```
- 태그 복제하기
  **`cloneNode()`** 메서드를 사용해 기존 요소를 복제할 수 있습니다. `true`로 전달하면 모든 자식 요소도 복제됩니다.
