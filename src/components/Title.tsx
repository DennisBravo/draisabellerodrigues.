/** Título com o ponto final no dourado da marca. */
export function Dot({ text }: { text: string }) {
  if (!text.endsWith(".")) return <>{text}</>;
  return (
    <>
      {text.slice(0, -1)}
      <span className="text-gold-bright">.</span>
    </>
  );
}
