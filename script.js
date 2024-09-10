const plants = [
    {
        image: "./img/1.jpg",
        name: "Peace Lily Plant",
        subheading: "Popular Indoor Show Plant",
        price: 25.99,
        discount: "10% off",
        star: 4.5,
        sale: true,
        sunlight: "Low to Bright Indirect Light",
        watering: "Water when soil feels dry to touch",
        description: "The Peace Lily is a popular indoor plant known for its white blooms and air-purifying abilities. It thrives in low to bright indirect light and requires minimal care.",
    },
    {
        image: "./img/2.jpg",
        name: "Bamboo Palm Plant",
        subheading: "Air-Purifying Indoor Palm",
        price: 35.99,
        discount: "15% off",
        star: 4.7,
        sale: true,
        sunlight: "Bright Indirect Light",
        watering: "Keep soil consistently moist",
        description: "The Bamboo Palm is an elegant plant that not only adds tropical beauty to your space but also purifies the air, removing toxins effectively.",
    },
    {
        image: "./img/3.jpg",
        name: "Monstera Deliciosa Plant",
        subheading: "Tropical Plant with Unique Leaves",
        price: 45.99,
        discount: "20% off",
        star: 4.8,
        sale: true,
        sunlight: "Bright Indirect Light",
        watering: "Water every 1-2 weeks",
        description: "Monstera Deliciosa, also known as the Swiss Cheese Plant, is a favorite among plant lovers for its iconic leaves. Perfect for bringing a tropical vibe indoors.",
    },
    {
        image: "./img/4.jpg",
        name: "Jade Plant Mini",
        subheading: "Popular Succulent for Beginners",
        price: 15.99,
        discount: "5% off",
        star: 4.6,
        sale: true,
        sunlight: "Direct Sunlight",
        watering: "Water sparingly, allow soil to dry",
        description: "The Jade Plant is a small succulent known for its thick, fleshy leaves. It’s perfect for beginners due to its low-maintenance care.",
    },
    {
        image: "./img/5.jpg",
        name: "Aglaonema Pink Beauty",
        subheading: "Colorful and Low Maintenance",
        price: 30.99,
        discount: "10% off",
        star: 4.7,
        sale: false,
        sunlight: "Low to Medium Light",
        watering: "Water when soil is dry",
        description: "Aglaonema Pink Beauty is a gorgeous plant with vibrant pink and green foliage, ideal for adding a pop of color to any indoor space.",
    },
    {
        image: "./img/6.jpg",
        name: "Areca Palm Plant",
        subheading: "Graceful Indoor Palm",
        price: 40.99,
        discount: "15% off",
        star: 4.5,
        sale: true,
        sunlight: "Bright Indirect Light",
        watering: "Water when the top inch of soil is dry",
        description: "The Areca Palm is a popular houseplant that can brighten up any room with its soft, feathery fronds and its air-purifying properties.",
    },
    {
        image: "./img/7.jpg",
        name: "Lucky Bamboo Plant - 3",
        subheading: "Symbol of Luck and Prosperity",
        price: 20.99,
        discount: "10% off",
        star: 4.4,
        sale: true,
        sunlight: "Low to Bright Indirect Light",
        watering: "Keep roots submerged in water",
        description: "Lucky Bamboo is believed to bring good fortune and positive energy. This triple-stalk plant is easy to care for and makes a great gift.",
    },
    {
        image: "./img/8.jpg",
        name: "Anthurium Red Plant",
        subheading: "Striking Red Blooms",
        price: 27.99,
        discount: "12% off",
        star: 4.6,
        sale: false,
        sunlight: "Bright Indirect Light",
        watering: "Water when the top inch of soil is dry",
        description: "Anthurium is a stunning indoor plant known for its glossy heart-shaped leaves and vibrant red flowers. Perfect for adding a touch of elegance to any space.",
    },
    {
        image: "./img/9.jpg",
        name: "Twinkle Deliciosa Plant",
        subheading: "Popular Indoor Tropical Plant",
        price: 50.99,
        discount: "15% off",
        star: 4.9,
        sale: true,
        sunlight: "Bright Indirect Light",
        watering: "Water every 1-2 weeks",
        description: "The Twinkle Deliciosa is a well-loved houseplant with iconic split leaves, adding a tropical vibe to any home. Easy to care for and stunning in appearance.",
    },
    {
        image: "./img/10.jpg",
        name: "Ficus Lyrata",
        subheading: "Popular Fiddle Leaf Fig",
        price: 60.99,
        discount: "20% off",
        star: 4.8,
        sale: true,
        sunlight: "Bright Indirect Light",
        watering: "Water when top inch of soil is dry",
        description: "Ficus Lyrata, commonly known as the Fiddle Leaf Fig, is a stylish houseplant with large, glossy leaves. It thrives in bright spaces and adds a modern touch to any room.",
    },
    {
        image: "./img/11.jpg",
        name: "Snake Plant",
        subheading: "Low Maintenance Air Purifier",
        price: 22.99,
        discount: "5% off",
        star: 4.7,
        sale: false,
        sunlight: "Low to Bright Indirect Light",
        watering: "Water when soil is dry",
        description: "The Snake Plant is one of the easiest houseplants to care for, making it perfect for beginners. It is also known for its air-purifying abilities.",
    },
    {
        image: "./img/12.jpg",
        name: "ZZ Plant",
        subheading: "Hardy and Low-Light Tolerant",
        price: 29.99,
        discount: "10% off",
        star: 4.6,
        sale: true,
        sunlight: "Low to Bright Indirect Light",
        watering: "Water when soil is dry",
        description: "The ZZ Plant is known for its striking appearance and hardiness. It can tolerate low light and requires minimal watering, making it a perfect office or home plant.",
    },
    {
        image: "./img/13.jpg",
        name: "Fiddle Leaf Fig Plant",
        subheading: "Trendy and Elegant",
        price: 55.99,
        discount: "15% off",
        star: 4.9,
        sale: true,
        sunlight: "Bright Indirect Light",
        watering: "Water when soil is dry",
        description: "The Fiddle Leaf Fig Plant is a trendy houseplant known for its large, violin-shaped leaves. It's a statement plant that adds sophistication to any space.",
    },
    {
        image: "./img/14.jpg",
        name: "Money Plant Golden",
        subheading: "Easy Growing Indoor Plant",
        price: 19.99,
        discount: "10% off",
        star: 4.5,
        sale: true,
        sunlight: "Low to Bright Indirect Light",
        watering: "Water when top layer of soil is dry",
        description: "The Money Plant Golden is a popular indoor plant that is easy to grow and care for. It is believed to bring prosperity and good fortune.",
    },
    {
        image: "./img/15.jpg",
        name: "Broken Heart Plant",
        subheading: "Romantic Foliage Plant",
        price: 24.99,
        discount: "5% off",
        star: 4.4,
        sale: false,
        sunlight: "Bright Indirect Light",
        watering: "Water regularly but avoid overwatering",
        description: "The Broken Heart Plant, with its heart-shaped leaves, adds a touch of romance to any space. It is easy to care for and thrives in indirect light.",
    },
    {
        image: "./img/16.jpg",
        name: "Ficus Bonsai",
        subheading: "Elegant Miniature Bonsai",
        price: 45.99,
        discount: "10% off",
        star: 4.8,
        sale: true,
        sunlight: "Bright Indirect Light",
        watering: "Keep soil slightly moist",
        description: "Ficus Bonsai is a small, elegant tree that brings the art of bonsai into your home. It's perfect for adding a sense of peace and nature to any space.",
    },
    {
        image: "./img/17.jpg",
        name: "Bamboo Palm XL",
        subheading: "Larger Air-Purifying Plant",
        price: 65.99,
        discount: "15% off",
        star: 4.7,
        sale: true,
        sunlight: "Bright Indirect Light",
        watering: "Keep soil consistently moist",
        description: "The Bamboo Palm XL is a larger version of the popular indoor palm, great for spacious rooms or offices. It not only adds beauty but also purifies the air.",
    },
    {
        image: "./img/18.jpg",
        name: "Syngonium Pink Plant",
        subheading: "Colorful and Unique Foliage",
        price: 28.99,
        discount: "10% off",
        star: 4.6,
        sale: true,
        sunlight: "Bright Indirect Light",
        watering: "Water when top inch of soil is dry",
        description: "Syngonium Pink Plant is known for its vibrant pink leaves, making it a colorful and unique addition to your indoor plant collection. It's easy to care for and thrives in indirect light.",
    }
];

const plantList = document.getElementById("plant-list");
const cartModal = document.getElementById("cartModal");
const cartItemsContainer = document.getElementById("cart-items");
const closeCartBtn = document.getElementById("closeCart");
const productDetailModal = document.getElementById("productDetailModal");
const productDetailContainer = document.getElementById("product-detail-container");
const closeProductModalBtn = document.getElementById("closeProductModal");

function openProductDetailModal(plant) {
    productDetailContainer.innerHTML = `
        <div class="product-modal-card>
            ${plant.sale ? '<div class="badge">On Sale</div>' : ''}
            <div class="product-tumb">
                <img src=${plant.image} alt="">
            </div>
            <div class="product-details">
                <span class="product-category">${plant.subheading}</span>
                <h4>${plant.name}</h4>
                <div class="product-bottom-details">
                    <div class="product-price">
                        <small><strike>$${Math.round(plant.price + (plant.discount ? plant.price * parseFloat(plant.discount) / 100 : 0))}</strike></small>
                        <strong>$${Math.round(plant.price)}</strong>
                    </div>
                    <div class="product-cart" onclick="addToCartFromModal(${JSON.stringify(plant)})">
                        Add to cart <i class="fa fa-shopping-cart"></i>
                    </div>
                </div>
            </div>
        </div>
    `;

    productDetailModal.style.display = "block";
}

function addToCartFromModal(plant) {
    const existingItem = cart.find(item => item.name === plant.name);
    
    if (existingItem) {
        alert("Product already in cart");
        openCartModal();
    } else {
        plant.quantity = 1;
        cart.push(plant);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Product added to cart");
    }
}

closeProductModalBtn.onclick = function () {
    productDetailModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == productDetailModal) {
        productDetailModal.style.display = "none";
    }
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartModal() {
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-about">
                    <img src=${item.image} />
                    <div class="cart-item-more-about">
                        <h4>${item.name}</h4>
                        <p>${item.subheading}</p>
                    </div>
                </div>
                <div class="cart-item-full-controls">
                    <div class="cart-item-controls">
                        <button class="cart-item-minus" onclick="changeQuantity(${index}, -1)"><i class="fa-solid fa-minus"></i></button>
                        <span>${item.quantity}</span>
                        <button class="cart-item-plus" onclick="changeQuantity(${index}, 1)"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})"><i class="fa-regular fa-trash-can"></i></button>
                </div>
                <h3>$${Math.round(item.price)}</h3>
            </div>
        `;
    });
}

function addToCart(index) {
    const plant = plants[index];
    const existingItem = cart.find(item => item.name === plant.name);

    if (existingItem) {
        alert("Product already in cart");
        openCartModal();
    } else {
        plant.quantity = 1;
        cart.push(plant);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Product added to cart");
    }
}

function changeQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity === 0) {
        removeFromCart(index);
    } else {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartModal();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartModal();
}

function openCartModal() {
    updateCartModal();
    cartModal.style.display = "block";
}

closeCartBtn.onclick = function () {
    cartModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
}

plants.forEach((plant, index) => {
    plantList.innerHTML += `
        <div class="product-card">
            ${plant.sale ? '<div class="badge">On Sale</div>' : ''}
            <div class="product-tumb">
                <img src=${plant.image} alt="" onclick="openProductDetailModal(plants[${index}])">
            </div>
            <div class="product-details">
                <span class="product-category">${plant.subheading}</span>
                <h4>${plant.name}</h4>
                <div class="product-bottom-details">
                    <div class="product-price">
                        <small><strike>$${Math.round(plant.price + (plant.discount ? plant.price * parseFloat(plant.discount) / 100 : 0))}</strike></small>
                        <strong>$${Math.round(plant.price)}</strong>
                    </div>
                    <div class="product-cart" onclick="addToCart(${index})">
                        <i class="fa fa-shopping-cart"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
});

