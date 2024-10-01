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
    **null이 가지고 있는 특별한 점은 다른 원시 타입 값과 다르게 타입을 체크했을 때, ‘object’라는 결과가 반환 된다는 점 입니다.**
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
    자바스크립트는 bigint가 등장하기 전에는, 모든 숫자를 number라는 타입에 넣기 시작했다.
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
    - JS에서 사칙연산을 하는 방법을 작성해주세요. 🍠
      - 더하기
        a+b
      - 빼기
        a-b
      - 곱하기
        a\*b
      - 나누기
        a/b
      - 나머지 구하기
        a%b
      - 거듭 제곱
        a\*\*b
    - JS에서 비교 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
      1. a==b : a와b의 값이 같으면 true 반환
      ( =과는 다름 ! )
      1. a ! = b : a와 b의 값이 다르면 true반환
      2. a===b : a와b의 값과 타입이 모두 같으면 true반환 (ex ) ‘3’===3 → false )
    - JS에서 증가/감소 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
      증가 : a++ : 1씩 증가
      감소 : a— : 1씩 감소
      하지만 여기서 전위 or 후위에 따라 달라짐 ( 위에는 후위연산자
      전위연산자 예시 : b = - - a
      이때는 a에 값을 1 감소하고 그 값을 b에 할당한다는 것이다. 사실상 둘이 같아질 수 밖에 없음
    - 연산자 우선순위에 대해 작성해주세요. 🍠
      괄호 () → \* , / (곱하기 나누기) → + , - (더하기 빼기)
  - string 🍠
    ### string
      <aside>
      💡 string 타입이란 ? 
      문자열을 표현하는데 사용되는 데이터 타입이다.
      객체로서 활용 가능한 property(length)와 method를 갖고있는 데이터 타입이다.
      method로는 replace(), charAt(), toUpperCase(), split() 이 있다.
      
      </aside>

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

      <aside>
      💡 임의 정밀도로 정수를 나타낼 수 있는 숫자 원시 값입니다. Big Int로 생각하면 편합니다. 소수는 나타낼 수 없지만 큰 정수(값)를 더 정확하게 나타낼 수 있기 떄문에 유용하게 사용됩니다. 
      가끔씩 TypeError는 BigInt값이 산술표현식의 일반 숫자와 혼합되거나 서로 암시적으로 변환되는 경우 발생합니다.
      
      // BigInt
      const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
      x + 1n === x + 2n; // 9007199254740992n는 9007199254740993n과 같지 않아 false입니다.
      
      // Number
      Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // 둘 다 9007199254740992 이기 때문에 true입니다.
      
      </aside>

    - 객체 타입 🍠

  ### 객체 타입 (Object Type)

  위의 7개 원시 타입 제외 자바스크립트를 이루고 있는 대부분의 타입이 바로 객체 타입입니다. 여기에는 배열, 함수, 정규식, 클래스 등이 포함된다.

  여기서 한 가지 주목할 것이 **`객체 타입은 참조를 전달`**하기에, **`참조 타입`**으로도 불린다는 것이다.

  ```jsx
  const hello1 = () => {};
  const hello2 = () => {};
  ```

  위의 내용을 보면 실제로, 함수의 내용이 같아 보입니다. 하지만, 서로의 참조가 다르기에 false가 반환됨을 알 수 있습니다.

  ```jsx
  hello1 === hello2; // false
  ```

  - 배열
    ### 배열 (Array)
    자바스크립트에서 배열을 만드는 방법
    1. **`배열 리터럴 []`**
    ```jsx
    // 배열 리터럴 [] 를 사용하여 만드는 방법
    let matthew = [];

    // 각각 인덱스를 [] 안에 넣어, 배열 안에 값을 할당할 수 있다.
    matthew[0] = "kim";
    matthew[1] = "yong";
    matthew[2] = "min";

    // i = 0 부터, matthew의 길이 총 3(['kim', 'yong', 'min'], i++ (하나씩 증가)
    for (let i = 0; i < matthew.length; i++) {
      console.log(matthew[i]);
    }
    ```
    ![스크린샷 2024-08-19 오후 2.37.59.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/60b44166-84c0-44c0-9b7c-59b0ccf931ce/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-08-19_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.37.59.png)
    ```jsx
    // 배열 생성 (초기 값 할당)
    let arr = ['kim', 'yong', 'min'];

    // 배열의 크기를 미리 지정하기
    let arr = [,,,]; // undefined가 출력된다.
    **크기만 정하고 값을 지정하지 않았기 때문이다**
    ```
    1. **Array() 생성자 함수로 배열 생성**
    배열 생성
    ```jsx
    // 배열 생성
    let arr = new Array();

    arr[0] = "kim";
    arr[1] = "yong";
    arr[2] = "min";

    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }

    // 값을 할당한 채로 배열을 생성할 수 있다.
    let arr = new Array("kim", "yong", "min");

    // 배열의 크기를 지정하여 생성
    let arr = new Array(3);

    // 배열의 크기를 지정하여 생성한 후 원하는 값으로 채워넣을 수 있다.
    new Array(20).fill(0);

    // output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ```
    - 다양한 `Array method`에 대해 정리해주세요. 🍠
      - sort 🍠🍠
        배열의 원소를 알파벳순으로 또는 지정된 함수에 따른 순서로 정렬하는 것 / 모든 원소를 문자열로 취급해서 사전적으로 정렬
        ### 1. 기본 `sort()` 메서드 사용 (문자열 기반 정렬)
        ```jsx
        var arr = [13, 12, 11, 10, 5, 3, 2, 1];
        arr.sort();
        console.log(arr); // [1, 10, 11, 12, 13, 2, 3, 5]
        ```
        ### 어떻게 작동하는가:
        - `arr.sort()`는 배열의 각 요소를 **문자열**로 변환한 뒤, 유니코드 값에 따라 정렬합니다.
        - 문자열로 변환되었을 때의 배열:
          ```jsx
          ["13", "12", "11", "10", "5", "3", "2", "1"];
          ```
        - 문자열로 정렬되면, 유니코드 값에 따라 첫 번째 문자를 기준으로 정렬되기 때문에 다음과 같은 결과가 나옵니다:여기서 숫자 `10`은 첫 번째 문자가 `1`로 시작하므로 `2`, `3`, `5`보다 앞에 오게 됩니다. 이로 인해 우리가 기대했던 수의 크기 순서가 아닌 문자열 기반 순서로 배열이 정렬됩니다.
          ```jsx
          ["1", "10", "11", "12", "13", "2", "3", "5"];
          ```
        ### 2. `sort()`에 비교 함수를 사용한 경우
        ```jsx
        var arr = [13, 12, 11, 10, 5, 3, 2, 1];
        arr.sort(function (a, b) {
          return a - b;
        });
        console.log(arr); // [1, 2, 3, 5, 10, 11, 12, 13]
        ```
        ### 어떻게 작동하는가:
        - `sort()` 메서드는 인수로 비교 함수를 받을 수 있습니다. 이 비교 함수는 두 개의 요소(`a`와 `b`)를 인수로 받습니다.
        - 함수의 반환 값에 따라 정렬 순서가 결정됩니다:
          - **`a - b`가 0보다 작을 때**: `a`가 `b`보다 작으므로 `a`가 먼저 옵니다.
          - **`a - b`가 0보다 클 때**: `b`가 `a`보다 작으므로 `b`가 먼저 옵니다.
          - **`a - b`가 0일 때**: `a`와 `b`가 같다고 간주되어 순서를 변경하지 않습니다.
        따라서 숫자의 크기에 따라 배열이 오름차순으로 정렬됩니다. 즉, 비교 함수는 숫자 간의 대소 관계를 기반으로 정렬을 수행합니다.
        ### 단계별 설명:
        - 비교 함수가 작동하면서 배열의 각 요소들이 대소 관계에 따라 적절한 순서로 배열되기 시작합니다.
          예: `a = 13`, `b = 12`일 때, `13 - 12 = 1`이므로 `12`가 먼저 오고 `13`이 나중에 오게 됩니다.
      - join 🍠
        배열 원소 전부를 하나의 문자열로 합치는 것
        ```jsx
        var arr = [1, 2, 3, 4];
        console.log(arr.join()); // 1,2,3,4
        console.log(arr.join("-")); // 1-2-3-4
        ```
      - reverse 🍠
        배열 순서를 거꾸로 바꾸는 것
      - splice 🍠
        배열의 특정위치에 요소를 추가하거나 삭제 → splice( index, 제거할 요소 개수, 배열에 추가될 요소)
        arr.splice(3, 2); ⇒ 3번째 인덱스부터 2개 제거
        arr.splice(2,1,”a”,”b”) ⇒ 2번째 인덱스에서 1개 제거 후 “a”,”b”추가
      - slice 🍠
        배열의 startIndex부터 endIndex까지(endIndex는 포함 x)에 대한 shallow copy를 새로운 배열 객체로 변환
        var newArr = arr.slice(3,6) ⇒ newArr에 arr에서 3번째 index부터 6번째 이전(5번째) inedx까지 반환
      - find 🍠
        배열에서 특정 조건을 만족하는 요소를 찾아 첫번째 요소로 반환하는 것
        ```jsx
        // 배열을 만듭니다.
        const colors = ["red", "green", "blue"];

        // 개발자가 직접 작성한 콜백 함수
        function findGreen(color) {
          return color === "green"; // 배열 요소가 "green"과 같은지 확인합니다.
        }

        // 배열에서 조건을 만족하는 첫 번째 요소를 찾습니다.
        const green = colors.find(findGreen);

        // 결과를 출력합니다.
        console.log(green); // 출력: "green"
        ```
      - filter 🍠🍠
        지정된 함수의 결과 값을 **true로 만드는 원소들로만** 구성된 별도의 배열을 반환하는 것
        ```jsx
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var isEven = function (value) {
          return value % 2 === 0;
        };
        var newArr = arr.filter(isEven);
        console.log(newArr); // [ 2, 4, 6, 8, 10 ]
        ```
      - map 🍠
        배열의 각 원소별로 지정된 함수를 **실행한 결과**로 구성된 새로운 배열을 반환하는 것
        ```jsx
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var isEven = function (value) {
          return value % 2 === 0;
        };
        var newArr = arr.map(isEven);
        console.log(newArr); // [ false, true, false, true, false, true, false, true, false, true ]
        ```
      - reduce 🍠🍠
        누산기 및 배열의 각 값(좌→우)에 대해 한 값으로 줄도록 함수를 적용
        ```jsx
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var value = arr.reduce(function (previousValue, currentValue, index) {
          return previousValue + currentValue;
        });
        console.log(value); // 55
        ```
      - some 🍠
        지정된 함수의 결과가 true일 때까지 배열의 각 원소를 반복
        ```jsx
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var isEven = function (value) {
          // value가 2의 배수이면 true를 반환한다.
          return value % 2 === 0;
        };
        console.log(arr.some(isEven));
        // true  하나라도 true이면 true를 return
        ```
      - every 🍠
        배열의 모든 요소가 제공한 함수로 구현된 테스트를 통과하는지를 테스트
        arr.every(isEven) ⇒ false [ 모든 요소가 ture이면 true를 리턴하고 그렇지 않으면 false리턴 ]
      - forEach 🍠
        배열의 각 원소별로 지정된 함수를 실행한다.
        ```jsx
        var arr = [1, 2, 3];
        arr.forEach(function (value) {
          console.log(value); // 1 2 3
        });
        ```
  - 함수
    ### 함수 (function)
    ### 함수 선언문
    ```jsx
    function subtraction(a, b) {
      return a - b;
    }

    subtraction(5, 3); // 2
    ```
    함수 선언문은 표현식이 아닌 일반 문(statement)으로 분류
    ### 함수 표현식
    ```jsx
    let subtraction2 = function (a, b) {
      return a - b;
    };

    subtraction2(5, 3); // 2
    ```
    함수 표현식은, 함수를 변수에 할당했다.
    ### 화살표 함수
    ```jsx
    let subtraction3 = (a, b) => {
      return a - b;
    };

    subtraction3(5, 3); // 2
    ```
    ES6에 추가된 화살표 함수도 많이 사용한다.
    ### 호이스팅 (Hoisting) 🍠
      <aside>
      💡 호이스팅에 대하여 정리해주세요, 위의 함수 선언문과, 표현식에서 예시로 든 코드를 바탕으로, 실습한 코드를 아래에 정리해주시고, 설명을 작성해주세요.
      
      </aside>

  - 클래스

    ### 클래스 (class)

    Student라는 클래스를 만들어 보겠습니다.

    **`class라는 키워드를 이용`**해서 **`선언`**을 해주고, **`constructor 생성자를 이용`**해서, **`나중에 object를 만들 떄 필요한 데이터를 전달`**해주면 됩니다.

    전달 받은 데이터를 class에 존재하는 필드에, 전달된 데이터를 바로 할당해줍니다.

    ```jsx
    // 클래스 선언
    class Student {
      constructor(name, school) {
        // 필드
        this.name = name;
        this.school = school;
      }
    }
    ```

    이번엔 전달받은, 클래스의 이름과, 학교명을 갖고, 자기소개를 하는 **`methods`**를 만들어보겠습니다. 만드는 방법 또한 매우 간단합니다.

    ```jsx
    // 클래스 선언
    class Student {
      constructor(name, school) {
        // 필드
        this.name = name;
        this.school = school;
      }

      // 메소드
      introduction() {
        console.log(
          `안녕하세요, ${this.name}입니다. ${this.school}에 다니고있습니다`
        );
      }
    }
    ```

    아래와 같이 만든 클래스를 이용하여, **`new 키워드를 통해 새로운 object를 만들 수 있습니다.`** name과, school을 맞는 위치에 같이 전달해주면 됩니다.

    ```jsx
    const matthew = new Student("matthew", "상명대학교");
    console.log(matthew.name);
    console.log(matthew.school);
    matthew.introduction();
    ```

    ![스크린샷 2024-08-19 오후 3.59.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/4df14540-faeb-4238-940f-241c42af9c83/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-08-19_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.59.50.png)

    ### 아래 내용에 대해 추가적으로 학습 후 정리해보아요! 🍠

    ```jsx
    // Student 클래스 정의
    class Student {
      constructor(name, school, gender, age, grade) {
        this.name = name;
        this.school = school;
        this.gender = gender;
        this.age = age;
        this.grade = grade;
      }

      // 소개 메서드
      introduction() {
        console.log(
          `안녕하세요, 저는 ${this.school}에 다니는 ${this.name}입니다.`
        );
        console.log(
          `저는 ${this.age}살이며, 성별은 ${this.gender}이고, ${this.grade}학년입니다.`
        );
      }
    }

    // 사용자로부터 입력받는 함수
    function askStudentInfo() {
      const name = prompt("이름을 입력하세요:");
      const school = prompt("학교 이름을 입력하세요:");
      const gender = prompt("성별을 입력하세요:");
      const age = prompt("나이를 입력하세요:");
      const grade = prompt("학년을 입력하세요:");

      // 새로운 Student 객체 생성
      const student = new Student(name, school, gender, age, grade);

      // 정보 출력
      console.log(student.name);
      console.log(student.school);
      console.log(student.gender);
      console.log(student.age);
      console.log(student.grade);
      student.introduction();
    }

    // 함수 실행
    askStudentInfo();
    ```

    - getter 🍠
      객체의 속성값을 반환하는 method
    - setter 🍠

      객체의 속성값을 설정, 변경하는 method

      ### DOM 조작 🍠

- 태그 가져오기
  - **`태그 이름`** 으로 접근하는 **`getElementsByTagName()`** 메서드
    > 기본형 요소명.getElementsByTagName("태그명")
    - class나 id를 지정하지 않은 DOM요소에 접근하려면 태그를 이용.
  - **`다양한 방법`** 으로 접근하는 **`querySelector(), querySelectorAll()`** 메서드
    > 기본형 노드.querySelector(선택자), 노드.querySelectorAll(선택자 또는 태그)
- 이벤트 리스너 추가하기
  **객체나 요소의 method에 event listener를 전달하는 방법**
  ***
  객체나 요소의 method에 event listener를 전달할 때 다음 메소드를 사용할 수 있다.
  1. **addEventListener() →**
  ```jsx
  대상객체.addEventListener(이벤트명, 실행할 event listener, 이벤트 전파 방식);
  ```
  2. **attachEvent() → 이건 잘 모르겠음**
  ***
  **addEventListener()** method는 거의 모든 브라우저에서 지원하는 event listener 등록을 위한 method
- 이벤트 리스너 제거하기
  removeEnevtListener를 사용하기 구현방식은 addEventListener와 동일
  ```jsx
  function clickBtn() {
    btn.removeEventListener("mouseover", mouseoverBtn);
    btn.removeEventListener("mouseout", mouseoutBtn);
    document.getElementById("text").innerHTML = "이벤트 리스너가 삭제됨";
  }
  ```
- 키보드와 마우스 이벤트
  키보드 :
  `keydown` 키보드 키를 눌렀을 때 발생
  `keyup` 키보드 키를 눌렀다 놓았을 때 발생
  `keypress` 키보드 키를 계속 누르고 있을 때 발생
  `ArrowLeft` `ArrowRight` `ArrowUp` `ArrowDown` 각 방향을 확인할 수 있음
  아래의 속성들은 다른 키와 동시에 누를 때 사용
  `event.ctrlKey` Ctrl키
  `event.altKey` Alt키
  `event.shiftKey` Shift키
  `event.metaKey` Win키
  마우스 :
  `mousedown` 클릭할 때 발생
  `mouseup` 클릭했다 뗄 때 발생
  `mousemove` 마우스를 움직일 때 발생
  `dblclick` 마우스 더블클릭 시 발생
- 태그 속성 다루기
  get / setAtrribute 속성 접근 / 추가 하는 방식
- 부모와 자식 태그 찾기
  `parentNode` ➡ 부모 노드 중 모든 노드를 반환한다.
  `parentElement` ➡ 부모 노드 중에 요소 노드를 반환한다.
  ### 👀 Example : html의 부모는 ..? → 이거 은근 중요함 암튼 그럼
  `document.documentElement.parentNode; // #document`
  `document.documentElement.parentElement; //null`
  ➡ html 태그의 부모노드는 document이다.
  ➡ document 노드는 요소노드가 아니므로, 두번째는 null이다.
  `childNodes` ➡ 모든 자식 노드를 반환한다.
  `children` ➡ 자식 노드 중 요소노드만 반환한다.
  > firstChild, firstElementChild / lastChild, lastElementChild로 접근한다.
  >
  > `firstChild, lastChild` ➡ 첫, 마지막 자식 노드이다.
  >
  > `firstElementChild, lastElementChild` ➡ 첫, 마지막 자식 '요소'노드이다.
  ```
  ul.firstChild;  // #text
  ul.lastChild;   // #text
  ul.firstElementChild; // <li id="red">…</li>
  ul.lastElementChild; // <li id="yellow">…</li>
  ```
- 새로운 태그 만들기
  createElement를 통해서 만들 수 있다.
  `let element = document.createElement(tagName);`
- 태그 복제하기
  cloneNode??
  **cloneNode에 인수로 true를 복잡하면 자식노드까지 복사되지만**
  **false나 아무것도 전달하지 않으면 자식노드는 복사되지 않는다.**
  ```jsx
  const newBlack = newLi3.cloneNode();
  newBlack; // <li></li>
  const newBlack2 = newLi3.cloneNode(true);
  newBlack2; // <li>black</li>
  ```
