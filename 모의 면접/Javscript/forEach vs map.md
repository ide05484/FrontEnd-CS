<details>
  <summary><strong>forEach() 루프와 map() 루프의 차이점을 설명해주세요.</strong></summary>

<br>

## `.forEach()`
- 배열의 요소를 반복합니다
- 각 요소에 대해 콜백을 실행합니다.
- 값을 반환하지 않습니다.

```javascipt
const a = [1, 2, 3];
const doubled = a.forEach((num, index) => {
  // num과 index를 활용한 작업
})

// doubled = undefined;
```

## `.map()`
- 배열의 요소를 반복합니다.
- 각 배열 요소에 함수를 적용해 변환된 값으로 새로운 배열을 만듭니다.

```javascipt
const a = [1, 2, 3];
const doubled = a.forEach((num) => {
  return num * 2;
})

// doubled = [2, 4, 6];
```

## 정리
- `.forEach()`와 `.map()`의 가장 큰 차이점은 새로운 배열 반환의 유무입니다.
- 단순히 배열을 반복하기만 한다면 `.forEach()`를 사용하는 것이 적합합니다.
- 새로운 배열 반환이 필요하면서 원본 배열을 그대로 유지하고 싶다면 `.map()`을 사용하는 것이 적합합니다.
  
</details>
