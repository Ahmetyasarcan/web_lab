export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>
          © {year} Portfolio — React + TypeScript + Vite
        </p>
        <p className="mt-1">
          Web Tasarımı ve Programlama · LAB-6
        </p>
      </div>
    </footer>
  );
}
