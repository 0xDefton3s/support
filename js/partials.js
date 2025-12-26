// Partials Loader - Header ve Footer'ı dinamik olarak yükler

document.addEventListener('DOMContentLoaded', function() {
    const isSubPage = window.location.pathname.includes('/oyunlar/');
    const basePath = isSubPage ? '../' : '';
    
    // Header yükle
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch(basePath + 'partials/header.html')
            .then(response => response.text())
            .then(html => {
                headerPlaceholder.innerHTML = html;
                // Linkleri güncelle
                const homeLink = headerPlaceholder.querySelector('.header-home-link');
                const navHome = headerPlaceholder.querySelector('.nav-home');
                const navGenel = headerPlaceholder.querySelector('.nav-genel');
                const navOyunlar = headerPlaceholder.querySelector('.nav-oyunlar');
                
                if (homeLink) homeLink.href = basePath + 'index.html';
                if (navHome) navHome.href = basePath + 'index.html';
                if (navGenel) navGenel.href = basePath + 'genel-cozumler.html';
                if (navOyunlar) navOyunlar.href = basePath + 'index.html#oyunlar';
                
                // Aktif sayfa vurgulama
                const currentPage = window.location.pathname;
                const mobileNavHome = headerPlaceholder.querySelector('.mobile-nav-link.nav-home');
                const mobileNavGenel = headerPlaceholder.querySelector('.mobile-nav-link.nav-genel');
                const mobileNavOyunlar = headerPlaceholder.querySelector('.mobile-nav-link.nav-oyunlar');
                
                if (currentPage.includes('genel-cozumler')) {
                    navGenel?.classList.add('nav-active');
                    mobileNavGenel?.classList.add('nav-active');
                } else if (currentPage.includes('/oyunlar/')) {
                    navOyunlar?.classList.add('nav-active');
                    mobileNavOyunlar?.classList.add('nav-active');
                } else if (currentPage.endsWith('index.html') || currentPage.endsWith('/') || currentPage === '') {
                    navHome?.classList.add('nav-active');
                    mobileNavHome?.classList.add('nav-active');
                }
            })
            .catch(err => console.error('Header yüklenemedi:', err));
    }
    
    // Footer yükle
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch(basePath + 'partials/footer.html')
            .then(response => response.text())
            .then(html => {
                footerPlaceholder.innerHTML = html;
                // currentYear'ı set et
                const yearElement = document.getElementById('currentYear');
                if (yearElement) {
                    yearElement.textContent = new Date().getFullYear();
                }
            })
            .catch(err => console.error('Footer yüklenemedi:', err));
    }
});
