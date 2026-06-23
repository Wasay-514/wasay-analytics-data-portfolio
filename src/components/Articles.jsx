import powerbiImg from "../assets/articles/powerbi.png";
import sqlImg from "../assets/articles/sql.png";
import pythonImg from "../assets/articles/python.png";

const articles = [
  {
    title: "Power BI Dashboard Design",
    image: powerbiImg,
    author: "Wasay Ghauri",
    link: "#",
  },
  {
    title: "SQL for Data Analysis",
    image: sqlImg,
    author: "Wasay Ghauri",
    link: "#",
  },
  {
    title: "Python EDA Workflow",
    image: pythonImg,
    author: "Wasay Ghauri",
    link: "#",
  },
];

export default function Articles() {
  return (
    <section id="blog" className="section bg-[#0f0b08]">
      <SectionTitle tag="My Blog" title="Latest Articles" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {articles.map((article) => (
          <div
            key={article.title}
            className="bg-[#0f0b08] border border-[#3a281b] rounded-lg overflow-hidden hover:border-[#c98b55]/50 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="font-bold mb-4 text-white">
                {article.title}
              </h3>

              <div className="flex justify-between items-center text-xs text-[#b8aaa0]">
                <span>👤 {article.author}</span>

                <a
                  href={article.link}
                  className="text-[#c98b55] hover:text-[#e7b77f]"
                >
                  Read More →
                </a>
              </div>
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

      <h2 className="text-4xl font-black mt-4">
        {title}
      </h2>

      <div className="w-20 h-1 bg-[#c98b55] mx-auto mt-3"></div>
    </div>
  );
}