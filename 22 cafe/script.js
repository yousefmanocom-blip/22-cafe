const products = [
    {
        id: 1,
        nameAr: "إسبريسو",
        nameEn: "Espresso",
        descriptionAr: "قهوة إيطالية مركزة بطعم غني",
        descriptionEn: "Rich and concentrated Italian coffee",
        price: 45,
        category: "hot",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 2,
        nameAr: "كابتشينو",
        nameEn: "Cappuccino",
        descriptionAr: "إسبريسو مع حليب ورغوة ناعمة",
        descriptionEn: "Espresso with milk and smooth foam",
        price: 65,
        category: "hot",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 3,
        nameAr: "لاتيه",
        nameEn: "Latte",
        descriptionAr: "قهوة بالحليب بطعم كريمي مميز",
        descriptionEn: "Creamy coffee with steamed milk",
        price: 65,
        category: "hot",
        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 4,
        nameAr: "موكا",
        nameEn: "Mocha",
        descriptionAr: "إسبريسو، شوكولاتة وحليب",
        descriptionEn: "Espresso, chocolate, and milk",
        price: 75,
        category: "hot",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 5,
        nameAr: "شاي كلاسيك",
        nameEn: "Classic Tea",
        descriptionAr: "شاي أحمر بجودة عالية",
        descriptionEn: "High-quality black tea",
        price: 30,
        category: "hot",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 6,
        nameAr: "آيس لاتيه",
        nameEn: "Iced Latte",
        descriptionAr: "لاتيه بارد مع مكعبات الثلج",
        descriptionEn: "Cold latte with ice cubes",
        price: 75,
        category: "cold",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 7,
        nameAr: "آيس موكا",
        nameEn: "Iced Mocha",
        descriptionAr: "موكا باردة بطعم الشوكولاتة",
        descriptionEn: "Cold mocha with chocolate flavor",
        price: 80,
        category: "cold",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 8,
        nameAr: "فرابتشينو",
        nameEn: "Frappuccino",
        descriptionAr: "مشروب بارد ممزوج بالثلج والكريمة",
        descriptionEn: "Blended iced drink with cream",
        price: 85,
        category: "cold",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 9,
        nameAr: "ميلك شيك شوكولاتة",
        nameEn: "Chocolate Milkshake",
        descriptionAr: "حليب، آيس كريم وصوص شوكولاتة",
        descriptionEn: "Milk, ice cream, and chocolate sauce",
        price: 85,
        category: "cold",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 10,
        nameAr: "ليمون نعناع",
        nameEn: "Lemon Mint",
        descriptionAr: "ليمون فريش مع النعناع والثلج",
        descriptionEn: "Fresh lemon with mint and ice",
        price: 60,
        category: "fresh",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 11,
        nameAr: "مانجو فريش",
        nameEn: "Fresh Mango",
        descriptionAr: "مانجو طبيعية طازجة",
        descriptionEn: "Fresh natural mango",
        price: 70,
        category: "fresh",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 12,
        nameAr: "فراولة فريش",
        nameEn: "Fresh Strawberry",
        descriptionAr: "فراولة طبيعية بطعم منعش",
        descriptionEn: "Fresh strawberry with a refreshing taste",
        price: 70,
        category: "fresh",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 13,
        nameAr: "تشيز كيك",
        nameEn: "Cheesecake",
        descriptionAr: "تشيز كيك كريمي بطبقة التوت",
        descriptionEn: "Creamy cheesecake with berry topping",
        price: 85,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 14,
        nameAr: "براوني",
        nameEn: "Brownie",
        descriptionAr: "براوني شوكولاتة طرية وغنية",
        descriptionEn: "Soft and rich chocolate brownie",
        price: 70,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 15,
        nameAr: "وافل",
        nameEn: "Waffle",
        descriptionAr: "وافل مع صوص الشوكولاتة والفواكه",
        descriptionEn: "Waffle with chocolate sauce and fruits",
        price: 90,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 16,
        nameAr: "مولتن كيك",
        nameEn: "Molten Cake",
        descriptionAr: "كيك شوكولاتة بصوص ساخن",
        descriptionEn: "Chocolate cake with hot sauce",
        price: 95,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=700&q=80"
    }
];

let language = localStorage.getItem("cafe22Language") || "ar";
let cart = JSON.parse(localStorage.getItem("cafe22Cart")) || [];
let selectedCategory = "all";

const productsGrid = document.getElementById("productsGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");

const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const orderModal = document.getElementById("orderModal");
const orderForm = document.getElementById("orderForm");
const orderType = document.getElementById("orderType");
const addressField = document.getElementById("addressField");

const toast = document.getElementById("toast");

function getText(ar, en) {
    return language === "ar" ? ar : en;
}

function renderProducts() {
    const searchValue = searchInput.value.toLowerCase().trim();

    const filteredProducts = products.filter(product => {
        const productName = getText(product.nameAr, product.nameEn).toLowerCase();
        const productDescription = getText(
            product.descriptionAr,
            product.descriptionEn
        ).toLowerCase();

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        const matchesSearch =
            productName.includes(searchValue) ||
            productDescription.includes(searchValue);

        return matchesCategory && matchesSearch;
    });

    productsGrid.innerHTML = "";

    if (!filteredProducts.length) {
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    filteredProducts.forEach(product => {
        const name = getText(product.nameAr, product.nameEn);
        const description = getText(
            product.descriptionAr,
            product.descriptionEn
        );

        const addText = getText("إضافة", "Add");

        productsGrid.innerHTML += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${name}" loading="lazy">
                </div>

                <div class="product-content">
                    <h3>${name}</h3>
                    <p>${description}</p>

                    <div class="product-bottom">
                        <span class="price">${product.price} ${getText("جنيه", "EGP")}</span>

                        <button
                            class="add-button"
                            title="${addText}"
                            onclick="addToCart(${product.id})">
                            +
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    renderCart();

    showToast(getText("تمت إضافة المنتج إلى السلة", "Added to cart"));
}

function increaseQuantity(productId) {
    const item = cart.find(product => product.id === productId);

    if (item) {
        item.quantity++;
    }

    saveCart();
    renderCart();
}

function decreaseQuantity(productId) {
    const item = cart.find(product => product.id === productId);

    if (!item) return;

    if (item.quantity > 1) {
        item.quantity--;
    } else {
        cart = cart.filter(product => product.id !== productId);
    }

    saveCart();
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);

    saveCart();
    renderCart();
}

function renderCart() {
    if (!cart.length) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <span>🛒</span>
                <p>${getText("السلة فارغة", "Your cart is empty")}</p>
                <small>${getText("أضف منتجات للبدء", "Add products to start")}</small>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => {
            const name = getText(item.nameAr, item.nameEn);

            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${name}">

                    <div class="cart-item-info">
                        <h4>${name}</h4>
                        <p>${item.price * item.quantity} ${getText("جنيه", "EGP")}</p>

                        <div class="quantity-controls">
                            <button onclick="decreaseQuantity(${item.id})">−</button>
                            <span>${item.quantity}</span>
                            <button onclick="increaseQuantity(${item.id})">+</button>
                        </div>
                    </div>

                    <button
                        class="remove-item"
                        onclick="removeFromCart(${item.id})">
                        ×
                    </button>
                </div>
            `;
        }).join("");
    }

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice;
}

function saveCart() {
    localStorage.setItem("cafe22Cart", JSON.stringify(cart));
}

function openCart() {
    cartSidebar.classList.add("show");
    cartOverlay.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    cartSidebar.classList.remove("show");
    cartOverlay.classList.remove("show");
    document.body.style.overflow = "";
}

function openOrderModal() {
    if (!cart.length) {
        showToast(getText("السلة فارغة", "Your cart is empty"));
        return;
    }

    orderModal.classList.add("show");
}

function closeOrderModal() {
    orderModal.classList.remove("show");
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}

function updateLanguage() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.getElementById("languageToggle").textContent =
        language === "ar" ? "EN" : "AR";

    document.title =
        language === "ar"
            ? "22 Cafe | كافيه 22"
            : "22 Cafe | Coffee & More";

    document.querySelectorAll("[data-ar][data-en]").forEach(element => {
        element.textContent = element.dataset[language];
    });

    document.querySelectorAll("[data-placeholder-ar][data-placeholder-en]")
        .forEach(element => {
            element.placeholder =
                language === "ar"
                    ? element.dataset.placeholderAr
                    : element.dataset.placeholderEn;
        });

    document.querySelectorAll("option[data-ar][data-en]").forEach(option => {
        option.textContent = option.dataset[language];
    });

    renderProducts();
    renderCart();
}

function sendOrderToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const type = orderType.value;
    const address = document.getElementById("customerAddress").value.trim();
    const notes = document.getElementById("customerNotes").value.trim();

    if (!name || !phone) {
        showToast(getText(
            "من فضلك اكتب الاسم ورقم الهاتف",
            "Please enter your name and phone number"
        ));

        return;
    }

    if (type === "delivery" && !address) {
        showToast(getText(
            "من فضلك اكتب عنوان التوصيل",
            "Please enter your delivery address"
        ));

        return;
    }

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    let message = "";

    if (language === "ar") {
        message += "طلب جديد من كافيه 22%0A%0A";
        message += `الاسم: ${name}%0A`;
        message += `رقم الهاتف: ${phone}%0A`;
        message += `نوع الطلب: ${type === "delivery" ? "توصيل" : "استلام من الكافيه"}%0A`;

        if (type === "delivery") {
            message += `العنوان: ${address}%0A`;
        }

        message += "%0Aالطلب:%0A";

        cart.forEach(item => {
            message += `• ${item.nameAr} × ${item.quantity} = ${item.price * item.quantity} جنيه%0A`;
        });

        message += `%0Aالإجمالي: ${totalPrice} جنيه%0A`;

        if (notes) {
            message += `الملاحظات: ${notes}`;
        }
    } else {
        message += "New Order from 22 Cafe%0A%0A";
        message += `Name: ${name}%0A`;
        message += `Phone: ${phone}%0A`;
        message += `Order Type: ${type === "delivery" ? "Delivery" : "Pickup"}%0A`;

        if (type === "delivery") {
            message += `Address: ${address}%0A`;
        }

        message += "%0AOrder:%0A";

        cart.forEach(item => {
            message += `• ${item.nameEn} × ${item.quantity} = ${item.price * item.quantity} EGP%0A`;
        });

        message += `%0ATotal: ${totalPrice} EGP%0A`;

        if (notes) {
            message += `Notes: ${notes}`;
        }
    }

    const whatsappUrl =
        `https://wa.me/201100077797?text=${message}`;

    window.open(whatsappUrl, "_blank");
}

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("cartOverlay").addEventListener("click", closeCart);

document.getElementById("checkoutButton")
    .addEventListener("click", openOrderModal);

document.getElementById("closeModal")
    .addEventListener("click", closeOrderModal);

orderModal.addEventListener("click", event => {
    if (event.target === orderModal) {
        closeOrderModal();
    }
});

orderForm.addEventListener("submit", sendOrderToWhatsApp);

orderType.addEventListener("change", () => {
    if (orderType.value === "delivery") {
        addressField.classList.remove("hidden");
    } else {
        addressField.classList.add("hidden");
    }
});

searchInput.addEventListener("input", renderProducts);

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".category").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        selectedCategory = button.dataset.category;

        renderProducts();
    });
});

document.getElementById("languageToggle").addEventListener("click", () => {
    language = language === "ar" ? "en" : "ar";

    localStorage.setItem("cafe22Language", language);
    updateLanguage();
});

document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    document.getElementById("themeToggle").textContent =
        isDark ? "☀" : "☾";

    localStorage.setItem(
        "cafe22Theme",
        isDark ? "dark" : "light"
    );
});

document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("show");
    });
});

const savedTheme = localStorage.getItem("cafe22Theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("themeToggle").textContent = "☀";
}

updateLanguage();
renderProducts();
renderCart();
