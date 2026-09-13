import { Reveal } from "./Reveal";

export const SectionHeading = ({ eyebrow, title, description, testId }) => (
    <Reveal className="max-w-2xl">
        <p
            data-testid={`${testId}-eyebrow`}
            className="font-mono-alt text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400"
        >
            {eyebrow}
        </p>
        <h2
            data-testid={`${testId}-title`}
            className="font-display mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl lg:text-4xl"
        >
            {title}
        </h2>
        {description && (
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                {description}
            </p>
        )}
    </Reveal>
);
