import React, { useEffect } from "react";
import "./tooltip.scss";
import { TooltipProps, Colors } from "./tooltip.types";

function Tooltip({
  content,
  children,
  position,
  textColor,
  backgroundColor,
  direction,
}: TooltipProps) {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--tooltip-background-color",
      Colors[backgroundColor]
    );
    document.documentElement.style.setProperty(
      "--tooltip-text-color",
      Colors[textColor]
    );
  }, [backgroundColor, textColor]);

  return (
    <div className={` custom-tooltip custom-tooltip-${position} `}>
      {content.length === 0 ? (
        <>{children}</>
      ) : (
        <>
          <div
            className={`w-100 position-relative d-flex justify-content-center tooltip-box tooltip-${position} px-2`}>
            <span
              className={`position-absolute ${
                content.length > 40 ? "text-truncate" : ""
              }  custom-tooltip-text  direction-${direction} `}>
              {content}
            </span>
            <span className={`position-absolute arrow-${position}`}></span>
          </div>
          {children}
        </>
      )}
    </div>
  );
}
export default Tooltip;
