// const projects = [
//   "GenCV",
//   "DebateIQ",
//   "HR Analytics Dashboard",
//   "Super Store Analytics",
//   "Customer Segmentation",
//   "Ecommerce Sales Analysis",
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="section bg-[#1a120c]">
//       <SectionTitle tag="My Recent" title="Projects" />

//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
//         {projects.map((project) => (
//           <div
//             key={project}
//             className="bg-[#0f0b08] rounded-lg overflow-hidden border border-[#3a281b] hover:-translate-y-2 transition"
//           >
//             <div className="h-48 bg-gradient-to-br from-[#c98b55] to-[#e7b77f] flex items-center justify-center text-[#1a120c] text-2xl font-black text-center px-4">
              
//               {project}
//             </div>

//             <div className="p-4">
//               <p className="text-sm font-bold text-[#d7c7b8]">
//                 Work in progress
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function SectionTitle({ tag, title }) {
//   return (
//     <div className="text-center mb-14">
//       <span className="text-[#c98b55] text-xs bg-[#24170f] px-4 py-1 rounded-full">
//         {tag}
//       </span>
//       <h2 className="text-4xl font-black mt-4">{title}</h2>
//       <div className="w-20 h-1 bg-[#c98b55] mx-auto mt-3"></div>
//     </div>
//   );
// }


import gencvImg from "../assets/projects/gencv.png";
// import gencvImg from "src/assets/projects/Gencv.png";
import debateiqImg from "../assets/projects/debateiq.png";
import hrImg from "../assets/projects/hr.png";
import superstoreImg from "../assets/projects/superstore.png";
import customerImg from "../assets/projects/customer.png";
import ecommerceImg from "../assets/projects/ecommerce.png";

const projects = [
  {
    title: "GenCV",
    image: gencvImg,
    desc: "AI Resume Analyzer with ATS scoring and resume improvement.",
  },
  {
    title: "DebateIQ",
    image: debateiqImg,
    desc: "AI debate simulator with multiple intelligent agents.",
  },
  {
    title: "HR Analytics Dashboard",
    image: hrImg,
    desc: "Power BI dashboard for HR KPIs and attrition analysis.",
  },
  {
    title: "Super Store Analytics",
    image: superstoreImg,
    desc: "Sales dashboard with KPIs, trends, and forecasting.",
  },
  {
    title: "Customer Segmentation",
    image: customerImg,
    desc: "ML clustering project for customer behavior analysis.",
  },
  {
    title: "Ecommerce Sales Analysis",
    image: ecommerceImg,
    desc: "SQL + Power BI analysis for ecommerce sales insights.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section bg-[#1a120c]">
      <SectionTitle tag="My Recent" title="Projects" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-[#0f0b08] rounded-lg overflow-hidden border border-[#3a281b] hover:border-[#c98b55]/60 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-[#e7b77f]">
                {project.title}
              </h3>

              <p className="text-sm text-[#d7c7b8] mt-2 leading-6">
                {project.desc}
              </p>

              <a
                href="https://github.com/Wasay-514"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-sm font-semibold text-[#c98b55] hover:text-[#e7b77f]"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
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