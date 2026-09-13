import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const About = () => (
    <section
        id="about"
        data-testid="about-section"
        className="scroll-mt-16 border-t border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-[#0E1420]"
    >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionHeading eyebrow="About" title="Profile" testId="about" />
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
                <div className="space-y-5">
                    {profile.aboutText.map((para, i) => (
                        <Reveal key={i} delay={i * 100}>
                            <p
                                data-testid={`about-paragraph-${i}`}
                                className="text-base leading-relaxed text-slate-600 dark:text-slate-400"
                            >
                                {para}
                            </p>
                        </Reveal>
                    ))}
                </div>
                <Reveal delay={200}>
                    <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#111827]">
                        <p className="font-mono-alt text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                            At a Glance
                        </p>
                        <dl className="mt-5 space-y-4">
                            {[
                                ["Degree", "B.Tech CSE (GPA 8.2)"],
                                ["University", "Graphic Era Hill University"],
                                ["Core", "DSA · OOP · DBMS · OS · Networking"],
                                ["Stack", "React.js · Node.js · Python"],
                            ].map(([k, v]) => (
                                <div key={k} className="flex flex-col gap-1">
                                    <dt className="font-mono-alt text-xs text-slate-500 dark:text-slate-500">
                                        {k}
                                    </dt>
                                    <dd className="text-sm font-medium text-slate-800 dark:text-slate-200">
                                        {v}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
);
