<details>
  <summary><strong>가상 DOM에 대해 설명해주세요.</strong></summary>

<br>

# 가상 DOM(Virtual DOM)

## 가상 DOM이란?

- Virtual DOM(가상 DOM)은 실제 DOM을 직접 조작하는 대신 메모리에 가상의 DOM을 만들어 변경 사항을 비교하고, 최소한의 업데이트만 실제 DOM에 반영하는 기법
- React, Vue 등의 라이브러리에서 성능 최적화를 위해 사용됨

---

## 가상 DOM 동작 과정

1. **Virtual DOM 생성**

   - UI의 초기 상태를 메모리에 가상의 DOM 형태로 저장

2. **변경 사항 반영 (Reconciliation)**

   - 상태(state) 변경이 발생하면 **새로운 Virtual DOM을 생성**
   - 이전 Virtual DOM과 새로운 Virtual DOM을 비교(=Diffing)

3. **최소한의 변경만 실제 DOM에 적용**
   - 변경된 부분만 실제 DOM에 반영(=Patch)하여 **렌더링 성능 최적화**

---

## 가상 DOM의 장점

- **DOM 조작 최소화 → 성능 최적화**
- **빠른 업데이트 연산**
- **브라우저 독립적 동작 가능**

</details>
