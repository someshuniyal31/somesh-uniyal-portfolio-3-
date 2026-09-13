import { useEffect, useState } from "react";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

function App() {
    const [dark, setDark] = useState(
        () => localStorage.getItem("theme") === "dark",
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <div className="App bg-white text-slate-900 antialiased dark:bg-[#0B0F19] dark:text-slate-100">
            <Navbar dark={dark} onToggleTheme={() => setDark((d) => !d)} />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Certifications />
                <Achievements />
                <Contact />
            </main>
            <Footer />
            <Toaster
                position="bottom-right"
                theme={dark ? "dark" : "light"}
                toastOptions={{
                    style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13px",
                    },
                }}
            />
        </div>
    );
}

export default App;
