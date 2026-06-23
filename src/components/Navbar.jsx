export default function Navbar() {
  return (
    <nav className="fixed top-3 left-0 w-full z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-[#120c08]/95 border border-[#3a281b] rounded-full px-5 py-3 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1a120c] border border-[#c98b55] flex items-center justify-center font-bold text-[#c98b55]">
              W
            </div>

            <div>
              <h1 className="text-sm font-bold leading-none">
                WasayXfolio<span className="text-[#c98b55]">•</span>
              </h1>
              <p className="text-[10px] text-[#b8aaa0]">Data Portfolio</p>
            </div>
          </div>

          <div className="hidden md:flex gap-6 text-[11px] font-bold uppercase">
            {["Home", "About", "Skills", "Resume", "Projects", "Blog", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#c98b55] transition"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="w-9 h-9 rounded-full bg-[#1a120c] border border-[#c98b55]/40 flex items-center justify-center">
            🌙
          </div>
        </div>
      </div>
    </nav>
  );
}