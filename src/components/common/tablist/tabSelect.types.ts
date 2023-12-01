export type TabProps = {
  [key: string]: any;
  tab: string;
  count?: number;
};

export type TabSelectProps = {
  tabs: TabProps[];
  selectedTab: number;
  onTabClick: (tabId: string) => void;
  checkField?: string;
};
