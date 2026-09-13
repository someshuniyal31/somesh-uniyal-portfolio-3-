import { Rocket, Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = { "isro-yuvika": Rocket, hackathons: Trophy };

export const Achievements = () => (
    <section
        id="achievements"
        data-testid="achievements-section"
        className="scroll-mt-16 border-t border-slate-200 dark:border-slate-800"
    >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionHeading
                eyebrow="Scholastic Achievements"
                title="Recognition & Experience"
                testId="achievements"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
                {achievements.map((item, i) => {
                    const Icon = icons[item.id];
                    const featured = item.id === "isro-yuvika";
                    return (
                        <Reveal key={item.id} delay={i * 120} className="h-full">
                            <div
                                data-testid={`achievement-card-${item.id}`}
                                className={`h-full rounded-xl border p-8 transition-colors ${
                                    featured
                                        ? "border-blue-200 bg-blue-50/50 hover:border-blue-300 dark:border-blue-900/60 dark:bg-blue-950/20 dark:hover:border-blue-800"
                                        : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-[#111827] dark:hover:border-slate-700"
                                }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <span
                                        className={`flex h-10 w-10 items-center justify-center rounded-md ${
                                            featured
                                                ? "bg-blue-600 text-white"
                                                : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                                        }`}
                                    >
                                        <Icon size={18} />
                                    </span>
                                    <span
                                        data-testid={`achievement-tag-${item.id}`}
                                        className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
                                            featured
                                                ? "border-blue-200 bg-white text-blue-700 dark:border-blue-800 dark:bg-[#0B0F19] dark:text-blue-400"
                                                : "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400"
                                        }`}
                                    >
                                        {item.tag}
                                    </span>
                                </div>
                                <h3 className="font-display mt-6 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-xl">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    {item.description}
                                </p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    </section>
);
