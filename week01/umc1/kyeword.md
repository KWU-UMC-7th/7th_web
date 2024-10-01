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
    0x1A3; // 16진수 리터럴 (hexadecimal literal)
    
    // 천 단위를 읽기 쉽게 해주는 표현(가독성)
    1_000_000; // 숫자 구분 기호 (Numeric Separators)
    ```
    
    - JS에서 사칙연산을 하는 방법을 작성해주세요. 🍠
        - 더하기
            
            console.log(22+10)
            
        - 빼기
            
            console.log(22-10)
            
        - 곱하기
            
            console.log(22*10)
            
        - 나누기
            
            console.log(22/10) → 2.2
            
        - 나머지 구하기
            
            console.log(22%3) → 1
            
        - 거듭 제곱
            
            console.log(12**2) → 144
            
    - JS에서 비교 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
        1. 동등(==)
        
          두 값이 같으면 true  다르면 false
        
           console.log(5==”5”) → true (js가 알아서 형 변환 후 비교연산을 진행하기 때문이다.)
        
        1. 일치(===)
        
        두 값이 타입과 값이 모두 같으면 true 다르면 false
        
        console. log(5===”5”) → false
        
          3. ! =(값이 다르면 true) 와 ! ==(값과 타입 둘다 다르면 true) 또한 위와 같은 개념
        
        console. log(5!==”5”) → true
        
          4. >, <, > =, < =
        
    - JS에서 증가/감소 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
        
        x++,++x,x—,—x 
        
        ```jsx
        let x = 3;
        const y = x++;
        
        console.log(`x:${x}, y:${y}`); // x:4, y:3
        ```
        
        ```jsx
        let x = 3;
        const y = ++x;
        
        console.log(`x:${x}, y:${y}`); // x:4, y:4
        ```
        
    - 연산자 우선순위에 대해 작성해주세요. 🍠
        
        괄호 안 값() > 곱하기나 나누기 > 더하기나 빼기
        
    
- string 🍠
    
    ### string
    
    <aside>
    💡 string 타입에 대해, 직접 구글링하여 아래에 정리해주세요.
    
    </aside>
    
    [String - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)
    
    문자열 리터럴은 다음과 같은 형식을 사용합니다.
    
    ```
    'string text'
    "string text"
    "中文 español Deutsch English देवनागरी العربية português বাংলা русский 日本語 norsk bokmål ਪੰਜਾਬੀ 한국어 தமிழ் עברית"
    
    ```
    
    문자열은 `String` 전역 객체를 직접 사용하여 생성할 수 있습니다.
    
    ```
    String(thing); // thing은 문자열로 변환할 아무 
    ```
    
    우선 다음과 같이 [+](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#%eb%8d%94%ed%95%98%ea%b8%b0_()) 연산자를 사용할 수 있습니다.
    
    jsCopy to Clipboard
    
    ```
    let longString =
      "여러 줄에 걸쳐 작성해야 할 정도로 " +
      "긴 문자열인데 왜 한 줄에 다 적으면 안되냐면 " +
      "코드를 읽기 힘들어지니까요.";
    
    ```
    
    아니면 역슬래시 문자("\")를 각 줄의 맨 끝에 붙여 문자열이 이어진다는걸 표시할 수도 있습니다. 역슬래시 다음에 공백을 포함한 어떤 문자라도 붙으면 제대로 작동하지 않으므로 주의해야 합니다.
    
    jsCopy to Clipboard
    
    ```
    let longString =
      "여러 줄에 걸쳐 작성해야 할 정도로 \
    긴 문자열인데 왜 한 줄에 다 적으면 안되냐면 \
    코드를 읽기 힘들어지니까요.";
    ```
    
    `var s_prim = "foo";
    var s_obj = new String(s_prim);
    
    console.log(typeof s_prim); // Logs "string"
    console.log(typeof s_obj); // Logs "object"`
    
    문자열 원형과 `String` 오브젝트는 [`eval()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval)을 사용할 때 다른 결과를 제공합니다. `eval`에 전달되는 문자열 원형들은 소스 코드 취급을 받습니다; `String` 오브젝트들은 다른 모든 오브젝트들과 마찬가지로 취급하며, 오브젝트를 반환합니다. 예를 들면:
    
    jsCopy to Clipboard
    
    ```
    var s1 = "2 + 2"; // creates a string primitive
    var s2 = new String("2 + 2"); // creates a String object
    console.log(eval(s1)); // returns the number 4
    console.log(eval(s2)); // returns the string "2 + 2"
    
    ```
    
    이러한 이유로, 비록 코드 상에서 원형 문자열을 사용하는 대신에 `String` 오브젝트를 사용하게 되면 코드가 손상될 수 있지만, 일반적인 개발자는 차이를 걱정할 필요는 없습니다.
    
    `String` 오브젝트는 언제든지 [`valueOf()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf) 메서드로 원형에 대응하도록 전환할 수 있습니다.
    
    jsCopy to Clipboard
    
    ```
    console.log(eval(s2.valueOf())); // returns the number 4
    ```
    
- symbol
    
    ### Symbol
    
    Symbol 타입은 ES6에서 새롭게 추가된 7번쨰 타입입니다. 중복되지 않는, 고유한 값들을 나타내기 위해서 만들어 졌습니다. 심벌을 생성하기 위해서는 `Symbol()`을 사용해야 합니다.
    
    왜 Symbol을 사용할까요?
    
    아래의 yongmin이라는 사람도 Matthew라는 영어 이름을 갖고 있고, sua 라는 사람 또한 Matthew 라는 영어 이름을 갖고 있다고 합시다.
    
    ```jsx
    const yongmin = 'Matthew';
    const sua = 'Matthew';
    ```
    
    둘을 `일치 연산자(===)`로 비교하면 어떻게 될까요?
    
    ```jsx
    yongmin === sua // true
    ```
    
    당연히 true가 나옵니다.
    
    하지만, 우리가 원하는 시나리오는, 용민이라는 사람과, 수아라는 사람은 엄연히 다른 사람이기에, false가 나오기를 원한다고 가정해봅시다. 이런 경우 **`Symbol을 활용`**할 수 있습니다.
    
    ```jsx
    const yongmin = Symbol('Matthew');
    const sua = Symbol('Matthew');
    ```
    
    다시 `일치 연산자(===)`로 비교해봅시다.
    
    ```jsx
    yongmin === sua // false
    ```
    
    이처럼 중복되지 않는 어떠한 고유한 값을 나타내고 싶으면 **`Symbol 타입`**을 활용하는 것이 매우 유용합니다.
    
- bigint 🍠
    
    ### bigint
    
    <aside>
    💡 bigint 타입에 대해, 직접 구글링하여 아래에 정리해주세요.
    
    </aside>
    
    **`BigInt`** 는 [`Number`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number) 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다.
    
    ```
    const theBiggestInt = 9007199254740991n;
    
    const alsoHuge = BigInt(9007199254740991);
    // ↪ 9007199254740991n
    
    const hugeString = BigInt("9007199254740991");
    // ↪ 9007199254740991n
    
    const hugeHex = BigInt("0x1fffffffffffff");
    // ↪ 9007199254740991n
    
    const hugeBin = BigInt(
      "0b11111111111111111111111111111111111111111111111111111",
    );
    // ↪ 9007199254740991n
    ```
    
- 객체 타입 🍠
    
    ### 객체 타입 (Object Type)
    
    위의 7개 원시 타입 제외 자바스크립트를 이루고 있는 대부분의 타입이 바로 객체 타입입니다. 여기에는 배열, 함수, 정규식, 클래스 등이 포함된다.
    
    여기서 한 가지 주목할 것이 **`객체 타입은 참조를 전달`**하기에, **`참조 타입`**으로도 불린다는 것이다.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/002b5595-7483-4048-ae55-1aa73be3c6f3/image.png)
    
    ```jsx
    const hello1 = () => {}; 
    const hello2 = () => {};
    ```
    
    위의 내용을 보면 실제로, 함수의 내용이 같아 보입니다. 하지만, 서로의 참조가 다르기에 false가 반환됨을 알 수 있습니다.
    
    ```jsx
    hello1 === hello2 // false
    ```
    
    [binding의 개념과 call, apply, bind의 차이점 · 쾌락코딩](https://wooooooak.github.io/javascript/2018/12/08/call,apply,bind/)
    
    - 배열
        
        ### 배열 (Array)
        
        자바스크립트에서 배열을 만드는 방법
        
        1. **`배열 리터럴 []`** 
        
        ```jsx
        // 배열 리터럴 [] 를 사용하여 만드는 방법
        let matthew = [];
        
        // 각각 인덱스를 [] 안에 넣어, 배열 안에 값을 할당할 수 있다.
        matthew[0] = 'kim';
        matthew[1] = 'yong';
        matthew[2] = 'min';
        
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
        ```
        
        1. **Array() 생성자 함수로 배열 생성**
        
        배열 생성
        
        ```jsx
        // 배열 생성
        let arr = new Array();
        
        arr[0] = 'kim';
        arr[1] = 'yong';
        arr[2] = 'min';
        
        for (let i = 0; i < arr.length; i++) {
        	console.log(arr[i]);
        }
        
        // 값을 할당한 채로 배열을 생성할 수 있다.
        let arr = new Array('kim', 'yong', 'min');
        
        // 배열의 크기를 지정하여 생성
        let arr = new Array(3);
        
        // 배열의 크기를 지정하여 생성한 후 원하는 값으로 채워넣을 수 있다.
        new Array(20).fill(0);
        
        // output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ```
        
        - 다양한 `Array method`에 대해 정리해주세요. 🍠
            - sort 🍠
                
                [자바스크립트 배열 정렬: sort()와 toSorted() 함수](https://www.daleseo.com/js-sort-to-sorted/)
                
            - join 🍠
                
                배열 원소 전부를 하나의 문자열로 합친다.
                
                `var arr =[ 1, 2, 3, 4 ];
                console.log( arr.join() );      // 1,2,3,4
                console.log( arr.join( '-' ) ); // 1-2-3-4`
                
            - reverse 🍠
                
                배열의 원소 순서를 거꾸로 바꾼다.
                
                `var arr =[ 1, 2, 3, 4 ];
                arr.reverse();
                console.log( arr ); // [ 4, 3, 2, 1 ]`
                
            - splice 🍠
                
                배열의 특정위치에 요소를 추가하거나 삭제
                
                splice( index, 제거할 요소 개수, 배열에 추가될 요소 )
                
                `var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
                arr.splice( 3, 2 );
                console.log( arr ); // [ 1, 2, 3, 6, 7 ]   3번째 인덱스에서부터 2개 제거
                
                var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
                arr.splice( 2, 1, "a", "b");
                console.log( arr ); // [ 1, 2, "a", "b", 4, 5, 6, 7 ] 2번째 인덱스에서 1개 제거 후 "a"와 "b"를`
                
            - slice 🍠
                
                ### **slice( startIndex, endIndex)**
                
                배열의 startIndex부터 endIndex까지(endIndex는 불포함)에 대한 shallow copy를 새로운 배열 객체로 반환
                
                `var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
                var newArr = arr.slice( 3, 6 );
                console.log( 'slice',  newArr ); // [ 4, 5, 6 ]`
                
            - find 🍠
                
                ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/a5127b31-e1d3-4306-80cf-6d26e6b22113/image.png)
                
            - filter 🍠
                
                지정된 함수의 결과 값을 true로 만드는 원소들로만 구성된 별도의 배열을 반환한다.
                
                `var arr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
                var isEven = function( value ) {
                  return value % 2 === 0;
                };
                var newArr = arr.filter( isEven );
                console.log( newArr ); // [ 2, 4, 6, 8, 10 ]`
                
                ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/c9b0d045-f522-4660-8b40-cd3365fc9cf6/image.png)
                
            - map 🍠
                
                배열의 각 원소별로 지정된 함수를 실행한 결과로 구성된 새로운 배열을 반환한다.
                
                ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/e8d166aa-7438-4277-b6a6-6d7c3a984488/image.png)
                
                `var arr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
                var isEven = function( value ) {
                  return value % 2 === 0;
                };
                var newArr = arr.map( isEven );
                console.log( newArr ); // [ false, true, false, true, false, true, false, true, false, true ]`
                
            - reduce 🍠
                
                [[javascript] reduce() 함수 사용법 및 쉬운 예시](https://jigeumblog.tistory.com/106)
                
            - some  🍠
                
                지정된 함수의 결과가 true일 때까지 배열의 각 원소를 반복
                
                `var arr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
                var isEven = function( value ) {
                
                  // value가 2의 배수이면 true를 반환한다.
                  return value % 2 === 0;
                };
                console.log( arr.some( isEven ) ); // true  하나라도 true이면 true를 return`
                
            - every 🍠
                
                배열의 모든 요소가 제공한 함수로 구현된 테스트를 통과하는지를 테스트
                
                ```
                var arr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
                var isEven = function( value ) {
                
                  // value가 2의 배수이면 true를 반환한다.
                  return value % 2 === 0;
                };
                console.log( arr.every( isEven ) ); // false  모든 요소가 true이면 true를 return 하고 그렇지 않으면 false
                ```
                
            - forEach 🍠
                
                배열의 각 원소별로 지정된 함수를 실행한다.
                
                `var arr =[ 1, 2, 3 ];
                arr.forEach( function( value ) {
                  console.log( value );   // 1 2 3
                });`
                
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
        }
        
        subtraction2(5, 3); // 2
        ```
        
        함수 표현식은, 함수를 변수에 할당했다.
        
        ### 화살표 함수
        
        ```jsx
        let subtraction3 = (a, b) => {
        	return a - b;
        }
        
        subtraction3(5, 3); // 2
        ```
        
        ES6에 추가된 화살표 함수도 많이 사용한다.
        
        ### 호이스팅 (Hoisting) 🍠
        
        <aside>
        💡 호이스팅에 대하여 정리해주세요, 위의 함수 선언문과, 표현식에서 예시로 든 코드를 바탕으로, 실습한 코드를 아래에 정리해주시고, 설명을 작성해주세요.
        
        </aside>
        
        hoisting
        
        끌어 올리기, 들어올려 나르기.
        
        단순하게 설명하자면 단어 뜻 처럼 스크립트 내 변수와 함수의 선언 순서에 상관 없이 순서가 '끌어올려~~'진 듯한 현상이다. 포인트는 물리적으로 '끌어올려'지는 것이 아니라 자바스크립트 엔진이 먼저 전체 코드를 한 번 스캔하고 실행컨텍스트에 미리 기록해 놓기 때문에 이런 현상이 발생하는 것이다.
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/f442c9e8-024c-4cf3-b7d2-8446bfadd142/image.png)
        
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
        		console.log(`안녕하세요, ${this.name}입니다. ${this.school}에 다니고있습니다`)
        	}
        }
        ```
        
        아래와 같이 만든 클래스를 이용하여, **`new 키워드를 통해 새로운 object를 만들 수 있습니다.`** name과, school을 맞는 위치에 같이 전달해주면 됩니다.
        
        ```jsx
        const matthew = new Student('matthew', '상명대학교');
        console.log(matthew.name);
        console.log(matthew.school);
        matthew.introduction();
        ```
        
        ![스크린샷 2024-08-19 오후 3.59.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/4df14540-faeb-4238-940f-241c42af9c83/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-08-19_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.59.50.png)
        
        ### 아래 내용에 대해 추가적으로 학습 후 정리해보아요! 🍠
        
        <aside>
        💡 위의 예시의 코드를 활용해서, 코드를 작성해주시고, 설명 또한 작성해주세요!
        
        </aside>
        
        - getter 🍠
        - setter 🍠
        
        [https://inpa.tistory.com/entry/JS-📚-getter-setter-란#프로그래밍_getter__setter_개념](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-getter-setter-%EB%9E%80#%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_getter__setter_%EA%B0%9C%EB%85%90)
        

### react에서 자주 사용하는 자바스크립트 문법

- 구조 분해 할당(Destructuring assignment)
    
    [구조 분해 할당 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    
    ### 구조 분해 할당 (배열)
    
    구조 분해 할당 구문은, 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담게 하는 JS 표현식입니다.
    
    먼저, react에서는 컴포넌트에 state 변수를 추가할 수 있는 React Hook인 `useState`를 활용합니다.
    
    react를 아직 자세히 모르시는 분은, 이런 것을 나중에 배우는구나 라고 생각하며 이해만 하시면 됩니다. **`useState`**의 구조는 아래와 같습니다.
    
    ```jsx
    const [yongmin, setYongmin] = useState('초기값')
    ```
    
    `useState`는 2개의 배열을 반환하는 함수이며, 첫 번쨰 값을 value 두번쨰 값을 value를 변경하는 setter로 사용이 가능합니다.
    
    ```jsx
    const UMC = ['WEB', 'SPRING', 'NODE', 'iOS', 'Android', 'PLAN', 'DESIGN'];
    
    const [first, , , , , last] = UMC;
    
    first; // 'WEB'
    last; // 'DESIGN'
    ```
    
    배열의 구조 분해 할당은 **`,의 위치에 따라 값이 결정`**됩니다.
    
    위의 방식은, 길이가 긴 배열일 경우,  실수를 할 가능성이 매우 크기에, 배열의 길이가 작은 경우 많이 활용합니다. 배열의 구조 분해 할당은 기본 값을 선언할 수 있습니다.
    
    ```jsx
    const array = [1, 2];
    const [a = 'KIM', b = 'YONG', c = 'MIN'] = array;
    
    // a 1
    // b 2
    // c MIN (준비된 배열의 길이가 총 2개이지만, c는 3번째이기에, 미리 할당한 'MIN'을 출력)
    ```
    
    만약 먼저 선언한 배열의 길이보다, 사용하고자 하는 배열의 길이가 짧거나 값이 없는 경우에는 **`undefined`** 기본값을 사용합니다.
    
    특정 값 이후의 값을 다시 배열로 선언하고 싶은 경우에는 전개 연산자를 활용할 수 있습니다.
    
    ```jsx
    const UMC = ['WEB', 'SPRING', 'NODE', 'iOS', 'Android', 'PLAN', 'DESIGN'];
    const [first, ...etc] = UMC;
    
    first // 'WEB'
    etc // ['SPRING', 'NODE', 'iOS', 'Android', 'PLAN', 'DESIGN']
    ```
    
    ### 구조 분해 할당 (객체)
    
    객체의 구조 분해 할당은, 객체에서 값을 뽑아온 뒤 할당하는 것을 의미합니다. 배열과는 다르게, 객체는, 객체의 내부 이름을 통해 뽑아온다는 차이점이 있습니다.
    
    ```jsx
    const myName = {
    	kim: '김',
    	yong: '용',
    	min: '민',
    }
    
    const { kim, ...rest } = myName;
    
    // kim => '김'
    // rest => { yong: '용', min: '민' }
    ```
    
    기본 값 할당 또한 배열과 동일하게 가능합니다.
    
    ```jsx
    const myName = {
    	yong: '용',
    	min: '민',
    }
    
    const { yong = '야', min = '호', yaho = '야호' } = myName
    
    yong // '용'
    min // '민'
    yaho // '야호'
    ```
    
    리액트에서 어떠한 값들을 전달 할 떄, props를 통해 부모에서 자식 컴포넌트로 값을 전달할 떄 많이 활용되는 방식이므로 꼭 알고 있어야 하는 문법입니다.
    
    ```jsx
    // props.name, props.age 이러한 식으로 접근해야하지만
    // 구조 분해 할당을 통해서 name, age로 접근이 가능합니다.
    function ChildComponent({ name, age }) {
    	return (
    		<>
    			<h1>안녕하세요 {name}입니다.<h1/>
    			<span>{age}살 입니다.</span>
    		</>
    	)
    }
    ```
    
    위의 리액트 코드는 웹을 처음 접하시면 당연히 이해할 수 없지만, 이러한 방식으로 많이 활용된다는 점을 이해해주시면 됩니다.
    
- 전개 연산자 (Spread Operator)
    
    ### 전개 연산자 (Spread Operator)
    
    React를 활용하여 웹 프로젝트를 진행하다보면, 배열 간에 합성을 해야 할 경우가 상당히 많이 생깁니다. 전개 연산자가 나오기 이전에는 배열 간 합성을 하기 위하여 `push`, `splice`, `concat`과 같은 배열 메서드를 사용해야 했습니다. 그러나, 전개 연산자를 활용하면, 배열을 쉽게 합성할 수 있습니다.
    
    ```jsx
    const yaho = ['y', 'a']
    const realYaho = [...yaho, 'h', 'o'] // ['y', 'a', 'h', 'o']
    ```
    
    여기서, 살짝 참조에 관한 개념을 짚고 넘어가겠습니다.
    
    ```jsx
    const yongmin = ['Kim', 'Yong', 'Min'];
    const yongmin2 = yongmin;
    
    yongmin === yongmin2; // true
    ```
    
    위의 결과 값이 true가 나온 이유는 무엇일까요? 내용이 아닌 **`객체의 참조 주소를 복사하기에 true가 반환`**됩니다.
    
    하지만, 전개 연산자를 활용하게 되면, 기존 배열에 영향을 미치지 않고, 배열을 복사하는 것이 가능합니다.
    
    ```jsx
    const yongmin = ['Kim', 'Yong', 'Min'];
    const yongmin2 = [...yongmin];
    
    yongmin === yongmin2; // false
    ```
    
    실제로 값만 복사하고, 참조가 다르기에 false가 반환됩니다.
    
    ### 전개 구문 (객체)
    
    ```jsx
    const KIM_YONG_MIN = {
    	Kim: '김',
    	Yong: '용',
    	Min: '민'
    }
    
    const KIM_YONG_MIN_2 = {
    	Ma: '매',
    	tthew: '튜'
    }
    
    const EN_KO_NAME = { ...KIM_YONG_MIN, ...KIM_YONG_MIN_2 };
    // {Kim: '김', Yong: '용', Min: '민', Ma: '매', tthew: '튜'}
    ```
    
    객체를 새로 만들 때 전개 구문을 활용할 수 있고, 객체를 합성하는 데 편리함을 제공해준다.
    
    ```jsx
    const kim = {
    	k: 'K',
    	i: 'I',
    	m: 'M',
    }
    
    const object1 = {
    	...kim,
    	m: 'N'
    } // {k: 'K', i: 'I', m: 'N'}
    
    const object2 = {
    	m: 'N',
    	...kim
    } // {m: 'M', k: 'K', i: 'I'}
    ```
    
    전개 연산자 이후, 값을 할당한다면, 전개 연산자를 값 할당 이전에 활용하냐, 이후에 활용하냐에 따라, 결괏값이 완전히 달라짐을 유의하자.
    
- 객체 초기자(object shorthand assignment)
    
    ### 객체 초기자
    
    객체 초기자 또한, 상당히 많이 활용하는 방식이다.
    
    객체에 집어 넣고자 하는 키와 값을 가지고 있는 변수가 이미 존재한다면, 해당 값을 매우 간단하게 넣을 수 있는 방식이다.
    
    ```jsx
    const easy = 'easy';
    const hard = 'hard';
    
    const difficulty = {
    	easy,
    	hard,
    }
    
    // {easy: 'easy', hard: 'hard'}
    ```
    
- Array 프로토타입의 메서드
    - map
        
        ### map
        
        map은 인수로 전달받은 배열과 동일한 길이의 새로운 배열을 반환하는 메서드입니다. 배열의 아이템을 순회하면서, 콜백으로 연산한 결과의 새로운 배열을 만들 수 있습니다.
        
        ```jsx
        const numbers = [1, 2, 3, 4, 5, 6];
        
        const numbersPlusTwo = numbers.map((number) => number + 2);
        // [3, 4, 5, 6, 7, 8]
        ```
        
        React에서는 data들을, 배열에 담아, 해당 내용들을 리액트 요소로 반환할 떄 많이 사용합니다.
        
        ```jsx
        const KimYongMin = ['김', '용', '민'];
        
        const ReturnElement = KimYongMin.map((name) => {
        	return <div key={name}>{name}</div>
        });
        ```
        
    - filter
        
        ### filter
        
        `filter()` 메서드는 주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다.
        
        ```jsx
        // 길이가 5 이하인 단어만 출력하는 방법
        const words = ['sweetPotato', 'Potato', 'haha', 'yaho'];
        
        const answer = words.filter((word) => word.length < 6);
        // ['haha', 'yaho']
        ```
        
    - reduce
        
        ### reduce
        
        map, filter를 쉽다고 생각하셨으면 reduce와 같은 경우는 조금 어렵게 느껴지실 수 있습니다. 해당 메서드는 콜백 함수이외에 initial value (초깃값)을 추가로 인수를 받습니다.
        
        초깃값이 무엇인지에 따라 어떠한 타입의 무엇인가를 반환할 수 있는 메서드가 바로 reduce 입니다.
        
        보통, 어떠한 값을 누적해서 더할 떄 많이 사용합니다.
        
        ```jsx
        const numbers = [10, 20, 30, 40, 50];
        
        // result의 초기값은 0이라고 생각하면 쉽다.
        const sum = numbers.reduce((result, number) => {
        	return result + number;
        }, 0);
        
        sum // 150
        ```
        
        reducer 콜백 함수의 첫 번쨰 인수는 초깃값의 현재값을 의미, 두 번쨰 인수는 현재 배열의 아이템이다.
        
    - forEach
        
        ### forEach
        
        `forEach` 함수는 콜백 함수를 받아 배열을 순회하면서, 단순히 해당 콜백 함수를 실행만 하는 메서드입니다.
        
        ```jsx
        const Matthew = ['M', 'A', 'T', 'T', 'H', 'E', 'W'];
        
        Matthew.forEach((alpha) => console.log(alpha));
        
        // M, A, T, T, H, E, W
        ```
        
        forEach는 아무런 반환값이 없습니다. 단순히 콜백함수를 실행만 시키고, map 처럼 결과를 반환하는 작업은 하지 않습니다. (forEach의 반환값은 undefined로 의미가 없다.)
        
    - length
        
        ### length
        
        **`length`** 데이터 속성은 해당 배열의 요소 수를 나타냅니다. 
        
        ```jsx
        const Matthew = ['M', 'A', 'T', 'T', 'H', 'E', 'W'];
        
        Matthew.length // 7
        ```
        
- 삼항 조건 연산자 (Ternary Operator)
    
    ### 삼항 조건 연산자
    
    **조건 (삼항) 연산자**는 JavaScript에서 세 개의 피연산자를 받는 유일한 연산자입니다. 앞에서부터 조건문, 물음표(`?`), 조건문이 참(truthy)일 경우 실행할 표현식, 콜론(`:`), 조건문이 거짓([falsy](https://developer.mozilla.org/ko/docs/Glossary/Falsy))일 경우 실행할 표현식이 배치됩니다. 해당 연산자는 [`if...else`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)문의 대체재로 빈번히 사용됩니다.
    
    ```jsx
    const number = 27;
    
    const isOdd = number % 2 !== 0 ? true : false 
    // true (27은 홀수 이므로)
    ```
    
    아래와 같은 기준이라고 생각하면 이해하기 쉽다.
    
    ```jsx
    조건문 ? 조건문이 참인 경우 값 : 조건문이 거짓인 경우 값;
    ```
    

### DOM 조작 🍠

[[JavaScript] DOM이란 무엇인가?](https://m.blog.naver.com/magnking/220972680805)

<aside>
💡

DOM 조작은 웹 개발에서 매우 중요한 개념으로, 미션 1을 수행하는 데 필수적인 내용을 다루고 있습니다. 특히, React와 같은 프론트엔드 라이브러리와 밀접하게 연관되어 있기 때문에, 이 부분에 대한 깊이 있는 이해는 필수적입니다.

구글 검색을 통해 관련된 자료들을 찾아보면 DOM 조작에 대한 매우 상세하고 유익한 설명을 쉽게 얻을 수 있습니다. 이러한 자료들을 참고하여 DOM 조작에 대한 핵심 키워드를 정리하고, 워크북에 체계적으로 기록해 주시기 바랍니다.

DOM 조작은 브라우저 상에서 HTML 문서의 구조를 동적으로 수정하고, 사용자와의 상호작용을 처리하는 중요한 방법론입니다. JavaScript를 통해 DOM을 조작하는 방법을 정확히 이해하고 익히는 것이 앞으로의 학습에 큰 도움이 될 것입니다. React에서의 상태 관리와 컴포넌트 렌더링 최적화 역시 DOM 조작의 원리를 기반으로 하고 있기 때문에, 시간을 들여 꼼꼼히 학습하시길 바랍니다.

- UMC 7th 중앙 WEB 파트장 매튜/김용민 - 

</aside>

- 태그 가져오기
    - document.getElementById();
    - document.getElementsByClassName()
    - document.getElementsByName()
    - document.getElementsByTagName()
    - document.getElementsByTagName()
    
    innerText vs innerHTML
    
    [[Javascript] innerText와 innerHTML의 차이점](https://hianna.tistory.com/480)
    
- 이벤트 리스너 추가하기
    
    ```
    element.addEventListener(type, eventListener);
    ```
    
    출처:
    
    https://hianna.tistory.com/494
    
- 이벤트 리스너 제거하기
    
    ```
    element.removeEventListener(type, eventListener);
    ```
    
- 키보드와 마우스 이벤트
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/3a26c4ae-b910-42b9-baa4-ddb594d42334/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/e9b8e6c4-3850-480e-92c0-8d6fc8280540/image.png)
    
    https://charliecharlie.tistory.com/233 :엔터값을 누르면 실행되는 코드
    
- 태그 속성 다루기
    1. setAttribute 함수
    
    [[Javascript] 요소(Element)의 속성(Attribute) 값 변경하기/설정하기](https://kkamikoon.tistory.com/entry/Javascript-요소Element의-속성Attribute-값-변경하기설정하기)
    
- 부모와 자식 태그 찾기
    
    [[Javascript] 부모, 자식, 형제 노드(node)와 요소(element) 찾기](https://hianna.tistory.com/712)
    
- 새로운 태그 만들기
    
    [Javascript를 이용해 HTML에 동적으로 태그 추가](https://ludeno-studying.tistory.com/82)
    
- 태그 복제하기