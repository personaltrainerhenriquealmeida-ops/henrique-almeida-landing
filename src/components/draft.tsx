/** Marca conteúdo provisório. Remover todos os usos antes de lançar (buscar por <Draft />). */
export function Draft() {
  return (
    <span className="ml-3 inline-block rounded-full border border-brand/60 px-2 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wider text-brand">
      Rascunho
    </span>
  );
}
