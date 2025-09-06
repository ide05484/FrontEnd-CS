<details>
  <summary><strong>블록 레벨 요소와 인라인 레벨 요소의 차이에 대해 설명해주세요.</strong></summary>

<br>

## 블록 레벨 요소
- 한 줄 전체를 차지하며, 새로운 줄에서 시작합니다.
- 기본적으로 부모 너비를 꽉 채웁니다. (width: 100%)
- 다른 블록, 인라인 요소를 포함할 수 있습니다.
- margin, padding, border 모두 적용할 수 있습니다.
- 예) `<div>`, `<p>`, `<h1> ~ <h6>`, `<ul>`, `<ol>`, `<li>`, `<section>`, `<article>`, `<header>` ...

## 인라인 레벨 요소
- 줄 안에서 흐름대로 옆으로 나란히 배치됩니다.
- 콘텐츠 크기만큼만 공간을 차지합니다.
- 블록 요소는 포함할 수 없고, 인라인 요소만 포함 가능합니다.
- width, height과 세로 크기 관련 속성이 제한되고, line-height와 같은 수평 관련 스타일만 적용할 수 있습니다.- 
- 예) `<span>`, `<a>`, `<strong>`, `<img>`, `<label>`, `<input>` ...

<br/>

**CSS의 display 속성을 이용해 block ↔ inline ↔ inline-block 으로 바꿀 수 있습니다.**
<br/>
**inline-block은 인라인처럼 옆으로 배치되지만, block처럼 width/height를 가질 수 있습니다.**
  
</details>
