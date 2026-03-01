interface ChannelTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const ChannelTabs = ({ tabs, activeTab, onTabChange }: ChannelTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className={`rounded-lg border px-3 py-2 text-[13px] font-semibold transition ${
              isActive
                ? "border-blue-600 bg-blue-50 text-blue-700"
                : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
