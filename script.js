const products = {
    polaroids: {
        title: "CUSTOMIZED POLAROIDS",
        price: 'Just at ₹7/-',
        description: "*Customizable to any pic\n\n• 350 GSM\n• ANTI-FADE\n• GLOSSY FINISH\n• SPLASH PROOF\n\nYour fav moments, memorized forever."
    },
    cupidreels: {
        title: "CUPID REELS",
        price: 'Just at ₹19/-',
        description: "*Customizable to any pic\n\n3-4 pictures of yours in a reel format!\n\n• 350 GSM\n• ANTI-FADE\n• GLOSSY FINISH\n• SPLASH PROOF\n\nClassic photo strips for your best memories. Perfect Valentine's gift!"
    }
};

// Gallery Images - Listed as in folder
const galleryImages = [
    "1717944224061.jpg",
    "1717944529548.jpg",
    "1717944787940.jpg",
    "1717945289907.jpg",
    "1717945500590.jpg",
    "IMG_20240609_170009.jpg",
    "IMG_20240609_170038.jpg",
    "IMG_20240609_170126.jpg",
    "IMG_20240609_170225.jpg",
    "IMG_20240609_170444.jpg",
    "IMG_20240609_170519.jpg",
    "IMG_20240609_170855.jpg",
    "IMG_20240609_170942.jpg",
    "IMG_20240609_171005.jpg",
    "IMG_20240609_171013_1.jpg",
    "IMG_20240609_172115.jpg",
    "IMG_20240610_130839.jpg",
    "IMG_20240610_133643.jpg",
    "IMG_20240610_133830.jpg",
    "IMG_20240610_133903.jpg"
];

function populateGallery() {
    const container = document.getElementById('gallery-container');
    galleryImages.forEach(imgSrc => {
        const item = document.createElement('div');
        item.className = 'polaroid-item';

        const photo = document.createElement('div');
        photo.className = 'photo-container';

        const img = document.createElement('img');
        img.src = `assets/gallery/${imgSrc}`;
        img.alt = 'Gallery image';
        img.loading = 'lazy';

        photo.appendChild(img);
        item.appendChild(photo);
        container.appendChild(item);
    });
}

// Create Valentine background elements (Floating Hearts)
function createValentineBackground() {
    const bg = document.querySelector('.diwali-bg');
    if (!bg) return;

    bg.innerHTML = '';

    const colors = ['#FFEBEE', '#FFCDD2', '#EF9A9A'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.opacity = Math.random() * 0.3 + 0.1;
        heart.style.transition = 'all 5s linear';
        heart.style.pointerEvents = 'none';

        bg.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 5050);
    }, 800);
}

function showProduct(productId) {
    const product = products[productId];
    document.querySelector('.hero').classList.add('hidden');
    document.getElementById('gallery-section').classList.add('hidden');

    const productDetails = document.getElementById('product-details');
    productDetails.classList.remove('hidden');

    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-price').innerHTML = `<h2>${product.price}</h2>`;
    document.getElementById('product-description').innerHTML = product.description.replace(/\n/g, '<br>');

    // Update WhatsApp link
    const whatsappBtn = document.querySelector('.whatsapp');
    whatsappBtn.href = "https://api.whatsapp.com/send?phone=919036438620&text=Hey%20SNAP!%20I%20want%20to%20order%20" +
        encodeURIComponent(product.title) + "%20from%20Valentine%20Sale";

    // Scroll to top
    window.scrollTo(0, 0);
}

function showHome() {
    document.querySelector('.hero').classList.remove('hidden');
    document.getElementById('gallery-section').classList.remove('hidden');
    document.getElementById('product-details').classList.add('hidden');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createValentineBackground();
    populateGallery();

    // Wait for all fonts and images to load before hiding loading screen
    Promise.all([
        document.fonts.ready,
        ...Array.from(document.images).map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.addEventListener('load', resolve);
                img.addEventListener('error', resolve);
            });
        })
    ]).then(() => {
        // Hide loading screen with fade out
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('loaded');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    });
});