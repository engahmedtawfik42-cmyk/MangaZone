// مصفوفة الـ 50 مانجا المتكاملة بالجنيه المصري والصور المحلية
const PRODUCTS = [
    // --- SHONEN (شونين) ---
    { id: 1, name: "One Piece - المجلد 01", price: 450, category: "shonen", rating: 5, reviews: 1420, img: "manga1.jpg" },
    { id: 2, name: "One Piece - المجلد 100", price: 580, category: "shonen Offers", rating: 4.8, reviews: 320, img: "manga2.jpg" },
    { id: 3, name: "One Piece - المجلد 105", price: 550, category: "shonen", rating: 4.7, reviews: 185, img: "manga3.jpg" },
    { id: 4, name: "Attack on Titan - المجلد 01", price: 420, category: "shonen", rating: 4.9, reviews: 850, img: "manga4.jpg" },
    { id: 5, name: "Attack on Titan - المجلد 22", price: 450, category: "shonen", rating: 4.6, reviews: 340, img: "manga5.jpg" },
    { id: 6, name: "Attack on Titan - المجلد 34 الأخير", price: 620, category: "shonen Offers", rating: 4.9, reviews: 980, img: "manga6.jpg" },
    { id: 7, name: "Jujutsu Kaisen - المجلد 0", price: 390, category: "shonen", rating: 4.8, reviews: 512, img: "manga7.jpg" },
    { id: 8, name: "Jujutsu Kaisen - المجلد 01", price: 420, category: "shonen", rating: 4.7, reviews: 410, img: "manga8.jpg" },
    { id: 9, name: "Jujutsu Kaisen - المجلد 20", price: 490, category: "shonen", rating: 4.5, reviews: 190, img: "manga9.jpg" },
    { id: 10, name: "Naruto - المجلد 01", price: 350, category: "shonen Offers", rating: 4.9, reviews: 2300, img: "manga10.jpg" },
    { id: 11, name: "Naruto Shippuden - المجلد 27", price: 380, category: "shonen", rating: 4.8, reviews: 870, img: "manga11.jpg" },
    { id: 12, name: "Naruto Shippuden - المجلد 72 الأخير", price: 550, category: "shonen Offers", rating: 5, reviews: 1650, img: "manga12.jpg" },
    { id: 13, name: "Demon Slayer - المجلد 01", price: 400, category: "shonen", rating: 4.7, reviews: 740, img: "manga13.jpg" },
    { id: 14, name: "Demon Slayer - المجلد 15", price: 430, category: "shonen", rating: 4.8, reviews: 310, img: "manga14.jpg" },
    { id: 15, name: "Demon Slayer - المجلد 23 الأخير", price: 590, category: "shonen Offers", rating: 4.9, reviews: 1120, img: "manga15.jpg" },
    { id: 16, name: "My Hero Academia - المجلد 01", price: 410, category: "shonen", rating: 4.5, reviews: 620, img: "manga16.jpg" },
    { id: 17, name: "My Hero Academia - المجلد 30", price: 460, category: "shonen", rating: 4.6, reviews: 215, img: "manga17.jpg" },
    { id: 18, name: "Bleach - المجلد 01", price: 380, category: "shonen Offers", rating: 4.8, reviews: 940, img: "manga18.jpg" },
    { id: 19, name: "Bleach - المجلد 55", price: 440, category: "shonen", rating: 4.7, reviews: 430, img: "manga19.jpg" },
    { id: 20, name: "Hunter x Hunter - المجلد 01", price: 450, category: "shonen", rating: 5, reviews: 1890, img: "manga20.jpg" },
    { id: 21, name: "Hunter x Hunter - المجلد 36", price: 520, category: "shonen", rating: 4.9, reviews: 560, img: "manga21.jpg" },
    { id: 22, name: "Dragon Ball Super - المجلد 01", price: 390, category: "shonen", rating: 4.6, reviews: 310, img: "manga22.jpg" },
    { id: 23, name: "Chainsaw Man - المجلد 01", price: 450, category: "shonen", rating: 4.8, reviews: 820, img: "manga23.jpg" },
    { id: 24, name: "Chainsaw Man - المجلد 11", price: 500, category: "shonen Offers", rating: 4.9, reviews: 430, img: "manga24.jpg" },
    { id: 25, name: "Black Clover - المجلد 01", price: 395, category: "shonen", rating: 4.5, reviews: 270, img: "manga25.jpg" },

    // --- SEINEN (سينين) ---
    { id: 26, name: "Berserk - Deluxe Edition 01", price: 2100, category: "seinen", rating: 5, reviews: 2410, img: "manga26.jpg" },
    { id: 27, name: "Berserk - Deluxe Edition 14", price: 2400, category: "seinen", rating: 5, reviews: 680, img: "manga27.jpg" },
    { id: 28, name: "Berserk - المجلد العادي 01", price: 550, category: "seinen Offers", rating: 4.8, reviews: 1150, img: "manga28.jpg" },
    { id: 29, name: "Vagabond - VizBig Edition 01", price: 1250, category: "seinen", rating: 4.9, reviews: 930, img: "manga29.jpg" },
    { id: 30, name: "Vagabond - VizBig Edition 12", price: 1400, category: "seinen Offers", rating: 5, reviews: 410, img: "manga30.jpg" },
    { id: 31, name: "Vinland Saga - Book 01", price: 950, category: "seinen", rating: 4.8, reviews: 720, img: "manga31.jpg" },
    { id: 32, name: "Vinland Saga - Book 12", price: 1050, category: "seinen", rating: 4.9, reviews: 280, img: "manga32.jpg" },
    { id: 33, name: "Monster - Perfect Edition 01", price: 850, category: "seinen", rating: 4.9, reviews: 640, img: "manga33.jpg" },
    { id: 34, name: "Monster - Perfect Edition 09 الأخير", price: 990, category: "seinen Offers", rating: 5, reviews: 530, img: "manga34.jpg" },
    { id: 35, name: "Tokyo Ghoul - المجلد 01", price: 460, category: "seinen", rating: 4.7, reviews: 810, img: "manga35.jpg" },
    { id: 36, name: "Tokyo Ghoul - المجلد 14 الأخير", price: 520, category: "seinen", rating: 4.8, reviews: 390, img: "manga36.jpg" },
    { id: 37, name: "Tokyo Ghoul: re - المجلد 01", price: 480, category: "seinen", rating: 4.6, reviews: 210, img: "manga37.jpg" },
    { id: 38, name: "One-Punch Man - المجلد 01", price: 399, category: "seinen Offers", rating: 4.8, reviews: 1750, img: "manga38.jpg" },
    { id: 39, name: "One-Punch Man - المجلد 25", price: 450, category: "seinen", rating: 4.7, reviews: 320, img: "manga39.jpg" },
    { id: 40, name: "20th Century Boys - Vol 01", price: 890, category: "seinen", rating: 4.9, reviews: 460, img: "manga40.jpg" },
    { id: 41, name: "Goodnight Punpun - Vol 01", price: 990, category: "seinen", rating: 4.7, reviews: 310, img: "manga41.jpg" },
    { id: 42, name: "Kingdom - المجلد 01 (مترجم)", price: 600, category: "seinen", rating: 4.9, reviews: 1180, img: "manga42.jpg" },
    { id: 43, name: "Kingdom - المجلد 60 (مترجم)", price: 600, category: "seinen Offers", rating: 4.8, reviews: 540, img: "manga43.jpg" },
    { id: 44, name: "Hellsing - Deluxe Edition 01", price: 1950, category: "seinen", rating: 4.8, reviews: 290, img: "manga44.jpg" },
    { id: 45, name: "Oyaji - المجلد الفردي", price: 720, category: "seinen", rating: 4.6, reviews: 115, img: "manga45.jpg" },

    // --- OFFERS & MYSTERY (عروض وغموض) ---
    { id: 46, name: "Death Note - Black Edition 01", price: 690, category: "shonen Offers", rating: 4.9, reviews: 1980, img: "manga46.jpg" },
    { id: 47, name: "Death Note - Black Edition 06 الأخير", price: 720, category: "shonen", rating: 5, reviews: 840, img: "manga47.jpg" },
    { id: 48, name: "Neon Genesis Evangelion - Vol 01", price: 820, category: "seinen", rating: 4.7, reviews: 360, img: "manga48.jpg" },
    { id: 49, name: "The Promised Neverland - Vol 01", price: 410, category: "shonen Offers", rating: 4.6, reviews: 520, img: "manga49.jpg" },
    { id: 50, name: "The Promised Neverland - Vol 20 الأخير", price: 490, category: "shonen", rating: 4.8, reviews: 410, img: "manga50.jpg" }
];

// جلب السلة المحفوظة في المتصفح أو إنشاء واحدة فارغة
let cart = JSON.parse(localStorage.getItem('amzn_manga_cart')) || [];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("products-grid");
    if(grid) {
        renderAmazonProducts(PRODUCTS);
        setupSearch();
    }
    updateCartBadgeOnly();
});

function renderAmazonProducts(list) {
    const grid = document.getElementById("products-grid");
    if(!grid) return;
    grid.innerHTML = list.length === 0 ? `<div class="w-100 text-center py-5 text-muted">لم نجد نتائج تطابق بحثك.</div>` : "";

    list.forEach(prod => {
        let stars = `<i class="fas fa-star"></i> `.repeat(Math.floor(prod.rating));
        grid.innerHTML += `
            <div class="col">
                <div class="amzn-product-card d-flex flex-column h-100 justify-content-between">
                    <div>
                        <div class="amzn-img-box"><img src="${prod.img}"></div>
                        <div class="amzn-title" title="${prod.name}">${prod.name}</div>
                        <div class="stars-rating my-1">${stars} <span class="text-muted small">(${prod.reviews})</span></div>
                    </div>
                    <div class="mt-2">
                        <div class="amzn-price mb-2">${prod.price} <span class="fs-6 fw-normal text-muted">ج.م</span></div>
                        <button class="btn btn-amazon-add fw-semibold" onclick="addToCart(${prod.id})">إضافة للعربة</button>
                    </div>
                </div>
            </div>`;
    });
}

function addToCart(id) {
    const product = PRODUCTS.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) { existing.qty++; } else { cart.push({ ...product, qty: 1 }); }
    
    saveCart();
    updateCartBadgeOnly();
}

function saveCart() {
    localStorage.setItem('amzn_manga_cart', JSON.stringify(cart));
}

function updateCartBadgeOnly() {
    const badge = document.getElementById("cart-count");
    if(badge) {
        badge.textContent = cart.reduce((acc, item) => acc + item.qty, 0);
    }
}

// محرك بحث وفلترة الصفحة الرئيسية
function setupSearch() {
    const input = document.getElementById("searchInput");
    if(!input) return;
    input.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(query));
        renderAmazonProducts(filtered);
    });
}
function filterByAside(cat, element) {
    document.querySelectorAll('.amzn-aside-links a').forEach(el => el.classList.remove('active'));
    if(element) element.classList.add('active');
    renderAmazonProducts(cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category.includes(cat)));
}
function filterByPrice(min, max) {
    renderAmazonProducts(PRODUCTS.filter(p => p.price >= min && p.price <= max));
}

// ================= منطق صفحة العربة الخاصة المستقلة =================
function renderCartPage() {
    const pageContainer = document.getElementById("cart-page-container");
    if(!pageContainer) return;

    if(cart.length === 0) {
        pageContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-basket fs-1 text-muted mb-3"></i>
                <p class="text-muted fs-5">عربة التسوق الخاصة بك فارغة تماماً حالياً.</p>
                <a href="index.html" class="btn btn-warning mt-2 px-4 fw-bold">تصفح المانجا الآن</a>
            </div>`;
        document.getElementById("subtotal-val").textContent = "0 ج.م";
        document.getElementById("shipping-val").textContent = "0 ج.م";
        document.getElementById("total-val").textContent = "0 ج.م";
        return;
    }

    pageContainer.innerHTML = "";
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.qty;
        pageContainer.innerHTML += `
            <div class="cart-page-item p-3 mb-3 d-flex flex-column flex-md-row gap-4 align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-3">
                    <img src="${item.img}" style="width: 70px; height: 95px; object-fit: cover; border-radius:4px;">
                    <div>
                        <h5 class="text-white fs-6 mb-1 fw-bold">${item.name}</h5>
                        <p class="text-danger fw-bold mb-0">${item.price} ج.م <span class="text-muted small fw-normal">للقطعة</span></p>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <div class="input-group input-group-sm" style="width: 110px;">
                        <button class="btn btn-secondary" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span class="form-control bg-dark text-white border-secondary text-center small">${item.qty}</span>
                        <button class="btn btn-secondary" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="btn btn-link text-muted" onclick="removeItemFromCart(${item.id})"><i class="fas fa-trash-alt text-danger"></i></button>
                </div>
            </div>`;
    });

    let shipping = subtotal > 1500 ? 0 : 50; // شحن مجاني للمشتريات فوق الـ 1500 جنيه
    document.getElementById("subtotal-val").textContent = `${subtotal} ج.م`;
    document.getElementById("shipping-val").textContent = shipping === 0 ? "شحن مجاني" : `${shipping} ج.م`;
    document.getElementById("total-val").textContent = `${subtotal + shipping} ج.م`;
}

function changeQuantity(id, delta) {
    const item = cart.find(p => p.id === id);
    if(item) {
        item.qty += delta;
        if(item.qty <= 0) return removeItemFromCart(id);
    }
    saveCart();
    renderCartPage();
}

function removeItemFromCart(id) {
    cart = cart.filter(p => p.id !== id);
    saveCart();
    renderCartPage();
}

function checkoutOrder() {
    alert("🎉 تم تأكيد طلبك بنجاح وسيتصل بك مندوب الشحن لتسليم المانجا الخاصة بك في مصر قريباً!");
    cart = [];
    saveCart();
    window.location.href = "index.html"; // العودة للمتجر بعد الدفع والتصفير
}