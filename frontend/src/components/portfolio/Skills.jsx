import { Code2, Layers, BookOpen } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = [Code2, Layers, BookOpen];

export const Skills = () => (
    <section
        id="skills"
        data-testid="skills-section"
        className="scroll-mt-16 border-t border-slate-200 dark:border-slate-800"
    >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionHeading
                eyebrow="Technical Skills"
                title="Technologies & Fundamentals"
                description="Languages, frameworks, and computer science coursework that form the foundation of my engineering work."
                testId="skills"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
                {skillGroups.map((group, gi) => {
                    const Icon = icons[gi];
                    return (
                        <Reveal key={group.name} delay={gi * 120}>
                            <div
                                data-testid={`skill-group-${group.testId}`}
                                className="h-full rounded-xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-[#111827]"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                                        <Icon size={17} />
                                    </span>
                                    <h3 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                                        {group.name}
                                    </h3>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {group.items.map((skill) => (
                                        <span
                                            key={skill}
                                            data-testid={`skill-badge-${skill.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-blue-800 dark:hover:bg-blue-950/40 dark:hover:text-blue-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    </section>
);
