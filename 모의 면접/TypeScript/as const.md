<details>
  <summary><strong>as const에 대해 설명해주세요.</strong></summary>

<br>

## as const
- 값을 리터럴 타입으로 고정시키는 단축 구문
- 객체, 배열, 문자열, 숫자 등을 정확한 값 그대로 타입으로 만들고 싶을 때 사용함

#### 사용 이유
- 기본적으로 TypeScript는 값에 대해 너무 일반적인 타입으로 추론함
- 리터럴 값으로 제한된 유니언 타입을 만들기 위해 활용함

```javascript
const status = 'success'; // status: string
const arr = [1, 2, 3]; // arr: number[]

const status = 'success' as const; // status: 'success'
const arr = [1, 2, 3] as const; // arr: readonly [1, 2, 3]
```

#### 활용 사례
- 상태 관리: 액션 타입을 고정할 때
- 유니언 타입 생성: 문자열/숫자 값 제한 가능
- API 응답 등 정해진 데이터셋 고정: 상수 값의 타입 자동 추론
- 조건 분기: Discriminated Union에서 정확한 타입 체크
- 유효성 검사: 값이 미리 정의된 범위에 속하는지 확인

#### 주의할 점
- as const를 붙이면 객체나 배열이 immutable (readonly)로 바뀜
- 값을 변경하려고 하면 오류가 발생함
- 필요할 경우 복사해서 사용하거나 명시적으로 mutable하게 선언해야 함

</details>
