import { useCallback, useEffect, useMemo, useState } from "react";
import techStackData from "../data/tech-stack.js";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

export default function TechStack({ stackName = "languages" }) {
  const [groupedData, setGroupedData] = useState([]);

  const setGroups = useCallback(() => {
    const median = window.innerWidth < 750 ? 4 : 6;
    const tempData = [];

    techStackData[stackName].forEach((item, index) => {
      if (index % median === 0) {
        tempData.push([item]);
      } else {
        tempData[tempData.length - 1].push(item);
      }
    });

    setGroupedData(tempData);
  }, [stackName]);

  const debouncedSetGroups = useMemo(() => debounce(setGroups, 300), [setGroups]);

  useEffect(() => {
    setGroups();
    window.addEventListener("resize", debouncedSetGroups);

    return () => {
      window.removeEventListener("resize", debouncedSetGroups);
    };
  }, [debouncedSetGroups, setGroups]);

  return (
    <>
      <p className="tech_stack_list_title">
        {stackName.charAt(0).toUpperCase() + stackName.slice(1)}
      </p>
      {groupedData.map((group, groupIndex) => (
        <div className="tech_stack_list" key={`${stackName}-${groupIndex}`}>
          {group.map((item) => (
            <div className="tech_stack_list_item" key={item.name}>
              <div className="tooltip">
                <div className="tooltip_context">
                  <p>{item.name}</p>
                  <div className="status-bar">
                    <div className={`x${item.rate}`}></div>
                  </div>
                </div>
                <img
                  src={`/${item.src}`}
                  loading="lazy"
                  alt=""
                  className={`rounded_img tech_icon ${item.additionalClassName ?? ""}`}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
