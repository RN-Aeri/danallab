# DANAL Lab Website

**Data-driven Aging, Nursing, AI & Learning Lab**
Principal Investigator: Aeri Kim, Ph.D., RN
Kosin University College of Nursing

A static, bilingual (Korean/English) academic lab website, ready to deploy to GitHub Pages at zero cost.

---

## 📁 파일 구성

```
danal-lab/
├── index.html            # Home
├── about.html            # PI 소개
├── research.html         # 연구 분야 + 세종펠로우십 과제 전용 섹션
├── publications.html     # 논문·발표
├── team.html             # 팀
├── news.html             # 소식
├── teaching.html         # 강의·멘토링
├── contact.html          # 연락처
├── css/style.css         # 통합 스타일시트
├── js/main.js            # 언어 토글·모바일 메뉴
├── assets/img/           # 이미지 (SVG 플레이스홀더)
└── README.md             # 이 문서
```

**특징**
- ✅ 완전 무료 (호스팅·도메인·SSL·빌드)
- ✅ 한국어/영어 이중 언어 (우측 상단 토글로 전환)
- ✅ 모바일 반응형
- ✅ al-folio 학계 표준 스타일 기반 독자 디자인
- ✅ 세종과학펠로우십 과제(RS-2026-25498067) 전용 섹션 포함
- ✅ 모든 페이지에 NRF 사사(acknowledgement) 자동 노출 (IRIS 성과 인정 요건 충족)
- ✅ 빌드 시스템 없이 `.html` 파일만으로 바로 작동

---

## 🚀 배포 가이드 (GitHub Pages · 완전 무료)

### 1단계: 로컬 미리보기

가장 먼저, 압축을 해제한 폴더의 `index.html`을 더블클릭하세요. 브라우저에서 바로 사이트가 열립니다. 모든 페이지 간 이동, 언어 전환, 모바일 메뉴 등이 정상 작동하는지 확인할 수 있습니다.

### 2단계: GitHub 계정 준비

1. https://github.com 에 접속하여 계정이 없다면 가입합니다.
2. 우측 상단 `+` 버튼 → `New repository`를 클릭합니다.
3. **Repository name**을 반드시 `<your-username>.github.io` 형식으로 입력합니다.
   - 예시: `aerikim.github.io`
   - 이렇게 해야 URL이 `https://aerikim.github.io/`가 됩니다.
4. **Public**으로 설정 (Private은 GitHub Pages 무료 요금제에서 불가).
5. `Create repository` 클릭.

### 3단계: 파일 업로드

**방법 A — 웹 브라우저 드래그앤드롭 (가장 쉬움):**

1. 방금 만든 저장소 페이지에서 `uploading an existing file` 링크 클릭.
2. 압축 해제한 `danal-lab` 폴더의 **내용물 전체**를 드래그하여 업로드
   (주의: `danal-lab` 폴더 자체가 아니라 그 **안에 있는 파일들** — `index.html`, `css`, `js`, `assets` 등).
3. 스크롤하여 하단의 `Commit changes` 클릭.

**방법 B — GitHub Desktop:**

1. https://desktop.github.com 에서 GitHub Desktop 설치·로그인.
2. `File → Clone repository` → 방금 만든 저장소 선택.
3. 로컬 폴더가 열리면 `danal-lab`의 내용물을 그 안에 복사.
4. GitHub Desktop 좌하단에 커밋 메시지(예: "Initial site")를 입력하고 `Commit to main` → `Push origin` 클릭.

### 4단계: GitHub Pages 활성화

1. 저장소 상단 메뉴 → `Settings`.
2. 좌측 사이드바 → `Pages`.
3. `Source` → `Deploy from a branch` 선택.
4. `Branch` → `main` / `/ (root)` → `Save`.
5. 약 1~2분 대기 후 같은 페이지 상단에 `Your site is live at https://<your-username>.github.io/` 메시지가 표시됩니다.

### 5단계: 완료!

브라우저에서 `https://<your-username>.github.io/`로 접속하면 사이트가 전 세계에 공개됩니다.

---

## 🛠 사용법

### 텍스트 수정하기

모든 텍스트는 HTML 파일 안에 직접 들어 있습니다. 각 HTML 파일(예: `index.html`)을 메모장·VSCode·Cursor 등으로 열어 수정하세요.

이중 언어는 `data-lang-ko`와 `data-lang-en` 속성으로 구분됩니다.

```html
<h1 data-lang-ko>DANAL Lab</h1>
<h1 data-lang-en>DANAL Lab</h1>
```

새 문장을 추가할 때는 위 두 줄 쌍으로 함께 추가해주세요.

### 사진 교체하기

기본 프로필 사진은 SVG 플레이스홀더입니다 (`assets/img/pi-photo.svg`).

실제 사진으로 교체하려면:
1. `assets/img/` 폴더에 `pi-photo.jpg` 또는 `pi-photo.png` 파일을 업로드.
2. `index.html`에서 아래 줄을 찾아 src를 변경:
   ```html
   <img src="assets/img/pi-photo.svg" alt="...">
   ```
   →
   ```html
   <img src="assets/img/pi-photo.jpg" alt="...">
   ```

권장 이미지 크기: **600x600 px 이상, 정사각형**.

### 새 News 항목 추가

`news.html`의 `<ul class="news-list">` 안에 `<li>` 항목을 복사해 추가하세요. 날짜는 `YYYY.MM` 형식으로.

### 새 논문 추가

`publications.html`의 `<ul class="pub-list">`에 `<li>` 항목을 복사해 추가하세요. 연도가 바뀌면 새 `<div class="pub-year-header">`를 만드세요.

---

## 🌐 독자 도메인 연결 (선택 사항)

향후 `gyeote.ai`, `danal-lab.kr` 같은 독자 도메인을 사용하려면:

1. **도메인 구매**: 가비아(kr), 후이즈, Namecheap, Cloudflare Registrar 등에서 구매 (연 1.5~2만원, 연구과제 '수수료'에서 집행 가능).
2. **저장소 루트에 `CNAME` 파일 추가**: 내용은 도메인 이름 한 줄 (예: `danal-lab.kr`).
3. **도메인 업체 DNS 설정**:
   - `A` 레코드 4개를 GitHub Pages IP로 지정:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 또는 `CNAME` 레코드를 `<your-username>.github.io`로 지정.
4. **GitHub 저장소 `Settings → Pages → Custom domain`**에 도메인 입력 → `Enforce HTTPS` 체크.
5. 약 10분~24시간 내 SSL 인증서 자동 발급.

---

## 🎓 IRIS 연구성과 등록 팁

이 홈페이지를 본 과제의 성과로 등록할 때 활용할 수 있는 경로:

- **IRIS 항목 37 (홍보 실적)**: 홈페이지 URL, 방문자 수, 다운로드 수 연차별 입력.
- **IRIS 항목 9 (저작권-소프트웨어)**: 홈페이지 소스코드 및 과제 전용 섹션 콘텐츠를 한국저작권위원회에 별건 등록.
- **IRIS 항목 5 (기술요약)**: NTB(기술은행)에 기술요약 등록 시 본 홈페이지 URL을 대표 링크로 지정.
- **IRIS 항목 18 (시제품)**: 과제 플랫폼 데모 페이지의 구현 증거로 활용.

**중요**: 모든 페이지 footer에 이미 사사 문구(한/영)가 자동 삽입되어 있습니다. 감사·평가 시 '사사 미표기' 지적을 사전 방지합니다.

---

## 📋 배포 전 체크리스트

- [ ] `index.html`에서 이름·기관·연락처 확인
- [ ] `about.html`에서 학력·경력·수상 내역 업데이트
- [ ] `publications.html`에서 실제 논문 목록으로 교체
- [ ] `contact.html`에서 주소·이메일·전화번호 확인
- [ ] `assets/img/pi-photo.svg`를 실제 프로필 사진으로 교체
- [ ] Google Scholar / ORCID / GitHub 링크 업데이트 (footer 및 publications 페이지)
- [ ] 브라우저에서 `index.html`을 열어 전체 동작 확인
- [ ] 모바일에서도 열어봐 반응형 확인
- [ ] 한/영 토글 버튼 테스트

---

## 🆘 문제 해결

**사이트가 표시되지 않음**: GitHub Pages 활성화 후 1~2분 대기 필요. `Settings → Pages`에서 "Your site is live at..." 메시지 확인.

**한글이 깨짐**: 모든 HTML 파일은 UTF-8로 저장되어 있어야 합니다. 메모장으로 편집 시 '다른 이름으로 저장' → 인코딩 `UTF-8` 선택.

**언어 토글이 작동하지 않음**: 브라우저 개발자 도구(F12) → Console에서 에러 확인. `js/main.js` 경로가 올바른지 확인.

**스타일이 깨짐**: `css/style.css` 파일이 `css/` 폴더 안에 정확히 위치해야 합니다.

---

## 📄 라이선스

이 사이트 템플릿은 DANAL Lab 전용으로 제작되었습니다. 콘텐츠(텍스트, 이미지)에 대한 저작권은 DANAL Lab / Aeri Kim에게 있습니다.

구조·디자인은 al-folio 학계 템플릿에서 영감을 받아 독자 제작되었습니다.

---

**문의**: aeri.kim83@gmail.com
**최종 업데이트**: 2026년 4월
