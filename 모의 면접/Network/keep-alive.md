<details>
  <summary><strong>keep-alive에 대해 설명해주세요</strong></summary>

<br>

[참고할 사이트](https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Keep-Alive)

# HTTP Keep-Alive

HTTP 프로토콜에 keep-alive 기능은 클라이언트와 서버 간 요청 및 응답과정을 효율적으로 유지하기 위해 사용됩니다. 이것을 활성화하면 하나의 TCP 연결을 여러 번 재사용하며 응답/요청을 수행할 수 있습니다.
HTTP/1.1프로토콜 때부터 도입되었습니다. Application에서 관리됩니다.

```
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=1000
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(body)
```

요청 헤더에 `Connection: Keep-Alive`값을 포함시킵니다.

# TCP Keep-Alive

HTTP Keep-Alive와는 다르게, TCP 연결 후 유지에 대해 패킷을 보내며 체크하는 매커니즘을 의미합니다. 따라서 OS에서 관리되는 영역이며, Connection이 끊어질 경우 알려주는 역할도 합니다.

</details>
