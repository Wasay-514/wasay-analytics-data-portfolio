import aboutImg from "../assets/about-profile.png";

export default function About() {
  return (
    <section id="about" className="section bg-[#0f0b08]">
      <SectionTitle tag="Get to know me" title="About Me" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <div className="relative rotate-[-3deg]">
          <div className="absolute inset-0 bg-[#c98b55] blur-3xl opacity-20 rounded-3xl"></div>

          {/* <div className="relative h-[520px] rounded-3xl overflow-hidden border border-[#c98b55]/40 bg-[#1a120c] shadow-[0_0_45px_rgba(201,139,85,0.25)]">
            <img
              src={aboutImg}
              alt="Wasay Ghauri"
              className="w-full h-full object-cover object-top"
            />
          </div> */}
    <div className="relative rotate-[-1deg]  translate-x-10">
  <div className="absolute -inset-2 bg-[#c98b55]/5 blur-xl rounded-[35px]"></div>

  <div className="relative w-[380px] h-[470px] rounded-[32px] overflow-hidden border border-[#c98b55]/10 shadow-[0_0_15px_rgba(201,139,85,0.06)]">
    <img
      src={aboutImg}
      alt="Wasay Ghauri"
      className="w-full h-full object-cover object-top"
    />
  </div>
</div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">
            Hello! I am Wasay Ghauri
          </h3>

          <p className="text-[#d7c7b8] text-sm leading-7">
            I am passionate about turning raw data into meaningful insights.
            My work focuses on Power BI dashboards, SQL analysis, Python EDA,
            machine learning basics, and AI-powered analytics applications.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <Info label="Wasay Ghauri" icon="👤" />
            <Info label="wasayghauri514@gmail.com" icon="✉️" />
            <Info label="Karachi, Pakistan" icon="📍" />
            <Info label="LinkedIn / GitHub" icon="🔗" />
          </div>

          <a
            href="#contact"
            className="inline-block mt-7 px-6 py-3 rounded-full bg-[#c98b55] text-black text-xs font-bold hover:scale-105 transition"
          >
            Contact Me →
          </a>
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

function Info({ icon, label }) {
  return (
    <div className="bg-[#1a120c] border border-[#3a281b] rounded-lg p-4 text-xs text-[#d7c7b8] flex items-center gap-3">
      <span>{icon}</span>
      {label}
    </div>
  );
}