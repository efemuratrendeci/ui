import { useCallback, useEffect, useMemo, useState } from "react";
import techStackData from "../data/tech-stack.js";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

export default function TechStack({ stackName = "languages", showTitle = true }) {
  const [groupedData, setGroupedData] = useState([]);

  const setGroups = useCallback(() => {
    setGroupedData([techStackData[stackName] ?? []]);
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
      {showTitle && (
        <p className="tech_stack_list_title">
          {stackName.charAt(0).toUpperCase() + stackName.slice(1)}
        </p>
      )}
      {groupedData.map((group, groupIndex) => (
        <div className="tech_stack_card" key={`${stackName}-${groupIndex}`}>
          <div className="tech_stack_list">
            {group.map((item) => (
              <div className="tech_stack_list_item" key={item.name}>
                <div className="tech_stack_item_info">
                  <img
                    src={`/${item.src}`}
                    loading="lazy"
                    alt=""
                    className={`rounded_img tech_icon ${item.additionalClassName ?? ""}`}
                  />
                  <span className="tech_stack_item_name">{item.name}</span>
                </div>
                <div className="tech_stack_item_meta">
                  <div className="tech_stack_item_level" aria-label={`Level ${item.rate}`}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={`${item.name}-star-${index}`}
                        className={index < item.rate ? "star filled" : "star"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
