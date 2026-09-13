import { education } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const Education = () => (
    <section
        id="education"
        data-testid="education-section"
        className="scroll-mt-16 border-t border-slate-200 dark:border-slate-800"
    >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionHeading
                eyebrow="Education"
                title="Academic Background"
                testId="education"
            />
            <div className="mt-12 max-w-3xl">
                {education.map((entry, i) => (
                    <Reveal key={entry.id} delay={i * 120}>
                        <div
                            data-testid={`education-entry-${entry.id}`}
                            className="relative border-l-2 border-slate-200 pb-12 pl-8 last:pb-0 dark:border-slate-700"
                        >
                            <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-blue-600 bg-white dark:border-blue-400 dark:bg-[#0B0F19]" />
                            <p className="font-mono-alt text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                {entry.period}
                            </p>
                            <h3 className="font-display mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                                {entry.degree}
                            </h3>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                {entry.institution}
                            </p>
                            <span
                                data-testid={`education-score-${entry.id}`}
                                className="mt-3 inline-block rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
                            >
                                {entry.score}
                            </span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
