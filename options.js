// 'speedValue' artık bir 'span' değil, 'input' kutusu.
const slider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue'); // Bu artık <input>
const saveButton = document.getElementById('saveButton');
const status = document.getElementById('status');

// Slider'ı kaydırınca sayı kutusunu güncelle
slider.oninput = function() {
  let val = parseFloat(this.value).toFixed(1);
  speedValue.value = val; // .textContent yerine .value
}

// YENİ: Sayı kutusuna elle değer girince slider'ı güncelle
speedValue.oninput = function() {
  let val = parseFloat(this.value);
  // Kullanıcının saçma bir sayı girmesini (örn: 20) engelle
  if (val < 0.1) val = 0.1;
  if (val > 10) val = 10;
  
  // Eğer kullanıcı "5." gibi yarım bir sayı girdiyse hemen düzeltme
  if (!isNaN(val)) {
    slider.value = val;
  }
}
// Kullanıcı kutudan çıktığında değeri 0.1'lik adıma yuvarla
speedValue.onchange = function() {
  let val = parseFloat(this.value).toFixed(1);
  if (isNaN(val)) val = 1.0;
  if (val < 0.1) val = 0.1;
  if (val > 10) val = 10;
  
  this.value = val;
  slider.value = val;
}


// Kaydet butonuna basılınca
saveButton.onclick = function() {
  // Değeri slider yerine sayı kutusundan alalım (ikisi de senkronize ama 
  // bu daha garanti)
  let hiz = parseFloat(speedValue.value).toFixed(1);
  
  // Geçersiz bir değer varsa düzelt
  if (isNaN(hiz) || hiz < 0.1) hiz = 0.1;
  if (hiz > 10) hiz = 10;

  speedValue.value = hiz; // Kutuyu da düzelt
  slider.value = hiz;     // Slider'ı da düzelt
  
  chrome.storage.sync.set({scrollSpeed: hiz}, function() {
    status.textContent = 'Speed saved: ' + hiz;
    setTimeout(() => { status.textContent = ''; }, 2000);
  });
}

// Options sayfası açıldığında kayıtlı değeri çekip slider'a VE KUTUYA yansıt
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(['scrollSpeed'], function(result) {
    let kayitliHiz = 1.0; // Varsayılan
    
    if (result.scrollSpeed) {
      kayitliHiz = parseFloat(result.scrollSpeed);
    }
    
    let hizStr = kayitliHiz.toFixed(1);
    slider.value = hizStr;
    speedValue.value = hizStr; // .textContent yerine .value
  });
});