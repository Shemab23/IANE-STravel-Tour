import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { homePitchMetadata } from "@/data/Home";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export const HomePitch = () => {
  const meta = homePitchMetadata;

  return (
    <section id={meta.id} className="relative w-full  px-6 py-20 md:py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="w-full max-w-5xl mx-auto flex flex-col gap-10"
      >
        <div className="max-w-2xl flex flex-col gap-3">
          <motion.span
            variants={fadeUp}
            className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-primary uppercase"
          >
            {meta.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]"
          >
            {meta.headline}
          </motion.h2>
        </div>

        {/* Body + facts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="md:col-span-7 flex flex-col gap-4">
            {meta.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                {p}
              </motion.p>
            ))}

            <motion.a
              variants={fadeUp}
              href={meta.softCta.href}
              target="_blank"
              rel="noopener,noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors mt-2 self-start"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              <span>{meta.softCta.text}</span>
              <span className="text-primary underline underline-offset-4">
                {meta.softCta.label}
              </span>
            </motion.a>
          </div>

          <motion.dl
            variants={fadeUp}
            className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5"
          >
            {meta.facts.map((fact) => (
              <div key={fact.id} className="flex flex-col gap-1">
                <dt className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="text-sm font-medium text-foreground leading-snug">
                  {fact.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>
    </section>
  );
};
