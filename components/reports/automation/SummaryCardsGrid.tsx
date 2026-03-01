interface SummaryCard {
  title: string;
  value: string;
}

interface SummaryCardsGridProps {
  cards: SummaryCard[];
}

export const SummaryCardsGrid = ({ cards }: SummaryCardsGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div key={card.title} className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
          <p className="text-[13px] font-extrabold text-neutral-800">{card.title}</p>
          <p className="mt-2 text-2xl font-bold text-neutral-900">{card.value}</p>
        </div>
      ))}
    </div>
  );
};
