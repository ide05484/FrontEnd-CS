<details>
  <summary><strong>CORS 에러에 대해 말씀해주세요.</strong></summary>

<br>

# CORS

교차 출처 리소스 공유 Cross-Origin Resource Sharing의 줄임말입니다.
서로 다른 도메인인 서버와 브라우저 간 통신 시, 브라우저가 자원에 접근하는 권한을 서버가 부여하고 알려주는 것이 의무입니다.
그렇지 않을 때, 브라우저 측에서 안전하지 않다고 판단, 통신을 차단하는 것이 **CORS 오류** 입니다.

여기서 Origin은 `Protocol, Host, Port`를 의미합니다.
Origin이 같으면, CORS에러는 발생하지 않습니다.

# CORS 에러 해결 방법

서버에서 응답 헤더에 특정 헤더를 포함하는 방식으로 해결할 수 있습니다.
`Access-Control-Allow-Origin`를 통해 특정 브라우저가 리소스에 접근 가능하도록 허용합니다.

- Access-Control-Allow-Method : 특정 HTTP Method만 리소스 접근 허용
- Access-Control-Expose-Headers : 자바스크립트에서 헤더 접근 허용
- credentials : 쿠키 등 인증 정보 전달


</details>
