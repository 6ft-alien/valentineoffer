const products = {
    polaroids: {
        title: "CUSTOMIZED POLAROIDS",
        price: 'Just at ₹7/-',
        description: "*Customizable to any pic\n\n• 350 GSM\n• ANTI-FADE\n• GLOSSY FINISH\n• SPLASH PROOF\n\nYour fav moments, memorized forever.",
        images: [
            "assets/gallery/1717944787940.jpg",
            "assets/gallery/IMG_20240610_130839.jpg"
        ]
    },
    cupidreels: {
        title: "CUPID REELS",
        price: 'Just at ₹19/-',
        description: "*Customizable to any pic\n\n3-4 pictures of yours in a reel format!\n\n• 350 GSM\n• ANTI-FADE\n• GLOSSY FINISH\n• SPLASH PROOF\n\nClassic photo strips for your best memories. Perfect Valentine's gift!",
        images: [
            "assets/cupidreel.jpg",
            "assets/cupidreel.jpg"
        ]
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

// Gallery Lightbox State
let currentGalleryImages = [];
let currentImageIndex = 0;

function showProduct(productId) {
    const product = products[productId];
    document.querySelector('.hero').classList.add('hidden');

    const productDetails = document.getElementById('product-details');
    productDetails.classList.remove('hidden');

    document.getElementById('product-title').textContent = product.title;

    // Populate product images from product data
    const productImagesContainer = document.getElementById('product-images');
    productImagesContainer.innerHTML = '';

    // Use specific images defined in product object
    const sampleImagePaths = product.images;

    sampleImagePaths.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = product.title;
        img.loading = 'lazy';

        // Prevent right-click and long-press
        img.addEventListener('contextmenu', (e) => e.preventDefault());
        img.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) e.preventDefault();
        });
        img.addEventListener('touchend', (e) => e.preventDefault());

        // Add click handler to open modal with navigation
        img.addEventListener('click', function () {
            openImageModal(img.src, this, sampleImagePaths, index);
        });
        productImagesContainer.appendChild(img);
    });

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
    document.getElementById('product-details').classList.add('hidden');

    // Scroll to top
    window.scrollTo(0, 0);
}

function openImageModal(imageSrc, clickedElement, imageArray, index) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    // Set image array and current index
    currentGalleryImages = imageArray || [imageSrc];
    currentImageIndex = index !== undefined ? index : 0;

    // Set image source
    modalImg.src = currentGalleryImages[currentImageIndex];

    // Update navigation buttons
    updateNavigationButtons();

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function navigateModal(direction) {
    const newIndex = currentImageIndex + direction;

    if (newIndex >= 0 && newIndex < currentGalleryImages.length) {
        currentImageIndex = newIndex;
        const modalImg = document.getElementById('modalImage');
        modalImg.src = currentGalleryImages[currentImageIndex];
        updateNavigationButtons();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('modalPrev');
    const nextBtn = document.getElementById('modalNext');

    if (prevBtn && nextBtn) {
        // Disable prev on first image
        prevBtn.disabled = currentImageIndex === 0;

        // Disable next on last image
        nextBtn.disabled = currentImageIndex === currentGalleryImages.length - 1;
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentGalleryImages = [];
    currentImageIndex = 0;
}

function populateGallery() {
    const container = document.getElementById('gallery-container');
    const allGalleryPaths = galleryImages.map(img => `assets/gallery/${img}`);

    galleryImages.forEach((imgSrc, index) => {
        const item = document.createElement('div');
        item.className = 'polaroid-item';

        const photo = document.createElement('div');
        photo.className = 'photo-container';

        const img = document.createElement('img');
        img.src = `assets/gallery/${imgSrc}`;
        img.alt = 'Gallery image';
        img.loading = 'lazy';
        img.style.cursor = 'pointer';

        // Prevent right-click
        img.addEventListener('contextmenu', (e) => e.preventDefault());

        // Click to open lightbox with navigation
        img.addEventListener('click', function () {
            openImageModal(img.src, this, allGalleryPaths, index);
        });

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

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('imageModal');
    if (!modal.classList.contains('active')) return;

    if (e.key === 'ArrowLeft') navigateModal(-1);
    if (e.key === 'ArrowRight') navigateModal(1);
    if (e.key === 'Escape') closeImageModal();
});

// Close when clicking outside
document.addEventListener('DOMContentLoaded', () => {
    createValentineBackground();
    populateGallery();

    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeImageModal();
            }
        });
    }

    // Hide loading screen function
    function hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen && !loadingScreen.classList.contains('loaded')) {
            loadingScreen.classList.add('loaded');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }

    // Set maximum timeout to force hide after 3 seconds
    const maxTimeout = setTimeout(() => {
        hideLoadingScreen();
    }, 3000);

    // Wait for all fonts and critical images to load
    Promise.all([
        document.fonts.ready,
        // Only wait for logo, not all images (gallery is lazy-loaded)
        new Promise(resolve => {
            const logo = document.querySelector('.logo-svg');
            if (logo && logo.complete) {
                resolve();
            } else if (logo) {
                logo.addEventListener('load', resolve);
                logo.addEventListener('error', resolve);
            } else {
                resolve();
            }
        })
    ]).then(() => {
        clearTimeout(maxTimeout);
        hideLoadingScreen();
    }).catch(() => {
        clearTimeout(maxTimeout);
        hideLoadingScreen();
    });
});