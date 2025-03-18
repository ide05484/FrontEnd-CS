<details>
  <summary><strong>CSR과 SSR을 비교하고, 장단점에 대해 설명해보세요.</strong></summary>

<br>

# CSR vs SSR 비교

## 1. CSR (Client-Side Rendering) vs SSR (Server-Side Rendering)

| 구분                      | CSR (Client-Side Rendering)     | SSR (Server-Side Rendering)                        |
| ------------------------- | ------------------------------- | -------------------------------------------------- |
| **렌더링 위치**           | 브라우저(클라이언트)에서 렌더링 | 서버에서 렌더링 후 클라이언트에 전달               |
| **초기 로딩 속도**        | 느림 (JS 다운로드 및 실행 필요) | 빠름 (HTML 미리 렌더링됨)                          |
| **페이지 전환 속도**      | 빠름 (클라이언트에서 처리)      | 상대적으로 느림 (새 요청마다 서버 렌더링)          |
| **검색 엔진 최적화(SEO)** | 약함 (JS 실행 후 콘텐츠 로드)   | 강함 (초기 HTML에 콘텐츠 포함)                     |
| **사용 사례**             | 인터랙티브 웹앱 (SPA, 대시보드) | 검색 엔진 최적화(SEO) 필요한 페이지 (블로그, 뉴스) |

## 2. 특징 및 장단점

### ✅ CSR (Client-Side Rendering)

- **특징**: 클라이언트에서 JavaScript로 렌더링 처리
- **장점**:
  - 페이지 전환이 빠름 (클라이언트에서 처리)
  - 백엔드 부하 감소
  - 프론트엔드에서 자유로운 UI 구현 가능
- **단점**:
  - 초기 로딩 속도 느림 (JS 다운로드 & 실행 필요)
  - SEO 최적화 어려움 (검색 엔진이 콘텐츠를 즉시 크롤링하기 어려움)

### ✅ SSR (Server-Side Rendering)

- **특징**: 서버에서 HTML을 완성하여 응답
- **장점**:
  - SEO에 유리 (초기 HTML에 콘텐츠 포함)
  - 초기 로딩 속도가 빠름
- **단점**:
  - 서버 부하 증가 (요청마다 렌더링)
  - 페이지 전환 시 속도 저하 가능

## 3. 활용 예시

- **CSR 사용 예시**: React SPA, 대시보드, 웹 애플리케이션
- **SSR 사용 예시**: 검색엔진 최적화(SEO) 필요한 페이지, 뉴스, 블로그

## 4. 혼합 기법

- **Static Generation (SSG)**: 빌드 시 HTML을 생성하여 배포 (Next.js `getStaticProps`)
- **Incremental Static Regeneration (ISR)**: 정적 페이지를 일정 주기로 갱신 (Next.js `revalidate`)

---

</details>
