<details>
  <summary><strong>Discriminated Union에 대해 설명해주세요.</strong></summary>

<br>

## Discriminated Union (식별 유니언)
- 특정 속성(tag)을 기준으로 여러 타입 중 하나를 구분할 수 있는 유니언 타입
- tag 속성을 보고 TypeScript가 자동으로 타입을 좁힘 (type narrowing)
- 주로 "type", "kind", "status" 같은 속성명이 태그 역할을 함
- 상태 관리, 조건 분기, 컴포넌트 렌더링에 주로 사용됨

```javascript
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number }
  | { kind: 'triangle'; base: number; height: number };
```

#### 중요성
- 타입 안정성: 잘못된 속성의 접근을 막아줌
- Narrowing이 자동으로 동작
- 타입 가드 함수에도 활용 가능

#### 주의할 점
- tag 필드는 반드시 모든 유니언 멤버에 있어야 함
- 값은 string literal로 고정되어야 제대로 작동 → as const를 자주 같이 써야 함
- 타입이 많아지면 switch가 길어지므로 분할 리팩토링 필요

</details>
