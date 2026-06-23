const timeline = [
  {
    year: "2026",
    title: "Data Analytics Focus",
    desc: "Building Power BI dashboards, SQL projects, Python analytics projects, and portfolio-ready case studies.",
  },
  {
    year: "2025",
    title: "AI & Data Science Projects",
    desc: "Worked on AI-based applications like GenCV, DebateIQ, resume analysis, and machine learning projects.",
  },
  {
    year: "2024",
    title: "BS Computer Science",
    desc: "Graduated from Sindh Madressatul Islam University.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0B1020]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Experience & Journey</h2>

        <div className="space-y-6">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="p-6 rounded-3xl bg-white/5 border border-white/10"
            >
              <p className="text-blue-400 font-semibold">{item.year}</p>
              <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}