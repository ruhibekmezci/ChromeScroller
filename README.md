# ChromeScroller
Hassas Otomatik Kaydırma (Precise Auto-Scroll)
Orta tuşla (tekerlek) ipeksi pürüzsüzlükte bir otomatik kaydırmayı açıp kapatan basit bir Chrome eklentisi. Seçenekler panelinde ultra hassas hız kontrolü (örn. 0.5, 2.2) sunar. Uzun makaleleri, kodları veya yerel PDF'leri okumak için mükemmeldir.

A simple Chrome extension that toggles a silky-smooth auto-scroll with a middle-mouse click. Features an ultra-precise speed control (e.g., 0.5, 2.2) in its options panel. Perfect for reading long articles, code, or local PDF files.

🚀 Özellikler
Tek Tıkla Kontrol: Farenin orta tuşuna (tekerlek) basarak kaydırmayı başlatın, tekrar basarak durdurun.

Ultra Hassas Ayar: Hızı 0.1'lik adımlarla (örn: 0.8, 1.5, 3.2) ayarlamanızı sağlayan modern bir ayar paneli.

Çift Yönlü Ayar: Hızı ister slider (kaydırma çubuğu) ile ister manuel sayı girerek ayarlayın.

İpek Gibi Akış: Tarayıcıyı yormayan requestAnimationFrame kullandığı için takılma yapmaz, pürüzsüz akar.

PDF Desteği: Ek bir ayar ile yerel PDF'lerinizde (file:// adresleri) de çalışır.

Hafif ve Hızlı: Sadece gerekli kodları içerir, gereksiz izin istemez.

🛠️ Nasıl Yüklenir? (Lokal Olarak)
Bu eklenti (henüz) Chrome Mağazası'nda değil, o yüzden "paketlenmemiş" olarak yüklemeniz gerekiyor.

Bu repository'deki tüm dosyaları ( manifest.json, scroller.js vb.) bir klasöre indirin.

Chrome adres çubuğuna chrome://extensions yazın ve Enter'a basın.

Sağ üst köşedeki "Geliştirici modu" (Developer mode) anahtarını açın.

Sol üstte çıkan "Paketlenmemiş öğe yükle" (Load unpacked) butonuna tıklayın.

Dosyaları indirdiğiniz klasörü seçin (örn: "OrtaTusScroll").

Eklenti yüklendi! Araç çubuğunuza sabitleyebilirsiniz.

⚙️ Kullanım ve Ayarlar
Kaydırmayı Kullanma
Başlat/Durdur: Herhangi bir web sayfasında farenin orta tuşuna (tekerlek) basın.

Acil Durdurma: Kaydırma aktifken sol veya sağ fare tuşuna basmak da kaydırmayı durdurur.

Yenileme: Eklentiyi yükledikten sonra açık sekmelerinizi F5 ile yenilemeyi unutmayın.

Hız Ayarı
Chrome araç çubuğundaki eklenti simgesine sağ tıklayın.

"Seçenekler" (Options) menüsüne tıklayın.

Açılan ayar panelinde hızı slider ile veya kutucuğa sayı yazarak değiştirin.

"Save Settings" butonuna basın. Ayarınız anında aktif olacaktır (açık sekmeleri yenilemenize gerek yoktur).

📄 ÖNEMLİ: PDF ve Yerel Dosyalarda Çalıştırma
Güvenlik nedeniyle, bu eklentinin indirdiğiniz PDF'lerde (file://... ile başlayan adresler) çalışması için manuel olarak izin vermeniz gerekir:

chrome://extensions sayfasına gidin.

"Hassas Otomatik Kaydırma" eklentisinin kartında "Ayrıntılar" (Details) butonuna tıklayın.

Açılan sayfada "Dosya URL'lerine erişime izin ver" (Allow access to file URLs) seçeneğini aktif hale getirin.

PDF dosyanızı açtığınız sekmeyi yenileyin.
