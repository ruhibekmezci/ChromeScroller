let isScrolling = false;
let scrollSpeed = 1.0; 
let scrollAccumulator = 0.0; // <-- Sihirli biriktirici bu

// Eklenti yüklendiğinde kayıtlı hızı çek
chrome.storage.sync.get(['scrollSpeed'], function(result) {
  if (result.scrollSpeed) {
    scrollSpeed = parseFloat(result.scrollSpeed);
  }
});

// Ayarlar sayfasından hız değişirse anında güncelle
chrome.storage.onChanged.addListener(function(changes) {
  if (changes.scrollSpeed) {
    scrollSpeed = parseFloat(changes.scrollSpeed.newValue);
  }
});

// Pürüzsüz kaydırma için ana fonksiyon (loop)
function smoothScroll() {
  if (!isScrolling) {
    scrollAccumulator = 0.0; // Durduysak birikeni sıfırla
    return; // Döngüden çık
  }
  
  // Hızı birikene ekle
  scrollAccumulator += scrollSpeed;
  
  // Birikenden tam sayı (piksel) elde et
  // (0.5'ten küçükse 0, 1.2 ise 1 döner)
  let scrollAmount = Math.floor(scrollAccumulator);
  
  // Eğer kaydıracak kadar (en az 1 piksel) birikmişse
  if (scrollAmount >= 1) {
    window.scrollBy(0, scrollAmount); // Biriken tam sayı kadar kaydır
    scrollAccumulator -= scrollAmount; // Kaydırılan miktarı birikenden düş
  }
  
  requestAnimationFrame(smoothScroll); // Bir sonraki frame'de tekrar çağır
}

// Fare tıklamalarını dinle
window.addEventListener('mousedown', function(event) {
  
  // Sadece ORTA TUŞ ise (event.button == 1)
  if (event.button === 1) {
    event.preventDefault(); // Tarayıcının kendi orta tuş menüsünü/davranışını engelle
    
    isScrolling = !isScrolling; // Durumu tersine çevir (Aç/Kapat)
    
    if (isScrolling) {
      scrollAccumulator = 0.0; // Kaydırmaya başlarken birikeni sıfırla
      requestAnimationFrame(smoothScroll); // Kaydırmayı başlat
    }
  }
  
  // Eğer kaydırma aktifken başka bir tuşa (sol veya sağ) basılırsa durdursun
  else if (isScrolling && (event.button === 0 || event.button === 2)) {
    isScrolling = false;
  }
}, true);