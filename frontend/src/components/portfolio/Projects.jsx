import { projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const Projects = () => (
    <section
        id="projects"
        data-testid="projects-section"
        className="scroll-mt-16 border-t border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-[#0E1420]"
    >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionHeading
                eyebrow="Projects"
                title="Selected Engineering Work"
                description="Full-stack systems, algorithmic optimization, and machine learning applications — each built end to end."
                testId="projects"
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {projects.map((project, i) => (
                    <Reveal key={project.id} delay={i * 120} className="h-full">
                        <article
                            data-testid={`project-card-${project.id}`}
                            className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-[#111827] dark:hover:border-slate-700"
                        >
                            <div className={`h-1 w-full ${project.accent.bar}`} />
                            <div className="flex flex-1 flex-col p-7">
                                <div className="flex items-center justify-between">
                                    <span className="font-mono-alt text-xs text-slate-400 dark:text-slate-500">
                                        {project.number}
                                    </span>
                                    <span
                                        className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${project.accent.chip}`}
                                    >
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="font-display mt-5 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-xl">
                                    {project.title}
                                </h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    {project.description}
                                </p>
                                <div className="mt-5 rounded-md border border-slate-200 bg-slate-50 px-3.5 py-2.5 dark:border-slate-700 dark:bg-slate-800/60">
                                    <p className="font-mono-alt text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Key Concept
                                    </p>
                                    <p
                                        data-testid={`project-concept-${project.id}`}
                                        className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-200"
                                    >
                                        {project.concept}
                                    </p>
                                </div>
                                <div className="mt-5 flex flex-wrap gap-1.5">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            data-testid={`project-tech-${project.id}-${t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                            className="rounded border border-slate-200 px-2 py-1 font-mono-alt text-[11px] text-slate-600 dark:border-slate-700 dark:text-slate-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
