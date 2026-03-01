interface ChartSectionsGridProps {
  sections: string[];
}

export const ChartSectionsGrid = ({ sections }: ChartSectionsGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
      {sections.map((title) => (
        <div key={title} className="rounded-xl border border-neutral-200 p-4">
          <p className="text-[13px] font-extrabold text-neutral-800">{title}</p>
          <div className="mt-3 flex h-44 items-center justify-center rounded-lg bg-neutral-50 text-[13px] text-neutral-500">
            Không có dữ liệu
          </div>
        </div>
      ))}
    </div>
  );
};
