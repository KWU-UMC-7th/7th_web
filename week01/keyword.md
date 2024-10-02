
# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

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
        console.log(matthew);  // null
        ```
        
        null이 가지고 있는 특별한 점은 다른 원시 타입 값과 다르게 타입을 체크했을 때, ‘object’라는 결과가 반환 된다는 점 입니다.
        
        ```jsx
        typeof null === 'object'; // true
        ```
        
        왜 이렇게 개발했을지 의문을 충분히 갖을 수 있습니다. 이는, 초창기 자바스크립트, 개발 시 발생한 문제이고 **`typeof null을 진짜로 null로 표현하고자 하는 많은 시도`**가 있지만, 호환성 문제가 다른 코드에 영향을 주어 받아들여지지 않았다고 합니다.
        
        [Why is typeof null "object"?](https://stackoverflow.com/questions/18808226/why-is-typeof-null-object)
        
    - undefined
        
        ### undefined
        
        `undefined`는 선언한 후 값을 할당하지 않은 변수. 즉, 아직 변수 또는 프로퍼티가 할당되지 않았음을 의미합니다.
        
        ```jsx
        let matthew;
        matthew // undefined;
        
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
        0x1A3; // 16진수 리터럴 (hexadecimal literal)
        
        // 천 단위를 읽기 쉽게 해주는 표현(가독성)
        1_000_000; // 숫자 구분 기호 (Numeric Separators)
        ```
        
        - JS에서 사칙연산을 하는 방법을 작성해주세요. 🍠
            - 더하기
                
                ```jsx
                const sum = 5 + 2;
                ```
                
            - 빼기
                
                ```jsx
                const differ = 5 - 2
                ```
                
            - 곱하기
                
                ```jsx
                const product = 5 * 2
                ```
                
            - 나누기
                
                ```jsx
                const divide = 5 / 2;
                ```
                
            - 나머지 구하기
                
                ```jsx
                const remain = 5 % 2;
                ```
                
            - 거듭 제곱
                
                ```jsx
                const power = 5 ** 2;
                ```
                
        - JS에서 비교 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
            
            ```jsx
            const a = 1
            const b = '1'
            console.log(a==b) // 유형 일치 여부 확인하지 않음 -> true
            console.log(a===b) // 유형 일치 여부 확인 -> false
            const result = (5>2)? true : false; // 삼항연산자
            ```
            
        - JS에서 증가/감소 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
            
            1)증가
            
            ```jsx
            const a = 1++; 
            const b = ++1; 
            ```
            
            2)감소
            
            ```jsx
            const a = 1--; 
            const b = --1; 
            ```
            
        - 연산자 우선순위에 대해 작성해주세요. 🍠
            
            1순위 - ()
            
            2순위 - **
            
            3순위 - *,/,%
            
            4순위 - +,-
            
        
    - string 🍠
        
        ### string
        
        <aside>
        💡 string 타입에 대해, 직접 구글링하여 아래에 정리해주세요.
        
        </aside>
        
        ```jsx
        const str = 'hello world!' //문자열 선언
        
        const age = 24
        let str1 = `I am ${age} years old` //템플릿 리터럴로 선언: 띄어쓰기와 변수 사용 가능
        str1[0] = 'You' //자바스크립트에서 string은 immutable하여 이런 작업은 불가능함
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
        
        : 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형
        
        ```jsx
        const bigint = 123456789012345678901234567890n;
        const bigint2 = BigInt("123456789012345678901234567890");
        const bigint3 = BigInt(123456789012345678901234567890);
        ```
        
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
    hello1 === hello2 // false
    ```
    
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
                
                :정렬하는 메서드
                
                ```jsx
                const arr = [5, 3, 8, 1];
                arr.sort(); //오름차순 
                arr.sort((a, b) => b - a); //내림차순
                ```
                
            - join 🍠
                
                :배열 요소를 구분자를 통해 문자열로 결합
                
                ```jsx
                const arr = ['a','b','c'];
                const str = arr.join('&') //a&b&c
                ```
                
            - reverse 🍠
                
                :배열 순서를 거꾸로
                
            - splice 🍠
                
                : 일부 배열 요소 변환
                
                ```jsx
                const arr = ['a','b','c'];
                arr.splice(1,1,'B'); // ['a','B','c']
                //시작인자,개수,추가요소
                ```
                
            - slice 🍠
                
                : 배열 일부 추출
                
                ```jsx
                const arr = ['a','b','c','d','e'];
                const newArr = arr.slice(1, 3); //['b','c']
                ```
                
            - find 🍠
                
                : 모든 요소를 순회하여 조건에 맞는 첫번째 요소 or 없으면 undefined
                
                ```jsx
                const arr = [5, 12, 8, 130, 44];
                const found = arr.find(element => element > 10);// 12
                ```
                
            - filter 🍠
                
                : 모든 요소를 순회하여 조건에 맞는 모든 요소를 배열로 반환
                
                ```jsx
                const arr = [5, 12, 8, 130, 44];
                const filteredArr = arr.filter(element => element > 10);// [12, 130, 44]
                ```
                
            - map 🍠
                
                : 모든 요소를 순회하여 함수 실행한 결과를 배열로 반환
                
                ```jsx
                const arr = [1, 2, 3, 4];
                const doubled = arr.map(x => x * 2);// [2, 4, 6, 8]
                ```
                
            - reduce 🍠
                
                :두 요소씩 순회하여 함수 실행 결과 값을 반환(처음 시행은은 두번째인자인 초기값과 첫번째 배열 요소로 실행)
                
                ```jsx
                let arr = [1, 2, 3, 4];
                let sum = arr.reduce((pre, cur) => pre + cur, 0);// 10
                ```
                
            - some  🍠
                
                : 적어도 하나라도 조건을 만족하면 true 아니면 false
                
            - every 🍠
                
                :모든 요소가 조건을 만족하면 true 아니면 false
                
            - forEach 🍠
                
                : 모든 요소에 대하여 함수를 실행, 반환값 없음
                
                ```jsx
                const arr = ['a', 'b', 'c'];
                arr.forEach(e=> console.log(e));
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
        
        : 함수나 변수를 선언되기 전에 호출하여도 먼저 선언된 것처럼 인식
        
        ```jsx
        func(); //함수호출
        
        function func() {   //함수선언
        	console.log("Hello, world!");
        }
        ```
        
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
        

        
        ### 아래 내용에 대해 추가적으로 학습 후 정리해보아요! 🍠
        
        <aside>
        💡 위의 예시의 코드를 활용해서, 코드를 작성해주시고, 설명 또한 작성해주세요!
        
        </aside>
        
        - getter 🍠
            
            :객체의 속성을 읽기 위한 메서드입니다. 속성을 직접 접근하는 대신, getter를 통해 값을 가져옵니다.
            
        - setter 🍠
            
            :객체의 속성을 설정하기 위한 메서드입니다. 속성을 직접 변경하는 대신, setter를 통해 값을 설정합니다.

### react에서 자주 사용하는 자바스크립트 문법

- 구조 분해 할당(Destructuring assignment)
    
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

<aside>
💡

DOM 조작은 웹 개발에서 매우 중요한 개념으로, 미션 1을 수행하는 데 필수적인 내용을 다루고 있습니다. 특히, React와 같은 프론트엔드 라이브러리와 밀접하게 연관되어 있기 때문에, 이 부분에 대한 깊이 있는 이해는 필수적입니다.

구글 검색을 통해 관련된 자료들을 찾아보면 DOM 조작에 대한 매우 상세하고 유익한 설명을 쉽게 얻을 수 있습니다. 이러한 자료들을 참고하여 DOM 조작에 대한 핵심 키워드를 정리하고, 워크북에 체계적으로 기록해 주시기 바랍니다.

DOM 조작은 브라우저 상에서 HTML 문서의 구조를 동적으로 수정하고, 사용자와의 상호작용을 처리하는 중요한 방법론입니다. JavaScript를 통해 DOM을 조작하는 방법을 정확히 이해하고 익히는 것이 앞으로의 학습에 큰 도움이 될 것입니다. React에서의 상태 관리와 컴포넌트 렌더링 최적화 역시 DOM 조작의 원리를 기반으로 하고 있기 때문에, 시간을 들여 꼼꼼히 학습하시길 바랍니다.

- UMC 7th 중앙 WEB 파트장 매튜/김용민 - 

</aside>

- 태그 가져오기
    
    ```jsx
    const ele1 = document.getElementById("#id"); //id로 가져오기
    const ele2 = document.getElementByClassname(".class"); //클래스명으로 가져오기
    const ele3 = document.documentByTagName("p"); //태그명으로 가져오기
    const ele4 = document.querySelector("h1"); //선택자 or 태그로 가져오기
    ```
    
- 이벤트 리스너 추가하기
    
    ```jsx
    ele1.addEventListener("click",handleClick}); //이벤트리스너 추가
    const handleClick = ()=>{console.log("클릭~")
    ```
    
- 이벤트 리스너 제거하기
    
    ```jsx
    ele1.removeEventListener("click",handleClick) //이벤트리스너 제
    ```
    
- 키보드와 마우스 이벤트
    
    click: 클릭했을 떄
    
    mouseover / mousedown: 마우스를 올렸을 때 / 내렸을때 
    
    keydown / keyup / keypress : 키를 눌렀을때 / 땟을때 / 누른상태
    
    focus / blur : 포커스가 이동되었을때/ 포커스가 벗어났을때
    
    change : 값이 변경됐을 때
    
- 태그 속성 다루기
    
    ```jsx
    ele1.getAttribute("src") //속성 가져오기
    ele2.setAttribute("type","password") // 속성 제어하기
    ```
    
- 부모와 자식 태그 찾기
    
    ```jsx
    const pNode = ele1.parentNode //부모노드 반환
    const childNodeArray = ele1.childNodes; //자식노드 배열로 반환
    ```
    
- 새로운 태그 만들기
    
    ```jsx
    const newTag = document.createElement("p");
    ```
    
- 태그 복제하기
    
    ```jsx
    const div = document.getElementById('ele1');
    // 노드 복사하기 (deep copy)
    const newNode = div.cloneNode(true);
    ```
    
