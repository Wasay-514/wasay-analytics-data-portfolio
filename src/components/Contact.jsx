export default function Contact() {
  return (
    <section id="contact" className="section bg-[#1a120c]">
      <SectionTitle tag="Get In Touch" title="Contact Me" />

      <div className="max-w-4xl mx-auto px-6">
        <form className="bg-[#0f0b08] border border-[#3a281b] rounded-lg p-8 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="Your Name" className="input" />
            <input placeholder="Your Email" className="input" />
          </div>

          <input placeholder="Subject" className="input" />

          <textarea
            placeholder="Your Message"
            rows="6"
            className="input"
          ></textarea>

          <button className="w-full bg-[#c98b55] text-black font-bold py-3 rounded-full text-sm hover:scale-[1.02] transition">
            Send Message →
          </button>
        </form>
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