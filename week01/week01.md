# 원시 타입

## number 🍠

자바스크립트는 bigint가 등장하기 전에는, 모든 숫자를 number라는 타입에 넣기 시작했다.

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
  - 더하기 : a+b
  - 빼기 : a-b
  - 곱하기 : a\*b
  - 나누기 : a/b
  - 나머지 구하기 : a%b
  - 거듭 제곱 : a\*\*b
- JS에서 비교 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
  - **`==` : 동등 연산자**
    피연산자가 서로 같으면 `true`를 반환합니다.
  - **`!=` : 부등 연산자**
    피연산자가 서로 다르면 `true`를 반환합니다.
  - **`===` : 일치 연산자**
    두 피연산자의 값과 타입이 모두 같은 경우 `true`를 반환합니다.
  - **`!==` : 불일지 연산자**
    피연산자의 값 또는 타입이 서로 다를 경우 `true`를 반환합니다.
  - **`>` : 큼**
    왼쪽 피연산자가 오른쪽 피연산자보다 크면 `true`를 반환합니다.
  - **`>=` : 크거나 같음**
    왼쪽 피연산자가 오른쪽 피연산자와 같거나 크면 `true`를 반환합니다.
  - **`<` : 작음**
    왼쪽 피연산자가 오른쪽 피연산자보다 작으면 `true`를 반환합니다.
  - **`<=` : 작거나 같음**
    왼쪽 피연산자가 오른쪽 피연산자와 같거나 작으면 `true`를 반환합니다.
- JS에서 증가/감소 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
  - **증가 연산자 - `++`**
    변수++ → 후위
    ++변수 → 전위
  - **감소 연산자 - `--`**
    변수-- → 후위
    --변수 → 전위
- 연산자 우선순위에 대해 작성해주세요. 🍠
  | 우선순위 | 연산자 유형                  | 결합성   | 연산자           |
  | -------- | ---------------------------- | -------- | ---------------- | ---- | ---- |
  | 19       | 그룹                         | 없음     | `( … )`          |
  | 18       | 멤버 접근                    | 좌결합성 | `… . …`          |
  |          | 계산된 멤버 접근             | 좌결합성 | `… [ … ]`        |
  |          | `new` (인자 리스트 제공)     | 없음     | `new … ( … )`    |
  |          | 함수 호출                    | 좌결합성 | `… ( … )`        |
  |          | 옵셔널 체이닝                | 좌결합성 | `?.`             |
  | 17       | `new` (인자 리스트 생략)     | 우결합성 | `new …`          |
  | 16       | 후위 증가                    | 없음     | `… ++`           |
  |          | 후위 감소                    |          | `… --`           |
  | 15       | 논리 NO-=                    | 우결합성 | `! …`            |
  |          | 비트 NOT                     |          | `~ …`            |
  |          | 단항 양부호                  |          | `+ …`            |
  |          | 단항 부정                    |          | `- …`            |
  |          | 전위 증가                    |          | `++ …`           |
  |          | 전위 감소                    |          | `-- …`           |
  |          | `typeof`                     |          | `typeof …`       |
  |          | `void`                       |          | `void …`         |
  |          | `delete`                     |          | `delete …`       |
  |          | `await`                      |          | `await …`        |
  | 14       | 거듭제곱                     | 우결합성 | `… ** …`         |
  | 13       | 곱하기                       | 좌결합성 | `… * …`          |
  |          | 나누기                       |          | `… / …`          |
  |          | 나머지                       |          | `… % …`          |
  | 12       | 더하기                       | 좌결합성 | `… + …`          |
  |          | 빼기                         |          | `… - …`          |
  | 11       | 비트 왼쪽 시프트             | 좌결합성 | `… << …`         |
  |          | 비트 오른쪽 시프트           |          | `… >> …`         |
  |          | 비트 부호 없는 오른쪽 시프트 |          | `… >>> …`        |
  | 10       | 미만                         | 좌결합성 | `… < …`          |
  |          | 이하                         |          | `… <= …`         |
  |          | 초과                         |          | `… > …`          |
  |          | 이상                         |          | `… >= …`         |
  |          | `in`                         |          | `… in …`         |
  |          | `instanceof`                 |          | `… instanceof …` |
  | 9        | 동등                         | 좌결합성 | `… == …`         |
  |          | 부등                         |          | `… != …`         |
  |          | 일치                         |          | `… === …`        |
  |          | 불일치                       |          | `… !== …`        |
  | 7        | 비트 AND                     | 좌결합성 | `… & …`          |
  | 7        | 비트 XOR                     | 좌결합성 | `… ^ …`          |
  | 6        | 비트 OR                      | 좌결합성 | `…               | …`   |
  | 5        | 논리 AND                     | 좌결합성 | `… && …`         |
  | 4        | 논리 OR                      | 좌결합성 | `…               |      | …`   |
  |          | 널 병합 연산자               | 좌결합성 | `… ?? …`         |
  | 3        | 조건 (삼항)                  | 우결합성 | `… ? … : …`      |
  | 2        | 할당                         | 우결합성 | `… = …`          |
  |          |                              |          | `… += …`         |
  |          |                              |          | `… -= …`         |
  |          |                              |          | `… **= …`        |
  |          |                              |          | `… *= …`         |
  |          |                              |          | `… /= …`         |
  |          |                              |          | `… %= …`         |
  |          |                              |          | `… <<= …`        |
  |          |                              |          | `… >>= …`        |
  |          |                              |          | `… >>>= …`       |
  |          |                              |          | `… &= …`         |
  |          |                              |          | `… ^= …`         |
  |          |                              |          | `…               | = …` |
  |          |                              |          | `… &&= …`        |
  |          |                              |          | `…               |      | = …` |
  |          |                              |          | `… ??= …`        |
  |          | `yield`                      | 우결합성 | `yield …`        |
  |          | `yield*`                     |          | `yield* …`       |
  | 1        | 쉼표 / 시퀀스                | 좌결합성 | `… , …`          |

## string 🍠

- 문자열 리터럴
  JavaScript는 문자열 값을 표현하기 위한 여러 가지 리터럴을 제공합니다.
  ```jsx
  "hello";
  "hello 안녕하세요"`hello world`; // template literal
  ```
  따옴표는 표기법일 뿐, 실제 저장되는 값에 영향을 미치지는 않습니다.
  예를 들어, `hello`라는 문자열을 표현하기 위 셋 중에 어떤 리터럴을 사용해도 실제 저장되는 값이 달라지지는 않습니다.
  ```jsx
  "hello" === "hello"; // true
  ```
- **Escape Sequence**
  JavaScript는 특수 문자를 문자열에 넣거나, 혹은 직접 유니코드 코드포인트를 사용해서 문자를 넣을 수 있도록 해주는 escape sequence를 제공합니다.
  | **표기법** | **문자**      |
  | ---------- | ------------- |
  | \'         | 홑따옴표      |
  | \"         | 쌍따옴표      |
  | \\         | 백슬래시      |
  | \n         | 라인 피드     |
  | \r         | 캐리지 리턴   |
  | \t         | 탭            |
  | \uXXXX     | 유니코드 문자 |
  | \u{X...}   | 유니코드 문자 |
  | \$         | 달러          |
  | \`         | 백틱          |
  위 escape sequence를 문자열 안에서 사용할 수 있습니다.
  ```jsx
  console.log("lorem 'ipsum'"); // lorem 'ipsum'
  console.log("line\nfeed"); // line(줄바꿈)feed
  console.log("\uD55C\uAE00"); // 한글
  console.log("\u{1F435}"); // 🐵
  ```
  다만 리터럴을 위해 사용한 따옴표와 **다른 종류의 따옴표**들은 문자열 내에서 자유롭게 쓸 수 있으므로 굳이 escape sequence로 표기해주어야 할 필요가 없습니다.
  위 표의 라인 피드(line feed)와 캐리지 리턴(carage return)은 **개행 문자**로, 우리가 보통 엔터를 누를 때 입력되는 문자입니다.
  각각을 줄여서 `LF`, `CR` 이라고 표기하고, 맥과 리눅스에서는 `LF`, 윈도우에서는 `CR+LF`가 개행문자로 사용됩니다.
- **문자열과 연산자**
  수 타입 뿐 아니라 문자열에 대해서도 여러 가지 연산자를 쓸 수 있습니다.
  ```jsx
  // 문자열 연결하기
  "hello" + "world"; // 'helloworld'
  // 등호 비교
  "hello" === "hello"; // true
  "hello" !== "hello"; // false
  // 유니코드 코드포인트 비교. 앞에서부터 한 글자씩 차례대로 비교합니다.
  "a" < "b"; // true
  "aaa" < "abc"; // true
  "a" < "Z"; // false
  "한글" < "한국어"; // false
  "2" < "10"; // false
  // 문자열을 배열로 바꾸기
  [..."hello"]; // ['h', 'e', 'l', 'l', 'o']
  ```
  위에서 알 수 있는 것처럼 유니코드 코드포인트 비교는 사전순 비교가 아니므로 주의해야 합니다.
  사전순 비교를 하려면 `localeCompare` 메소드를 사용하세요.
  ```jsx
  "b".localeCompare("a"); // 1
  "b".localeCompare("b"); // 0
  "b".localeCompare("z"); // -1
  "b".localeCompare("Z"); // -1
  "가나다".localeCompare("마바사"); // -1
  ```
- **속성 및 메소드**
  number 타입과 마찬가지로 string 타입도 래퍼 객체의 속성과 메소드를 사용할 수 있습니다.
  아래는 자주 쓰이는 몇 개의 속성과 메소드에 대한 예제입니다.
  ```jsx
  // 문자열의 길이 알아내기
  "hello".length; // 5
  // 여러 문자열 연결하기
  "hello".concat("fun", "javascript"); // 'hellofunjavascript'
  // 특정 문자열을 반복하는 새 문자열 생성하기
  "*".repeat(3); // '***'
  // 특정 문자열이 포함되어 있는지 확인하기
  "hello javascript".includes("hello"); // true
  "hello javascript".startsWith("he"); // true
  "hello javascript".endsWith("ript"); // true
  "hello javascript".indexOf("java"); // 6
  // 문자열의 특정 부분을 바꾼 새 문자열 생성하기
  "hello javascript".replace("java", "type"); // 'hello typescript'
  // 문자열의 일부를 잘라낸 새 문자열 생성하기
  "hello".slice(2, 4); // 'll'
  // 좌우 공백문자를 제거한 새 문자열 생성하기
  "   hello  ".trim(); // 'hello'
  "   hello  ".trimLeft(); // 'hello  '
  "   hello  ".trimRight(); // '   hello'
  // 좌우 공백문자를 추가한 새 문자열 생성하기
  "hello".padStart(8); // '   hello'
  "hello".padEnd(8); // 'hello   '
  // 문자열을 특정 문자를 기준으로 잘라 새 배열 생성하기
  "hello!fun!javavscript".split("!"); // ['hello', 'fun', 'javascript']
  "hello".split(""); // ['h', 'e', 'l', 'l', 'o']
  // 모든 문자를 소문자, 혹은 대문자로 변환한 새 문자열 생성하기
  "Hello JavaScript".toLowerCase(); // 'hello javascript'
  "Hello JavaScript".toUpperCase(); // 'HELLO JAVASCRIPT'
  ```

## bigint 🍠

`BigInt`는 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형입니다.

정수 리터럴 끝에 `n`을 붙이거나 함수 `BigInt`를 호출하면 문자열이나 숫자를 가지고 `BigInt` 타입의 값을 만들 수 있습니다.

```jsx
const bigint = 1234567890123456789012345678901234567890n;
const sameBigint = BigInt("1234567890123456789012345678901234567890");
const bigintFromNumber = BigInt(10); // 10n과 동일합니다.
```

- 연산자
  `BigInt`는 대개 일반 숫자와 큰 차이 없이 사용할 수 있습니다.
  ```jsx
  1n + 2n; // 3
  5n / 2n; // 2
  ```
  위 예시에서 나눗셈 연산 `5/2`의 결과엔 소수부가 없다는 점에 주의해야 합니다.
  `BigInt`형 값을 대상으로 한 연산은 `BigInt`형 값을 반환합니다.
  `BigInt`형 값과 일반 숫자를 섞어서 사용할 순 없습니다.
  ```jsx
  1n + 2; // Error: Cannot mix BigInt and other types
  ```
  일반 숫자와 섞어서 써야 하는 상황이라면 `BigInt()`나 `Number()`를 사용해 명시적으로 형 변환을 해주면 됩니다.
  ```jsx
  let bigint = 1n;
  let number = 2;

  // 숫자를 bigint로
  bigint + BigInt(number); // 3
  // bigint를 숫자로
  Number(bigint) + number; // 3
  ```
  bigint가 너무 커서 숫자형에서 허용하는 자릿수를 넘으면 나머지 비트는 자동으로 잘려 나갑니다. 이런 점을 염두에 두고 형 변환을 해야 합니다.
- 비교연산자

  비교 연산자 `<`, `>`는 bigint와 일반 숫자 모두에 사용할 수 있습니다.

  ```jsx
  2n > 1n; // true
  2n > 1; // true
  ```

  그런데 비교하려는 대상이 다른 타입에 속하면 `==`를 사용할 때는 같을지 모르지만 `===`를 사용할 때는 다르다고 판단됩니다.

  ```jsx
  1 == 1n; // true
  1 === 1n; // false
  ```

- 논리 연산
  bigint는 `if` 안이나 다른 논리 연산자와 함께 사용할 때 일반 숫자와 동일하게 행동합니다.
  `if`안에서 `0n`은 false이고 다른 값들은 true로 평가되죠.
  ```jsx
  if (0n) {
    // 절대 실행되지 않습니다.
  }
  ```
  `||`, `&&` 등의 논리 연산자를 bigint에 적용할 때도 일반 숫자와 유사하게 동작합니다.
  ```jsx
  1n || 2; // 1 (1n은 truthy로 판단됩니다.)
  0n || 2; // 2 (0n은 falsy로 판단됩니다.)
  ```

# 객체 타입 (Object Type)

위의 7개 원시 타입 제외 자바스크립트를 이루고 있는 대부분의 타입이 바로 객체 타입입니다. 여기에는 배열, 함수, 정규식, 클래스 등이 포함된다.

여기서 한 가지 주목할 것이 `객체 타입은 참조를 전달`하기에, `참조 타입`으로도 불린다는 것이다.

```jsx
const hello1 = () => {};
const hello2 = () => {};
```

위의 내용을 보면 실제로, 함수의 내용이 같아 보입니다. 하지만, 서로의 참조가 다르기에 false가 반환됨을 알 수 있습니다.

```jsx
hello1 === hello2; // false
```

## 다양한 Array method에 대해 정리해주세요. 🍠

### sort 🍠

`sort()` 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.

정렬은 stable sort가 아닐 수 있습니다.

기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.

```jsx
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
```

- **구문**
  ```jsx
  arr.sort([compareFunction]);
  ```
  - 매개변수
    `compareFunction`
    정렬 순서를 정의하는 함수. 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬됩니다.
  - 반환 값
    정렬한 배열. 원 배열이 정렬되는 것에 유의하세요. 복사본이 만들어지는 것이 아닙니다.
- compareFunction
  `compareFunction`이 제공되지 않으면 요소를 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬됩니다.
  예를 들어 "바나나"는 "체리"앞에옵니다.
  숫자 정렬에서는 9가 80보다 앞에 오지만 숫자는 문자열로 변환되기 때문에 "80"은 유니 코드 순서에서 "9"앞에옵니다.
  문자열 대신 숫자를 비교하기 위해 compare 함수는 a에서 b를 뺄 수 있습니다. 다음 함수는 배열을 오름차순으로 정렬합니다 (Infinity 및 NaN이 포함되어 있지 않은 경우).
  ```jsx
  function compareNumbers(a, b) {
    return a - b;
  }
  ```
  sort 메소드는 함수식 (및 클로저)와 함께 편리하게 사용할 수 있습니다.
  ```jsx
  var numbers = [4, 2, 5, 1, 3];
  numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(numbers);

  // [1, 2, 3, 4, 5]
  ```
- 예제
  ```jsx
  var stringArray = ["Blue", "Humpback", "Beluga"];
  var numericStringArray = ["80", "9", "700"];
  var numberArray = [40, 1, 5, 200];
  var mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

  function compareNumbers(a, b) {
    return a - b;
  }

  console.log("stringArray:", stringArray.join());
  console.log("Sorted:", stringArray.sort());

  console.log("numberArray:", numberArray.join());
  console.log("Sorted without a compare function:", numberArray.sort());
  console.log("Sorted with compareNumbers:", numberArray.sort(compareNumbers));

  console.log("numericStringArray:", numericStringArray.join());
  console.log("Sorted without a compare function:", numericStringArray.sort());
  console.log(
    "Sorted with compareNumbers:",
    numericStringArray.sort(compareNumbers)
  );

  console.log("mixedNumericArray:", mixedNumericArray.join());
  console.log("Sorted without a compare function:", mixedNumericArray.sort());
  console.log(
    "Sorted with compareNumbers:",
    mixedNumericArray.sort(compareNumbers)
  );
  ```

## join 🍠

**`Join()`** 메서드는 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환합니다.

배열에 항목이 하나만 있는 경우, 해당 항목은 구분 기호를 사용하지 않고 반환됩니다.

```jsx
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"
```

- 구문
  ```jsx
  join();
  join(separator);
  ```
  - 매개변수
    `separator`
    배열의 인접한 요소의 각 쌍을 구분하는 문자열입니다. 생략되면 배열 요소는 쉼표(",")로 구분됩니다.
  - 반환값
    배열의 모든 요소들을 연결한 하나의 문자열을 반환합니다. 만약 `arr.length` 가 `0`이라면, 빈 문자열을 반환합니다.
- 설명
  문자열로 변환된 모든 배열 요소가 하나의 문자열로 결합됩니다. 요소가 `undefined`, `null`인 경우, "null" 또는 "undefine" 문자열 대신 빈 문자열로 변환됩니다.
  ```jsx
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
  console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
  ```
  배열이 순환 배열(자체 요소를 포함)인 경우, 브라우저는 순환 참조를 무시하여 무한 재귀를 방지합니다.
  ```jsx
  const arr = [];
  arr.push(1, [3, arr, 4], 2);
  console.log(arr.join(";")); // 1;3,,4;2
  ```
- 예제
  ```jsx
  const a = ["바람", "물", "불"];
  a.join(); // '바람,물,불'
  a.join(", "); // '바람, 물, 불'
  a.join(" + "); // '바람 + 물 + 불'
  a.join(""); // '바람물불'
  ```

## reverse 🍠

**`reverse()`** 메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.

원본 array가 바뀜에 주의해야합니다.

```jsx
const array1 = ["one", "two", "three"];
console.log("array1:", array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array1);
// Expected output: "array1:" Array ["three", "two", "one"]
```

- 구문
  ```jsx
  a.reverse();
  ```
  - 반환값
    순서가 반전된 배열
- 설명
  `reverse` 메서드는 호출한 배열을 반전하고 원본 배열을 변형하며 그 참조를 반환합니다
- 예시
  ```jsx
  const a = [1, 2, 3];
  console.log(a); // [1, 2, 3]

  a.reverse();
  console.log(a); // [3, 2, 1]
  ```

## splice 🍠

**`splice()`** 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.

```jsx
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

- 구문
  ```jsx
      array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

  ```
  - 매개변수
    `start`
    배열의 변경을 시작할 인덱스입니다. 배열의 길이보다 큰 값이라면 실제 시작 인덱스는 배열의 길이로 설정됩니다. 음수인 경우 배열의 끝에서부터 요소를 세어나갑니다(원점 -1, 즉 -n이면 요소 끝의 n번째 요소를 가리키며 `array.length - n`번째 인덱스와 같음). 값의 절대값이 배열의 길이 보다 큰 경우 0으로 설정됩니다.
    `deleteCount`
    배열에서 제거할 요소의 수입니다. `deleteCount`를 생략하거나 값이 `array.length - start`보다 크면 `start`부터의 모든 요소를 제거합니다. `deleteCount`가 0 이하라면 어떤 요소도 제거하지 않습니다. 이 때는 최소한 하나의 새로운 요소를 지정해야 합니다.
    `item1, item2, <em>...</em>`
    배열에 추가할 요소입니다. 아무 요소도 지정하지 않으면 `splice()`는 요소를 제거하기만 합니다.
  - 반환 값
    제거한 요소를 담은 배열. 하나의 요소만 제거한 경우 길이가 1인 배열을 반환합니다. 아무 값도 제거하지 않았으면 빈 배열을 반환합니다.
- 설명
  만약 제거할 요소의 수와 추가할 요소의 수가 다른 경우 배열의 길이는 달라집니다.
- 예제
  - 하나도 제거하지 않고 , 2번 인덱스에 “drum”추가
    ```jsx
    var myFish = ["angel", "clown", "mandarin", "sturgeon"];
    myFish.splice(2, 0, "drum");
    ```
  - 2번 인덱스를 포함해서 이후의 모든 요소 제거
    ```jsx
    var myFish = ["angel", "clown", "mandarin", "sturgeon"];
    var removed = myFish.splice(2);

    // myFish is ["angel", "clown"]
    // removed is ["mandarin", "sturgeon"]
    ```

## slice 🍠

**`slice()`** 메서드는 어떤 배열의 `begin` 부터 `end` 까지(`end` 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.

원본 배열은 바뀌지 않습니다.

```jsx
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

- 구문
  ```jsx
      arr.slice([begin[, end]])
  ```
  - 매개변수
    `begin`
    0을 시작으로 하는 추출 시작점에 대한 인덱스를 의미합니다. 음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다.`slice(-2)` 는 배열에서 마지막 두 개의 엘리먼트를 추출합니다.`begin`이 `undefined`인 경우에는, 0번 인덱스부터 `slice` 합니다. `begin`이 배열의 길이보다 큰 경우에는, 빈 배열을 반환합니다.
    `end`
    추출을 종료 할 0 기준 인덱스입니다. `slice` 는 `end` 인덱스를 제외하고 추출합니다. 예를 들어, `slice(1,4)`는 두번째 요소부터 네번째 요소까지 (1, 2 및 3을 인덱스로 하는 요소) 추출합니다. 음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. 예를들어 `slice(2,-1)` 는 세번째부터 끝에서 두번째 요소까지 추출합니다. `end`가 생략되면 `slice()`는 배열의 끝까지(`arr.length`) 추출합니다.
    만약 `end` 값이 배열의 길이보다 크다면, `slice()`는 배열의 끝까지(`arr.length`) 추출합니다.
  - 반환 값
    추출한 요소를 포함한 새로운 배열.
- 설명
  `slice()`는 원본을 대체하지 않습니다. 원본 배열에서 요소의 얕은 복사본을 반환합니다. 원본 배열의 요소는 다음과 같이 반환 된 배열에 복사됩니다:
  객체 참조(및 실제 객체가 아님)의 경우, `slice()`는 객체 참조를 새 배열로 복사합니다. 원본 배열과 새 배열은 모두 동일한 객체를 참조합니다. 참조 된 객체가 변경되면 변경 내용은 새 배열과 원래 배열 모두에서 볼 수 있습니다.
  `String` 및 `Number` 객체가 아닌 문자열과 숫자의 경우 `slice()`는 문자열과 숫자를 새 배열에 복사합니다. 한 배열에서 문자열이나 숫자를 변경해도 다른 배열에는 영향을 주지 않습니다
  새 요소를 두 배열 중 하나에 추가해도 다른 배열은 영향을 받지 않습니다.
- 예제
  ```jsx
  let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  let citrus = fruits.slice(1, 3);

  // fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
  // citrus contains ['Orange','Lemon']
  ```

## find 🍠

**`find()`** 메서드는 제공된 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환합니다.

테스트 함수를 만족하는 값이 없으면 `undefined`가 반환됩니다.

- 배열에서 찾은 요소의 **인덱스**가 필요한 경우, `findIndex()`를 사용.
- **값의 인덱스**를 찾아야 하는 경우, `indexOf()`를 사용. (`findIndex()`와 유사하지만, 테스트 함수를 사용하는 것 대신 각 요소가 값과 동일한지 확인.)
- 배열에 값이 **존재**하는지 찾아야 하는 경우, `includes()`를 사용. 이 역시 테스트 함수를 사용하는 것 대신 각 요소가 값과 동일한지 확인.
- 제공된 테스트 함수를 만족하는 요소가 있는지 찾아야 하는 경우, `some()`을 사용.
- 만약 주어진 테스트 함수를 만족하는 모든 요소를 찾고 싶으면 `filter()`을 사용.

```jsx
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
```

- 구문
  ```jsx
  find(callbackFn);
  find(callbackFn, thisArg);
  ```
  - 매개변수
    `callback`배열의 각 요소에 대해 실행할 함수입니다. 일치하는 요소를 찾았으면 참값을 반환하고, 그렇지 않으면 거짓 값을 반환해야 합니다. 함수는 다음 인수를 사용하여 호출됩니다.
    `element`
    배열에서 현재 처리되고 있는 요소.
    `index`
    배열에서 현재 처리되고 있는 요소의 인덱스.
    `array`
    `find()`가 호출된 배열.
    `thisArg`
    `callbackFn`을 실행할 때 `this`로 사용할 값입니다.
  - 반환 값
    제공된 테스트 함수를 만족하는 배열의 첫 번째 요소입니다. 테스트 함수를 만족하는 요소가 없으면, `undefined`가 반환됩니다.
- 설명
  `find()` 메서드는 순회 메서드입니다. 이 메서드는 `callbackFn`이 참 같은 값을 반환할 때까지, 오름차순 인덱스로 순서로 배열의 각 요소에 대해 제공된 `callbackFn` 함수를 한 번씩 호출합니다.
  그런 다음 `find()`는 해당 요소를 반환하고 배열 순회를 중지합니다. `callbackFn`이 참 같은 값을 반환하지 않으면, `find()`는 `undefined`를 반환합니다.
- 예제
  - 배열에서 속성 중 하나로 객체 찾기
    ```jsx
    const inventory = [
      { name: "apples", quantity: 2 },
      { name: "bananas", quantity: 0 },
      { name: "cherries", quantity: 5 },
    ];

    function isCherries(fruit) {
      return fruit.name === "cherries";
    }

    console.log(inventory.find(isCherries));
    // { name: 'cherries', quantity: 5 }
    ```
  - 화살표 함수 및 구조 분해 사용
    ```jsx
    const inventory = [
      { name: "apples", quantity: 2 },
      { name: "bananas", quantity: 0 },
      { name: "cherries", quantity: 5 },
    ];

    const result = inventory.find(({ name }) => name === "cherries");

    console.log(result); // { name: 'cherries', quantity: 5 }
    ```
  - 배열에서 소수 찾기
    ```jsx
    function isPrime(element, index, array) {
      let start = 2;
      while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
          return false;
        }
      }
      return element > 1;
    }

    console.log([4, 6, 8, 12].find(isPrime)); // undefined, 소수 없음
    console.log([4, 5, 8, 12].find(isPrime)); // 5
    ```

## filter 🍠

`filter()` 메서드는 주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다.

```jsx
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

- 구문
  ```jsx
  filter(callbackFn);
  filter(callbackFn, thisArg);
  ```
  - 매개변수
    `callbackFn`
    배열의 각 요소에 대해 실행할 함수입니다. 결과 배열에 요소를 유지하려면 참값을 반환하고 그렇지 않으면 거짓 값을 반환해야 합니다. 이 함수는 다음 인수를 사용하여 호출됩니다.
    `element`
    배열에서 처리 중인 현재 요소.
    `index`
    배열에서 처리 중인 현재 요소의 인덱스.
    `array`
    `filter()`가 호출된 배열.
    `thisArg`
    `callbackFn`을 실행할 때 `this` 값으로 사용할 값입니다.
  - 반환 값
    주어진 배열의 일부에 대한 얕은 복사본으로, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다. 테스트를 통과한 요소가 없으면 빈 배열이 반환됩니다.
- 설명
  `filter()` 메서드는 순회 메서드입니다. 이 메서드는 배열의 각 요소에 대해 제공된 `callbackFn` 함수를 한 번씩 호출하고, `callbackFn`이 참값을 반환하는 모든 값으로 새 배열을 구성합니다. `callbackFn` 테스트를 통과하지 못한 배열 요소는 새 배열에 포함되지 않습니다.
- 예제
  ```jsx
  function isBigEnough(value) {
    return value >= 10;
  }

  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // 필터링된 값은 [12, 130, 44]
  ```

## map 🍠

**`map()`** 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

```jsx
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

- 구문
  ```jsx
      arr.map(callback(currentValue[, index[, array]])[, thisArg])

  ```
  - 매개변수
    `callback`
    새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집니다.
    `currentValue`
    처리할 현재 요소.
    `index`
    처리할 현재 요소의 인덱스.
    `array`
    `map()`을 호출한 배열.
    `thisArg`
    `callback`을 실행할 때 `this`로 사용되는 값.
  - 반환 형
    배열의 각 요소에 대해 실행한 `callback`의 결과를 모은 새로운 배열.
- 설명
  `map`은 `callback` 함수를 **각각의 요소에 대해 한번씩** 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만듭니다. `callback` 함수는 ([`undefined`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)도 포함해서) 배열 값이 들어있는 인덱스에 대해서만 호출됩니다. 즉, 값이 삭제되거나 아직 값이 할당/정의되지 않은 인덱스에 대해서는 호출되지 않습니다.
  `map`은 호출한 배열의 값을 변형하지 않습니다. 단, `callback` 함수에 의해서 변형될 수는 있습니다.
- 예제
  - 배열에 들어있는 숫자들의 제곱근을 구하여 새로운 배열을 만들기
    ```jsx
    var numbers = [1, 4, 9];
    var roots = numbers.map(Math.sqrt);
    // roots는 [1, 2, 3]
    // numbers는 그대로 [1, 4, 9]
    ```
  - 배열 속 객체를 재구성하기
    ```jsx
    var kvArray = [
      { key: 1, value: 10 },
      { key: 2, value: 20 },
      { key: 3, value: 30 },
    ];

    var reformattedArray = kvArray.map(function (obj) {
      var rObj = {};
      rObj[obj.key] = obj.value;
      return rObj;
    });
    // reformattedArray는 [{1:10}, {2:20}, {3:30}]

    // kvArray는 그대로
    // [{key:1, value:10},
    //  {key:2, value:20},
    //  {key:3, value: 30}]
    ```

## reduce 🍠

**`reduce()`** 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

```jsx
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
```

**리듀서** 함수는 네 개의 인자를 가집니다.

1. 누산기 (acc)
2. 현재 값 (cur)
3. 현재 인덱스 (idx)
4. 원본 배열 (src)

리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 됩니다.

- 구문
  ```jsx
  arr.reduce(callback[, initialValue])
  ```
  - 매개변수
  [`callback`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#callback)
  배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받습니다.
  [`accumulator`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#accumulator)
  누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 `initialValue`를 제공한 경우에는 `initialValue`의 값입니다.
  [`currentValue`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#currentvalue)
  처리할 현재 요소.
  [`currentIndex`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#currentindex)
  처리할 현재 요소의 인덱스.
  `initialValue`를 제공한 경우 0, 아니면 1부터 시작합니다.
  [`array`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#array)
  `reduce()`를 호출한 배열.
  [`initialValue`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#initialvalue)
  `callback`의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 `reduce()`를 호출하면 오류가 발생합니다.
  - 반환 형
  누적 계산의 결과 값
- 설명
  `reduce()`는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 `callback` 함수를 한 번씩 실행합니다.
- 작동방식
  ```jsx
  [0, 1, 2, 3, 4].reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return accumulator + currentValue;
  });
  ```
  콜백은 4번 호출됩니다. 각 호출의 인수와 반환값은 다음과 같습니다.
  | `callback` | `accumulator` | `currentValue` | `currentIndex` | `array`           | 반환 값 |
  | ---------- | ------------- | -------------- | -------------- | ----------------- | ------- |
  | 1번째 호출 | `0`           | `1`            | `1`            | `[0, 1, 2, 3, 4]` | `1`     |
  | 2번째 호출 | `1`           | `2`            | `2`            | `[0, 1, 2, 3, 4]` | `3`     |
  | 3번째 호출 | `3`           | `3`            | `3`            | `[0, 1, 2, 3, 4]` | `6`     |
  | 4번째 호출 | `6`           | `4`            | `4`            | `[0, 1, 2, 3, 4]` | `10`    |
  `reduce()`가 반환하는 값으로는 마지막 콜백 호출의 반환값(`10`)을 사용합니다.
  `reduce()`의 두 번째 인수로 초기값을 제공하는 경우, 결과는 다음과 같습니다:
  ```jsx
  [0, 1, 2, 3, 4].reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return accumulator + currentValue;
  },
  10);
  ```
  |            | `accumulator` | `currentValue` | `currentIndex` | `array`           | 반환값 |
  | ---------- | ------------- | -------------- | -------------- | ----------------- | ------ |
  | 1번째 호출 | `10`          | `0`            | `0`            | `[0, 1, 2, 3, 4]` | `10`   |
  | 2번째 호출 | `10`          | `1`            | `1`            | `[0, 1, 2, 3, 4]` | `11`   |
  | 3번째 호출 | `11`          | `2`            | `2`            | `[0, 1, 2, 3, 4]` | `13`   |
  | 4번째 호출 | `13`          | `3`            | `3`            | `[0, 1, 2, 3, 4]` | `16`   |
  | 5번째 호출 | `16`          | `4`            | `4`            | `[0, 1, 2, 3, 4]` | `20`   |
  이 때 `reduce()`가 결과로 반환하는 값은 `20`입니다.
- 예제
  - 객체 내의 값 인스턴스 개수 세기
    ```jsx
    var names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

    var countedNames = names.reduce(function (allNames, name) {
      if (name in allNames) {
        allNames[name]++;
      } else {
        allNames[name] = 1;
      }
      return allNames;
    }, {});
    // countedNames is:
    // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
    ```
  - 속성으로 객체 분류하기
    ```jsx
    var people = [
      { name: "Alice", age: 21 },
      { name: "Max", age: 20 },
      { name: "Jane", age: 20 },
    ];

    function groupBy(objectArray, property) {
      return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
    }

    var groupedPeople = groupBy(people, "age");
    // groupedPeople is:
    // {
    //   20: [
    //     { name: 'Max', age: 20 },
    //     { name: 'Jane', age: 20 }
    //   ],
    //   21: [{ name: 'Alice', age: 21 }]
    // }
    ```

## some 🍠

**`some()`** 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트합니다.

만약 배열에서 주어진 함수가 true을 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다.

이 메서드는 배열을 변경하지 않습니다.

```jsx
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
```

- 구문
  ```jsx
  // 화살표 함수
  some((element) => {
    /* … */
  });
  some((element, index) => {
    /* … */
  });
  some((element, index, array) => {
    /* … */
  });

  // 콜백 함수
  some(callbackFn);
  some(callbackFn, thisArg);

  // 인라인 콜백 함수
  some(function (element) {
    /* … */
  });
  some(function (element, index) {
    /* … */
  });
  some(function (element, index, array) {
    /* … */
  });
  some(function (element, index, array) {
    /* … */
  }, thisArg);
  ```
  - 매개변수
  `callbackFn`
  배열의 각 요소에 대해 실행할 함수. 이 함수는 요소가 시험을 통과하면 [참 같은 값](https://developer.mozilla.org/ko/docs/Glossary/Truthy)을 반환하며, 그렇지 않으면 거짓인 값을 반환합니다.
  다음의 인자와 함께 함수를 호출합니다.
  [`element`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some#element)
  처리할 배열 내 현재 요소
  [`index`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some#index)
  처리할 현재 요소의 인덱스
  [`array`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some#array)
  `some`을 호출한 배열
  `thisArg`
  `callbackFn`을 실행할 때 `this`로 사용하는 값.
  - 반환 형
  콜백 함수가 적어도 배열 중 하나의 요소에 대해 [참인 값](https://developer.mozilla.org/ko/docs/Glossary/Truthy)을 반환하면 `true`를 반환하며, 그렇지 않으면 `false`를 반환합니다.
- 설명
  `some` 메서드는 [반복 메서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)입니다. 이 메서드는 주어진 `callbackFn`함수가 [참 같은 값](https://developer.mozilla.org/ko/docs/Glossary/Truthy)을 반환할 때까지 배열 안에 있는 각각의 요소마다 한 번씩 호출합니다. 만약 그러한 요소를 찾았으면 `some()` 메서드는 그 즉시 `true`를 반환하며 배열 순회를 멈춥니다. 그렇지 않고 `callbackFn`이 모든 요소에 대해 [거짓같은 값](https://developer.mozilla.org/ko/docs/Glossary/Falsy)을 반환하면 `some()`은 `false`를 반환합니다.
  `some()`은 수학에서 존재 한정자와 같은 역할을 합니다. 특히 빈 배열의 경우 모든 조건에 대해 `false`를 반환합니다.
- 예제
  ```jsx
  const fruits = ["apple", "banana", "mango", "guava"];

  function checkAvailability(arr, val) {
    return arr.some((arrVal) => val === arrVal);
  }

  checkAvailability(fruits, "kela"); // false
  checkAvailability(fruits, "banana"); // true
  ```

## every 🍠

인스턴스의 **`every()`** 메서드는 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 테스트합니다. 이 메서드는 불리언 값을 반환합니다.

```jsx
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
```

- 구문
  ```jsx
  every(callbackFn);
  every(callbackFn, thisArg);
  ```
  - 매개변수
  [`callbackFn`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every#callbackfn)
  배열의 각 요소에 대해 실행할 함수입니다. 요소가 테스트를 통과하면 [참](https://developer.mozilla.org/ko/docs/Glossary/Truthy) 값을 반환하고, 그렇지 않으면 [거짓](https://developer.mozilla.org/ko/docs/Glossary/Falsy) 값을 반환해야 합니다. 함수는 다음 인자를 사용하여 호출됩니다.
  [`element`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every#element)
  배열에서 처리되는 현재 요소.
  [`index`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every#index)
  처리되는 현재 요소의 인덱스.
  [`array`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every#array)
  `every()`를 호출한 배열.
  [`thisArg`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every#thisarg)
  `callbackFn`을 실행할 때 `this`로 사용하는 값.
  - 반환 형
  `callbackFn`이 모든 배열 요소에 대해 [참](https://developer.mozilla.org/ko/docs/Glossary/Truthy) 값을 반환하면 `true`입니다. 그렇지 않으면 `false`입니다.
- 설명
  `every()` 메서드는 [순회 메서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#%EC%88%9C%ED%9A%8C_%EB%A9%94%EC%84%9C%EB%93%9C)입니다. 배열의 각 요소에 대해 제공된 `callbackFn` 함수를 한 번씩 호출하고, `callbackFn`이 [거짓](https://developer.mozilla.org/ko/docs/Glossary/Falsy) 값을 반환할 때까지 호출을 반복합니다. [거짓](https://developer.mozilla.org/ko/docs/Glossary/Falsy) 요소가 발견되면 `every()`는 즉시 `false`를 반환하고 배열 순회를 중지합니다. 그렇지 않고 `callbackFn`이 모든 요소에 대해 [참](https://developer.mozilla.org/ko/docs/Glossary/Truthy) 값을 반환하면, `every()`는 `true`를 반환합니다.
  `every`는 수학의 "모든 ~에 대해(for all)" 양화사처럼 작동합니다. 특별히 빈 배열은 `true`를 반환합니다.
- 예제
  ```jsx
  const isSubset = (array1, array2) =>
    array2.every((element) => array1.includes(element));

  console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
  console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
  ```

## forEach 🍠

**`forEach()`** 메서드는 각 배열 요소에 대해 제공된 함수를 한 번씩 실행합니다.

```jsx
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

- 구문
  ```jsx
  forEach(callbackFn);
  forEach(callbackFn, thisArg);
  ```
  - 매개변수
  [`callbackFn`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#callbackfn)
  배열의 각 요소에 대해 실행할 함수입니다. 반환값은 사용되지 않습니다. 함수는 다음 인수를 사용하여 호출됩니다.
  [`element`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#element)
  배열에서 처리 중인 현재 요소.
  [`index`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#index)
  배열에서 처리 중인 현재 요소의 인덱스.
  [`array`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#array)
  `forEach()`를 호출한 배열.
  [`thisArg`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#thisarg)
  `callbackFn`을 실행할 때 `this` 값으로 사용할 값입니다.
  - 반환 형
  없음
- 설명
  `forEach()` 메서드는 [순회 메서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#%EC%88%9C%ED%9A%8C_%EB%A9%94%EC%84%9C%EB%93%9C)입니다. 이 메서드는 배열의 각 요소에 대해 제공된 `callbackFn` 함수를 오름차순 인덱스 순서로 한 번씩 호출합니다.
  [`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)과 달리 `forEach()`는 항상 [`undefined`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)를 반환하므로 체이닝할 수 없습니다. 일반적인 사례로 체인의 끝에서 배열을 변경하려는 시도가 있습니다.
- 예제
  ```jsx
  const items = ["item1", "item2", "item3"];
  const copyItems = [];

  // 전
  for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i]);
  }

  // 후
  items.forEach((item) => {
    copyItems.push(item);
  });
  ```

# 호이스팅 (Hoisting) 🍠

호이스팅이란 ?

변수 및 함수 선언문이 스코프 내의 최상단으로 끌어올려지는 현상

```jsx
console.log(a); // undefined
var a = 2;
```

```jsx
func(); // 'hello'

function func() {
  console.log("hello");
}
```

# Getter와 Setter

- getter 🍠
  ```jsx
  // 클래스 선언
  class Student {
    constructor(name, school) {
      // 필드
      this.name = name;
      this.school = school;
    }
    get usrName() {
      return this.name;
    }
    get usrSchool() {
      return this.school;
    }

    // 메소드
    introduction() {
      console.log(
        `안녕하세요, ${this.usrName}입니다. ${this.usrSchool}에 다니고있습니다`
      );
    }
  }

  const matthew = new Student("matthew", "상명대학교");
  console.log(mattew.usrName);
  console.log(matthew.usrSchool);
  matthew.introduction();
  ```
  직접적으로 class의 내부 속성에 접근하지 않아서 정보 은닉의 장점이 있다
  ![스크린샷 2024-09-25 오후 4.18.41.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/fcfc51ea-e92b-459b-9e51-02d46d5d55e2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.18.41.png)
- setter 🍠
  ```jsx
  // 클래스 선언
  class Student {
    constructor(name, school) {
      // 필드
      this.name = name;
      this.school = school;
    }
    get usrName() {
      return this.name;
    }
    get usrSchool() {
      return this.school;
    }
    set usrName(name) {
      this.name = name;
    }
    set usrSchool(school) {
      this.school = school;
    }

    introduction() {
      console.log(
        `안녕하세요, ${this.usrName}입니다. ${this.usrSchool}에 다니고 있습니다`
      );
    }
  }

  const matthew = new Student("matthew", "상명대학교");

  matthew.usrName = "JINI";
  matthew.usrSchool = "광운대학교";

  console.log(matthew.usrName);
  console.log(matthew.usrSchool);
  matthew.introduction();
  ```
  마찬가지로 객체의 속성 수정 시 직접적으로 class의 내부 속성에 접근하지 않아서 정보 은닉의 장점이 있다
  ![스크린샷 2024-09-25 오후 4.24.38.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/296aec69-d825-4ae4-8a2c-5dda88c95419/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.24.38.png)

# DOM 조작 🍠

## 태그 가져오기

1. id 속성으로 가져오기

   ```jsx
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <title>Hello world</title>
     </head>
     <body>
       <div id="first">첫 번째</div>
     </body>
   </html>
   ```

   ```jsx
   const element1 = document.getElementById("first");
   ```

2. HTML Tag로 가져오기

   ```jsx
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <title>Hello world</title>
     </head>
     <body>
       <div>hello</div>
       <div>world</div>
     </body>
   </html>
   ```

   ```jsx
   const elements1 = document.getElementByTagName("div");

   console.log(elements1[0]);
   ```

   HTML Element 객체 배열을 가져오므로 배열 접근을 해야 한다.

3. name 속성으로 가져오기

   ```jsx
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <title>Hello world</title>
     </head>
     <body>
       <div name="second">두 번째</div>
     </body>
   </html>
   ```

   ```jsx
   const element2 = document.getElementByName("second");
   ```

4. class 속성으로 가져오기

   ```jsx
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <title>Hello world</title>
     </head>
     <body>
       <span class="card">안녕하세용</span>
       <span class="card">JINI입니다</span>
     </body>
   </html>
   ```

   ```jsx
   const elements2 = document.getElementByClassName("card");

   console.log(elements2[1]);
   console.log(elements2[0]);
   ```

5. CSS 선택자로 선택하기

   ```jsx
   const elementBySelector = document.querySelector("p");
   const elementBySelectorAll = document.querySelector("p");
   ```

## 이벤트 리스너 추가하기

**`EventTarget.addEventListener()`**

- 구문
  ```jsx
  addEventListener(type, listener);
  ```
  `type`
  수신할 이벤트 유형을 나타내는 대소문자 구분 문자열입니다.
  `listener`
  지정한 이벤트(`Event`) 인터페이스를 구현한 객체)를 수신할 객체입니다. `handleEvent()` 메서드를 포함하는 객체 또는 JavaScript 함수여야 합니다.
- 예제
  ```jsx
  <table id="outside">
    <tr>
      <td id="t1">one</td>
    </tr>
    <tr>
      <td id="t2">two</td>
    </tr>
  </table>
  ```
  ```jsx
  // t2의 콘텐츠를 바꾸는 함수
  function modifyText() {
    const t2 = document.getElementById("t2");
    if (t2.firstChild.nodeValue == "three") {
      t2.firstChild.nodeValue = "two";
    } else {
      t2.firstChild.nodeValue = "three";
    }
  }

  // 표에 이벤트 수신기 추가
  const el = document.getElementById("outside");
  el.addEventListener("click", modifyText, false);
  ```

## 이벤트 리스너 제거하기

**`EventTarget.removeEventListener()`**

- 구문
  ```jsx
  removeEventListener(type, listener);
  ```
  `type`
  이벤트 수신기를 제거할 이벤트 유형입니다.
  `listener`
  이벤트 대상에서 제거할 수신기 `EventListener` 함수입니다.

## 키보드와 마우스 이벤트

1. 마우스 이벤트

   마우스를 요소 위로 올렸을 때: `mouseover`

   마우스가 요소 바깥으로 나갔을 때: `mouseout`

   마우스를 요소 위에서 움직일 때: `mousemove`

2. 키보드 이벤트
   - 키를 눌렀을 때: `keydown`
   - 키를 뗐을 때: `keyup`
   - 키를 누르고 있을 때: `keypress`
   - 키보드 키 코드
     `code` : 입력한 키 (문자열)
     `keyCode` : 입력한 키를 나타내는 숫자
     `altKey` : alt 키를 눌렀는지 (불)
     `ctrlKey` : ctrl 키를 눌렀는지 (불)
     `shiftKey` : shift 키를 눌렀는지 (불)

## 태그 속성 다루기

- 글자 조작하기
  문서 객체 내부의 글자를 조작할 때는 다음과 같은 메소드를 사용합니다
  - `문서객체.textContent`
    입력된 문자열을 그대로 넣습니다
    ```jsx
    ele.textContext = "<h1>얍얍</h1>";
    // <h1>얍얍</h1> 라고 출력됨
    ```
  - `문서객체.innerHTML`
    입력된 문자열을 HTML 형식으로 넣습니다
    ```jsx
    ele.textContext = "<h1>얍얍</h1>";
    // h1태그가 적용되어 얍얍 라고 출력됨
    ```
- 속성 조작하기
  문서 객체의 속성을 조작할 때는 다음과 같은 메소드를 사용합니다
  - **`문서객체.setAttribute(속성이름,값)`**
    특성 속성에 값을 지정합니다
  - **`문서객체.getAttribute(속성이름)`**
    특성 속성을 추출합니다
- 스타일 조작하기
  문서 객체의 스타일을 조작할 때는 style 속성을 사용합니다. 이 속성에는 CSS로 입력할 떄 사용하는 값과 같은 값을 입력합니다.
  다만 -기호를 사용할 수 없어 캐멀 케이스로 나타냅니다
  ex) `background-color` → `backgroundColor`
  ```jsx
  h1.style.backgroundColor;
  h1.style["backgroundColor"];
  h1.style["background-color"];
  ```

## 부모와 자식 태그 찾기

1. 부모 요소 찾기

   부모 요소를 찾기 위해 `parentNode` 속성을 사용할 수 있습니다. 이 속성은 지정된 요소의 직접적인 부모 요소를 반환합니다.

   ```html
   <div id="parent">
     <span id="child">자식 요소</span>
   </div>
   ```

   ```jsx
   var childElement = document.getElementById("child");
   var parentElement = childElement.parentNode;
   console.log(parentElement.id); // "parent" 출력
   ```

2. 자식 요소 찾기

   자식 요소를 찾기 위해 여러 방법이 있습니다

   **`children`**

   요소의 모든 직접 자식을 HTMLCollection으로 반환합니다.

   **`firstChild`**와 **`lastChild`**

   첫 번째와 마지막 자식 요소를 반환합니다. 공백 텍스트 노드를 포함할 수 있습니다.

   **`firstElementChild`**와 **`lastElementChild`**

   첫 번째와 마지막 자식 요소 중에서 요소 노드만을 반환합니다.

   ```html
   <div id="parent">
     <span>첫 번째 자식</span>
     <span>두 번째 자식</span>
   </div>
   ```

   ```jsx
   var parentElement = document.getElementById("parent");

   // 모든 자식 요소
   var children = parentElement.children;
   console.log(children.length); // 2 출력

   // 첫 번째 자식 요소
   var firstChild = parentElement.firstElementChild;
   console.log(firstChild.textContent); // "첫 번째 자식" 출력

   // 마지막 자식 요소
   var lastChild = parentElement.lastElementChild;
   console.log(lastChild.textContent); // "두 번째 자식" 출력
   ```

## 새로운 태그 만들기

```html
let newDiv = document.createElement("div");
```

## 태그 복제하기

```jsx
cloneNode(false)
// 요소 자체만 복제되고, 자식 요소는 복제되지 않습니다.
cloneNode(true):
// 요소와 그 모든 자식 요소가 복제됩니다.
```

- 예시
  ```html
  <ul id="itemList">
    <li>아이템 1</li>
    <li>아이템 2</li>
  </ul>
  <button id="duplicateButton">아이템 복제</button>
  ```
  ```jsx
  document
    .getElementById("duplicateButton")
    .addEventListener("click", function () {
      var list = document.getElementById("itemList");
      var items = list.getElementsByTagName("li"); // 모든 'li' 요소를 가져옵니다.

      if (items.length > 0) {
        var lastItem = items[items.length - 1]; // 마지막 'li' 요소를 찾습니다.
        var clone = lastItem.cloneNode(true); // 마지막 아이템을 깊은 복사로 복제합니다.
        list.appendChild(clone); // 복제된 요소를 리스트에 추가합니다.
      }
    });
  ```
