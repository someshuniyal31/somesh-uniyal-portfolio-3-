import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export const Navbar = ({ dark, onToggleTheme }) => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const sections = navLinks
            .map((l) => document.getElementById(l.id))
            .filter(Boolean);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" },
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const linkCls = (id) =>
        `transition-colors hover:text-slate-900 dark:hover:text-white ${
            active === id
                ? "text-slate-900 dark:text-white font-medium"
                : "text-slate-500 dark:text-slate-400"
        }`;

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-[#0B0F19]/85">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
                <a
                    href="#home"
                    data-testid="nav-logo"
                    className="flex items-center gap-2.5"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 font-mono-alt text-xs font-medium text-white dark:bg-white dark:text-slate-900">
                        SU
                    </span>
                    <span className="font-display text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
                        {profile.name}
                    </span>
                </a>

                <div className="hidden items-center gap-6 text-sm lg:flex">
                    {navLinks.slice(1).map((l) => (
                        <a
                            key={l.id}
                            href={`#${l.id}`}
                            data-testid={`nav-link-${l.id}`}
                            className={linkCls(l.id)}
                        >
                            {l.label}
                        </a>
                    ))}
                    <button
                        onClick={onToggleTheme}
                        data-testid="theme-toggle-btn"
                        aria-label="Toggle theme"
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                        {dark ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                </div>

                <div className="flex items-center gap-2 lg:hidden">
                    <button
                        onClick={onToggleTheme}
                        data-testid="theme-toggle-btn-mobile"
                        aria-label="Toggle theme"
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300"
                    >
                        {dark ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                    <button
                        onClick={() => setOpen(!open)}
                        data-testid="mobile-menu-btn"
                        aria-label="Toggle menu"
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200"
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>

            {open && (
                <div
                    data-testid="mobile-menu"
                    className="border-t border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-[#0B0F19] lg:hidden"
                >
                    <div className="flex flex-col gap-1">
                        {navLinks.map((l) => (
                            <a
                                key={l.id}
                                href={`#${l.id}`}
                                data-testid={`mobile-nav-link-${l.id}`}
                                onClick={() => setOpen(false)}
                                className={`rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 ${linkCls(l.id)}`}
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};
