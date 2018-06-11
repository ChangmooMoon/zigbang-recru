# zigbang 간단한 설문조사

> 배포 주소 :

## Stack

Everything in this project is in JavaScript.

### Frontend

- react
- react-router
- CSS Module + Sass

### dependencies(Frontend)

- sass-loader, node-sass : Sass 라이브러리
- open-color : 색상 파렛트
- include-media : 미디어쿼리 라이브러리
- react-icons : SVG 컴포넌트 라이브러리
- reactstrap : bootstrap 스타일 컴포넌트 지원(여기서는 컴포넌트 접힘 애니메이션이 있는 컴포넌트만 사용(collapse))

### 개발시 이슈들
 - 1. props로 받아온 스트링 변수(유저 평가 텍스트)를 div박스 안에서 렌더링 할때 div박스의 크기를 인식 못하고 박스 밖으로 글자가 넘어가버리는 상황이 생김. 텍스트를 쪼개서 렌더링함. 그래서 디버거로 넘어오는 prop의 타입을 체크했더니 처음 렌더링되기 전에는 object였다가 {}안에서 렌더링되는 순간 string으로 되는 것을 파악하고 container 컴포넌트에서 넘겨주는props를 JSON.stringify로 string화 했다. 이래서 타입스크립트 쓰는거구나 라고 생각함

 - 2. state라고 하더라도 처음 스키마를 잘 짜놔야겠다는 생각을 함. 나중에 원하는 값으로 편하게 렌더링 하기 위해서 key-value들을 전부 새로 짜야했음


### yarn start!
-
-└── src
-    ├── components
-    │   ├── StepView : step별로 주요 내용의 view만을 구현해놓은 컴포넌트폴더
-    │   ├── atom : 몇번 안 쓰이는 컴포넌트들을 모아놓은 폴더. 마지막 스텝의 헤더 컴포넌트가 들어있음.
-    │   │   └── FinalHeader
-    │   └── common 자주 쓰이는 컴포넌트(header,Footer, 페이지 템플릿)들을 모아놓은 폴더. 재사용성을 위해서 만듬
-    │       ├── FooterNextPageButton
-    │       ├── FooterPrevPageButton
-    │       ├── Header
-    │       └── PageTemplate
-    ├── containers 각 페이지별 라이프사이클 함수 등이 구현되있는 컨테이너 클래스 컴포넌트 폴더.
-    ├── lib json파일이 들어있음(주거정보 데이터)
-    ├── pages 라우팅이 되어있는 페이지 컴포넌트이다. 각 페이지 컴포넌트 안에 container component가 들어있다
-    ├── static : 정적 이미지 폴더
-    │   └── images
-    └── styles: sass 스타일링 라이브러리 폴더
-        └── lib
