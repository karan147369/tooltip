import React, { useEffect, useState } from "react";
import "./Tooltip.css";
const Tooltip = ({ values }) => {
  const [showTooltip, setTooltipState] = useState(false);
  useEffect(() => {
    const element = document.getElementById(values.id);
    element.addEventListener("mouseover", () => {
      setTooltipState(true);
    });
    element.addEventListener("mouseout", () => {
      setTooltipState(false);
    });
  }, [values]);

  return (
    <>
      {showTooltip ? (
        // id will be different according to the props position property
        <div id={`tooltipBody${values.position}`}>
          {values.message}
          {/* Triangle is the pointy tip in the tooltip  */}
          <div id={`triangle${values.position}`}></div>
        </div>
      ) : null}
    </>
  );
};
export default Tooltip;
