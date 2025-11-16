// Products Data
const products = [
    {
        id: 1,
        name: 'Bàn ăn gỗ óc chó 6 ghế',
        category: 'dining',
        image: 'https://images.unsplash.com/photo-1617638924751-cc232f82ecf9?w=600&q=80',
        price: '25.000.000đ',
        description: 'Bàn ăn 6 ghế gỗ óc chó tự nhiên, thiết kế hiện đại'
    },
    {
        id: 2,
        name: 'Ghế sofa gỗ 3 chỗ ngồi',
        category: 'living',
        image: 'https://images.unsplash.com/photo-1680772856779-43eef7cabf18?w=600&q=80',
        price: '18.000.000đ',
        description: 'Sofa gỗ tự nhiên kết hợp đệm êm ái, sang trọng'
    },
    {
        id: 3,
        name: 'Tủ quần áo gỗ sồi 4 cánh',
        category: 'bedroom',
        image: 'https://images.unsplash.com/photo-1678555815116-52c1b10517f5?w=600&q=80',
        price: '32.000.000đ',
        description: 'Tủ quần áo gỗ sồi Mỹ, dung tích lớn, thiết kế thông minh'
    },
    {
        id: 4,
        name: 'Giường ngủ gỗ King Size',
        category: 'bedroom',
        image: 'https://images.unsplash.com/photo-1583221742001-9ad88bf233ff?w=600&q=80',
        price: '28.000.000đ',
        description: 'Giường ngủ cao cấp 1m8x2m, gỗ tự nhiên chắc chắn'
    },
    {
        id: 5,
        name: 'Bàn làm việc gỗ óc chó',
        category: 'office',
        image: 'https://images.unsplash.com/photo-1617638924751-cc232f82ecf9?w=600&q=80',
        price: '15.000.000đ',
        description: 'Bàn làm việc thiết kế tối giản, nhiều ngăn kéo'
    },
    {
        id: 6,
        name: 'Kệ tivi gỗ hiện đại',
        category: 'living',
        image: 'https://images.unsplash.com/photo-1678555815116-52c1b10517f5?w=600&q=80',
        price: '12.000.000đ',
        description: 'Kệ tivi gỗ tự nhiên, thiết kế tinh tế và gọn gàng'
    },
    {
        id: 7,
        name: 'Bàn ăn tròn 4 ghế',
        category: 'dining',
        image: 'https://images.unsplash.com/photo-1617638924751-cc232f82ecf9?w=600&q=80',
        price: '18.000.000đ',
        description: 'Bàn ăn tròn gỗ sồi, phù hợp cho gia đình nhỏ'
    },
    {
        id: 8,
        name: 'Tủ sách gỗ cao cấp',
        category: 'office',
        image: 'https://images.unsplash.com/photo-1678555815116-52c1b10517f5?w=600&q=80',
        price: '22.000.000đ',
        description: 'Tủ sách gỗ tự nhiên với nhiều ngăn kệ linh hoạt'
    }
];

// Gallery Data
const gallery = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1760894382828-6c1b121d638c?w=800&q=80',
        title: 'Showroom nội thất',
        category: 'Showroom'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1687180497716-5872969e5125?w=800&q=80',
        title: 'Nội thất phòng khách cao cấp',
        category: 'Phòng khách'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1758977403438-1b8546560d31?w=800&q=80',
        title: 'Bộ bàn ăn gia đình',
        category: 'Phòng ăn'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1583221742001-9ad88bf233ff?w=800&q=80',
        title: 'Thiết kế phòng ngủ sang trọng',
        category: 'Phòng ngủ'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1617638924751-cc232f82ecf9?w=800&q=80',
        title: 'Bàn làm việc hiện đại',
        category: 'Văn phòng'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1680772856779-43eef7cabf18?w=800&q=80',
        title: 'Ghế sofa gỗ tự nhiên',
        category: 'Phòng khách'
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1678555815116-52c1b10517f5?w=800&q=80',
        title: 'Tủ quần áo cao cấp',
        category: 'Phòng ngủ'
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1685022515813-c42e8348639b?w=800&q=80',
        title: 'Quy trình chế tác',
        category: 'Xưởng sản xuất'
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1732575966442-b2d665c080d2?w=800&q=80',
        title: 'Xưởng sản xuất',
        category: 'Xưởng sản xuất'
    }
];

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Create slider dots
const dotsContainer = document.getElementById('sliderDots');
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
}

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    document.querySelectorAll('.slider-dot').forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    document.querySelectorAll('.slider-dot')[currentSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function goToSlide(n) {
    showSlide(n);
}

// Auto slide
setInterval(() => {
    changeSlide(1);
}, 5000);

// Navigation
function navigateTo(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageName).classList.add('active');
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu
    document.getElementById('nav').classList.remove('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Load content based on page
    if (pageName === 'products') {
        loadProducts('all');
    } else if (pageName === 'gallery') {
        loadGallery();
    }
}

// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('active');
});

// Handle nav link clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        navigateTo(page);
    });
});

// Products Filter
function filterProducts(category) {
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadProducts(category);
}

function loadProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}');"></div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3>${product.name}</h3>
                <p style="color: #57534e; font-size: 0.9rem; margin-bottom: 10px;">${product.description}</p>
                <p class="product-price">${product.price}</p>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

function getCategoryName(category) {
    const categories = {
        'living': 'Phòng khách',
        'dining': 'Phòng ăn',
        'bedroom': 'Phòng ngủ',
        'office': 'Văn phòng'
    };
    return categories[category] || category;
}

// Gallery
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    
    gallery.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.backgroundImage = `url('${item.image}')`;
        galleryItem.innerHTML = `
            <div class="gallery-overlay">
                <div>
                    <p class="gallery-category">${item.category}</p>
                    <h3>${item.title}</h3>
                </div>
            </div>
        `;
        galleryItem.onclick = () => openLightbox(index);
        galleryGrid.appendChild(galleryItem);
    });
}

// Lightbox
let currentLightboxIndex = 0;

function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');
    
    img.src = gallery[index].image;
    caption.innerHTML = `<p style="color: #fcd34d; margin-bottom: 5px;">${gallery[index].category}</p><h3 style="color: white;">${gallery[index].title}</h3>`;
    
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function lightboxNavigate(direction) {
    currentLightboxIndex = (currentLightboxIndex + direction + gallery.length) % gallery.length;
    openLightbox(currentLightboxIndex);
}

// Close lightbox on background click
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// Close lightbox with close button
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);

// Close lightbox with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show success message
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    
    // Reset form
    e.target.reset();
});

// Sticky header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Load initial products
    loadProducts('all');
    
    // Load gallery
    loadGallery();
});
