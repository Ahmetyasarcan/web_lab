# Proje CSS Kararları

Web Lab 3 ödevi için geliştirdiğim bu portfolyo projesinde, modern CSS özelliklerini, duyarlı (responsive) tasarımı ve CSS Design Tokens konseptini uyguladım. Projenin mimarisini belirlerken aldığım ana kararlar şunlardır:

## 1. Neden bu breakpoint'leri seçtim?
Mobile-first (mobil öncelikli) tasarım modelini benimsediğim için tasarımın temelini mobil cihazlar üzerinden şekillendirdim. Eklediğim breakpoint'lerin gerekçeleri şunlardır:
- **Default (0 - 639px):** Modern akıllı telefonların büyük çoğunluğuna hitap eden bir aralık. Bileşenleri yatay eksende sıkıştırmadan, dikey olarak alt alta (stack) sergilemek, mobil formlarda ve yazılarda okunaklılık sağlamak adına bu varsayılan yapıyı kurdum.
- **640px ve üzeri (Tabletler):** Ekran genişlediği için "Hakkımda" kısmındaki içerik yan yana dizilebilir hâle geldi, tek sütun sınırından çıkıldı.
- **1024px ve üzeri (Masaüstü ve yatay tabletler):** Proje gridleri (kart yapıları) masaüstü ekranlarında ferahlık sağlasın diye maksimum 1200px merkezlendi. Yan yana 3 projenin sergilenebilmesi için genişlikler repeat(3, 1fr) ayarına çekildi.

## 2. Flexbox vs. Grid kararları nerede, neden kullanıldı?
- **Navigasyon ve Header (Flexbox):** Tek boyutlu eksende hizalama gereksinimi (örneğin butonların ve menülerin yan yana durup, sığmadıklarında alt satıra geçmesi `flex-wrap: wrap`) sebebiyle yatay düzenleme için en iyi çözüm olan Flexbox seçildi.
- **Beceri Etiketleri (Toolbar - Flexbox):** Gelen içerik boyutları sabit olmadığından, etiketlerin dinamik yerleşimi için flex kullanarak boşluk (`gap`) ve satır taşırma özellikleri avantaj sağladı.
- **Projeler Listesi (CSS Grid):** Proje kartlarını iki boyutlu bir çerçevede (satırlar ve sütunlar) daha dengeli yerleştirebilmek için kullanıldı. Özellikle `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` komutu sayesinde ekstra satırlar yazmadan (Mobile için 1, Tablet için 2, Desktop için 3) kartlar kendiliğinden sığabileceği en uygun alanı hesaplayıp responsive davranabildi.

## 3. Design Tokens bana ne tür avantajlar sağladı?
- **Tutarlılık:** Renk (color-primary), boşluk (space-md, space-lg), yuvarlama (radius-md) gibi tüm tasarımsal yapıtaşları tek bir `tokens.css` dosyasında merkezi olarak tanımlandığı için, tüm elemanlar tutarlı (örneğin her padding aynı oranlarda ayarlı) bir hale geldi.
- **Bakım Kolaylığı:** Mavi tonunu farklı bir tona çekmek veya fontu küçültmek gibi kararlar gerektiğinde onlarca CSS kelimesini aramak yerine sadece `:root` içindeki 2-3 değişkeni düzenleyip tüm projenin otomatik güncellenmesi işleri inanılmaz hızlandırdı.
- **Esneklik (Fluid Typography):** `clamp()` fonksiyonunu kullanarak font tanımladığım için (`--text-2xl`), font boyutları ekran büyüklüğüne göre kendiliğinden ölçeklenebilecek dinamik tasarımlar elde ettim.

## 4. Mobile-first yaklaşımı projedeki CSS yapısını nasıl etkiledi?
Stil tanımlamaya büyük ekranlardan küçük ekranlara daraltarak (`max-width`) gitmek yerine, temel varsayılan CSS kodlarımı mobil görünüme göre yazdım. Giderek genişleyen ekranlar için `min-width: 640px` ve `min-width: 1024px` breakpoint'lerini medya sorgularıyla ekledim. 
Bu yaklaşım; 
- CSS satır sayısını ve gereksiz "style reset" işlemlerini azalttı. 
- Büyük ekranlardaki karmaşık (grid/flex yan sıralamalar) kurallarının küçük ekranlarda işlenmemesini sağlayarak tarayıcı performansında tasarruf sağladı.
