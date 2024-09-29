# 1주차 스터디 키워드

# JavaScript 원시 타입: String과 BigInt

| 특성       | String                                                          | BigInt                                  |
| ---------- | --------------------------------------------------------------- | --------------------------------------- |
| **정의**   | 텍스트 데이터를 나타내는 원시 타입                              | 매우 큰 정수를 표현할 수 있는 원시 타입 |
| **불변성** | 불변                                                            | 불변                                    |
| **메서드** | 다양한 문자열 조작 메서드 (`length`, `substring` 등)            | 기본 연산 (+, -, \*, / 등) 지원         |
| **크기**   | UTF-16 인코딩 방식의 가변 길이                                  | 정수 범위에 제한이 없음                 |
| **장점**   | 직관적이고 간단한 텍스트 조작                                   | 큰 정수를 정확하게 처리 가능            |
| **단점**   | 문자열이 불변이므로 자주 변경할 경우 성능 이슈가 발생할 수 있음 | Number와 비호환, 소수 계산 불가         |

# JavaScript 객체 타입: Array Methods

## 배열

### 1. `sort()`

- 배열을 **정렬**합니다. 기본적으로 **유니코드 순**으로 정렬되며, 숫자 정렬 시 비교 함수가 필요합니다.
  ```javascript
  const array = [3, 1, 4, 2];
  array.sort((a, b) => a - b); // [1, 2, 3, 4]
  ```

### 2. `join()`

- 배열의 모든 요소를 **문자열**로 결합합니다. 각 요소는 주어진 **구분자**로 연결됩니다. 구분자를 지정하지 않으면 기본적으로 쉼표(`,`)가 사용됩니다.
  ```javascript
  const fruits = ['apple', 'banana', 'cherry'];
  const result = fruits.join(', '); // 'apple, banana, cherry'
  ```

### 3. `reverse()`

- 배열의 요소를 **역순**으로 만듭니다. 원본 배열을 변경합니다.
  ```javascript
  const array = [1, 2, 3];
  array.reverse(); // [3, 2, 1]
  ```

### 4. `splice()`

- 배열에서 요소를 **추가/제거/교체**할 수 있습니다. 원본 배열을 변경합니다.

  ```javascript
  const array = [1, 2, 3, 4];
  array.splice(1, 2); // [2, 3], array는 [1, 4]
  array.splice(1, 0, 5, 6); // array는 [1, 5, 6, 4]
  ```

## 함수

### 화살표 함수

### 호이스팅 (Hoisting) 🍠

호이스팅은 JavaScript에서 변수와 함수의 선언이 해당 스코프의 **최상단**으로 끌어올려지는 현상입니다. 이를 통해 함수는 정의되기 전에 호출할 수 있습니다.

```javascript
console.log(subtraction(5, 3)); // 2

function subtraction(a, b) {
  return a - b;
}
```

### 클래스

### Getter와 Setter

getter와 setter는 객체의 속성에 접근하고 수정하는 방법을 정의하는 특수 메서드입니다. 이를 통해 객체의 프로퍼티를 더 안전하게 다룰 수 있습니다.

#### 1. Getter

getter는 객체의 속성을 읽기 위한 메서드입니다. 속성을 직접 접근하는 대신, getter 메서드를 통해 값을 반환합니다.

#### 2. Setter

setter는 객체의 속성을 수정하기 위한 메서드입니다. 속성을 직접 설정하는 대신, setter 메서드를 통해 값을 수정합니다.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter
  get area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 3);
console.log(rect.area); // 15

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Setter
  set size(newSize) {
    this.width = newSize.width;
    this.height = newSize.height;
  }
}

const rect = new Rectangle(5, 3);
rect.size = { width: 10, height: 5 }; // setter 호출
console.log(rect.width); // 10
console.log(rect.height); // 5
```
