import profileImg from "../assets/image.png";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 px-6 flex items-center bg-hero"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <p className="text-[#c98b55] text-xs font-bold uppercase mb-4">
            My Digital Space
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
            Wasay Ghauri
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl font-extrabold tracking-[0.25em]">
            DATA ANALYST
          </h2>

          <p className="mt-6 max-w-xl text-sm text-[#d7c7b8] leading-7">
            I build dashboards, analyze business data, and create AI-powered
            analytics projects using Python, SQL, Power BI, React, and FastAPI.
          </p>

          <a
            href="#projects"
            className="inline-flex mt-8 px-6 py-3 rounded-full bg-[#c98b55] text-black text-xs font-bold hover:scale-105 transition shadow-[0_0_35px_rgba(201,139,85,0.35)]"
          >
            View Projects →
          </a>

          {/* for icons */}
        <div className="flex items-center gap-4 mt-8">
  <a
    href="https://www.linkedin.com/in/wasay-ghauri/"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-full border border-[#c98b55]/30 flex items-center justify-center text-[#c98b55] hover:bg-[#c98b55] hover:text-black transition"
  >
    <FaLinkedin size={20} />
  </a>

  <a
    href="https://github.com/Wasay-514"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-full border border-[#c98b55]/30 flex items-center justify-center text-[#c98b55] hover:bg-[#c98b55] hover:text-black transition"
  >
    <FaGithub size={20} />
  </a>

  <a
    href="https://www.kaggle.com/"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-full border border-[#c98b55]/30 flex items-center justify-center text-[#c98b55] hover:bg-[#c98b55] hover:text-black transition"
  >
    <SiKaggle size={18} />
  </a>

  <a
    href="https://facebook.com/"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-full border border-[#c98b55]/30 flex items-center justify-center text-[#c98b55] hover:bg-[#c98b55] hover:text-black transition"
  >
    <FaFacebook size={20} />
  </a>

  <a
    href="mailto:wasayghauri514@gmail.com"
    className="w-12 h-12 rounded-full border border-[#c98b55]/30 flex items-center justify-center text-[#c98b55] hover:bg-[#c98b55] hover:text-black transition"
  >
    <MdEmail size={20} />
  </a>
</div>
{/* icon ends */}
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#c98b55] blur-3xl opacity-25"></div>

            <div className="relative w-[320px] h-[420px] md:w-[420px] md:h-[520px] rounded-t-[220px] rounded-[45%_55%_60%_40%/40%_40%_60%_60%]  border-4 border-[#c98b55]/70 bg-[#1a120c] overflow-hidden shadow-[0_0_60px_rgba(201,139,85,0.35)]">
              <img
                src={profileImg}
                alt="Wasay Ghauri"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[96%] object-contain z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}