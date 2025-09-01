<details>
  <summary><strong>Pick과 Omit의 차이에 대해 설명해주세요.</strong></summary>

<br>

## Pick<T, K>
- 유틸리티 타입 중 하나로, 제네릭 타입 T에서 필요한 속성 K만을 골라 새 타입을 만듭니다.
- 필요한 속성을 선택해서 제한된 뷰를 만들 때 자주 사용됩니다.

## Omit<T, K>
- 유틸리티 타입 중 하나로, 제네릭 타입 T에서 특정 속성 K를 제외한 새 타입을 만듭니다.
- 실무에서 API 응답 마스킹, DTO 분리, 컴포넌트 props 래핑에서 자주 사용됩니다.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// 1) Pick: 필요한 것만 선택
type UserPreview = Pick<User, "id" | "name">;
// => { id: number; name: string }

// 2) Omit: 특정 키만 제외
type SafeUser = Omit<User, "password">;
// => { id: number; name: string; email: string }
```
  
</details>
