export default function Resume() {
  return (
    <section id="resume" className="section bg-[#0f0b08]">
      <SectionTitle tag="My Resume" title="Education & Experience" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        <ResumeColumn
          title="Education :-"
          items={[
            {
              title: "BS Computer Science",
              meta: "Sindh Madressatul Islam University — 2020 - 2024",
              desc: "Studied programming, databases, software engineering, data structures, and final-year development concepts.",
            },
            {
              title: "Data Science & Analytics Training",
              meta: "YouExcel — 2026",
              desc: "Learned data analysis, Python, Power BI, dashboards, SQL basics, and analytics workflows.",
            },
          ]}
        />

        <ResumeColumn
          title="Experience :-"
          items={[
            {
              title: "Remote Data Analytics Internship",
              meta: "Task-based Internship",
              desc: "Worked on analytics tasks, dashboards, reporting, and business insights.",
            },
            {
              title: "AI & Data Projects",
              meta: "Portfolio Projects",
              desc: "Built GenCV, DebateIQ, Power BI dashboards, ML projects, and SQL-based analytics projects.",
            },
          ]}
        />
      </div>
    </section>
  );
}

function ResumeColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-3xl font-black mb-6">{title}</h3>

      <div className="space-y-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="relative bg-[#1a120c] border border-[#3a281b] rounded-xl p-6 border-l-4 border-l-[#c98b55]"
          >
            <h4 className="font-bold text-lg">{item.title}</h4>

            <p className="text-[11px] text-[#b8aaa0] uppercase mt-1">
              {item.meta}
            </p>

            <p className="text-sm text-[#d7c7b8] leading-6 mt-4">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ tag, title }) {
  return (
    <div className="text-center mb-14">
      <span className="text-[#c98b55] text-xs bg-[#24170f] px-4 py-1 rounded-full">
        {tag}
      </span>
      <h2 className="text-4xl font-black mt-4">{title}</h2>
      <div className="w-20 h-1 bg-[#c98b55] mx-auto mt-3"></div>
    </div>
  );
}