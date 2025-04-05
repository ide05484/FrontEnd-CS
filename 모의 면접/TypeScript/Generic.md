<details>
  <summary><strong>제네릭(Generic)에 대해 설명해주세요.</strong></summary>

<br>

## 제네릭(Generic)
- 제네릭(Generic)**은 함수, 클래스, 인터페이스 등을 정의할 때 타입을 나중에 외부에서 지정할 수 있도록 하는 기능입니다.
- 재사용성과 타입 안정성을 동시에 확보하기 위해 사용됩니다.

```javascript
function identity<T>(value: T): T {
  return value;
}

identity<number>(123);    // T = number
identity<string>('hi');   // T = string
```

#### 장점
- 어떤 타입이든 받을 수 있습니다.
- 호출 시점에 타입이 정해지므로 타입 추론 및 체크가 안전합니다.
- 여러 타입 조합에 대해 하나의 함수/컴포넌트로 처리가 가능합니다.

</details>
