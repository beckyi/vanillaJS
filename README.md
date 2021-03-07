# only use vanilla JS

1. 여러 주제로 두어 vanilla JS 환경에서 개발
2. 동적으로 html, js, css 불러올 수 있도록 구성
3. 새로 알게된 지식일 경우 링크를 저장하여 공부

# 동적으로 호출 (2021.03.07)

- js 파일을 동적으로 다시 불러올 때 변수명 충돌나므로 정의할 때 주의
  : Uncaught SyntaxError: Identifier '${name}' has already been declared
- 파일 리스트를 불러올 땐 fs 모듈을 사용해야하나 npm 사용 불가 규칙으로 dictionary으로 대체
- webpack 세팅이 필요 (js module 가져올 수 있도록 cors 해결)
  : 임시로 $로 정의하여 추후 import/export 구문 사용 (TODO)
- ? dom element 추가 후 다 그려졌을 때 이벤트 찾기 (load 다 안됨..)
