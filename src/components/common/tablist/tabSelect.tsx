// import "./tabComponentNew.scss";
import { TabSelectProps } from "./tabSelect.types";

function TabSelect({
  tabs,
  selectedTab,
  onTabClick,
  checkField = "id",
}: TabSelectProps) {
  return (
    <div className="w-100">
      <ul className="col-12 d-flex  border bg-white p-2 rounded-1  ">
        {tabs.map((tab, index) => (
          <li
            className={`w-50 p-2 text-center list-unstyled cursor-pointer ${
              selectedTab === tab[checkField]
                ? " rounded-1 select-tab bg-info "
                : ""
            }`}
            onClick={() => onTabClick(tab[checkField])}
            key={`tab-${index}-${tab[checkField]}`}>
            <span className=""> {tab.tab}</span>
            {tab.count && <span className="mx-1">({tab.count})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TabSelect;
