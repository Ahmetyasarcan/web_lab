import { Project } from "../../types/project";

interface CardProps {
  project: Project;
}

const categoryColors: Record<string, string> = {
  frontend: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
  fullstack: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200",
  backend: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
};

export default function Card({ project }: CardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      {/* Görsel */}
      <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
        <span className="text-5xl opacity-50">💻</span>
      </div>

      {/* İçerik */}
      <div className="p-5 flex flex-col flex-1">
        {/* Başlık + Öne çıkan */}
        <div className="flex items-start justify-between mb-2 gap-2">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
            {project.title}
          </h3>
          {project.featured && (
            <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
              ⭐ Öne Çıkan
            </span>
          )}
        </div>

        {/* Açıklama */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Kategori + Yıl */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[project.category] ?? ""}`}>
            {project.category}
          </span>
          <span className="text-gray-400 text-xs">{project.year}</span>
        </div>

        {/* Teknolojiler */}
        <ul className="flex flex-wrap gap-1 mb-4 list-none p-0 m-0">
          {project.tech.map((t) => (
            <li
              key={t}
              className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Linkler */}
        <div className="flex gap-3 mt-auto">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              🔗 Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:underline font-medium"
            >
              📦 Kaynak
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
