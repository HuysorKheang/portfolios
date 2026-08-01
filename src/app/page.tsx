import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-900 bg-slate-950 mt-auto">
        <p>© {new Date().getFullYear()} Kheang Huysor. All rights reserved.</p>
      </footer>
    </main>
  );
}
