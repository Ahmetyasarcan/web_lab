import { useState, useEffect } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';
import UIKitPage from './pages/UIKitPage';

const projects = [
  { id: 1, title: "E-Ticaret Platformu", description: "React ve Tailwind ile geliştirilmiş modern bir alışveriş sitesi.", variant: 'elevated' },
  { id: 2, title: "Hava Durumu Uygulaması", description: "API entegrasyonu ile anlık veri sunan minimalist uygulama.", variant: 'outlined' },
  { id: 3, title: "Kişisel Blog", description: "Yazılarınızı paylaşabileceğiniz, SEO uyumlu ve hızlı bir blog.", variant: 'filled' }
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [currentPage, setCurrentPage] = useState('portfolio'); // 'portfolio' or 'uikit'

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  if (currentPage === 'uikit') {
    return (
      <div className={isDark ? 'dark' : ''}>
        <div className="fixed top-4 left-4 z-[100]">
          <Button onClick={() => setCurrentPage('portfolio')} variant="ghost">← Geri Dön</Button>
        </div>
        <UIKitPage isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300 font-sans">
      {/* 10. Navigasyon */}
      <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            PORTFOLIO
          </div>
          <div className="hidden md:flex items-center gap-10 font-medium">
            <a href="#about" className="hover:text-primary transition-colors">Hakkımda</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projeler</a>
            <a href="#contact" className="hover:text-primary transition-colors">İletişim</a>
            <Button 
              size="sm"
              className="ml-4"
              variant="ghost"
              onClick={() => setCurrentPage('uikit')}
            >
              UI Kit
            </Button>
            <Button 
              size="sm" 
              variant={isDark ? 'secondary' : 'primary'}
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? '☀️ Aydınlık' : '🌙 Karanlık'}
            </Button>
          </div>
          {/* Mobile toggle only */}
          <div className="md:hidden">
            <button onClick={() => setIsDark(!isDark)} className="p-2 bg-surface border border-border rounded-lg">
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 px-6">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Modern Web Deneyimleri <br /> 
              <span className="text-primary italic">Tasarlıyorum</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted mb-12">
              Tailwind CSS v4 ve React kullanarak performanslı, erişilebilir ve şık arayüzler geliştiriyorum.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Projelerimi Gör</Button>
              <Button size="lg" variant="ghost">İletişime Geç</Button>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </section>

        {/* 11. Hakkımda Section */}
        <section id="about" className="py-32 px-6 bg-surface">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-3xl rotate-3"></div>
              <div className="absolute inset-0 aspect-square bg-border rounded-3xl -rotate-3 border border-border flex items-center justify-center text-6xl shadow-2xl overflow-hidden">
                👨‍💻
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">Hakkımda</h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Merhaba! Ben tutkulu bir Frontend Geliştiriciyim. Modern web teknolojilerini kullanarak kullanıcı dostu ve estetik dijital çözümler üretiyorum.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-bg border border-border rounded-2xl">
                  <div className="text-primary text-3xl font-bold mb-2">3+</div>
                  <div className="text-sm font-semibold opacity-70 uppercase tracking-wider">Yıl Deneyim</div>
                </div>
                <div className="p-6 bg-bg border border-border rounded-2xl">
                  <div className="text-accent text-3xl font-bold mb-2">20+</div>
                  <div className="text-sm font-semibold opacity-70 uppercase tracking-wider">Biten Proje</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Projeler Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-4">Seçkin Projeler</h2>
                <p className="text-muted">Son zamanlarda üzerinde çalıştığım dijital ürünler.</p>
              </div>
              <Button variant="ghost">Tümünü Gör</Button>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {projects.map(p => (
                <Card key={p.id} title={p.title} variant={p.variant}>
                  {p.description}
                  <div className="mt-8 pt-6 border-t border-border flex justify-between items-center group cursor-pointer">
                    <span className="font-bold text-accent">Detayları İncele</span>
                    <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 11. İletişim Section */}
        <section id="contact" className="py-32 px-6 bg-surface">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Bir Projeniz mi Var?</h2>
              <p className="text-muted">Fikirlerinizi gerçeğe dönüştürmek için bana ulaşabilirsiniz.</p>
            </div>
            
            {formSent && (
              <Alert variant="success" title="Başarılı!" dismissible className="mb-10">
                Mesajınız başarıyla iletildi. En kısa sürede dönüş yapacağım.
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="p-10 bg-bg rounded-3xl border border-border shadow-soft space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Input id="name" label="Adınız" placeholder="Ahmet Yılmaz" required />
                <Input id="email" type="email" label="E-posta" placeholder="ahmet@adres.com" required />
              </div>
              <Input id="subject" label="Konu" placeholder="İş birliği hakkında" required />
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-text opacity-90">Mesajınız</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-40 resize-none"
                  placeholder="Projenizden bahsedin..."
                  required
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full">Mesaj Gönder</Button>
            </form>
          </div>
        </section>
      </main>

      {/* 11. Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black opacity-40 italic">PORTFOLIO v4</div>
          <div className="text-sm text-muted">© 2025 Ahmet Yılmaz. Tüm hakları saklıdır.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">X</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
