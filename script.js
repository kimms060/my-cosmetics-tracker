// ---- 카테고리 정의 ----
const CATEGORIES = {
  skincare: { label: "스킨케어", icon: "🧴" },
  makeup: { label: "메이크업", icon: "💋" },
  cleansing: { label: "클렌징", icon: "🧼" },
  hairbody: { label: "헤어/바디", icon: "🧖" },
};

// ---- 가짜(예시) 화장품 데이터 ----
const PRODUCTS = [
  {
    id: 1,
    name: "촉촉 히알루론 토너",
    brand: "글로우랩",
    category: "skincare",
    volume: "150ml",
    purchaseDate: "2026-02-10",
    expiry: "2027-02-10",
    skinType: ["건성", "복합성"],
    tags: ["수분", "저자극"],
    rating: 4.5,
    desc: "히알루론산이 함유되어 있어 건조한 피부에 즉각적인 수분감을 주는 토너. 향이 거의 없어 민감성 피부도 부담없이 사용 가능.",
  },
  {
    id: 2,
    name: "비타민 브라이트닝 세럼",
    brand: "루센트",
    category: "skincare",
    volume: "30ml",
    purchaseDate: "2026-01-05",
    expiry: "2026-12-01",
    skinType: ["모든 피부"],
    tags: ["미백", "잡티케어"],
    rating: 4.0,
    desc: "비타민C 유도체가 함유된 세럼으로 칙칙한 피부톤 개선에 도움을 줌. 아침보다는 저녁 사용 권장.",
  },
  {
    id: 3,
    name: "저자극 선크림 SPF50+",
    brand: "선세이프",
    category: "skincare",
    volume: "50ml",
    purchaseDate: "2026-03-20",
    expiry: "2027-03-20",
    skinType: ["민감성"],
    tags: ["자외선차단", "무기자차"],
    rating: 4.7,
    desc: "무기자차 성분으로 자극이 적고 백탁 현상이 거의 없는 데일리 선크림.",
  },
  {
    id: 4,
    name: "롱래스팅 쿠션 파운데이션",
    brand: "베리페이스",
    category: "makeup",
    volume: "15g",
    purchaseDate: "2025-11-12",
    expiry: "2026-11-12",
    skinType: ["지성", "복합성"],
    tags: ["커버력", "지속력"],
    rating: 4.2,
    desc: "밀착력이 좋고 피지에도 무너지지 않는 쿠션. 자연스러운 세미매트 마무리.",
  },
  {
    id: 5,
    name: "벨벳 매트 립스틱 - 코랄레드",
    brand: "루즈뮤즈",
    category: "makeup",
    volume: "3.5g",
    purchaseDate: "2026-04-01",
    expiry: "2028-04-01",
    skinType: ["모든 피부"],
    tags: ["매트", "발색"],
    rating: 4.8,
    desc: "가볍게 발려도 색이 진하게 나오는 벨벳 매트 립스틱. 건조함이 적은 편.",
  },
  {
    id: 6,
    name: "데일리 아이섀도우 팔레트",
    brand: "글리터문",
    category: "makeup",
    volume: "9색 x 1.5g",
    purchaseDate: "2025-09-18",
    expiry: "2027-09-18",
    skinType: ["모든 피부"],
    tags: ["뉴트럴톤", "펄"],
    rating: 4.3,
    desc: "무난하게 사용하기 좋은 뉴트럴 브라운 계열 9색 팔레트. 발색력과 밀착력이 좋음.",
  },
  {
    id: 7,
    name: "딥클렌징 오일",
    brand: "퓨어드롭",
    category: "cleansing",
    volume: "200ml",
    purchaseDate: "2026-02-25",
    expiry: "2027-02-25",
    skinType: ["모든 피부"],
    tags: ["워터프루프제거", "저자극"],
    rating: 4.6,
    desc: "워터프루프 메이크업도 깔끔하게 지워주는 클렌징 오일. 헹굼 후 당김이 적음.",
  },
  {
    id: 8,
    name: "약산성 폼클렌저",
    brand: "밸런스업",
    category: "cleansing",
    volume: "120ml",
    purchaseDate: "2026-05-02",
    expiry: "2027-05-02",
    skinType: ["민감성", "복합성"],
    tags: ["약산성", "저자극"],
    rating: 4.4,
    desc: "약산성 포뮬러로 피부 장벽을 자극하지 않으면서 부드러운 거품으로 세정.",
  },
  {
    id: 9,
    name: "모이스처 바디로션",
    brand: "코튼바디",
    category: "hairbody",
    volume: "300ml",
    purchaseDate: "2025-12-30",
    expiry: "2027-12-30",
    skinType: ["건성"],
    tags: ["보습", "은은한향"],
    rating: 4.1,
    desc: "가볍게 발리지만 보습력이 오래 지속되는 바디로션. 은은한 코튼향.",
  },
  {
    id: 10,
    name: "손상모 집중케어 헤어에센스",
    brand: "실크헤어",
    category: "hairbody",
    volume: "80ml",
    purchaseDate: "2026-03-08",
    expiry: "2027-03-08",
    skinType: ["해당없음"],
    tags: ["손상모케어", "윤기"],
    rating: 4.5,
    desc: "열손상과 염색으로 푸석해진 모발에 윤기와 부드러움을 더해주는 에센스.",
  },
];

// ---- 상태 ----
let currentCategory = "all";
let currentSearch = "";

// ---- DOM ----
const productGrid = document.getElementById("productGrid");
const summary = document.getElementById("summary");
const emptyMessage = document.getElementById("emptyMessage");
const categoryTabs = document.getElementById("categoryTabs");
const searchInput = document.getElementById("searchInput");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

// ---- 렌더링 ----
function renderSummary() {
  summary.innerHTML = "";
  Object.entries(CATEGORIES).forEach(([key, meta]) => {
    const count = PRODUCTS.filter((p) => p.category === key).length;
    const item = document.createElement("div");
    item.className = "summary-item";
    item.innerHTML = `${meta.icon} ${meta.label} <strong>${count}</strong>개`;
    summary.appendChild(item);
  });
}

function getFilteredProducts() {
  return PRODUCTS.filter((p) => {
    const matchesCategory =
      currentCategory === "all" || p.category === currentCategory;
    const keyword = currentSearch.trim().toLowerCase();
    const matchesSearch =
      !keyword ||
      p.name.toLowerCase().includes(keyword) ||
      p.brand.toLowerCase().includes(keyword);
    return matchesCategory && matchesSearch;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  productGrid.innerHTML = "";
  emptyMessage.hidden = filtered.length !== 0;

  filtered.forEach((product) => {
    const meta = CATEGORIES[product.category];
    const card = document.createElement("article");
    card.className = "product-card";
    card.addEventListener("click", () => openModal(product));

    card.innerHTML = `
      <div class="product-thumb">${meta.icon}</div>
      <div class="product-info">
        <span class="category-badge">${meta.label}</span>
        <p class="product-brand">${product.brand}</p>
        <p class="product-name">${product.name}</p>
        <div class="product-tags">
          ${product.tags.map((t) => `<span class="tag">#${t}</span>`).join("")}
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function openModal(product) {
  const meta = CATEGORIES[product.category];
  modalContent.innerHTML = `
    <div class="modal-thumb">${meta.icon}</div>
    <span class="category-badge">${meta.label}</span>
    <p class="product-brand">${product.brand}</p>
    <h2 class="product-name">${product.name}</h2>
    <div class="modal-row"><span>용량</span><span>${product.volume}</span></div>
    <div class="modal-row"><span>구매일</span><span>${product.purchaseDate}</span></div>
    <div class="modal-row"><span>유통기한</span><span>${product.expiry}</span></div>
    <div class="modal-row"><span>피부타입</span><span>${product.skinType.join(", ")}</span></div>
    <div class="modal-row"><span>평점</span><span>⭐ ${product.rating}</span></div>
    <p class="modal-desc">${product.desc}</p>
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

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// ---- 초기 실행 ----
renderSummary();
renderProducts();
