<details>
  <summary><strong>any와 unknown의 차이에 대해 설명해주세요.</strong></summary>

<br>

## any vs unknown
- any와 unknown은 둘 다 모든 타입을 허용하는 가장 유연한 타입입니다.
- 하지만 **타입 안정성** 측면에서 큰 차이가 있습니다.

#### any
- 모든 타입을 허용하고, 그 값을 제한 없이 사용할 수 있습니다.
- 타입 체크가 사실상 비활성화되므로 오류가 런타임까지 넘어갈 수 있습니다.
```javascript
let value: any = 'hello';
value.toFixed(); // 런타임 오류 발생 가능
```

#### 2. unknown
- 모든 타입을 허용하지만, 사용 전에는 타입 검사를 강제합니다.
- 타입을 좁히거나 단언하지 않으면 해당 값을 사용할 수 없기 때문에 상대적으로 안전합니다.
```javascript
let value: unknown = 'hello';
// value.toFixed(); // 에러 발생
if (typeof value === 'string') {
  console.log(value.toUpperCase());
}
```

#### ☑️ 추가질문. 언제 unknown을 쓰는 게 좋은지 설명해주세요.
- 외부 API, 사용자 입력 등 타입을 정확히 알 수 없는 데이터를 처리할 때 unknown을 사용하면 안전합니다.
- 예: JSON.parse(), event.data, localStorage.getItem() 반환값 등

**any는 타입스크립트의 타입 시스템을 무력화하기 때문에, 꼭 필요한 경우를 제외하고는 unknown을 사용해 타입 안전성을 유지하는 것이 좋습니다.**
  
</details>
