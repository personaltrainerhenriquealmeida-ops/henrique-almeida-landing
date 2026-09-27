import { Draft } from "./draft";

const steps = [
  {
    title: "Escolha o plano",
    text: "Veja as opções e escolha a que combina com o seu momento.",
  },
  {
    title: "Avaliação inicial",
    text: "Entendemos o seu objetivo, o seu histórico e a sua rotina.",
  },
  {
    title: "Treino personalizado",
    text: "Você recebe um treino montado para você, do jeito que cabe no seu dia.",
  },
  {
    title: "Acompanhamento",
    text: "Ajustes ao longo do caminho para manter a evolução constante.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-20"
    >
      <h2 className="font-display text-4xl uppercase md:text-5xl">
        Como <span className="text-brand">funciona</span>
        <Draft />
      </h2>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-3xl border border-white/10 bg-graphite/40 p-6"
          >
            <span className="font-display text-5xl text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-ash">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
