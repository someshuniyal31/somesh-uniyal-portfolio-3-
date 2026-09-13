import { Copy, ExternalLink, Github, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const Contact = () => {
    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(profile.email);
            toast.success("Email address copied to clipboard");
        } catch {
            toast.error("Could not copy email address");
        }
    };

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="scroll-mt-16 border-t border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-[#0E1420]"
        >
            <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
                <SectionHeading
                    eyebrow="Contact"
                    title="Get in Touch"
                    description="Open to internship and entry-level software development opportunities. Feel free to reach out through any of the channels below."
                    testId="contact"
                />
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <Reveal className="h-full">
                        <div
                            data-testid="contact-card-email"
                            className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-[#111827]"
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                                <Mail size={17} />
                            </span>
                            <p className="mt-5 font-mono-alt text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Email
                            </p>
                            <p
                                data-testid="contact-email-value"
                                className="mt-2 break-all text-sm font-medium text-slate-800 dark:text-slate-200"
                            >
                                {profile.email}
                            </p>
                            <div className="mt-5 flex gap-2">
                                <a
                                    href={`mailto:${profile.email}`}
                                    data-testid="contact-mailto-btn"
                                    className="inline-flex h-9 flex-1 items-center justify-center rounded-md bg-blue-600 px-3 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                                >
                                    Send Email
                                </a>
                                <button
                                    onClick={copyEmail}
                                    data-testid="contact-email-copy-btn"
                                    aria-label="Copy email address"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                                >
                                    <Copy size={14} />
                                </button>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={120} className="h-full">
                        <div
                            data-testid="contact-card-mobile"
                            className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-[#111827]"
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                                <Phone size={17} />
                            </span>
                            <p className="mt-5 font-mono-alt text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Mobile
                            </p>
                            <p
                                data-testid="contact-mobile-value"
                                className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-200"
                            >
                                {profile.mobile}
                            </p>
                            <a
                                href={`tel:${profile.mobile}`}
                                data-testid="contact-call-btn"
                                className="mt-5 inline-flex h-9 items-center justify-center rounded-md border border-slate-300 px-3 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                            >
                                Call
                            </a>
                        </div>
                    </Reveal>
                    <Reveal delay={240} className="h-full">
                        <div
                            data-testid="contact-card-github"
                            className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-[#111827]"
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                                <Github size={17} />
                            </span>
                            <p className="mt-5 font-mono-alt text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                GitHub
                            </p>
                            <p
                                data-testid="contact-github-value"
                                className="mt-2 break-all text-sm font-medium text-slate-800 dark:text-slate-200"
                            >
                                github.com/someshuniyal31
                            </p>
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="contact-github-btn"
                                className="mt-5 inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-slate-300 px-3 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                            >
                                View Profile <ExternalLink size={13} />
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
