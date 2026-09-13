import { BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const Certifications = () => (
    <section
        id="certifications"
        data-testid="certifications-section"
        className="scroll-mt-16 border-t border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-[#0E1420]"
    >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionHeading
                eyebrow="Certifications"
                title="Professional Certifications"
                testId="certifications"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
                {certifications.map((cert, i) => (
                    <Reveal key={cert.id} delay={i * 120} className="h-full">
                        <div
                            data-testid={`certification-card-${cert.id}`}
                            className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-[#111827] dark:hover:border-slate-700"
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                                <BadgeCheck size={17} />
                            </span>
                            <h3 className="font-display mt-5 flex-1 text-base font-semibold leading-snug text-slate-900 dark:text-slate-100">
                                {cert.name}
                            </h3>
                            <p
                                data-testid={`certification-issuer-${cert.id}`}
                                className="mt-4 font-mono-alt text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400"
                            >
                                {cert.issuer}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
