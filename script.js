const products = {
    polaroids: {
        title: "CUSTOMIZED POLAROIDS",
        price: 'Just at ₹7/-',
        description: `*Customizable to any pic\n\n• 350 GSM\n• ANTI-FADE\n• GLOSSY FINISH\n• SPLASH PROOF\n\nYour fav moments, memorized forever.\n\n<a href='https://www.instagram.com/stories/highlights/18073171693451044/' target='_blank' class='review-btn'><svg viewBox='0 0 512 512' width='20' height='20' style='margin-right:8px; display:inline-block; vertical-align:middle;'><path style="fill:#ffffff" d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z"/><path style="fill:#ffffff" d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z"/><circle style=" fill:#ffffff" cx="390.476" cy="121.524" r="30.23"/></svg>View Reviews on Instagram</a>`,
        images: [
            "assets/gallery/1717944787940.jpg",
            "assets/gallery/IMG_20240610_130839.jpg"
        ]
    },
    heart_polaroids: {
        title: "HEART POLAROIDS",
        price: 'Just at ₹19/-',
        description: `*Customizable to any pic\n\n**BUY 12 GET 12 FREE!**\n\n• Heart Shaped Cuts\n• 350 GSM\n• ANTI-FADE\n• GLOSSY FINISH\n• SPLASH PROOF\n• PERFECT FOR COUPLES\n\nYour fav moments, memorized forever.\n\n<a href='https://www.instagram.com/stories/highlights/18073171693451044/' target='_blank' class='review-btn'><svg viewBox='0 0 512 512' width='20' height='20' style='margin-right:8px; display:inline-block; vertical-align:middle;'><path style="fill:#ffffff" d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z"/><path style="fill:#ffffff" d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z"/><circle style=" fill:#ffffff" cx="390.476" cy="121.524" r="30.23"/></svg>View Reviews on Instagram</a>`,
        images: [
            "assets/gallery/heart1.jpg",
            "assets/gallery/heart2.jpeg",
            "assets/gallery/heart3.jpg",
            "assets/gallery/heart4.jpeg"
        ],
        variants: [
            { id: 'half_red', label: 'Half Red & White' },
            { id: 'full_red', label: 'Full Red' },
            { id: 'full_white', label: 'Full White' },
            { id: 'stripes', label: 'Candy Stripes' }
        ]
    },
    cupidreels: {
        title: "CUPID REELS",
        price: 'Just at ₹19/-',
        description: `*Customizable to any pic\n\n3-4 pictures of yours in a reel format!\n\n• 350 GSM\n• ANTI-FADE\n• GLOSSY FINISH\n• SPLASH PROOF\n\nClassic photo strips for your best memories. Perfect Valentine's gift!\n\n<a href='https://www.instagram.com/stories/highlights/18073171693451044/' target='_blank' class='review-btn'><svg viewBox='0 0 512 512' width='20' height='20' style='margin-right:8px; display:inline-block; vertical-align:middle;'><path style="fill:#ffffff" d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z"/><path style="fill:#ffffff" d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z"/><circle style=" fill:#ffffff" cx="390.476" cy="121.524" r="30.23"/></svg>View Reviews on Instagram</a>`,
        images: [
            "assets/gallery/cupidreel.jpg",
            "assets/gallery/cupidreel0.jpg"
        ]
    },
    posters: {
        title: "CUSTOMIZED POSTERS",
        price: 'Starting @ ₹29/-',
        description: `*Customizable to any pic\n\n• A5 Posters at ₹29/- each (MOQ - 4)\n• A4 Posters at ₹39/- each (MOQ - 2)\n• A3 Posters at ₹79/- each (MOQ - 2)\n\n• 350 GSM\n• ANTI-FADE\n• GLOSSY FINISH\n• SPLASH PROOF\n\nClassic poster prints. Bigger is better!\n\n<a href='https://www.instagram.com/stories/highlights/18073171693451044/' target='_blank' class='review-btn'><svg viewBox='0 0 512 512' width='20' height='20' style='margin-right:8px; display:inline-block; vertical-align:middle;'><path style="fill:#ffffff" d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z"/><path style="fill:#ffffff" d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z"/><circle style=" fill:#ffffff" cx="390.476" cy="121.524" r="30.23"/></svg>View Reviews on Instagram</a>`,
        images: [
            "assets/gallery/poster1.jpg",
            "assets/gallery/poster2.jpg",
            "assets/gallery/poster3.jpg",
            "assets/gallery/poster4.jpg"
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
    "cupidreel.jpg",
    "cupidreel0.jpg",
    "heart1.jpg",
    "heart2.jpeg",
    "heart3.jpg",
    "heart4.jpeg",
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
    "IMG_20240610_133903.jpg",
    "polaroid.jpg",
    "poster1.jpg",
    "poster2.jpg",
    "poster3.jpg",
    "poster4.jpg"
];

// Shuffle function to randomize gallery order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle gallery images on load
shuffleArray(galleryImages);

// Gallery Lightbox State
let currentGalleryImages = [];
let currentImageIndex = 0;

// Track selected variant
let selectedVariant = null;

function showProduct(productId) {
    const product = products[productId];
    selectedVariant = null; // Reset on product change
    
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

        // Add click handler to open modal with navigation
        img.addEventListener('click', function () {
            openImageModal(img.src, this, sampleImagePaths, index);
        });
        productImagesContainer.appendChild(img);
    });

    document.getElementById('product-price').innerHTML = `<h2>${product.price}</h2>`;
    document.getElementById('product-description').innerHTML = product.description.replace(/\n/g, '<br>');

    // Handle Variants
    const variantsContainer = document.getElementById('product-variants');
    const variantsGrid = variantsContainer.querySelector('.variants-grid');
    const variantWarning = document.getElementById('variant-warning');
    
    variantsGrid.innerHTML = '';
    variantWarning.classList.add('hidden');

    if (product.variants && product.variants.length > 0) {
        // Show variants section
        variantsContainer.classList.remove('hidden');
        
        // Create radio button for each variant
        product.variants.forEach((variant, index) => {
            const label = document.createElement('label');
            label.className = 'variant-option';
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'product-variant';
            input.value = variant.id;
            input.id = `variant-${variant.id}`;
            
            input.addEventListener('change', () => {
                selectedVariant = variant;
                variantWarning.classList.add('hidden');
                updateWhatsAppLink(productId);
            });
            
            // Create heart SVG button
            const heartButton = document.createElement('div');
            heartButton.className = 'heart-button';
            heartButton.innerHTML = `
                <svg class="heart-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="heart-clip">
                            <path d="M50,90 C50,90 10,60 10,40 C10,25 20,15 30,15 C40,15 45,20 50,30 C55,20 60,15 70,15 C80,15 90,25 90,40 C90,60 50,90 50,90 Z"/>
                        </clipPath>
                    </defs>
                    <!-- Heart fill (bottom layer with animation) -->
                    <path class="heart-fill" d="M50,90 C50,90 10,60 10,40 C10,25 20,15 30,15 C40,15 45,20 50,30 C55,20 60,15 70,15 C80,15 90,25 90,40 C90,60 50,90 50,90 Z"/>
                    <!-- Heart outline (top layer) -->
                    <path class="heart-outline" d="M50,90 C50,90 10,60 10,40 C10,25 20,15 30,15 C40,15 45,20 50,30 C55,20 60,15 70,15 C80,15 90,25 90,40 C90,60 50,90 50,90 Z"/>
                </svg>
            `;
            
            const span = document.createElement('span');
            span.className = 'variant-label';
            span.textContent = variant.label;
            
            label.appendChild(input);
            label.appendChild(heartButton);
            label.appendChild(span);
            variantsGrid.appendChild(label);
        });
        
    } else {
        // Hide variants section
        variantsContainer.classList.add('hidden');
    }

    // Update WhatsApp link
    updateWhatsAppLink(productId);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function updateWhatsAppLink(productId) {
    const product = products[productId];
    let message = `Hey SNAP! I want to order ${product.title}`;
    
    if (product.variants && product.variants.length > 0) {
        if (selectedVariant) {
            message += ` - Style: ${selectedVariant.label}`;
        }
    }
    
    message += ` from Valentine Sale`;
    
    const whatsappBtn = document.querySelector('.whatsapp');
    whatsappBtn.href = "https://api.whatsapp.com/send?phone=919482823700&text=" + encodeURIComponent(message);
    
    // Add click validation for products with variants
    if (product.variants && product.variants.length > 0) {
        whatsappBtn.onclick = (e) => {
            if (!selectedVariant) {
                e.preventDefault();
                const variantWarning = document.getElementById('variant-warning');
                variantWarning.classList.remove('hidden');
                // Scroll to variants
                document.getElementById('product-variants').scrollIntoView({ behavior: 'smooth', block: 'center' });
                return false;
            }
        };
    } else {
        whatsappBtn.onclick = null;
    }
    
    // Same for Instagram button
    const instaBtn = document.querySelector('.order-btn.instagram');
    if (product.variants && product.variants.length > 0) {
        instaBtn.onclick = (e) => {
            if (!selectedVariant) {
                e.preventDefault();
                const variantWarning = document.getElementById('variant-warning');
                variantWarning.classList.remove('hidden');
                document.getElementById('product-variants').scrollIntoView({ behavior: 'smooth', block: 'center' });
                return false;
            }
        };
    } else {
        instaBtn.onclick = null;
    }
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
    }, 300);
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
    // Prevent browser from restoring scroll position automatically
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }

    // Robustly clear hash and scroll to top
    if (window.location.hash) {
        window.scrollTo(0, 0);
        history.replaceState("", document.title, window.location.pathname + window.location.search);
    }

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