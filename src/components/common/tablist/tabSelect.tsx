import { useState } from "react";

interface TabSelectProps {}

let tabs = [{ tab: "home" }, { tab: "dashboard" }, { tab: "about" }];

const TabSelect: React.FC<TabSelectProps> = () => {
  const [select, setSelect] = useState(0);

  return (
    <div className="w-100 m-2">
      <div className={`w-100  d-flex justify-content-evenly border tabs`}>
        {tabs.map((item, index) => {
          return (
            <span
              className={`  w-100 p-2 text-center ${
                select === index
                  ? "border-bottom border-2 border-danger tab"
                  : ""
              }`}
              onClick={() => setSelect(index)}
              key={index}>
              {item.tab}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TabSelect;
