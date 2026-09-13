import { navLinks, profile } from "@/data/portfolio";

export const Footer = () => (
    <footer
        data-testid="footer"
        className="border-t border-slate-200 dark:border-slate-800"
    >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
            <div>
                <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                    {profile.name}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Computer Science Engineering Student | Software Development
                </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
                {navLinks.slice(1, 5).map((l) => (
                    <a
                        key={l.id}
                        href={`#${l.id}`}
                        data-testid={`footer-link-${l.id}`}
                        className="transition-colors hover:text-slate-900 dark:hover:text-white"
                    >
                        {l.label}
                    </a>
                ))}
            </nav>
            <p className="text-xs text-slate-400 dark:text-slate-500">
                © 2026 {profile.name}
            </p>
        </div>
    </footer>
);
