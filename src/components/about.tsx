import { Draft } from "./draft";

export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto grid w-full max-w-6xl scroll-mt-20 gap-10 px-4 py-20 md:grid-cols-[1fr_1.2fr]"
    >
      <h2 className="font-display text-4xl uppercase md:text-5xl">
        Sobre o <span className="text-brand">Henrique</span>
        <Draft />
      </h2>
      <div className="space-y-4 text-lg text-ash">
        <p>
          Sou personal trainer e o meu trabalho é montar um treino que caiba na
          sua rotina, acompanhar de perto e ajustar o caminho até você chegar
          onde quer.
        </p>
        <p>
          Cada aluno recebe um plano pensado para o seu objetivo, o seu nível e
          o seu tempo disponível. Sem fórmula pronta.
        </p>
      </div>
    </section>
  );
}
