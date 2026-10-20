/** Título com o ponto final em azul, como no modelo de referência. */
export function Dot({ text }: { text: string }) {
  if (!text.endsWith(".")) return <>{text}</>;
  return (
    <>
      {text.slice(0, -1)}
      <span className="text-gold">.</span>
    </>
  );
}
