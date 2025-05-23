<details>
  <summary><strong>async, await에 대해서 설명해주세요.</strong></summary>

<br>

# 비동기 함수 async

ES2017(ECMAScript 8)부터 추가된 자바스크립트의 비동기 처리 방식 중 하나입니다. async와 await를 사용하면 비동기 코드를 동기 코드처럼 작성할 수 있어, 가독성이 좋아지고 에러 처리가 간단해집니다.
Promise를 기반으로 하며, 코드를 보다 간결하고 직관적으로 작성할 수 있도록 해줍니다. async 함수는 항상 Promise 객체를 반환하며, await 키워드를 이용하여 비동기 처리 결과를 기다립니다.

### 장점
🌟 가독성이 좋은 코드로, 에러 위치를 찾기 쉽습니다. <br>
🌟 에러 핸들링이 쉽습니다.<br>
🌟 비동기 처리를 통해 사용자 요청에 빠른 반응이 가능합니다.<br>
🌟 병렬 처리가 가능합니다.<br>

### 단점
🌟 무조건 Promise를 반환하기 때문에 추가 처리가 필요합니다.<br>
🌟 `await` 키워드와 무조건 함께 사용해야 합니다.<br>


## 동기 / 비동기

* 동기(synchronous)란, 어떤 작업을 실행할 때 그 작업이 끝나기를 기다리는 방식을 의미합니다. 즉, 작업이 완료될 때까지 다음 코드의 실행을 멈추고 기다리는 것입니다. 이러한 방식은 작업의 순서를 보장하고, 작업이 끝날 때까지 결과를 기다리는 것이 가능합니다.

* 비동기(asynchronous)란, 어떤 작업을 실행할 때 그 작업이 완료되지 않더라도 다음 코드를 실행하는 방식을 의미합니다. 즉, 작업이 완료되지 않았더라도 결과를 기다리지 않고 다음 코드를 실행하는 것으로, 이러한 방식은 작업이 오래 걸리는 경우 시간을 절약하고, 병렬적인 작업 처리가 가능합니다.


</details>
