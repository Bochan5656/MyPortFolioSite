const frames = [
    themeUrl + '/assets/images/logo.png',
    themeUrl + '/assets/images/Port-Folio_2.png',
    themeUrl + '/assets/images/Port-Folio_3.png',
    themeUrl + '/assets/images/Port-Folio_4.png',
    themeUrl + '/assets/images/Port-Folio_5.png'
];

let currentIndex = 0;
const loadingImgElement = document.getElementById('loading-image');

// 画像のプリロードと読み込み状態の管理
let loadedImagesCount = 0;
let isImagesLoaded = false;
let isPageLoaded = false;

frames.forEach((src) => {
    const img = new Image();
    img.onload = () => {
        loadedImagesCount++;
        if (loadedImagesCount === frames.length) {
            isImagesLoaded = true;
            checkAndHideLoading();
        }
    };
    img.onerror = () => {
        loadedImagesCount++;
        if (loadedImagesCount === frames.length) {
            isImagesLoaded = true;
            checkAndHideLoading();
        }
    };
    img.src = src;
});

// setIntervalを使って、一定間隔で画像のsrc属性を書き換える
const animationInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % frames.length;
    loadingImgElement.src = frames[currentIndex];
}, 300); 

// ページ全体の読み込み完了
window.addEventListener('load', () => {
    isPageLoaded = true;
    checkAndHideLoading();
});

// プリロードとページ読み込みが両方完了したらローディングを消す
function checkAndHideLoading() {
    if (isImagesLoaded && isPageLoaded) {
        clearInterval(animationInterval);
        const loadingScreen = document.getElementById('loading-screen');
        
        // フワッと消すためのフェードアウトアニメーション
        loadingScreen.animate(
            [{ opacity: 1 }, { opacity: 0 }], 
            { duration: 500, fill: 'forwards' }
        ).onfinish = () => {
            loadingScreen.style.display = 'none';
        };
    }
}