// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Resume from "./components/Resume";
// import Projects from "./components/Projects";
// import Articles from "./components/Articles";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import "./index.css";

// export default function App() {
//   return (
//     <main className="bg-[#0f0b08] text-white min-h-screen overflow-hidden">
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Resume />
//       <Projects />
//       <Articles />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }



import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <main className="bg-[#0f0b08] text-white min-h-screen overflow-hidden transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </main>
  );
}