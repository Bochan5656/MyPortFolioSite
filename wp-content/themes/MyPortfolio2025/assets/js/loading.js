const frames = [
    themeUrl + '/assets/images/logo.png',
    themeUrl + '/assets/images/Port-Folio_2.png',
    themeUrl + '/assets/images/Port-Folio_3.png',
    themeUrl + '/assets/images/Port-Folio_4.png',
    themeUrl + '/assets/images/Port-Folio_5.png'
];

let currentIndex = 0;
const loadingImgElement = document.getElementById('loading-image');

// setIntervalを使って、一定間隔で画像のsrc属性を書き換える
// ここでは200ミリ秒（0.2秒）ごとに切り替えています
const animationInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % frames.length;
    loadingImgElement.src = frames[currentIndex];
}, 300); 

// ローディング消す
window.addEventListener('load', () => {
    clearInterval(animationInterval);
    const loadingScreen = document.getElementById('loading-screen');
    
    // フワッと消すためのフェードアウトアニメーション
    loadingScreen.animate(
        [{ opacity: 1 }, { opacity: 0 }], 
        { duration: 500, fill: 'forwards' }
    ).onfinish = () => {
        loadingScreen.style.display = 'none';
    };
});