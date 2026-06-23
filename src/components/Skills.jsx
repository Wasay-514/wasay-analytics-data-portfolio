import {
  Database,
  BarChart3,
  FileSpreadsheet,
  Brain,
  Code2,
  Server,
  PieChart,
  Bot,
  Cloud,
  Cpu,
  Layers,
} from "lucide-react";

const skills = [
  {
    category: "Data Analytics",
    items: [
      { name: "Power BI", icon: BarChart3 },
      { name: "SQL", icon: Database },
      { name: "Excel", icon: FileSpreadsheet },
      { name: "Analytics", icon: PieChart },
    ],
  },
  {
    category: "Python Ecosystem",
    items: [
      { name: "Python", icon: Code2 },
      { name: "Pandas", icon: Layers },
      { name: "NumPy", icon: Cpu },
      { name: "Visualization", icon: BarChart3 },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Machine Learning", icon: Brain },
      { name: "LLMs", icon: Bot },
      { name: "AI Agents", icon: Bot },
      { name: "Data Science", icon: Brain },
    ],
  },
  {
    category: "Development Tools",
    items: [
      { name: "FastAPI", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "GitHub", icon: Code2 },
      { name: "Cloud", icon: Cloud },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-[#1a120c]">
      <SectionTitle tag="My Expertise" title="Technical Skills" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-[#0f0b08] border border-[#3a281b] rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-[#c98b55] mb-6">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 gap-5">
                {group.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group bg-[#1a120c] border border-[#3a281b] rounded-2xl p-5 text-center hover:border-[#c98b55] hover:-translate-y-2 transition-all duration-300"
                    >
                      <Icon
                        size={40}
                        className="mx-auto mb-3 text-[#c98b55] group-hover:scale-110 transition"
                      />

                      <p className="text-sm font-medium text-[#e7d6c5]">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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