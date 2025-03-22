<details>
  <summary><strong>Props Drilling의 개념과 Props Drilling을 피하는 방법에 대해 설명해주세요.</strong></summary>

<br>

## Props Drilling

#### Props Drilling의 개념
- 부모 컴포넌트의 데이터(props)를 여러 단계의 중간 컴포넌트를 거쳐 하위 컴포넌트로 전달하는 현상
- 중간 컴포넌트들은 데이터를 직접 사용하지 않지만, props를 계속 전달해야 함
- 컴포넌트 구조가 깊어질수록 유지보수와 가독성이 나빠짐

#### Props Drilling을 피하는 방법
1. Context API 사용
2. 전역 상태 관리 라이브러리 사용 (Redux, Zustand 등)
3. 컴포넌트 구조 최적화 (Composition 패턴 활용) → 불필요한 중간 컴포넌트를 제거
  
</details>
