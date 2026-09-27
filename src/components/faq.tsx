import { faq } from "@/content/faq";
import { Draft } from "./draft";

export function Faq() {
  return (
    <section
      id="duvidas"
      className="mx-auto w-full max-w-3xl scroll-mt-20 px-4 py-20"
    >
      <h2 className="font-display text-4xl uppercase md:text-5xl">
        Dúvidas <span className="text-brand">frequentes</span>
        <Draft />
      </h2>
      <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
        {faq.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
              {item.question}
              <span
                aria-hidden
                className="text-2xl text-brand transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-ash">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
