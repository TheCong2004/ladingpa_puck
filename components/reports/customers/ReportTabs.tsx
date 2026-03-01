interface ReportTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const ReportTabs = ({ tabs, activeTab, onTabChange }: ReportTabsProps) => {
  return (
    <div className="border-b border-neutral-200">
      <div className="flex flex-wrap gap-6">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              className={`border-b-2 pb-3 text-[13px] font-semibold transition ${
                isActive
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-neutral-700 hover:text-neutral-900"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};
