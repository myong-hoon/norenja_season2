# norenja_season2

피우다 프로젝트에서 미처 완성하지 못한 결과물을 완성하고 리팩토링을 진행하는 개인 프로젝트입니다.

https://github.com/Gamdongran/norenja-info

사용언어 : python 

사용 라이브러리
  1. flask
  * 사용이유 : 장고 / fastAPI 및 기타 언어는 아직 사용해보지 않아 사용
  2. jwt
  * 사용이유 : 세션/쿠키 방식보다 안전하다 (참고 : https://tansfil.tistory.com/58)
  3. pymsql
  * 사용이유 : sql서버를 이용하기 위해 사용
   
  
사용한 DB : MYSQL -> 첫 toy project 에서는 mongoDB를 사용하였는데 sql을 사용하고 싶어 채택했다.



앞으로 업데이트 계획
1. html 파일 재정비 ( 메인 / 로그인1 / 로그인2 )
  - 불필요 주석 제거
  - 주석 추가
  - 불필요 css 제거 및 재정비
  - 페이지마다 들어가는 메뉴/홈버튼/사이드바/검색창 독립시켜 load 시켜 사용하도록 수정

2. 기능별 js 파일 및 테스트 파일 만들어 작성
  - 기능별로 js 독립시켜 파일 관리
  - 테스트 파일 만들어 추후에 동일한 기능을 사용할때 다시 사용할수 있도록 제작
  
* 푸터 만들어서 붙이기
* 로그인 연동
* sql 연동
* 생활복지/의료복지/문화,여가 부분에 관리자로 로그인시 추가 삭제버튼이 나오도록하여 sql데이터 추가 삭제 진행가능하도록
* 주소정보 빠른업로드 가능하도록 csv 파일 업/다운로드 사이트 만들기
* 검색기능 구현


* 로그인 디비(아이디 비번 이름 성별 주소 관할지역 타입(관리자/사용자)) *

 ---------------------------------------------------------------------------------------------------------------
  
2021.12.15 03:44
* login01&login02 html&css 정리완료

2021.12.15 10:00
* gitignore 추가 적용

2021.12.15 23:55
* header.html -> 상단메뉴/사이드바/홈&사이드바 플로팅버튼 만 따로 빼서 구현) -> 사이드바 나오면 검색창이 안가려지는 문제 해결 못함.
* main01.html 에 header.html 불러오도록 함 -> css 및 js 정리필요

2021.12.16 02:20
* mainbar 검색창 수정

2021.12.16 02:28
* sidebar위로 검색창 메뉴 등이 나타나는것 수정

2021.12.18 20:54
* 다음 주소 검색 api 연동하여 회원가입시 주소를 검색하여 입력하도록 설정

2021.12.19 02:21
* join/main/login/header 사소한 오류 및 css 수정
* main/login01/login02에 header load()이용하여 붙임

2021.12.20 02:34
* 복지지도 페이지 ui 완성(css/js/html)

2021.12.20 19:27
* 복지지도 구현 완료(sql 미적용) -> 어제 만든 ui 없애고 카카오 맵에서 제공하는 기능으로 추가(마커 구분하기)



