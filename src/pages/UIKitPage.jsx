import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKitPage({ isDark, onToggleDark }) {
  return (
    <div className="min-h-screen bg-bg p-8 md:p-16 space-y-16 transition-colors duration-300">
      <header className="flex justify-between items-center border-b border-border pb-8">
        <div>
          <h1 className="text-5xl font-black mb-2">UI Kit</h1>
          <p className="text-muted">Bileşen kütüphanesi varyantları ve kullanım örnekleri.</p>
        </div>
        <Button onClick={onToggleDark}>
          {isDark ? '☀️ Aydınlık' : '🌙 Karanlık'}
        </Button>
      </header>

      {/* BUTTONS */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Buttons</h2>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost Border</Button>
          </div>
          <div className="flex flex-wrap items-end gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium (Default)</Button>
            <Button size="lg">Large Button</Button>
          </div>
          <div className="flex gap-4">
            <Button disabled>Disabled Button</Button>
          </div>
        </div>
      </section>

      {/* INPUTS */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Inputs</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <Input id="ui-1" label="Normal Input" placeholder="Bir şeyler yazın..." />
          <Input id="ui-2" label="Hatalı Input" error="Bu alanın doldurulması zorunludur." defaultValue="Hatalı değer" />
          <Input id="ui-3" label="Yardım Metni" helpText="Şifreniz en az 8 karakter olmalıdır." type="password" />
          <Input id="ui-4" label="Devre Dışı" disabled value="Değiştirilemez metin" />
        </div>
      </section>

      {/* CARDS */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Cards</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <Card title="Elevated (Default)" variant="elevated">
            Gölge efekti ile öne çıkan, en yaygın kullanılan kart yapısı.
          </Card>
          <Card title="Outlined" variant="outlined">
            Sadece ince bir kenarlık içeren, daha sade ve temiz görünümlü kart.
          </Card>
          <Card title="Filled" variant="filled">
            Arka plan rengi ile ayrıştırılmış, düşük kontrastlı kart yapısı.
          </Card>
        </div>
      </section>

      {/* ALERTS */}
      <section className="space-y-8 max-w-4xl">
        <h2 className="text-3xl font-bold">Alerts</h2>
        <div className="space-y-4">
          <Alert variant="info" title="Bilgi">Sistem güncellenmiştir, lütfen kontrol ediniz.</Alert>
          <Alert variant="success" title="Başarılı">İşleminiz başarıyla gerçekleştirildi.</Alert>
          <Alert variant="warning" title="Uyarı">Kota limitinize yaklaşmak üzeresiniz.</Alert>
          <Alert variant="error" title="Hata" dismissible onDismiss={() => alert('Kapatıldı')}>
            Sunucuya bağlanırken bir sorun oluştu.
          </Alert>
        </div>
      </section>
    </div>
  );
}
