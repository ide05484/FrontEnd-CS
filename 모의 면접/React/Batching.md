<details>
  <summary><strong>React의 Batching에 대해 설명해주세요.</strong></summary>

<br>

## 배치(Batching)
- 성능 향상을 위해 여러 상태(state) 업데이트를 하나의 리렌더링으로 묶어 처리하는 방법
- React 18 이후 createRoot API를 활용하여 배치 처리가 기본적으로 활성화됨.

#### React 18 이전 버전
```javascript
// React 17에서:
function handleClick() {
  setCount(c => c + 1); // 이벤트 핸들러 내부: 배칭 적용됨
  setFlag(f => !f);     // 배칭 적용됨 (한 번의 렌더링)
}

setTimeout(() => {
  setCount(c => c + 1); // React 외부 환경: 배칭 적용 안됨
  setFlag(f => !f);     // 배칭 적용 안됨 (두 번의 렌더링 발생)
}, 1000);
```
- 이벤트 핸들러 내부에서만 배치 처리가 수행되었음.
- Promise, setTimeout()과 같은 요소는 배치를 위해 따로 메서드를 구현했어야 했음.

#### React 18 이후

- 자동 배칭 도입되어 여러 상태 업데이트에서 배칭이 적용됨.
- Promise 내부, setTimeout(), setInterval(), 이벤트 핸들러 등 모든 곳에서 가능.

### 배치 처리 동작 순서

1. 각 상태의 업데이트를 대기열 큐에 추가
2. 이벤트 루프에서 대기열에 있는 모든 업데이트를 처리
3. 모든 업데이트가 처리되면 단일 렌더링 사이클을 시작

----

➕ **추가 질문) 배치 처리를 피해야 하는 경우는 어떻게 하나요?**

DOM 측정을 위해 즉시 상태 업데이트를 반영해야 하는 경우, 배치 없이 렌더링된 상태로 다음 함수를 실행해야 할 때, `flushSync()`를 사용할 수 있다.

```javascript
import { flushSync } from 'react-dom';

function handleClick() {
  // 첫 번째 업데이트를 즉시 처리
  flushSync(() => {
    setCounter(c => c + 1);
  });
  // 이 시점에서 DOM이 이미 업데이트되었음
  
  // 두 번째 업데이트도 즉시 처리
  flushSync(() => {
    setFlag(f => !f);
  });
  // DOM이 다시 업데이트되었음
}
```

이 함수는 콜백 내의 모든 업데이트를 즉시 처리하도록 하기 때문에 성능에 부정적일 수 있으니 꼭 필요한 경우에만 사용해야 한다.

</details>
