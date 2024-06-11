# 신발 쇼핑몰 홈페이지 만들기

## 1. 개요

- 프로젝트 이름 : ShoeShop Homepage
- 개발 기간 : 2024.05.12 ~ 2024.05.21
- 개발 환경 : React, Redux
- 작업 관리 : Git
- #### 설치 라이브러리

        npm install react-ShoeShop
        npm install react-router-dom@6
        npm install react-bootstrap
        npm install react-redux
        npm install axios

- #### 파일 구성

  ```
    📦 src
    ┣ 📂 routes
    ┃ ┗ 📜Account.js
    ┃ ┗ 📜Cart.js
    ┃ ┗ 📜Detail.js
    ┃ ┗ 📜Home.js
    ┃ ┗ 📜Login.js
    ┃ ┗ 📜Men.js
    ┃ ┗ 📜Notfound.js
    ┃ ┗ 📜Question.js
    ┃ ┗ 📜Women.js
    ┣ 📜App.js
    ┣ 📜App.css
    ┣ 📜index.css
    ┣ 📜index.js
    ┣ 📜logo.svg
    ┣ 📜reportWebVitals.js
    ┣ 📜data.js
    ┣ 📜store.js
    ┗ 📜setupTests.js
  ```

  ## 2. 프로젝트 설명

  - #### React와 Redux를 사용하여 신발 쇼핑몰 홈페이지를 제작하였습니다.
  - #### axios를 사용해 데이터를 추가로 가져와서 화면에 띄웁니다.

  ## 3. 주요 기능

  ## Home 화면

  - #### 신발 아이템 나열하기

  <div align="center">
      <img src = "https://github.com/knss12/shoeshop/assets/121605903/d3b72ef7-9b5e-42fc-b54b-ba5488cf8e22"> 
  </div>

  - data.js에 저장된 데이터를 가져와서 나열해준다.

  - #### Navbar에 Home, Men, Women, Cart, Q&A, Login 링크 나열

  <div align="center">
      <img src = "https://github.com/knss12/shoeshop/assets/121605903/183c10ee-57a6-43da-9bee-a941ff0d07a2"> 
  </div>

  - Link, useNavigate와 onClick을 사용하여 배너 클릭시 해당 화면으로 이동한다.

  ## Detail (상세페이지) 화면

  - #### 신발 데이터 info 관련

  <div align="center">
      <img src = "https://github.com/knss12/shoeshop/assets/121605903/00d086d8-bdc6-4234-8a54-35db8a7eb142"> 
  </div>

  - 홈 화면에서 신발아이템 클릭 시 해당하는 아이템의 화면으로 이동한다
  - useParams를 사용하여 id를 가져온다
  - useState를 사용해 모달 창과 탭 변수를 저장하여 사용한다.
  - 상세페이지의 데이터는 props와 id를 사용하여 가져온다
  - '상세정보' 버튼을 누르면 모달 창이 열리며 '닫기'를 누르면 모달 창이 닫힌다.
  - useDispatch를 이용하여 '구매하기' 버튼을 누르면 Cart화면에 아이템이 추가된다.
  - if문과 Component를 사용하여 탭 화면을 제작하였다.

  ## Men 화면

  - #### 더보기 버튼 누르면 상품html 추가하기

  <div align="center">
      <img src = "https://github.com/knss12/shoeshop/assets/121605903/0e04195d-d3e4-4a33-b870-d4720fe125f5"> 
  </div>

  - map함수를 사용해서 기본 상품html을 나열해준다.
  - axios를 사용해 데이터를 가져와 상품html을 추가해준다.
  - if문을 사용해 조건문을 사용하였다.

  ## Cart 화면

  - #### 장바구니 화면

  <div align="center">
      <img src = "https://github.com/knss12/shoeshop/assets/121605903/4324637d-c16d-4acf-878c-5fa5c82ebbc5"> 
  </div>

  - '+' 버튼을 누르면 수량이 추가된다.

  ## Q&A 화면

  - #### 글올리기 및 삭제 기능

  <div align="center">
      <img src = "https://github.com/knss12/shoeshop/assets/121605903/68be4160-0c3c-4767-b852-79bbb1f10521"> 
  </div>

  - 게시된 글 제목을 클릭 시 상세 정보가 들어있는 모달창이 나타난다.
  - 한번 더 제목 클릭 시 모달창이 닫힌다.
  - 밑에 있는 Input 창에 글을 작성후 '글 올리기' 버튼을 누르면 게시된다.
  - 게시된 글에 있는 '삭제' 버튼을 누르면 글이 삭제된다.

  ## Notfound 화면

  - #### 잘못된 url 주소로 이동시 해당 화면이 나옴

  <div align="center">
      <img src = "https://github.com/knss12/shoeshop/assets/121605903/cbbbd144-82e1-448d-af3f-ffb440f12ee8"> 
  </div>

  - useNavigate와 onClick을 이용해 메인 페이지로 이동이 가능하다.

  ## Login 화면

  - #### 로그인 화면

  <div align="center">
      <img src = "https://github.com/knss12/shoeshop/assets/121605903/be73f3eb-2f79-410f-a148-461c9037c4e1"> 
  </div>

  - ID와 PW를 입력할 수 있는 input 제작
  - 비밀번호 표시가 가능한 체크박스 제작
  - useNavigate를 사용하여 'Create Account' 누르면 회원가입 화면으로 이동

  - #### 회원가입(Account)화면

  <div align="center">
      <img src = "https://github.com/knss12/shoeshop/assets/121605903/889e01d6-b1b6-4d6e-b80c-5cdd42b55bd0"> 
  </div>

  - 회원가입에 필요한 정보를 입력할 수 있는 input창 제작
  - 해당조건 만족을 표시할 수 있는 체크박스 제작
