import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          İletişim
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Benimle iletişime geç
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Sol: İletişim Bilgileri */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                E-posta
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                ornek@mail.com
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                GitHub
              </h3>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                github.com/kullanici-adi
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                LinkedIn
              </h3>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                linkedin.com/in/kullanici-adi
              </a>
            </div>
          </div>

          {/* Sağ: Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
