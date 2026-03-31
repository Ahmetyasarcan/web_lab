const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React"],
  },
  {
    title: "Araçlar",
    skills: ["Vite", "Git", "GitHub", "ESLint", "Tailwind CSS"],
  },
  {
    title: "Öğreniyorum",
    skills: ["Next.js", "Node.js", "REST API", "Testing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Yetenekler
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Kullandığım teknolojiler
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2 list-none p-0 m-0">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"
                  >
                    <span className="text-blue-500">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
