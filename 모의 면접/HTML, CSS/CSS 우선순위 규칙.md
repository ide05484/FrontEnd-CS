<details>
  <summary><strong>CSS 우선순위 규칙에 대해 설명해주세요.</strong></summary>

<br>

## CSS 우선순위 규칙
CSS 우선순위는 중요도 → 기원 → @layer → 특이도 → 소스 순서 순으로 결정됩니다.

#### 1. 중요도
- 어떤 선택자든 `!important`가 붙으면 그 속성이 최우선으로 적용됩니다.
- 단, `!important`를 남발하면 우선순위 체계가 무너져 관리하기가 어렵기 때문에 꼭 필요한 경우에 사용하는 것이 좋습니다.

#### 2. 기원
- CSS가 적용되는 출처에 따라 우선순위가 다릅니다.
- 사용자 스타일 > 개발자 스타일 > 브라우저 기본값 순서로 우선순위가 낮아집니다.

#### 3. 레이어
- 레이어 선언 순서로 우선순위를 결정합니다.
```css
@layer base, components;

@layer base { .btn { color: blue; } }
@layer components { .btn { color: red; } }
/* → components가 base보다 우선 */
```

#### 4. 특이도
- 선택자의 강력한 점수를 비교하여 우선순위를 결정합니다.
- 인라인 스타일 > ID 선택자 → 클래스/속성 선택자/가상클래스 > 태그/가상요소 순서로 우선순위가 낮아집니다.
```css
/* 인라인 */
<div style="color:red"></div>   /* (1,0,0,0) */

/* ID */
#title { color: blue; }         /* (0,1,0,0) */

/* 클래스 */
.title { color: green; }        /* (0,0,1,0) */

/* 태그 */
h1 { color: black; }            /* (0,0,0,1) */
```

#### 5. 소스 순서
- 위의 모든 조건이 같다면, 가장 나중에 작성된 코드가 적용됩니다.

</details>
