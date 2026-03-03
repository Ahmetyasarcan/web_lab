import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>
      <header>
        <h1>Ahmet Yasar Can - Portfolyo</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img src="profil.jpg" alt="Ahmet Yasar Can'in vesikalik fotografi" />
            <figcaption>Ahmet Yasar Can</figcaption>
          </figure>
          <p>
            Merhaba! Ben Ahmet Yasar Can, modern web teknolojilerine ilgi duyan
            bir yazilim gelistiriciyim. Kullanici tarafi (frontend) arayuzler ve
            arka plan sistemleri (backend) uzerinde calismayi seviyorum.
          </p>
          <h3>Kullandigim Teknolojiler</h3>
          <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Git</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src="proje1.jpg" alt="Proje 1: Otopark Yonetim Sistemi Ana Ekran Goruntusu" />
              <h3>Otopark Yonetim Sistemi</h3>
              <p>
                Otopark icerisindeki arac giris-cikislarini takip eden, bos ve dolu
                yerleri yoneten bir uygulamadir.
              </p>
              <ul className="skill-tags">
                <li>C#</li>
                <li>.NET</li>
                <li>SQL Server</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="proje2.jpg" alt="Proje 2: E-ticaret Sitesi Urunler Sayfasi Ekran Goruntusu" />
              <h3>E-ticaret Sitesi</h3>
              <p>
                Kullanicilarin urun arayabildigi, sepete ekledigi ve siparis verdigi,
                yonetici panelli modern e-ticaret platformu.
              </p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>
            
            {/* 3. Proje Eklentisi (Grid yapisini gormek adina Lab belgesindeki 3. projeyi ekledim) */}
            <article className="project-card">
              <img src="proje3.jpg" alt="Hava durumu uygulamasi arayuzu" />
              <h3>Hava Durumu</h3>
              <p>
                OpenWeather API ile anlik
                hava durumu bilgisi.
              </p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name"
                  required minLength={2}
                  aria-describedby="name-error" />
                <small id="name-error" className="error-msg"
                  role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input type="email" id="email" name="email"
                  required
                  aria-describedby="email-error" />
                <small id="email-error" className="error-msg"
                  role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required
                  aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg"
                  role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea id="message" name="message"
                  rows={5} required minLength={10}
                  aria-describedby="message-error">
                </textarea>
                <small id="message-error" className="error-msg"
                  role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Ahmet Yasar Can. Tum haklari saklidir.</p>
        <p>
          <a href="https://github.com/Ahmetyasarcan" target="_blank" rel="noopener noreferrer">GitHub Profilim</a> | 
          <a href="https://linkedin.com/in/ahmetyasarcan" target="_blank" rel="noopener noreferrer">LinkedIn Profilim</a>
        </p>
      </footer>
    </>
  )
}

export default App
