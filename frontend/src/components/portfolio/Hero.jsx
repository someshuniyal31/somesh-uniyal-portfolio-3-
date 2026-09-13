import { ArrowRight, Github, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export const Hero = () => (
    <section
        id="home"
        data-testid="hero-section"
        className="relative overflow-hidden pt-16"
    >
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] dark:opacity-30"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:py-32">
            <div>
                <Reveal>
                    <p className="font-mono-alt text-xs uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                        B.Tech CSE — Graphic Era Hill University
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <h1
                        data-testid="hero-title"
                        className="font-display mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
                    >
                        {profile.name}
                    </h1>
                </Reveal>
                <Reveal delay={200}>
                    <p
                        data-testid="hero-subtitle"
                        className="mt-5 text-base font-medium text-slate-700 dark:text-slate-200 md:text-lg"
                    >
                        {profile.subtitle}
                    </p>
                </Reveal>
                <Reveal delay={300}>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
                        {profile.heroText}
                    </p>
                </Reveal>
                <Reveal delay={400}>
                    <div className="mt-9 flex flex-wrap items-center gap-3">
                        <a
                            href="#projects"
                            data-testid="hero-cta-projects"
                            className="inline-flex h-11 items-center gap-2 rounded-md bg-blue-600 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                        >
                            View Projects <ArrowRight size={16} />
                        </a>
                        <a
                            href="#contact"
                            data-testid="hero-cta-contact"
                            className="inline-flex h-11 items-center gap-2 rounded-md border border-slate-300 px-6 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                        >
                            <Mail size={16} /> Contact Me
                        </a>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-cta-github"
                            aria-label="GitHub profile"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                        >
                            <Github size={18} />
                        </a>
                    </div>
                </Reveal>
            </div>

            <Reveal delay={250} className="hidden lg:block">
                <div
                    data-testid="hero-focus-card"
                    className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#111827]"
                >
                    <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-800">
                        <p className="font-mono-alt text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                            Focus Areas
                        </p>
                    </div>
                    <ul className="divide-y divide-slate-100 dark:divide-slate-800/70">
                        {profile.focusAreas.map((area, i) => (
                            <li
                                key={area}
                                data-testid={`focus-area-${i}`}
                                className="flex items-center gap-4 px-6 py-4"
                            >
                                <span className="font-mono-alt text-xs text-blue-600 dark:text-blue-400">
                                    0{i + 1}
                                </span>
                                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                                    {area}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="border-t border-slate-200 px-6 py-4 dark:border-slate-800">
                        <p className="font-mono-alt text-xs text-slate-500 dark:text-slate-400">
                            Aug 2023 — Present · GPA 8.2
                        </p>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);
