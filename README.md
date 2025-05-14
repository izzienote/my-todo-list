# 📄 Today's To Do - 투두 리스트

> _"Manage your life efficiently"_

🔗 서비스 바로가기 : https://my-todo-list-alpha-sage.vercel.app/

</br>

## 🎯 주요 기능`

🔹 투두 리스트 관리

- CRUD : 투두 추가, 수정, 삭제 가능
- 완료/미완료 토글 기능
- 필터기능 : 전체, 완료, 미완료 보기 지원
- 로딩 및 에러페이지

</br>

## 📂 프로젝트 구조

```
📦my-todo-list
 ┣ 📂public
 ┃ ┗ 📂images            # 이미지 폴더
 ┣ 📂src
 ┃ ┣ 📂app               # Next JS_App router 루트
 ┃ ┃ ┣ 📂todos           # 투두 페이지
 ┃ ┃ ┣ 📜error.tsx       # 전역 error 페이지
 ┃ ┃ ┣ 📜layout.tsx      # 루트 레이아웃
 ┃ ┃ ┣ 📜loading.tsx     # 로딩 페이지
 ┃ ┃ ┣ 📜page.tsx        # 랜딩 페이지
 ┃ ┃ ┗ 📜provider.tsx    # tanstack-query 프로바이더
 ┃ ┣ 📂components        # 컴포넌트
 ┃ ┣ 📂constants         # 상수
 ┃ ┣ 📂lib
 ┃ ┃ ┣ 📂hooks           # tanstack-query 훅
 ┃ ┃ ┗ 📂utils           # util 함수
 ┃ ┗ 📂types             # Todo 타입 정의
```

</br>

## 📸 프로젝트 미리보기

> 프로젝트 메인화면 & 투두 CRUD

<div>
  <img src='public/images/project1.png' width="200px" style="margin: 10px;"/>
  <img src='public/images/project2.png' width="200px" style="margin: 10px;"/>

  <img src='public/images/project3.png' width="200px" style="margin: 10px;"/>
  <img src='public/images/project4.png' width="200px" style="margin: 10px;"/>
</div>

</br>

## 🛠 기술 스택

|                                                            기술                                                             | 사용 목적                        |
| :-------------------------------------------------------------------------------------------------------------------------: | -------------------------------- |
|           ![Nextjs](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)            | 프론트엔드 프레임워크            |
|      ![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)      | 정적 타입을 통한 안정성 확보     |
| ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white) | 비동기 상태 및 캐싱 관리         |
|    ![Tailwind CSS](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)    | 전체 CSS 스타일링                |
|     ![Jsonserver](https://img.shields.io/badge/json_server-999999?style=for-the-badge&logo=jsonserver&logoColor=white)      | 로컬 API 서버 (Mock 데이터 생성) |
|            ![Glitch](https://img.shields.io/badge/glitch-3333FF?style=for-the-badge&logo=glitch&logoColor=white)            | json-server 배포용 호스팅        |
|            ![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)            | Vercel 배포                      |
|                                               🛠 **Custom Hooks & Components**                                               | 코드 재사용성 향상               |
