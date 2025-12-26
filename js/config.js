// Site Config - CSS cache bypass
(function() {
    const isSubPage = window.location.pathname.includes('/oyunlar/');
    const basePath = isSubPage ? '../' : '';
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = basePath + 'css/styles.css?v=' + Date.now();
    document.head.appendChild(link);
})();
