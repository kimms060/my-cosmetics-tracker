// ---- 카테고리 정의 ----
const CATEGORIES = {
  skincare: { label: "스킨케어", icon: "🧴" },
  suncare: { label: "선케어", icon: "☀️" },
  makeup: { label: "메이크업", icon: "💄" },
  cleansing: { label: "클렌징", icon: "🧼" },
  hairbody: { label: "헤어/바디", icon: "🧖" },
  perfume: { label: "향수", icon: "🌸" },
};

// ---- 화장품 데이터 (화장품 정보.xlsx 기준) ----
const PRODUCTS = [
  { id: 1, category: "skincare", brand: "웰라쥬", name: "리얼 히알루로닉 블루 100 앰플", shade: null, openDate: "2026-03-06", expiry: "2027-03-06" },
  { id: 2, category: "skincare", brand: "파넬", name: "시카마누 92세럼", shade: null, openDate: "2026-06-05", expiry: "2027-06-05" },
  { id: 3, category: "skincare", brand: "디어클레어스", name: "블루 유스 액티베이팅 드롭", shade: null, openDate: "2026-06-02", expiry: "2026-12-02" },
  { id: 4, category: "skincare", brand: "유이크", name: "바이옴 레미디 포어리셋 쿨링패드", shade: null, openDate: "2026-06-02", expiry: "2026-09-02" },
  { id: 5, category: "skincare", brand: "더마토리", name: "살리시닉 포어 클리어 블랙 모공 토너패드", shade: null, openDate: "2026-06-02", expiry: "2027-06-02" },
  { id: 6, category: "skincare", brand: "라운드랩", name: "소나무 진정 시카 앰플", shade: null, openDate: "2025-12-09", expiry: "2026-12-09" },
  { id: 7, category: "skincare", brand: "넘버즈인", name: "5번 글루타치온C 흔적 앰플", shade: null, openDate: "2025-12-09", expiry: "2026-12-09" },
  { id: 8, category: "skincare", brand: "제로이드", name: "인텐시브 크림", shade: null, openDate: "2025-11-17", expiry: "2026-11-17" },
  { id: 9, category: "skincare", brand: "에스트라", name: "에이시카365 흔적진정세럼 pH4.5", shade: null, openDate: "2025-11-19", expiry: "2026-11-19" },
  { id: 10, category: "skincare", brand: "에스트라", name: "아토베리어365 하이드로에센스", shade: null, openDate: "2026", expiry: "개봉 후 1년" },
  { id: 11, category: "skincare", brand: "마몽드", name: "카밍 샷 아줄렌 흔적 수분앰플", shade: null, openDate: "2025", expiry: "개봉 후 1년" },
  { id: 12, category: "skincare", brand: "아누아", name: "아젤라익애씨드 15 인텐스 카밍 세럼", shade: null, openDate: "2026-01-12", expiry: "2027-01-12" },
  { id: 13, category: "skincare", brand: "디어클레어스", name: "블루 카밍 크림", shade: null, openDate: "2026-05-05", expiry: "2027-05-05" },
  { id: 14, category: "skincare", brand: "이즈앤트리", name: "어니언 뉴페어 겔크림", shade: null, openDate: "2026-02-28", expiry: "2027-02-28" },
  { id: 15, category: "hairbody", brand: "일리윤", name: "세라마이드 아토 로션", shade: null, openDate: "2026-06-14", expiry: "2027-06-14" },
  { id: 16, category: "hairbody", brand: "아로마티카", name: "티트리 퓨리파잉 토닉", shade: null, openDate: "2026-06-07", expiry: "2027-06-07" },
  { id: 17, category: "hairbody", brand: "힐링버드", name: "히알루론 밀크 헤어에센스", shade: null, openDate: "2026-06-22", expiry: "2027-06-22" },
  { id: 18, category: "suncare", brand: "넘버즈인", name: "3번 도자기결 파데스킵 톤업베이지", shade: null, openDate: "2026-05-22", expiry: "2027-05-22" },
  { id: 19, category: "suncare", brand: "넘버즈인", name: "1번 청초 진정맑은 물막선크림", shade: null, openDate: "2026-05-22", expiry: "2027-05-22" },
  { id: 20, category: "suncare", brand: "비오레", name: "UV 아쿠아 리치 워터리 에센스", shade: null, openDate: "2026-03-01", expiry: "2027-03-01" },
  { id: 21, category: "suncare", brand: "식물나라", name: "저자극 페이스 앤 바디 선크림", shade: null, openDate: "2026-05-08", expiry: "2027-05-08" },
  { id: 22, category: "suncare", brand: "AHC", name: "내추럴 퍼펙션 프레쉬 선스틱", shade: null, openDate: "2026-07-06", expiry: "2027-07-06" },
  { id: 23, category: "suncare", brand: "식물나라", name: "제주알로에 쿨링 선스틱", shade: null, openDate: "2025-08-17", expiry: "2026-08-17" },
  { id: 24, category: "skincare", brand: "마몽드", name: "카밍 샷 아줄렌 크림", shade: null, openDate: "2025", expiry: "개봉 후 1년" },
  { id: 25, category: "cleansing", brand: "이즈앤트리", name: "참마 비건 밀크 클렌저", shade: null, openDate: "2026-06-02", expiry: "2027-06-02" },
  { id: 26, category: "cleansing", brand: "한율", name: "피지흡착 쑥떡팩폼", shade: null, openDate: "2026-06-08", expiry: "2027-06-08" },
  { id: 27, category: "cleansing", brand: "라씨엘르", name: "엔자임 곡물 클렌징 파우더워시", shade: null, openDate: "2026-04-01", expiry: "2027-04-01" },
  { id: 28, category: "cleansing", brand: "비플레인", name: "녹두 클렌징 오일", shade: null, openDate: "2026-03-20", expiry: "2027-03-20" },
  { id: 29, category: "cleansing", brand: "로즈프로젝트", name: "비긴케어 클렌징 젤", shade: null, openDate: "2026-06-30", expiry: "2027-06-30" },
  { id: 30, category: "makeup", brand: "에스쁘아", name: "프레쉬 세팅 픽서", shade: null, openDate: "2026-06-26", expiry: "2027-06-26" },
  { id: 31, category: "makeup", brand: "셀퓨전씨", name: "스킨 블레미쉬 밤 인텐시브", shade: "라이트", openDate: "2026-03-13", expiry: "2027-03-13" },
  { id: 32, category: "makeup", brand: "셀퓨전씨", name: "스킨 블레미쉬 밤 인텐시브", shade: null, openDate: "2025-07-16", expiry: "2026-07-16" },
  { id: 33, category: "makeup", brand: "네이밍", name: "제로 그래비티 커버 업 쿠션", shade: "19P", openDate: "2025-06-02", expiry: "2026-06-02" },
  { id: 34, category: "makeup", brand: "헤라", name: "블랙 쿠션 파운데이션", shade: "17N1", openDate: "2025-06-22", expiry: "2026-06-22" },
  { id: 35, category: "makeup", brand: "에스쁘아", name: "비글로우 볼륨 쿠션", shade: "?", openDate: "2025-11-19", expiry: "2026-11-19" },
  { id: 36, category: "makeup", brand: "넘버즈인", name: "1번 판토텐산 스킨케어100 블러파우더", shade: null, openDate: null, expiry: null },
  { id: 37, category: "makeup", brand: "르누베르", name: "아줄렌 페이스 커버 픽싱 파우더(노세범)", shade: null, openDate: null, expiry: null },
  { id: 38, category: "makeup", brand: "어바웃톤", name: "블러 파우더 팩트", shade: "02 라이트", openDate: null, expiry: null },
  { id: 39, category: "skincare", brand: "한율", name: "보들은행잎 모공핏 세럼", shade: null, openDate: "2025-05-23", expiry: "2026-05-23" },
  { id: 40, category: "skincare", brand: "미샤", name: "글로우 스킨밤", shade: null, openDate: "2025-06-20", expiry: "2026-06-20" },
  { id: 41, category: "makeup", brand: "얼터너티브스테레오", name: "무드 레이어 스틱 크레용", shade: "00호 밀키 시럽", openDate: "2026-06-18", expiry: "2027-06-18" },
  { id: 42, category: "hairbody", brand: "나르카", name: "헤어 마스카라", shade: "하입 핏", openDate: "2026-03-05", expiry: "2027-03-05" },
  { id: 43, category: "makeup", brand: "롬앤", name: "글래스팅 컬러 글로스", shade: "01 피오니발레", openDate: "2026-01-05", expiry: "2027-01-05" },
  { id: 44, category: "makeup", brand: "릴리바이레드", name: "러브빔 치크밤", shade: "12 두근빔", openDate: "2025-12-08", expiry: "2026-12-08" },
  { id: 45, category: "makeup", brand: "에뛰드", name: "그림자 쉐딩", shade: "03 재조명", openDate: null, expiry: null },
  { id: 46, category: "makeup", brand: "페리페라", name: "스피디 스키니 브로우", shade: "09 토프브라운", openDate: null, expiry: null },
  { id: 47, category: "makeup", brand: "컬러그램", name: "누디 블러 틴트", shade: "14 딸기멜로", openDate: "2025-08-30", expiry: "2026-08-30" },
  { id: 48, category: "makeup", brand: "디어달리아", name: "리퀴드 블러쉬", shade: "퓨리티", openDate: "2025-08-05", expiry: "2026-08-05" },
  { id: 49, category: "makeup", brand: "코스노리", name: "아이래쉬 틴팅 세럼 속눈썹영양제", shade: "블랙", openDate: "2025-08-05", expiry: "2026-08-05" },
  { id: 50, category: "makeup", brand: "페리페라", name: "스피디 펜슬 라이너", shade: "04 소프트애쉬", openDate: null, expiry: null },
  { id: 51, category: "makeup", brand: "클리오", name: "볼륨메이트 글로스", shade: "200 버니 퓨어 핑크", openDate: "2025-08-05", expiry: "2026-08-05" },
  { id: 52, category: "makeup", brand: "네이밍", name: "글로이 하트 립 틴트", shade: "페르소나", openDate: "2025-05-27", expiry: "2026-05-27" },
  { id: 53, category: "makeup", brand: "하트퍼센트", name: "도트 온 무드 컨투어 아이라이너 슬림", shade: "C3 로지트임", openDate: null, expiry: null },
  { id: 54, category: "makeup", brand: "하트퍼센트", name: "도트 온 무드 윈 웨이 글로이 틴트", shade: "04 핑크 베이브", openDate: "2025-03-02", expiry: "2026-03-02" },
  { id: 55, category: "cleansing", brand: "키스미", name: "히로인메이크 스피디 마스카라 전용 리무버", shade: null, openDate: "2025-03-02", expiry: "2025-09-02" },
  { id: 56, category: "cleansing", brand: "브링그린", name: "티트리 시카 포어 클레이팩 스트롱", shade: null, openDate: "2024-12-06", expiry: "2026-06-06" },
  { id: 57, category: "makeup", brand: "롬앤", name: "슬라이드 인 싱글", shade: "M01 웜 볼류머", openDate: null, expiry: null },
  { id: 58, category: "makeup", brand: "얼터너티브스테레오", name: "립 포션 슈가 글레이즈 틴트", shade: "16호 딸기무스 볼", openDate: "2026-01-31", expiry: "2027-01-31" },
  { id: 59, category: "makeup", brand: "페리페라", name: "더블 롱웨어 커버 컨실러", shade: "01 퓨어 아이보리", openDate: null, expiry: null },
  { id: 60, category: "makeup", brand: "드롭비 컬러즈", name: "커버 픽 컨실러", shade: "01 클리어 베이지", openDate: null, expiry: null },
  { id: 61, category: "makeup", brand: "컬러그램", name: "올인원 애교살 메이커", shade: "02 쿨톤", openDate: null, expiry: null },
  { id: 62, category: "makeup", brand: "컬러그램", name: "올인원 애교살 메이커", shade: "03 진짜", openDate: null, expiry: null },
  { id: 63, category: "makeup", brand: "에뛰드", name: "2X 쌩얼 라이너", shade: "2호 내추럴 라이트 브라운", openDate: null, expiry: null },
  { id: 64, category: "makeup", brand: "이니스프리", name: "납작 아이브로우 펜슬", shade: "5호 깊은 밤 에스프레소 브라운", openDate: null, expiry: null },
  { id: 65, category: "makeup", brand: "에뛰드", name: "닥터 마스카라 픽서", shade: "02 블랙", openDate: null, expiry: null },
  { id: 66, category: "makeup", brand: "에뛰드", name: "컬 픽스 마스카라", shade: "03 그레이 브라운", openDate: null, expiry: null },
  { id: 67, category: "makeup", brand: "네이밍", name: "플러피 파우더 블러쉬", shade: "포브 (POVE)", openDate: null, expiry: null },
  { id: 68, category: "makeup", brand: "네이밍", name: "소프티 멜로우 하이라이터", shade: "진 (JEEN)", openDate: null, expiry: null },
  { id: 69, category: "makeup", brand: "퓌", name: "블러셔 멜로우", shade: "05 럽미라이트", openDate: null, expiry: null },
  { id: 70, category: "makeup", brand: "롬앤", name: "베러 댄 치크", shade: "C02 블루베리 칩", openDate: null, expiry: null },
  { id: 71, category: "makeup", brand: "자빈드서울", name: "윙크 립 쉐이드 프라이머", shade: "10호 포슬린 로즈", openDate: null, expiry: null },
  { id: 72, category: "makeup", brand: "더샘", name: "커버 퍼펙션 트리플 팟 컨실러", shade: "03 코렉트업 베이지", openDate: null, expiry: null },
  { id: 73, category: "makeup", brand: "클리오", name: "프로 아이 팔레트 에어", shade: "03 뮤트 라이브러리", openDate: null, expiry: null },
  { id: 74, category: "makeup", brand: "롬앤", name: "베러 댄 팔레트", shade: "06 피오니 누드 가든", openDate: null, expiry: null },
  { id: 75, category: "makeup", brand: "맥퀸뉴욕", name: "페이크업 3색 쉐딩", shade: "그레이 브라운", openDate: null, expiry: null },
  { id: 76, category: "makeup", brand: "클리오", name: "프로 싱글 섀도우", shade: "S101 퓨어 라일락", openDate: null, expiry: null },
  { id: 77, category: "makeup", brand: "에스쁘아", name: "톤페어링 하이라이터", shade: "핑크 마린", openDate: null, expiry: null },
  { id: 78, category: "makeup", brand: "데이지크", name: "크림 드 버터 틴트", shade: "01 모브 크림", openDate: null, expiry: null },
  { id: 79, category: "makeup", brand: "컬러그램", name: "탕후루 탱글 틴트", shade: "00 탱글로스", openDate: null, expiry: null },
  { id: 80, category: "makeup", brand: "컬러그램", name: "리퀴드 글리터", shade: "02 레몬빔", openDate: null, expiry: null },
  { id: 81, category: "makeup", brand: "롬앤", name: "쥬시 래스팅 틴트", shade: "33 베어 바인", openDate: null, expiry: "2026-09-11" },
  { id: 82, category: "hairbody", brand: "아닐로", name: "라임썬데이 리프레시 헤어 에센스", shade: null, openDate: "2026-01-31", expiry: "2027-01-31" },
  { id: 83, category: "hairbody", brand: "아닐로", name: "로지나잇 리페어 헤어 에센스", shade: null, openDate: null, expiry: "2028-09-25" },
  { id: 84, category: "hairbody", brand: "아닐로", name: "블랙티 너리싱 헤어 에센스", shade: null, openDate: null, expiry: "2028-09-25" },
  { id: 85, category: "perfume", brand: "미스 디올", name: "미스 디올 블루밍 부케 미니 미스 솔리드 퍼퓸", shade: null, openDate: "2026-06-10", expiry: null },
  { id: 86, category: "perfume", brand: "지미추", name: "로 EDT", shade: null, openDate: "2025-02-03", expiry: "?" },
  { id: 87, category: "perfume", brand: "메르헨트", name: "퍼퓸 드 섬유향수", shade: "소프트 코튼", openDate: null, expiry: null },
  { id: 88, category: "perfume", brand: "스너글", name: "섬유탈취제", shade: "허거블 코튼 더블 소프트", openDate: "2025-06-02", expiry: "2027-12-02" },
  { id: 89, category: "perfume", brand: "랑방", name: "모던 프린세스 오드퍼퓸", shade: null, openDate: null, expiry: null },
  { id: 90, category: "perfume", brand: "그랑핸드", name: "멀티퍼퓸", shade: "릴리 오웬", openDate: null, expiry: null },
  { id: 91, category: "perfume", brand: "교보문고", name: "더 센트 오브 페이지 룸스프레이", shade: null, openDate: null, expiry: null },
  { id: 92, category: "perfume", brand: "랑방", name: "에끌라 드 아르페쥬 EDP", shade: null, openDate: null, expiry: null },
  { id: 93, category: "perfume", brand: "유즈", name: "오드 퍼퓸", shade: "스테이 포에버", openDate: null, expiry: null },
  { id: 94, category: "perfume", brand: "산타 마리아 노벨라", name: "디스커버리 키트 피렌체 1221", shade: null, openDate: null, expiry: null },
  { id: 95, category: "skincare", brand: "메디필", name: "레드 락토 콜라겐 랩핑 마스크", shade: null, openDate: null, expiry: null },
  { id: 96, category: "skincare", brand: "메디필", name: "피토 시카놀 비5 카밍 비건 랩핑 마스크", shade: null, openDate: null, expiry: null },
  { id: 97, category: "skincare", brand: "메디필", name: "히알루론산 레이어 물톡스 랩핑 마스크", shade: null, openDate: null, expiry: null },
  { id: 98, category: "hairbody", brand: "미장센", name: "퍼펙트 오리지널 세럼", shade: null, openDate: "2026-01-15", expiry: "2028-01-15" },
  { id: 99, category: "hairbody", brand: "미장센", name: "퍼펙트 스타일링 세럼", shade: null, openDate: "2025-02-10", expiry: "2027-02-10" },
  { id: 100, category: "hairbody", brand: "다주자", name: "트리트먼트 앤 에센슨", shade: null, openDate: null, expiry: "2028-09-17" },
];

// ---- 사용자 추가 제품 저장 (localStorage) ----
const STORAGE_KEY = "myCosmetics.customProducts";
// ---- 기본 제품 수정 내용 저장 (localStorage) ----
const OVERRIDES_KEY = "myCosmetics.productOverrides";

function loadCustomProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCustomProducts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customProducts));
}

function loadOverrides() {
  try {
    const raw = localStorage.getItem(OVERRIDES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveOverrides() {
  localStorage.setItem(OVERRIDES_KEY, JSON.stringify(overrides));
}

const customProducts = loadCustomProducts();
const overrides = loadOverrides();
const products = [...PRODUCTS, ...customProducts].map((p) =>
  overrides[p.id] ? { ...p, ...overrides[p.id] } : p
);

function addProduct(data) {
  const newId = Math.max(0, ...products.map((p) => p.id)) + 1;
  const newProduct = { id: newId, ...data };
  products.push(newProduct);
  customProducts.push(newProduct);
  saveCustomProducts();
  renderCategoryTabs();
  renderProducts();
  footerCount.textContent = products.length;
}

function editProduct(id, data) {
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) return;
  const customIdx = customProducts.findIndex((p) => p.id === id);
  const updated = { ...products[idx], ...data };
  products[idx] = updated;
  if (customIdx !== -1) {
    customProducts[customIdx] = updated;
    saveCustomProducts();
  } else {
    overrides[id] = { ...(overrides[id] || {}), ...data };
    saveOverrides();
  }
  renderCategoryTabs();
  renderProducts();
}

// ---- 상태 ----
let currentCategory = "all";
let currentSearch = "";
let currentSort = "name";
let currentModalProduct = null;
let editingId = null;

// ---- DOM ----
const productGrid = document.getElementById("productGrid");
const emptyMessage = document.getElementById("emptyMessage");
const categoryTabs = document.getElementById("categoryTabs");
const searchInput = document.getElementById("searchInput");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const footerCount = document.getElementById("footerCount");
const addProductBtn = document.getElementById("addProductBtn");
const addModalOverlay = document.getElementById("addModalOverlay");
const addModalClose = document.getElementById("addModalClose");
const addProductForm = document.getElementById("addProductForm");
const fieldCategory = document.getElementById("fieldCategory");
const sortSelect = document.getElementById("sortSelect");
const modalEditBtn = document.getElementById("modalEditBtn");
const addFormTitle = document.getElementById("addFormTitle");
const submitBtn = document.getElementById("submitBtn");

// ---- 사용기한 상태 계산 ----
function parseIsoDate(str) {
  const m = str && /^(\d{4})-(\d{2})-(\d{2})$/.exec(str);
  if (!m) return null;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
}

function getExpiryStatus(product) {
  const expiryDate = parseIsoDate(product.expiry);
  if (expiryDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffDays = Math.round((expiryDate - today) / 86400000);
    if (diffDays < 0) return { text: "사용기한 지남", tone: "expired" };
    if (diffDays <= 30) return { text: `D-${diffDays}`, tone: "soon" };
    return { text: `D-${diffDays}`, tone: "ok" };
  }
  if (product.expiry) return { text: product.expiry, tone: "unknown" };
  if (!product.openDate) return null;
  return { text: "정보 없음", tone: "unknown" };
}

// ---- 렌더링 ----
function renderCategoryTabs() {
  categoryTabs.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = "tab-btn" + (currentCategory === "all" ? " active" : "");
  allBtn.dataset.category = "all";
  allBtn.innerHTML = `전체 <span class="tab-count">${products.length}</span>`;
  categoryTabs.appendChild(allBtn);

  Object.entries(CATEGORIES).forEach(([key, meta]) => {
    const count = products.filter((p) => p.category === key).length;
    const tabBtn = document.createElement("button");
    tabBtn.className = "tab-btn" + (currentCategory === key ? " active" : "");
    tabBtn.dataset.category = key;
    tabBtn.innerHTML = `${meta.icon} ${meta.label} <span class="tab-count">${count}</span>`;
    categoryTabs.appendChild(tabBtn);
  });
}

// ---- 정렬 ----
function compareByLatest(a, b) {
  const da = a.openDate || "";
  const db = b.openDate || "";
  if (!da && !db) return 0;
  if (!da) return 1;
  if (!db) return -1;
  return db.localeCompare(da);
}

function compareByName(a, b) {
  return a.name.localeCompare(b.name, "ko");
}

function compareByExpiry(a, b) {
  const toTime = (p) => {
    const d = parseIsoDate(p.expiry);
    return d ? d.getTime() : null;
  };
  const ta = toTime(a);
  const tb = toTime(b);
  if (ta === null && tb === null) return 0;
  if (ta === null) return 1;
  if (tb === null) return -1;
  return ta - tb;
}

const SORTERS = {
  latest: compareByLatest,
  name: compareByName,
  expiry: compareByExpiry,
};

function getFilteredProducts() {
  const filtered = products.filter((p) => {
    const matchesCategory =
      currentCategory === "all" || p.category === currentCategory;
    const keyword = currentSearch.trim().toLowerCase();
    const matchesSearch =
      !keyword ||
      p.name.toLowerCase().includes(keyword) ||
      p.brand.toLowerCase().includes(keyword);
    return matchesCategory && matchesSearch;
  });
  return filtered.sort(SORTERS[currentSort] || compareByLatest);
}

function renderProducts() {
  const filtered = getFilteredProducts();
  productGrid.innerHTML = "";
  emptyMessage.hidden = filtered.length !== 0;

  filtered.forEach((product) => {
    const meta = CATEGORIES[product.category];
    const status = getExpiryStatus(product);
    const card = document.createElement("article");
    card.className = "product-card" + (product.finished ? " done" : "");
    card.addEventListener("click", (e) => {
      if (e.target.closest(".card-action-btn")) return;
      openModal(product);
    });

    card.innerHTML = `
      <span class="category-badge">${meta.icon} ${meta.label}</span>
      <div class="product-info">
        <div class="product-main">
          <p class="product-brand">${product.brand}</p>
          <p class="product-name">${product.name}${product.shade ? ` <span class="product-shade">${product.shade}</span>` : ""}</p>
        </div>
        <div class="product-tags">
          ${status ? `<span class="status-badge status-${status.tone}">${status.text}</span>` : ""}
        </div>
      </div>
      <div class="card-actions">
        <button type="button" class="card-action-btn${product.finished === "used" ? " active" : ""}" data-action="used">사용 완료</button>
        <button type="button" class="card-action-btn${product.finished === "discarded" ? " active" : ""}" data-action="discard">버리기</button>
      </div>
    `;

    card.querySelector('[data-action="used"]').addEventListener("click", () => toggleFinished(product.id, "used"));
    card.querySelector('[data-action="discard"]').addEventListener("click", () => toggleFinished(product.id, "discarded"));

    productGrid.appendChild(card);
  });
}

function toggleFinished(id, status) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  const next = product.finished === status ? null : status;
  editProduct(id, { finished: next });
}

function openModal(product) {
  currentModalProduct = product;
  const meta = CATEGORIES[product.category];
  const status = getExpiryStatus(product);
  modalContent.innerHTML = `
    <span class="category-badge">${meta.icon} ${meta.label}</span>
    <p class="product-brand">${product.brand}</p>
    <h2 class="product-name">${product.name}</h2>
    ${product.shade ? `<div class="modal-row"><span>호수/색상</span><span>${product.shade}</span></div>` : ""}
    <div class="modal-row"><span>개봉일</span><span>${product.openDate || ""}</span></div>
    <div class="modal-row"><span>사용기한</span><span>${product.expiry || "정보 없음"}</span></div>
    ${status ? `<div class="modal-row"><span>상태</span><span class="status-badge status-${status.tone}">${status.text}</span></div>` : ""}
  `;
  modalOverlay.hidden = false;
}

function closeModal() {
  modalOverlay.hidden = true;
}

// ---- 이벤트 ----
categoryTabs.addEventListener("click", (e) => {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;
  currentCategory = btn.dataset.category;
  [...categoryTabs.children].forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderProducts();
});

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderProducts();
});

sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderProducts();
});

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// ---- 제품 추가 ----
Object.entries(CATEGORIES).forEach(([key, meta]) => {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = `${meta.icon} ${meta.label}`;
  fieldCategory.appendChild(option);
});

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function openAddModal(product = null) {
  addProductForm.reset();
  editingId = product ? product.id : null;
  if (product) {
    addFormTitle.textContent = "제품 수정";
    submitBtn.textContent = "수정하기";
    fieldCategory.value = product.category;
    document.getElementById("fieldBrand").value = product.brand;
    document.getElementById("fieldName").value = product.name;
    document.getElementById("fieldShade").value = product.shade || "";
    document.getElementById("fieldOpenDate").value = ISO_DATE_RE.test(product.openDate) ? product.openDate : "";
    document.getElementById("fieldExpiry").value = ISO_DATE_RE.test(product.expiry) ? product.expiry : "";
  } else {
    addFormTitle.textContent = "제품 추가";
    submitBtn.textContent = "추가하기";
  }
  addModalOverlay.hidden = false;
}

function closeAddModal() {
  addModalOverlay.hidden = true;
}

addProductBtn.addEventListener("click", () => openAddModal());
addModalClose.addEventListener("click", closeAddModal);
addModalOverlay.addEventListener("click", (e) => {
  if (e.target === addModalOverlay) closeAddModal();
});

modalEditBtn.addEventListener("click", () => {
  if (!currentModalProduct) return;
  closeModal();
  openAddModal(currentModalProduct);
});

addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const category = fieldCategory.value;
  const brand = document.getElementById("fieldBrand").value.trim();
  const name = document.getElementById("fieldName").value.trim();
  const shade = document.getElementById("fieldShade").value.trim() || null;
  let openDate = document.getElementById("fieldOpenDate").value || null;
  let expiry = document.getElementById("fieldExpiry").value || null;
  if (!brand || !name) return;

  if (editingId) {
    const original = products.find((p) => p.id === editingId);
    if (!openDate && original && original.openDate && !ISO_DATE_RE.test(original.openDate)) {
      openDate = original.openDate;
    }
    if (!expiry && original && original.expiry && !ISO_DATE_RE.test(original.expiry)) {
      expiry = original.expiry;
    }
    editProduct(editingId, { category, brand, name, shade, openDate, expiry });
  } else {
    addProduct({ category, brand, name, shade, openDate, expiry });
  }
  closeAddModal();
});

// ---- 초기 실행 ----
renderCategoryTabs();
renderProducts();
if (footerCount) footerCount.textContent = products.length;
