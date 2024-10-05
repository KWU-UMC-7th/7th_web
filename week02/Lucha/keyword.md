# Chapter 2. React 맛 보기

# 📝 학습 목표

---

1. 리액트의 동작 방식에 대해 알아봅니다.
2. JSX 문법에 대해 알아봅니다.
3. 리액트 훅 중 useState에 대해 심도있게 알아봅니다.

<aside>
💡 이번 주차는 리액트에 대해 학습해보는 시간입니다. 전체적인 HTML, CSS, JS에 대한 기초 지식이 필요하므로, 0주차~1주차 학습을 필요로 합니다.

</aside>

# ⚠️  스터디 진행 방법

---

1. 스터디를 진행하기 전, 워크북 내용들을 모두 채우고 스터디에서 서로 모르는 내용들을 스터디원과 함께 공유해 주세요.
2. 실습과 미션은 워크북 내용들을 모두 완료한 후, 스터디 전에 진행해 오세요!
    - 1주 차 스터디 이전에 1주 차 워크북을 완성한 후 스터디를 진행해 주세요.
3. 스터디 시간에는 각자 해 온 미션들을 공유하고, 아래의 과정을 진행합니다.
    1. 스터디원과 함께 코드 리뷰 진행.
    2. 코드 리뷰 이후, 본인의 코드의 문제가 있는 경우 리팩토링 진행.
    3. 팀원들과, 조금 더 코드를 깔끔하게 작성할 수 있는 개선점이 있을지 고민 후, 리팩토링 진행.
    4. 각자 미션을 진행하면서 해결하지 못한 이슈를 공유 후, 해당 이슈를 도움받아 해결.
4. 매주 주어진 미션을 성실하게 제출합니다.
5. 🍠 이모지가 붙어있는 곳은, 직접 여러분들이 채워 넣으셔야 하는 부분입니다. 꼭 Google을 통한 검색을 하시고, VSCode를 활용하여, 실행 결과를 눈으로 보시면서 정리해 주세요!

# 📸 잠깐 ! 스터디 인증샷은 찍으셨나요?📸

---

* 스터디리더께서 대표로 매 주차마다 한 장 남겨주시면 좋겠습니다!🙆💗
 (사진을 저장해서 이미지 임베드를 하셔도 좋고, 복사+붙여넣기해서 넣어주셔도 좋습니다!)

[]()

# 🍠  React Vite 초기 세팅 방법

---

<aside>
💡

아래 키워드를 진행하시기 전에, 꼭 초기 세팅을 진행하고 해주세요!

</aside>

[React Vite 초기 세팅](https://www.notion.so/React-Vite-110b57f4596b814d8da4ed1cc23f029f?pvs=21)

# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad

추가로, 위에서 초기 세팅 한 App.jsx 파일을 바탕으로 핵심 키워드를 정리해 볼 예정입니다.
초기 세팅 먼저하고 진행해주세요!**

</aside>

- React의 동작 원리
    
    ### React의 동작 원리
    
    React는 User Interface Library이다. 리액트의 핵심적인 특징은 아래와 같다.
    
    <aside>
    💡
    
    각 특징들이 무엇인지, 어떠한 이점이 있는지 정리해주세요
    
    - UMC 웹 파트장 매튜 / 김용민 - 
    
    </aside>
    
    1. SPA (Single Page Application)
    - 정리
        - SPA는 단일 HTML 페이지로 구성된 웹 애플리케이션으로, 페이지 전환 시 전체 페이지를 새로 로드하지 않고 필요한 부분만 업데이트한다. 사용자 경험이 향상되며, 빠른 응답성과 부드러운 내비게이션을 제공한다. 서버와의 상호작용을 최소화하여 성능을 개선한다.
    1. User Interface Library 
    - 정리
        
        React는 UI를 구성하는 컴포넌트를 만들고 관리하는 라이브러리,  재사용 가능한 컴포넌트를 통해 코드의 모듈화가 가능하며, 유지보수가 용이, 다양한 UI 라이브러리와의 통합이 용이
        
    1. Functional Component (함수형 컴포넌트)
    - 정리
        
        React에서 컴포넌트를 정의하는 방법 중 하나로, 함수 형태로 작성됨. 상태 관리와 생명주기 메서드를 훅(hook)으로 처리할 수 있다. 간결하고 이해하기 쉬운 코드 작성이 가능하며, 상태 및 부수 효과 관리를 통해 코드의 가독성을 높인다.
        
    1. Virtual DOM (가상 DOM)
    - 정리
        
        실제 DOM의 경량 복사본으로, React에서 상태 변화가 발생할 때 이를 업데이트하기 위한 효율적인 방식, 전체 DOM을 직접 조작하는 것보다 성능이 뛰어나며, 필요한 부분만 업데이트하여 렌더링 속도 개선
        
    1. 동시성 렌더링
    - 정리
        
        React의 새로운 기능으로, 여러 렌더링 작업을 동시에 처리하여 사용자 인터페이스의 응답성 향상, 대규모 애플리케이션에서 사용자 경험을 개선하고, 렌더링 지연을 줄여 더욱 부드러운 UI를 제공
        
    

### JSX 문법에 대해 배워보자! 🍠

- JSX 사용시 유의 사항 (기초)
    
    ### 1. React에서 JSX를 반환할 때 꼭 하나의 태그만 반환해야한다.
    
    **`⭕️ 가능한 경우`**
    
    ```jsx
    function App() {
      return (
         <strong>상명대학교</strong>
      )
    }
    
    export default App
    ```
    
    **`❌ 불가능한 경우`**
    
    ```jsx
    import './App.css'
    
    function App() {
      return (
         <strong>상명대학교</strong>
         <p>매튜/김용민</p>
      )
    }
    
    export default App
    
    ```
    
    <aside>
    💡
    
    여러개를 반환하고 싶은 경우는 어떻게 해야 할까요?
    코드와, 이유를 간략하게 작성해주세요.
    
    </aside>
    
    - 답변 🍠
        
        ```jsx
        // 코드 아래 첨부
        // 하나로 묶기
        import './App.css'
        
        function App() {
          return (
          <div>
             <strong>상명대학교</strong>
             <p>매튜/김용민</p>
           </div>
          )
        }
        
        export default App
        
        ```
        
        <aside>
        💡
        
        이유: 
        
        최신 리액트 프로젝트가 브라우저에 실행되는 과정에서 과거 리액트 프로젝트에서 사용한 방법이 적용된다.
        
        ```jsx
        return (
            <div>
              <h2>Let's get started!</h2>
              <Expenses item={expenses} />
            </div>)
        ```
        
        위와 같은 반환 값이
        
        ```jsx
        return React.createElement(
          'div',
          {},
          React.createElement('h2', {}, "Let's get started!"),
          React.createElement(Expenses, {item: expenses})
        )
        ```
        
        이렇게 바뀌는 것이다.
        
        반환 값은 오직 하나이기 때문에 같은 선상에 있는 여러 요소들을 묶어주어야 한다. 이때 요소를 배열로 볼 수 없으니 또 다른 요소로 감싸준다.
        
        ```jsx
        // 잘못된 코드
        return [
          React.createElement('h2', {}, "Let's get started!"),
          React.createElement(Expenses, {item: expenses}
        ]
        ```
        
        </aside>
        
    - 해설
        
        ```jsx
        function App() {
          return (
             <>
              <strong>상명대학교</strong>
              <p>매튜/김용민</p>
             </>
          )
        }
        
        export default App
        ```
        
        많은 분들이 `<> 빈 태그(Fragment)`를 활용할 수 있다는 부분을 모르실 것 같습니다. 스타일링을 하거나, 부모태그가 필요한 경우가 아닌, 다수의 태그를 반환하고 싶은 경우는 `<> 빈 태그를 활용`해도 좋습니다.
        
    
    또한 React에서는 HTML에서 사용하신 다양한 태그를 사용할 수 있습니다~!!
    
    ### 2. React에서 스타일링 방법
    
    1. className을 활용한 스타일링
    
    ```jsx
    import './App.css'
    
    function App() {
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p>매튜/김용민</p>
         </>
      )
    }
    
    export default App
    
    ```
    
    이런식으로, `className`을 지정해주겠습니다. App.jsx 코드 상단을 보면 ‘./App.css’를 import하여 사용하고 있습니다.
    
    `App.css` 파일로 가서 아래와 같이 코드를 입력해주겠습니다.
    
    ```jsx
    .school {
      background-color: blue;
      color: white;
      font-size: 10rem;
    }
    ```
    
    ![스크린샷 2024-09-09 오후 4.58.48.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/2d957261-4c70-4d89-bf9c-549fbfc1aca7/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.58.48.png)
    
    1. Inline-Styling을 활용한 스타일링
    
    ```jsx
    import './App.css'
    
    function App() {
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>매튜/김용민</p>
         </>
      )
    }
    
    export default App
    ```
    
    위와 같이, **`style`** 이후 중괄호를 두번 연 후, 카멜 표기법을 사용하여, css 코드를 작성할 수 있습니다.
    
    중괄호를 두개 쓰는 이유는, 아래와 같습니다.
    
    1. 바깥쪽 중괄호는 자바스크립트 문법임을 나타낸다.
    2. 안쪽 중괄호는 자바스크립트의 객체임을 나타낸다.
    
    **`HTML 방식과 유사하지만 살짝 다르므로, 주의해주세요!!`**
    
    ```jsx
    // HTML 방식 (케밥 표기법)
    <div style="background-color: purple">
    	고구마
    </div>
    
    // JSX 방식 (카멜 표기법)
    <div style={{backgroundColor: 'purple'}}>
    	고구마
    </div>
    ```
    
    ### 3. local variable (로컬 변수) 선언
    
    ```jsx
    import './App.css'
    
    function App() {
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>매튜/김용민</p>
         </>
      )
    }
    
    export default App
    ```
    
    여기서, 이제 매튜라는 이름을, `nickname` 이라는 변수를 할당 받아서, 사용해보고자 합니다.
    
    ```jsx
    import './App.css'
    
    function App() {
      const nickname = '매튜'
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>매튜/김용민</p>
         </>
      )
    }
    
    export default App
    
    ```
    
    매튜/김용민 → 이 부분을 **`nickname/김용민`** 이렇게 쓴다면 당연히, 문자열로 인식 할 것 입니다.
    
    `nickname`이라는 변수에 접근해서, `nickname`의 변수가 갖고 있는 매튜라는 닉네임에 접근하고 싶기에 이러한 경우에는 **`중괄호{}`** 를 사용하면 됩니다.
    
    ```jsx
    import './App.css'
    
    function App() {
      const nickname = '매튜'
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>
    	      {nickname}/김용민
    	     </p>
         </>
      )
    }
    
    export default App
    
    ```
    
    제대로 동작함을 확인할 수 있고, `nickname` 안의 값도 자유롭게 변경하면, 그에 맞춰서 `nickname`이 변경됨을 확인할 수 있습니다.
    
- JSX 사용시 유의 사항 (심화)
    
    ### 1. 문자열과 함께 변수 사용하기
    
    `중괄호{}`와 ```를 활용`하여, 문자열과 함께 변수를 사용할 수 있습니다.
    
    자주 사용하는 패턴이니 꼭 익숙해지시길 바랍니다!
    
    ```jsx
    import './App.css'
    
    function App() {
      const nickname = '매튜'
      const sweetPotato = '고구마'
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>{nickname}/김용민</p>
          <h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
         </>
      )
    }
    
    export default App
    
    ```
    
    ![스크린샷 2024-09-09 오후 5.16.19.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/da56da7b-3210-4644-b4fd-4872afd15bad/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.16.19.png)
    
    ### 2. 배열의 요소를 나타내는 방법.
    
    array안의 요소를 각각 나타내고 싶은 경우는 **`map`**을 활용합니다.
    
    map에 대해 잘 모르는 분들은, JS 관련 워크북을 다시 한번 보시거나, 구글링 하여 공부 후 진행해주세요.
    
    ```jsx
    import './App.css'
    
    function App() {
      const nickname = '매튜'
      const sweetPotato = '고구마'
      const array = ['REACT', 'NEXT', 'VUE', 'SVELTE', 'ANGULAR', 'REACT-NATIVE']
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>{nickname}/김용민</p>
          <h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
          <ul>
            {array.map((yaho, idx) => {
              return <li key={idx}>{yaho}</li>
            })}
          </ul>
         </>
      )
    }
    
    export default App
    
    ```
    
    map은 yaho를 인자로 받아서, 값을 반환합니다. **`중괄호를 사용한 경우에는 꼭 return을 적어주어야`** 반환하는 값이 제대로 보입니다. 많은 분들이, 이 부분에서 어려움을 많이 겪기에, 혹시라도 본인이 작업한 내용이 잘 보이지 않는다면 중괄호인지, 소괄호인지를 먼저 찾아보세요!
    
    ```jsx
          <ul>
            {array.map((yaho, idx) => {
              return <li key={idx}>{yaho}</li>
            })}
          </ul>
    ```
    
    소괄호를 활용한 경우에는 return을 생략할 수 있습니다.
    
    ```jsx
          <ul>
            {array.map((yaho, idx) => (
               <li key={idx}>{yaho}</li>
            ))}
          </ul>
    ```
    
    map을 활용하는 경우에는, `key`라는 `props를 설정`해야 함. key값은 각 원소들마다 가지고 있는 **`고유값`**으로 설정을 해야 합니다.
    
    현재는 map 함수에서, 제공해주는 index를 활용해주었지만, 실제로 인덱스를 활용한 경우, 값이 삭제되는 기타 동작의 경우, 문제가 발생하기 떄문에 보통 서버에서 제공해주는 고유한 id 값을 사용하기는 합니다.
    
    `yaho`와, `idx`와 같은 경우는 정해진 이름은 없습니다. 본인이 원하는 이름을 사용해서 반환해주어도 좋습니다.
    
    ```jsx
    // 보통은 복수와 단수를 잘 활용하는게 좋습니다.
    const numbers = [1, 2, 3, 4, 5];
    
    // 단수를 인자로.
    numbers.map((number, index) => return { // 작업들 } ));
    ```
    
    ![스크린샷 2024-09-09 오후 5.27.56.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/7a3741ba-5f49-4af9-95a1-0c773825accf/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.27.56.png)
    
- 첫 컴포넌트 만들어보기
    
    ### 첫 컴포넌트 만들어보기
    
    React에서는 컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 관리할 수 있습니다.
    
    위에서 순서대로 진행했더라면, 현재 우리의 코드는 아래와 같습니다.
    
    ```jsx
    import './App.css'
    
    function App() {
      const nickname = '매튜'
      const sweetPotato = '고구마'
      const array = ['REACT', 'NEXT', 'VUE', 'SVELTE', 'ANGULAR', 'REACT-NATIVE']
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>{nickname}/김용민</p>
          <h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
          <ul>
            {array.map((yaho, idx) => (
               <li key={idx}>{yaho}</li>
            ))}
          </ul>
         </>
      )
    }
    
    export default App
    ```
    
    실제로, yaho를 반환하는 부분을 **`List 컴포넌트`**로 만들어 보겠습니다.
    
    ```jsx
    <li key={idx}>{yaho}</li>
    ```
    
    **`src 폴더 내부`**에 **`components`** 폴더를 하나 만들어주겠습니다. 그 후 **`List.jsx 파일`**을 만들어보겠습니다.
    
    ![스크린샷 2024-09-09 오후 5.35.51.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/d9a6330d-3f0b-43c1-b1b1-d39ad37f85c6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.35.51.png)
    
    우리가 궁극적으로 만들고 싶은 내용은 아래와 같습니다.
    
    ![스크린샷 2024-09-09 오후 5.37.05.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/e20d1131-591b-4581-802f-03a75ebb4fa2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.37.05.png)
    
    기존에 작업하던, App.jsx로 가서
    
    ```jsx
    import './App.css'
    // 1. List Component를 Import 해줍니다.
    import List from './components/List';
    
    function App() {
      const nickname = '매튜'
      const sweetPotato = '고구마'
      const array = ['REACT', 'NEXT', 'VUE', 'SVELTE', 'ANGULAR', 'REACT-NATIVE']
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>{nickname}/김용민</p>
          <h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
          <ul>
            {array.map((yaho, idx) => (
              // 2.  <li key={idx}>{yaho}입니다.</li> -> List 컴포넌트를 호출합니다.
              <List />
            ))}
          </ul>
         </>
      )
    }
    
    export default App
    
    ```
    
    각각의 **`컴포넌트는 props`**를 활용하여 데이터를 전달 받을 수 있습니다.
    
    저희는, 일단 map 방식은 키를 전달해주어야 하기 때문에 List 컴포넌트에 key를 전달해 줄 것 입니다.
    
    ```jsx
    <List key={idx} />
    ```
    
    추가적으로, 각 List에 화면에 보여줄 데이터를 전달해주기 위해 특정 이름으로 데이터를 전달해 줄 것입니다.
    
    기술 스택을 전달해주므로, **`문맥상 맞게 tech라는 props의 이름`**으로 전달해주겠습니다.
    
    ```jsx
    <List key={idx} tech={yaho} />
    ```
    
    이렇게 하고 화면을 실행시켜 봅시다.
    
    ![스크린샷 2024-09-09 오후 5.41.47.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/7bd5e857-40f6-401f-b9fa-178e46ce149e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.41.47.png)
    
    당연히 현재 List 컴포넌트는 아래와 같기에 아무것도 반환되지 않습니다.
    
    ```jsx
    const List = () => {
      return (
        <>
          
        </>
      )
    }
    
    export default List
    
    ```
    
    전달받은 props를 활용해보고자 합니다.
    
    ```jsx
    const List = (props) => {
       console.log(props)
      return (
        <>
          
        </>
      )
    }
    
    export default List
    
    ```
    
    앞으로 프론트엔드 개발을 진행하시면서, **`console.log()`**를 통하여, 자주 본인이 하는 것들을 확인하는 습관이 매우 중요합니다. props의 내용이 무엇이 들었는지 **`Chrome → F12`** 개발자도구를 통해 만든 웹사이트에서 확인해보겠습니다.
    
    ![스크린샷 2024-09-09 오후 5.43.17.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/99ecfc9e-0a76-462f-8174-a3fd8a0a6a41/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.43.17.png)
    
    우리가 아까 **`<List key={idx} tech={yaho} />`** 이런 식으로 값을 전달해주었기에 props를 호출 했을 때 tech라는 이름에 요소 하나하나의 값이 들어가 있음을 확인할 수 있습니다.
    
    여기서 주의하셔야 합니다.
    
    실제로 우리가 props를 호출 했을 때 { tech: ‘REACT’ } 라는 결과값이 나왔습니다.
    
    그럼 우리가 해당 값을 활용할 떄는 {tech}를 활용하는 것이 아닌, **`{props.tech}`**를 통해 값에 접근해야 합니다. **`(해당 내용이 이해가 안가면, 자바스크립트 워크북 객체에 대해 공부하셔야 합니다.)`**
    
    ```jsx
    // props를 호출했을 때 
    const List = (props) => {
       console.log(props)
      return (
        <li>
          {props.tech}
        </li>
      )
    }
    
    export default List
    
    ```
    
    ![스크린샷 2024-09-09 오후 5.46.22.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/765780fd-dd7d-483a-a8c4-cba2f856fae9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.46.22.png)
    
    여기서 현재는 [props.tech](http://props.tech) 하나밖에 없기에 불편함을 크게 못느끼기겠지만, 전달받은 props가 tech 이외에, name, food 등 여러가지라면 매번 props.tech, props.name, [props.food](http://props.food) 이런식으로 값을 활용하는 것은 매우 귀찮을 것 입니다.
    
    우리는 이것을 해결하기 위해 **`JS 구조분해 할당에 대해 이전에 학습`**했습니다. 어떤 식으로 활용하면 좋을지 본인이 직접 해보고 아래에 **`List.jsx`** 파일을 넣어주세요.
    
    - 구조분해 할당 활용 **`List.jsx`**
    - 해설
        
        첫번째 방식
        
        ```jsx
        // 직접 props를 받는 부분에서 구조 분해 할당을 진행하는 방법.
        const List = ({tech, food, yaho}) => {
          return (
            <li>
              {tech}
            </li>
          )
        }
        
        export default List
        
        ```
        
        두번쨰 방식
        
        ```jsx
        // props를 전달 받고, 그 이후에 구조 분해 할당을 하는 방법.
        const List = (props) => {
          const { tech, food, yaho } = props;
          return (
            <li>
              {tech}
            </li>
          )
        }
        
        export default List
        
        ```
        
    
    이제 각 컴포넌트에 해당하는 스타일링을 진행하면 좋습니다. 스타일링은 크게 많이 하지 않을 것이고, 거슬리는 부분만 제거해보고자 합니다.
    
    일단은 **`<ul>`**일때 자동으로 부여해주는 **`﹒`**이 좀 거슬리므로, 해당하는 것들을 삭제해보겠습니다.
    
    ```jsx
    const List = (props) => {
      const { tech } = props;
      return (
    	  // listStyle을 통해 제거할 수 있습니다.
        <li style={{listStyle: 'none'}}>
          {tech}
        </li>
      )
    }
    
    export default List
    
    ```
    
    이런식으로, 컴포넌트를 분리하여, 스타일링이 가능하다. 구조 분해 할당을 통해 조금 더 깔끔하게 코드를 작성할 수 있다를 알아주시면 됩니다!
    

### 나의 첫 번쨰 react-hook 🍠

<aside>
💡

리액트 함수 컴포넌트에서 가장 중요한 개념은 훅입니다.

함수형 컴포넌트 이전에 클래스 컴포넌트에서 가능했던, state, ref와 같은 리액트의 핵심 기능들을 함수에서도 간결하게 사용 가능하게 만들었습니다.

우선, 다양한 Hook 중 **`useState`**에 대해서 배워보고자 합니다.

</aside>

- **`useState` 기초**
    
    ### useState 기초
    
    `useState`는 함수형 컴포넌트 안에서 상태를 정의하고, 이 상태를 관리할 수 있게 하는 훅입니다.
    
    기본적인 사용법은 아래와 같습니다.
    
    ```jsx
    import { useState } from 'react';
    
    const [state, setState] = useState('초기값');
    ```
    
    `useState`의 반환 값은 배열입니다. 배열의 첫 번째 원소로 state를 사용할 수 있습니다. 그냥 `state`를 사용하게 된다면, 당연히 `useState`의 괄호안에 정의한 초기값이 나오게 됩니다.
    
    두번째 `setState`를 활용한다면, `state의 값을 변경`할 수 있습니다.
    
    ### useState 실습 진행
    
    글로만 보면 잘 이해가 되지 않을 것 입니다. 간단한 카운터를 만들어보며 실습을 진행해보겠습니다.
    
    App.jsx에 아래와 같이 내용을 수정해봅시다.
    
    ```jsx
    import './App.css'
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0)
      return (
         <>
          <h1>{count}</h1>
         </>
      )
    }
    
    export default App
    
    ```
    
    우리가 **`useState`**의 초기값을 0이라고 했기에, 당연히 현재 웹을 실행시켜보면, 0이 화면에 출력됩니다.
    
    그럼 해당 숫자를 어떠한 방식으로 증가 시킬까요?
    
    `react`에서는, `JS`의 `onclick`과 같은, 기능을 제공해줍니다.
    
    ```jsx
    import './App.css'
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0)
      return (
         <>
          <h1>{count}</h1>
          <button onClick={() => {}}>숫자 증가</button>
         </>
      )
    }
    
    export default App
    
    ```
    
    **`onClick`**을 활용하여, 클릭할 때 추가적인 행동을 정의 할 수 있다. 우리가 값(상태)을 변화하고 싶을 때는 `useState` 배열의 두 번쨰 인자를 사용한다고 했다.
    
    ```jsx
    import './App.css'
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0)
      return (
         <>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>숫자 증가</button>
         </>
      )
    }
    
    export default App
    
    ```
    
    ![스크린샷 2024-09-09 오후 6.24.59.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5862b26a-8b90-4d41-86de-dc6801be00e9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.24.59.png)
    
    이러한 식으로, `setState`를 활용하여 값을 증가 시켜줄 수 있다.
    
- **`useState`** 심화
    
    ### useState 심화
    
    일단, 이전에 기초에서 만든 코드를 살짝 수정해보겠습니다. **`handleIncreaseNumber`**라는 함수를 만들어, **`onClick`**에 인자로 전달해주고자 합니다.
    
    ```jsx
    import './App.css'
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0)
      const handleIncreaseNumber = () => {
        setCount(count + 1)
      }
      return (
         <>
          <h1>{count}</h1>
          <button onClick={handleIncreaseNumber}>숫자 증가</button>
         </>
      )
    }
    
    export default App
    ```
    
    동일하게 동작함을 확인 할 수 있을 것 입니다!! 간단한 작업인 경우, 이전과 같이 작성해도 크게 문제 없으나, 뭔가 복잡한 작업이 많은 경우에는 이러한 식으로, 따로 함수를 만들어 관리하면 다른 사람이 **`해당 코드를 읽기에 숫자를 증가하는 기능`**이구나 하고 이해하기 쉬울 것 입니다.
    
    아래 코드의 동작을 예측해봅시다. 버튼을 누를 때 마다, 몇 씩 증가하게 될 까요?
    
    ```jsx
    import './App.css'
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0)
      const handleIncreaseNumber = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
      }
      return (
         <>
          <h1>{count}</h1>
          <button onClick={handleIncreaseNumber}>숫자 증가</button>
         </>
      )
    }
    
    export default App
    
    ```
    
    **`setCount`**를 6번 호출 했기에, 6씩 증가할 것 같으나, 실제로는 1씩 증가합니다 .이는 자바스크립트의 **`클로저`**와 깊은 연관이 있습니다. 
    
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures
    
    ![스크린샷 2024-09-09 오후 6.35.30.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/2bb27390-3b77-4ae1-9781-7713b9189b88/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.35.30.png)
    
    먼저 왜 그런지 설명하기에 앞서서 **`Lexical Environment`**에 대해서 설명하고자 합니다.
    
    **`Lexical Environment`**란 함수가 실행될 때, 그 함수 안에서 참조할 수 있는 **변수나 상태 값의 저장소**라고 생각하면 됩니다. 이 환경은 함수가 호출될 때마다 새로운 환경이 생성되는 것이 아니라, 함수가 선언될 당시의 변수를 기억하고 있습니다. (즉, count = 0)
    
    React는 상태를 즉시 업데이트하지 않고, 함수를 실행할 당시의 상태를 기억해 두는 **`렉시컬 환경(Lexical Environment)`**이라는 것을 사용합니다. 그래서, `handleIncreaseNumber` 함수가 실행될 때마다 함수가 실행된 시점의 상태(여기서는 `count = 0`)를 기준으로 값을 계산하게 됩니다.
    
    쉽게 말해, **`handleIncreaseNumber` 함수 안에서 `count`는 0으로 고정된 것처럼 작동**하는 거죠.
    
    ```jsx
    setCount(count + 1); -> 0 + 1
    setCount(count + 1); -> 0 + 1
    setCount(count + 1); -> 0 + 1
    setCount(count + 1); -> 0 + 1
    setCount(count + 1); -> 0 + 1
    setCount(count + 1); -> 0 + 1
    
    // 최종 결과: 1
    ```
    
    우리가 원하는 것은 버튼 클릭 하나에 6씩 증가하는 동작을 원합니다. 
    
    `setState`의 업데이트를 하는 두번째 방식을 활용하면, 지금 문제점을 해결할 수 있습니다!
    
    ```jsx
    // setState는 두가지 방식으로 활용할 수 있다.
    
    // 1. 한번에 값을 업데이트 (batch 방식)
    setCount(count + 1);
    
    // 2. 이전 상태 값을 인자로 전달하여 업데이트 (prev라는 이름은 자유롭게 변경 가능);
    setCount(prev => prev + 1);
    ```
    
    아래와 같이 활용하면 됩니다.
    
    ```jsx
    import './App.css'
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0)
      const handleIncreaseNumber = () => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
      }
      return (
         <>
          <h1>{count}</h1>
          <button onClick={handleIncreaseNumber}>숫자 증가</button>
         </>
      )
    }
    
    export default App
    
    ```
    
    정상적으로 6씩 증가함을 확인하시면 됩니다.
    
- **`useState`** 객체 상태 업데이트
    
    ### useState로 객체 상태 변화하기
    
    **`useState`**는 위에서 실습해본 숫자가 아닌, 객체 또한 변화 시킬 수 있습니다.
    
    이 때 사용되는 개념이 얕은 복사, 깊은 복사 개념과 이전에 자바스크립트 워크북에서 배운 전개 연산자를 활용하면 매우 유용하게 값을 업데이트 할 수 있습니다.
    
    객체는 숫자와 다르게 **참조 타입**이기 때문에, 객체 상태를 업데이트할 때 **얕은 복사**와 **깊은 복사** 개념을 잘 이해하는 것이 중요합니다.
    
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
    
    ### 실습. useState를 활용하여 객체를 업데이트하기
    
    ```jsx
    import { useState } from 'react';
    
    function App() {
      // 초기 상태로 '김용민', 26, '매튜'를 가진 person 객체를 초기값으로 생성합니다.
      const [person, setPerson] = useState({
        name: "김용민",
        age: 26,
        nickname: "매튜"
      });
    
      // city 값을 새로 추가하여 업데이트하는 함수
      const updateCity = () => {
        setPerson(prevPerson => ({
          ...prevPerson,   // 이전 person 객체의 복사본 생성
          city: "서울"      // 새로 city 값을 추가하거나 업데이트
        }));
      };
    
      // age 값을 1씩 증가시키는 함수
      const increaseAge = () => {
        setPerson(prevPerson => ({
          ...prevPerson,   // 이전 person 객체의 복사본을 생성합니다.
          age: prevPerson.age + 1  // 다른 key의 value는 유지, age 값을 기존 값에서 1 증가
        }));
      };
    
      return (
        <>
          <h1>이름: {person.name}</h1>
          <h2>나이: {person.age}</h2>
          <h3>닉네임: {person.nickname}</h3>
          {person.city && <h4>도시: {person.city}</h4>}
          <button onClick={updateCity}>도시 추가</button>
          <button onClick={increaseAge}>나이 증가</button>
        </>
      );
    }
    
    export default App;
    
    ```
    
    ![스크린샷 2024-09-09 오후 7.03.11.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/510e5b89-e5c0-4da9-baa6-01ad4d4ca7ab/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.03.11.png)
    
    버튼을 눌렀을 때, 객체의 상태를 안전하게 업데이트 할 수 있습니다. **`전개 연산자를 활용`**하여, **`기존 상태를 복사`**하면서, 일부 속성만 업데이트 할 수 있기에 **`불변성을 유지`**하며 상태를 관리할 수 있습니다.
    

# 🔥 실습 - ToDoList 만들며 useState 익히기 🍠

<aside>
💡

이번 실습은 위에서 학습한 jsx 문법과 **`useState`**를 활용하여 TodoList를 만들어보고자 합니다.

개발 하면서 필수라고 말할 수 있는

1. 추가
2. 수정
3. 삭제

3 가지 요소를 배워보고자 합니다.

스스로 만들어 보는 것이 매우 좋으나, WEB 파트 같은 경우, 아직 HTML, CSS, JS에 익숙하지 않은 사람이 매우 많기에, 여러 번 되돌려서 볼 수 있도록 강의 형태로 제공해 드리는 점 참고 바랍니다.

처음부터 막히고, 매우 어려운 것이 당연하며, 좌절하지 마시고, 여러 번 만들어 보시면 금방 이해하실 수 있습니다!

최대한 자세하게 설명을 드리려고, 강의 영상 자체가 조금 깁니다.

너무 강의 영상에 의존하지 말고, 혼자 구글링을 하시며, 만들어 보고자 노력하시면 좋겠습니다!

**- UMC 7th 중앙 WEB 파트장 매튜/김용민 -**

</aside>

https://www.youtube.com/watch?v=8pm6o5dXtw0&t=3182s

https://www.youtube.com/watch?v=8pm6o5dXtw0&t=1032s

수정하기 부분에서 자바스크립트의 얕은 복사, 깊은 복사에 대해 많이 헷갈리시는 분이 있을 것 이라고 생각합니다. 이에 대해 한번 정리해주시면 좋을 것 같습니다!

- 얕은 복사 🍠
    
    정리: 얕은 복사는 최상위 레벨의 속성만 복사하고, 중첩된 객체나 배열은 참조로 유지합니다. 즉, 복사된 객체의 속성이 원본 객체의 속성과 같은 메모리 주소를 가리킵니다.방법:`Object.assign()`스프레드 연산자(`...`)예시:
    
    `javascript
    
    const original = { a: 1, b: { c: 2 } };
    const shallowCopy = { ...original };
    
    shallowCopy.b.c = 3;
    console.log(original.b.c); *// 3 (원본 객체도 변경됨)*`이점: 성능이 좋고 간단하게 복사할 수 있습니다.단점: 중첩된 객체의 변경이 원본에 영향을 미칠 수 있습니다.
    
    - 정리: 얕은 복사는 최상위 레벨의 속성만 복사하고, 중첩된 객체나 배열은 참조로 유지합니다. 즉, 복사된 객체의 속성이 원본 객체의 속성과 같은 메모리 주소를 가리킵니다.
    - 방법:
        - **`Object.assign()`**
        - **스프레드 연산자(`...`)**
    - 예시:`javascriptconst original = { a: 1, b: { c: 2 } };
    const shallowCopy = { ...original };
    shallowCopy.b.c = 3;
    console.log(original.b.c); *// 3 (원본 객체도 변경됨)*`
    - 이점: 성능이 좋고 간단하게 복사할 수 있습니다.
    - 단점: 중첩된 객체의 변경이 원본에 영향을 미칠 수 있습니다.
- 깊은 복사 🍠
    
    정리: 깊은 복사는 객체의 모든 속성을 재귀적으로 복사하여 중첩된 객체까지 완전히 새로운 복사본을 생성합니다. 따라서 복사된 객체는 원본 객체와 완전히 독립적입니다.방법:`JSON.parse(JSON.stringify())` (단, 함수나 `undefined`, 특수 객체는 복사되지 않음)라이브러리 사용 (예: Lodash의 `cloneDeep`)예시:
    
    `javascript
    
    const original = { a: 1, b: { c: 2 } };
    const deepCopy = JSON.parse(JSON.stringify(original));
    
    deepCopy.b.c = 3;
    console.log(original.b.c); *// 2 (원본 객체는 변경되지 않음)*`이점: 중첩된 구조를 완전히 독립적으로 복사할 수 있어 원본 객체에 영향을 주지 않습니다.단점: 성능이 상대적으로 떨어지고, 복사할 수 없는 데이터 타입이 있을 수 있습니다.
    
    - 정리: 깊은 복사는 객체의 모든 속성을 재귀적으로 복사하여 중첩된 객체까지 완전히 새로운 복사본을 생성합니다. 따라서 복사된 객체는 원본 객체와 완전히 독립적입니다.
    - 방법:
        - **`JSON.parse(JSON.stringify())` (단, 함수나 `undefined`, 특수 객체는 복사되지 않음)**
        - **라이브러리 사용 (예: Lodash의 `cloneDeep`)**
    
    - 예시:`javascriptconst original = { a: 1, b: { c: 2 } };
    const deepCopy = JSON.parse(JSON.stringify(original));
    deepCopy.b.c = 3;
    console.log(original.b.c); *// 2 (원본 객체는 변경되지 않음)*`
    - 이점: 중첩된 구조를 완전히 독립적으로 복사할 수 있어 원본 객체에 영향을 주지 않습니다.
    - 단점: 성능이 상대적으로 떨어지고, 복사할 수 없는 데이터 타입이 있을 수 있습니다.

# 🔥 미션 1 - ToDoList CSS 🍠

<aside>
💡

위의 미션대로 잘 수행 하셨더라면, 기능 중점 강의이기 때문에 따로 스타일링을 진행하지 않았고, 컴포넌트 분리 또한 진행하지 않았습니다.

아래 이미지 처럼, 못생긴 투두 리스트를 고쳐주시면 됩니다!
1. 컴포넌트 분리
2. 스타일링

</aside>

![스크린샷 2024-09-09 오후 6.08.38.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5eb6f9e5-d730-4068-9742-526e5d107d1a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.08.38.png)

- [ ]  컴포넌트 분리를 해주세요
    - [ ]  Button 컴포넌트
    - [ ]  Input 컴포넌트
- [ ]  본인만의 TODO List 스타일링을 추가해주세요.
    - [ ]  `inline` 스타일링이 아닌, `className`을 활용한 스타일링을 진행해주세요!

# 🔥 미션2 - 영화 컴포넌트 만들기 🍠

<aside>
💡

앞으로, 미션을 하나씩 수행해나가면서, 영화 페이지를 만들어 볼려고 합니다.

1. inline style을 활용해보기.
2. 컴포넌트 분리에 익숙해지기.
</aside>

![스크린샷 2024-09-12 오후 6.52.59.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/9d68dbf3-dade-4f7a-a570-39a293ca6fcc/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.52.59.png)

- [ ]  API 사용하기
    
    API에 대해선 뒤에서 더 자세히 다룰 예정입니다. 우선은 아래의 파일을 복사해서 사용해주세요!
    
    - API 파일
        
        ```jsx
        // mocks 폴더에 movies.js 파일을 만든 후, 해당 파일을 사용해봅시다!
        export const MOVIES = {
          "dates": {
            "maximum": "2023-09-17",
            "minimum": "2023-07-31"
          },
          "page": 1,
          "results": [
            {
              "adult": false,
              "backdrop_path": "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
              "genre_ids": [
                28,
                878,
                27
              ],
              "id": 615656,
              "original_language": "en",
              "original_title": "Meg 2: The Trench",
              "overview": "전 세계에서 가장 깊은 마리아나 해구, 역사상 가장 거대하고 무자비한 포식자가 도사리는 그곳에서 강철 다이버 ‘조나스’(제이슨 스타뎀)가 더 맹렬하게 돌아온 ‘메가로돈’과 짜릿한 대결을 펼치는 액션 어드벤처",
              "popularity": 2429.447,
              "poster_path": "/cbAHK6Vrt0GClMRUxH8TsgC2JqL.jpg",
              "release_date": "2023-08-15",
              "title": "메가로돈 2",
              "video": false,
              "vote_average": 7,
              "vote_count": 1790
            },
            {
              "adult": false,
              "backdrop_path": "/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg",
              "genre_ids": [
                16,
                35,
                28
              ],
              "id": 614930,
              "original_language": "en",
              "original_title": "Teenage Mutant Ninja Turtles: Mutant Mayhem",
              "overview": "뉴욕의 하수구로 스며든 미스터리한 녹색 액체, ‘우즈’로 인해 아기 거북이 네 마리와 청년 쥐 스플린터는 사람과 비슷한 모습의 돌연변이가 된다. 15년 후, 10대 청소년이 된 레오나르도, 미켈란젤로, 라파엘, 도나텔로는 하수구에 숨어 사는 생활에서 벗어나 인간 세상에서 평범한 삶을 살고 싶어하고 우연히 만난 학생 기자 에이프릴과 함께 도시를 위협하는 '슈퍼플라이'와 그 일당을 물리치면 뉴욕의 히어로가 되어 당당히 세상에 나갈 수 있을 거라는 꿈을 꾸는데… 인간들을 모두 돌연변이로 만들겠다는 ‘슈퍼플라이’의 음모로 위험에 빠진 뉴욕! 틴에이저 히어로로 다시 태어난 ‘닌자터틀’ 형제들의 스트릿 액션 어드벤처가 펼쳐진다!",
              "popularity": 800.947,
              "poster_path": "/6xORIhe6cP3iM5RYTHs7MTOH1qa.jpg",
              "release_date": "2023-09-14",
              "title": "닌자터틀: 뮤턴트 대소동",
              "video": false,
              "vote_average": 7.3,
              "vote_count": 512
            },
            {
              "adult": false,
              "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
              "genre_ids": [
                18,
                36
              ],
              "id": 872585,
              "original_language": "en",
              "original_title": "Oppenheimer",
              "overview": "세상을 구하기 위해 세상을 파괴할 지도 모르는 선택을 해야 하는 천재 과학자의 핵개발 프로젝트.",
              "popularity": 530.049,
              "poster_path": "/4ZLnVUfiCe3wX8Ut9eyujndpyvA.jpg",
              "release_date": "2023-08-15",
              "title": "오펜하이머",
              "video": false,
              "vote_average": 8.3,
              "vote_count": 3566
            },
            {
              "adult": false,
              "backdrop_path": "/2zzaJ9jzyK1Am8XoS0dFjmP8V0L.jpg",
              "genre_ids": [
                28,
                53,
                27
              ],
              "id": 1135229,
              "original_language": "en",
              "original_title": "I Am Rage",
              "overview": "에린은 새로운 남자친구의 고향인 어느 한적한 시골마을을 방문한다. 그곳에서 비슷하게 여행을 온 커플들을 만나게 되고 그들은 실종이 되어도 누구도 찾지 않은 외로운 사람들이라는 공통점이 있다는 것을 알게 된다. 그들은 인간의 피를 거래하고 마시며 초자연적인 힘을 얻는 사이비 살인마 집단에 납치된 것. 하지만 에린은 위기에 몰리거나 분노하게 되면 극한의 잔인함과 폭력성이 초인적으로 발현되는 특이한 혈통을 가진 체질이다. 에린의 분노가 폭발하고 그녀를 사냥한 악인들에 대한 더욱 잔혹한 사냥이 시작된다.",
              "popularity": 425.756,
              "poster_path": "/z1nFd03qoiCrHlGSxBlumkF9uZh.jpg",
              "release_date": "2023-09-14",
              "title": "론 서바이버 : 아이 엠 리벤지",
              "video": false,
              "vote_average": 6.5,
              "vote_count": 11
            },
            {
              "adult": false,
              "backdrop_path": "/kHlX3oqdD4VGaLpB8O78M25KfdS.jpg",
              "genre_ids": [
                9648,
                18,
                80
              ],
              "id": 945729,
              "original_language": "en",
              "original_title": "A Haunting in Venice",
              "overview": "세계적 명탐정 '에르큘 포와로'는 오랜 탐정 생활에서 은퇴하여 아름다운 도시 베니스에서 평범한 삶을 살아가고 있다. 그런 그에게 오랜 친구이자 베스트셀러 작가인 '아리아드네 올리버'가 찾아와 죽은 영혼을 부를 수 있다고 알려진 영험한 심령술사의 실체를 밝혀달라고 부탁하게 된다.핼러윈 밤, 베니스 운하 위 위치한 고풍스러운 저택의 주인이자 1년 전 사랑하는 딸을 잃고 깊은 상실에 빠진 '로웨나 드레이크'의 초대로 교령회에 참석한 이들은 미스터리한 심령술사 '조이스 레이놀즈'가 죽은 영혼의 목소리를 전하는 광경을 보며 혼란에 빠지게 된다. 갑자기 발생한 끔찍한 살인 사건에 실체 없는 용의자를 쫓던 '에르큘 포와로'는  자신의 모든 믿음이 흔들리는 경험을 하며 충격에 빠지게 되는데....",
              "popularity": 348.761,
              "poster_path": "/dUQdookYulZV9sTIEvAuAu1Ptxv.jpg",
              "release_date": "2023-09-13",
              "title": "베니스 유령 살인사건",
              "video": false,
              "vote_average": 6.8,
              "vote_count": 203
            },
            {
              "adult": false,
              "backdrop_path": "/5Jfk2p3iGrChUKkl0cBD5krr2u8.jpg",
              "genre_ids": [
                16,
                10749
              ],
              "id": 998731,
              "original_language": "ja",
              "original_title": "映画 佐々木と宮野ー卒業編ー",
              "overview": "여성스러운 얼굴이 콤플렉스인 고등학교 2학년 ‘미야노’와 불량해 보이는 3학년 선배 ‘사사키’. BL 만화를 빌려 주면서 시작된 두 사람은 마침내 사랑에 빠진다. 어느덧 계절은 겨울로 바뀌고 ‘사사키’의 졸업이 코 앞으로 다가온다 두 사람은 함께하는 고교 생활을 소중하게 보내지만, 졸업이 다가올수록 애틋한 마음은 커져만 가는데… 고민도 불안도 날려 버리고, 언제나 아껴 주고 싶은 마음을 전하고 싶어!",
              "popularity": 204.668,
              "poster_path": "/4XeVvKoPKl5Mbiu6ZN3esMt51e7.jpg",
              "release_date": "2023-09-06",
              "title": "극장판 사사키와 미야노 - 졸업편",
              "video": false,
              "vote_average": 6.3,
              "vote_count": 15
            },
            {
              "adult": false,
              "backdrop_path": "/urDWNffjwmNi5IQaezw9GwqkUXa.jpg",
              "genre_ids": [
                12,
                14
              ],
              "id": 767,
              "original_language": "en",
              "original_title": "Harry Potter and the Half-Blood Prince",
              "overview": "어둠의 세력이 더욱 강력해져 머글 세계와 호그와트까지 위협해온다. 위험한 기운을 감지한 덤블도어 교수는 다가올 전투에 대비하기 위해 해리 포터와 함께 대장정의 길을 나선다. 볼드모트를 물리칠 수 있는 유일한 단서이자 그의 영혼을 나누어 놓은 7개의 호크룩스를 파괴하는 미션을 수행해야만 하는 것! 또한 덤블도어 교수는 호크룩스를 찾는 기억여행에 결정적 도움을 줄 슬러그혼 교수를 호그와트로 초청한다. 한편 학교에서는 계속된 수업과 함께 로맨스의 기운도 무르익는다. 해리는 자신도 모르게 지니에게 점점 끌리게 되고, 새로운 여자 친구가 생긴 론에게 헤르미온느는 묘한 질투심을 느끼는데...",
              "popularity": 143.657,
              "poster_path": "/yrGlb3HLtjGp39mv4MJ5UuIHcj4.jpg",
              "release_date": "2023-09-06",
              "title": "해리 포터와 혼혈왕자",
              "video": false,
              "vote_average": 7.7,
              "vote_count": 18104
            },
            {
              "adult": false,
              "backdrop_path": "/lUPz9zW0uf0bHfYsRRID8RtBHEU.jpg",
              "genre_ids": [
                18,
                36
              ],
              "id": 457232,
              "original_language": "en",
              "original_title": "Lamborghini: The Man Behind the Legend",
              "overview": "2차 세계대전이 종식된 후 고향으로 돌아온 ‘페루치오 람보르기니’  그는 트랙터 회사를 세워 자신의 이름을 널리 알리겠다는 야망을 품고있다.  타협 없는 노력 끝에 결국 트랙터 개발에 성공하였지만, 그의 꿈은 여기서 멈추지 않는다.  페루치오는 동경하는 자동차 제조사 회장 ‘엔초 페라리’를 찾아가 동업을 제안하지만,  시골 촌놈 취급을 받으며 거절당하는 굴욕을 당한다. 이에 격분한 페루치오는 업계에서 유능하다고 알려진 자동차 엔지니어를 스카우트하며, 황소같이 강력한 차를 만들기위해 의기투합한다. 제네바 모터쇼까지 6개월밖에 남지 않은 상황에서 페루치오는 정말 세상에 선보인 적 없던 최고의 차를 만들어 낼 수 있을까?",
              "popularity": 112.035,
              "poster_path": "/1z6EUqJn07mtfmYGzu8LmHfiOJW.jpg",
              "release_date": "2023-08-23",
              "title": "람보르기니: 전설이 된 남자",
              "video": false,
              "vote_average": 6.3,
              "vote_count": 300
            },
            {
              "adult": false,
              "backdrop_path": "/fIQfdZ6fqf9mIbqBaexbgIEIk5K.jpg",
              "genre_ids": [
                35
              ],
              "id": 864168,
              "original_language": "en",
              "original_title": "Joy Ride",
              "overview": "성공 가도를 달리던 알파걸 변호사 '오드리'(애슐리 박)는 초고속 승진을 위해 어릴 적 헤어진 생모를 찾아오라는 황당한 미션을 받는다.  꽃미남 전문가인 음란마귀 아티스트 '롤로'(셰리 콜라), 흑역사 숨기고 할리우드 진출 앞둔 톱배우 '캣'(스테파니 수), 흐린 눈의 케이팝 광인 '데드아이'(사브리나 우)가 합류하면서 네 친구들의 크레이지한 월드투어가 시작된다!  지구 반 바퀴를 돌고 도는 고생길 끝에 밝혀진 오드리의 출생의 비밀은…",
              "popularity": 102.202,
              "poster_path": "/dY2HZ0yAMhYqwHkuKM5HU7zxoJ9.jpg",
              "release_date": "2023-08-30",
              "title": "조이 라이드",
              "video": false,
              "vote_average": 6.6,
              "vote_count": 160
            },
            {
              "adult": false,
              "backdrop_path": "/dvHKdXijoN1OEzGcPhd0eRvkfMd.jpg",
              "genre_ids": [
                27,
                53,
                28,
                12
              ],
              "id": 960258,
              "original_language": "en",
              "original_title": "Shark Bait",
              "overview": "마지막 봄 방학을 기념하러 해변에서 파티를 벌이던 젊은이들은 우연히 주인 없이 방치된 제트스키 두 대를 발견하고 키를 훔친다. 그들은 제트스키가 처참한 결과를 몰고 올 재앙의 원인이 될지 모른 채 승선한다. 철없는 치킨게임을 하다 고장 난 제트스키는 바다 한 가운데 고립되고 거대한 백상어의 그림자가 서서히 그들 주위를 맴돈다. 상어의 희생자가 한 명씩 늘어가는 가운데 남은 사람들은 해변으로 돌아가기 위해 고군분투한다.",
              "popularity": 69.423,
              "poster_path": "/pxsn8GtNHbN01iWkD2cV8CMuGzm.jpg",
              "release_date": "2023-08-03",
              "title": "47시간: 샤크베이트",
              "video": false,
              "vote_average": 5.8,
              "vote_count": 261
            },
            {
              "adult": false,
              "backdrop_path": "/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",
              "genre_ids": [
                28,
                35,
                12,
                53
              ],
              "id": 739405,
              "original_language": "en",
              "original_title": "Operation Fortune: Ruse de Guerre",
              "overview": "전 세계 검은 무기 거래 왕, 슈퍼 빌런 ‘그렉’  그가 정체를 파악조차 불가능한 ‘핸들’을 거래한다는  첩보 내용이 입수된다. 국가 정보국은 전세계를 붕괴시킬 수도 있는  이것이 무엇인지 대혼돈에 빠지게 되고… 이 혼돈을 해결할 자는 오직 하나! 액션 만랩, 수트 핏과 꿀성대까지! 모든 것이 완벽한 업계 최고의 스파이 ‘포춘’ 무비 스타, 테크 전문가와 샷건 마스터까지 팀 ‘포춘’을 조합한 후 일생일대의 위험한 임무에 나서게 되는데…",
              "popularity": 58.973,
              "poster_path": "/5QXoAgO905YGucMJmeDb4CmjEUT.jpg",
              "release_date": "2023-08-30",
              "title": "스파이 코드명 포춘",
              "video": false,
              "vote_average": 6.6,
              "vote_count": 1031
            },
            {
              "adult": false,
              "backdrop_path": "/63CDysgJZb38ZXdw2yF1UuDJgDN.jpg",
              "genre_ids": [
                53
              ],
              "id": 979924,
              "original_language": "en",
              "original_title": "On the Line",
              "overview": "심야 라디오 '온 더 라인'의 진행자 엘리스가 생방송 중 의문의 전화를 받게 되고, 쇼맨은 그의 온 가족을 죽이겠다고 협박을 한다. 모든 것이 실시간으로 진행되는 라디오에서 사랑하는 사람을 구하기 위한 엘리스의 고군분투 생존게임이 시작되는데...",
              "popularity": 50.437,
              "poster_path": "/o04KUuO9Zoi1L8KxH5Z4jJF7iXb.jpg",
              "release_date": "2023-08-02",
              "title": "온 더 라인",
              "video": false,
              "vote_average": 6.1,
              "vote_count": 382
            },
            {
              "adult": false,
              "backdrop_path": "/qAvou7F5P4VcIR72JzzrnKEQSN3.jpg",
              "genre_ids": [
                12,
                14,
                10751
              ],
              "id": 630,
              "original_language": "en",
              "original_title": "The Wizard of Oz",
              "overview": "회오리 바람에 휩쓸려 오즈의 나라로 내던져진 도로시는 집으로 되돌아갈 수 있는 유일한 길이 위대한 오즈의 마법사를 만나는 것임을 알고 그를 찾아 긴 여정이 시작된다. 도로시는 애견 토토와 함께 노란 길을 따라 오즈의 마법사가 사는 에메랄드 시티로 향한다. 도중에 만난 세 명의 친구들, 지능을 얻고자 하는 허수아비와 심장을 원하는 양철 나뭇꾼, 용기를 가지고 싶어하는 겁장이 사자와 함께 오즈의 마법사에게 자신의 소원이 이루어지도록 부탁하기 위해 도로시와 함께 경쾌한 발걸음을 옮긴다. 그러나 도로시 일행을 방해하기 위해 뒤쫓아오는 서쪽 나라 마녀의 검은 그림자.",
              "popularity": 53.375,
              "poster_path": "/9FzHxca1OybjwOdTmWLfhdD4u0g.jpg",
              "release_date": "2012-05-03",
              "title": "오즈의 마법사",
              "video": false,
              "vote_average": 7.6,
              "vote_count": 5105
            },
            {
              "adult": false,
              "backdrop_path": "/rHnANzYUmV3WZw3n0yWOLiR3pen.jpg",
              "genre_ids": [
                53
              ],
              "id": 976912,
              "original_language": "en",
              "original_title": "Graphic Desires",
              "overview": "친구의 소개로 데이팅 앱에 가입한 '프랭크'  연인 몰래 앱을 통해 만난 여성에게 강한 성적 끌림을 느낀 그는 다시 그녀를 찾지만 여자는 사라지고 계정도 비활성화된다.  현실과 가상을 넘나들며 그녀를 찾아 헤매는 동안 그는 점점 데이팅 앱에 중독되고 결국 예기치 못한 사건에 휘말리고 마는데∙∙∙",
              "popularity": 46.565,
              "poster_path": "/8EHehEMsJVIPp2n2ROhZU8dbpJC.jpg",
              "release_date": "2023-08-31",
              "title": "그래픽 디자이어",
              "video": false,
              "vote_average": 1,
              "vote_count": 1
            },
            {
              "adult": false,
              "backdrop_path": "/wNYUv8u5Z0AI4dkyxGyet7eLEWm.jpg",
              "genre_ids": [
                18
              ],
              "id": 945675,
              "original_language": "zh",
              "original_title": "一周的朋友",
              "overview": "일주일마다 친구에 대한 기억을 잃는 전학생 ‘린샹즈’ 병 때문에 자발적 아싸가 돼버린 그녀에게 성화 재수학원 최고 인싸 3인방 ‘쉬유수’, ‘송샤오난’, ‘장우'가 다가온다.  “일주일만 기억해도 상관없어. 일주일간 친구 하면 되잖아!” 머리가 좋아지는 호박죽, 기억력 증진 댄스, 깜찍한 유수표 엄지 인형까지! 세 사람은 샹즈의 단 하나뿐인 ‘일주일간 친구’가 되기 위해 고군분투하고, 샹즈는 그들과의 추억을 일기장에 채워 나가기 시작한다.",
              "popularity": 51.949,
              "poster_path": "/bCp45FrpSWD0mEx2EGHkvxOs2OK.jpg",
              "release_date": "2023-09-06",
              "title": "일주일간 친구",
              "video": false,
              "vote_average": 5.7,
              "vote_count": 110
            },
            {
              "adult": false,
              "backdrop_path": "/z6GxNP2Z5AyoFfrYKxZWJypfZXJ.jpg",
              "genre_ids": [
                16,
                10751
              ],
              "id": 823609,
              "original_language": "en",
              "original_title": "Monster Family 2",
              "overview": "몬스터에서 인간으로 겨우 돌아온 ‘위시본’ 패밀리!  새 가족이 된 전설 속 몬스터 ‘바바 야가’와 ‘렌필드’의 결혼식 날, 그들은 슈퍼 소녀 ‘밀라’에게 납치당한다. 이들뿐 아니라 드라큘라, 예티, 네시, 그리고 킹 콩가까지!! ‘위시본’ 패밀리는 ‘밀라’에 의해 전 세계 몬스터들이 납치된 것을 알게 되는데…  몬스터들을 구하기 위해 다시 몬스터로 변한 ‘위시본’ 패밀리! 과연 ‘위시본’ 가족은 몬스터들을 구하고 다시 인간으로 돌아갈 수 있을까?",
              "popularity": 21.008,
              "poster_path": "/9kPiLqqWlwCVL0KGJeM4kcZA9q9.jpg",
              "release_date": "2023-08-02",
              "title": "몬스터 패밀리 2",
              "video": false,
              "vote_average": 6.6,
              "vote_count": 63
            },
            {
              "adult": false,
              "backdrop_path": "/6Lqs0Bw2L2ZoVgx9XpmeN7vBcr0.jpg",
              "genre_ids": [
                18
              ],
              "id": 960275,
              "original_language": "fr",
              "original_title": "Maestro(s)",
              "overview": "권위 있는 빅투아르 음악상을 수상하며 차세대 거장으로 자리매김한 지휘자 ‘드니 뒤마르’. 그가 넘어야 할 가장 큰 산은 다름 아닌 같은 지휘자이자 음악계의 거장인 아버지 ‘프랑수아 뒤마르’이다.  한편, 아버지 ‘프랑수아’는 존경받는 최고의 지휘자지만 곧 정상의 위치에서 밀려날지도 모른다는 위기감과 함께, 같은 분야에서 승승장구하는 아들 ‘드니’에게 묘한 경쟁심을 느끼고 있다.  그러던 중 ‘프랑수아’는 평생을 소망하던, 이탈리아 ‘라 스칼라’ 극장의 지휘자 자리를 제안하는 전화를 받고 뛸 듯이 기뻐한다. 하지만 아들 ‘드니’는 자신에게 가야 할 제안이 아버지에게 잘못 전달되었음을 알게 되고, 인생 최대의 고민과 마주한다.  꿈의 무대를 두고 마주한 아버지와 아들! ‘라 스칼라’ 무대에 서게 될 주인공은 과연 누구일까?",
              "popularity": 36.246,
              "poster_path": "/8CNn2HuBMQYOA425MbAoc3oeTNO.jpg",
              "release_date": "2023-08-09",
              "title": "마에스트로",
              "video": false,
              "vote_average": 5.7,
              "vote_count": 36
            },
            {
              "adult": false,
              "backdrop_path": "/8nLiWpgxOfH15FjBgTvvcah3ZUb.jpg",
              "genre_ids": [
                28,
                53,
                80,
                35
              ],
              "id": 1015963,
              "original_language": "en",
              "original_title": "High Heat",
              "overview": "전직 특수요원 출신 스타 셰프 '아나'(올가 쿠릴렌코)가 마피아의 타겟이 된 레스토랑을 구하기 위해 킬러 본능을 다시 일깨운다.",
              "popularity": 24.199,
              "poster_path": "/wIFYnvvdwsjD0Wjeg8MjIIp58rR.jpg",
              "release_date": "2023-08-17",
              "title": "킬러의 레스토랑",
              "video": false,
              "vote_average": 5.6,
              "vote_count": 98
            },
            {
              "adult": false,
              "backdrop_path": "/4hAhZ66n5iasGtSYHTFg6oGdJk0.jpg",
              "genre_ids": [
                53,
                27,
                878
              ],
              "id": 660942,
              "original_language": "no",
              "original_title": "De uskyldige",
              "overview": "이다와 안나는 새로운 아파트로 이사한 직후, 또래인 벤자민, 아이샤와 친구가 된다. 네 명의 아이들은 어른이 개입하지 않는 순간, 특별한 잠재력을 깨워나가기 시작하고 벤자민은 능력을 이용해 사람들을 조정할 수 있게 된다. 단순한 호기심과 장난으로 행해지던 어떤 일들이, 급기야 분노라는 감정과 이어지고 결국 친구들을 비롯해 주변에 위협을 가하기 시작하는 벤자민. 가장 순수하고, 본능적이었던, 그래서 더욱 파괴적이고 잔인할 수 있었던 잔혹한 동심의 세계가 펼쳐진다!",
              "popularity": 22.179,
              "poster_path": "/tNJ2oOuTPHny3x633DwwKDnc5mQ.jpg",
              "release_date": "2023-09-06",
              "title": "이노센트",
              "video": false,
              "vote_average": 7,
              "vote_count": 439
            },
            {
              "adult": false,
              "backdrop_path": "/g8kCHQzfogy1t1dE9nPBtiFkz64.jpg",
              "genre_ids": [
                53,
                878,
                18
              ],
              "id": 729854,
              "original_language": "ko",
              "original_title": "콘크리트 유토피아",
              "overview": "대지진으로 하루아침에 폐허가 된 서울. 모든 것이 무너졌지만 단 한 곳, 황궁 아파트만은 그대로다. 소문을 들은 외부 생존자들이 황궁 아파트로 몰려들자 위협을 느끼기 시작하는 입주민들. 생존을 위해 하나가 된 그들은 새로운 주민 대표 영탁을 중심으로 외부인의 출입을 철저히 막아선 채 아파트 주민만을 위한 새로운 규칙을 만든다. 덕분에 지옥 같은 바깥 세상과 달리 주민들에겐 더 없이 안전하고 평화로운 유토피아 황궁 아파트. 하지만 끝이 없는 생존의 위기 속 그들 사이에서도 예상치 못한 갈등이 시작되는데...",
              "popularity": 22.278,
              "poster_path": "/9dENCKupUckoT1WgOohHMZfVl61.jpg",
              "release_date": "2023-08-09",
              "title": "콘크리트 유토피아",
              "video": false,
              "vote_average": 8,
              "vote_count": 3
            }
          ],
          "total_pages": 5,
          "total_results": 83
        }
        ```
        
    
    이미지의 경우, **이미지 경로 설정**은 아래의 링크를 참고해주세요.
    
    [Basics](https://developer.themoviedb.org/docs/image-basics)
    
- [ ]  위의 API를 활용하여, 위와 동일한, 화면을 구현해주세요!
- [ ]  영화 포스터에 마우스를 올려놓았을 때 아래와 같이, 검정 배경이 위에 보이는 처리를 해봅시다.
    
    [화면 기록 2024-09-12 오후 6.59.28.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/f94b2a4c-95e7-4701-9a88-922dfe59379f/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-09-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.59.28.mov)
    
- **`onClick`** 말고도, 다양한 속성이 있습니다. 이를 한 번 활용해보세요!

# ⚡ 트러블 슈팅

---

<aside>
💡 실습하면서 생긴 문제들 또는 어려웠던 내용에 대해서, **이슈 - 문제 - 해결** 순서로 작성해주세요.

</aside>

- ⚡이슈 No.1 (예시, 서식만 복사하시고 지워주세요.)
    
    **`이슈`**
    
    👉 앱 실행 중에 노래 다음 버튼을 누르니까 앱이 종료되었다.
    
    **`문제`**
    
    👉 노래클래스의 데이터리스트의 Size를 넘어서 NullPointException이 발생하여 앱이 종료된 것이었다. 
    
    **`해결`**
    
    👉  노래 다음 버튼을 눌렀을 때 데이터리스트의 Size를 검사해 Size보다 넘어가려고 하면 다음으로 넘어가는 메서드를 실행시키지 않고, 첫 노래로 돌아가게끔 해결
    
    **`참고레퍼런스`**
    
    - 링크

# 📢 학습 후기

---

- 이번 주차 워크북을 해결해보면서 어땠는지 회고해봅시다.
- 핵심 키워드에 대해 완벽하게 이해했는지? 혹시 이해가 안 되는 부분은 뭐였는지?

<aside>
📢

</aside>

# 🤔 참고 자료

---

Copyright © 2024 Kim Yongmin (Matthew) All rights reserved.