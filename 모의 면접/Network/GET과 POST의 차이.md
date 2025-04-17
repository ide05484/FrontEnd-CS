<details>
  <summary><strong>HTTP 메서드 중 Get과 Post 차이는 무엇인가요?</strong></summary>

<br>

# HTTP method

클라이언트 - 서버 구조에서 요청(Request)과 응답(Response)가 이루어지는 방식을 의미합니다.
Get, Post, Put, Patch, Delete가 있습니다.

## Get과 Post의 차이

GET은 서버로부터 데이터를 받아오기 위한 메서드이고, POST는 서버에 데이터를 전송하기 위한 메서드입니다.
GET은 URL에 데이터가 노출되므로 보안적으로 중요한 데이터를 포함해서는 안됩니다.
반면에 POST는 데이터를 바디에 추가하여 전송하는 방식으로,완전히 안전하다는 것은 아니지만 URL에 데이터가 노출되지 않아 GET 보다는 안전합니다.


➕ 추가 질문)
**그럼 Patch와 Put의 차이는 무엇인가요?**

PUT은 리소스의 모든 것을 업데이트하기 때문에 데이터가 없으면 새로 생성하지만, PATCH는 리소스의 일부를 업데이트합니다.


</details>
