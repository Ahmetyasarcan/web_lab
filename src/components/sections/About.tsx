export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Hakkımda
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Kim olduğumu öğren
        </p>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Web geliştirme tutkusuyla çalışan bir frontend developer'ım.
              React, TypeScript ve modern CSS ile kullanıcı dostu, erişilebilir
              ve performanslı arayüzler oluşturmayı seviyorum.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Web Tasarımı ve Programlama dersinde öğrendiklerimi gerçek
              projelere dönüştürerek hem teknik hem de yaratıcı becerilerimi
              geliştiriyorum.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Üniversite</span>
              <span className="font-medium text-gray-900 dark:text-white">Selçuk Üniversitesi</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Bölüm</span>
              <span className="font-medium text-gray-900 dark:text-white">Bilgisayar Mühendisliği</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Odak</span>
              <span className="font-medium text-gray-900 dark:text-white">Frontend Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
