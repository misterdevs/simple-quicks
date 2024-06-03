import ToggleButton from "@/components/atom/button/ToggleButton";
import { toggleName } from "@/constants/constants";
import { useEffect, useState } from "react";

export default function InnerToggle(props) {
  return (
    <div className={`${props.className}`}>
      {props.isExpand && !props.isActive && (
        <div className={`text-center text-xs font-light mb-2`}>
          {props.title}
        </div>
      )}
      <ToggleButton
        color={
          props.isActive === props.title.toLowerCase()
            ? "text-white"
            : props.color
        }
        bg={
          props.isActive === props.title.toLowerCase()
            ? props.bgColor
            : "bg-white"
        }
        onClick={() => {
          props.isActive === props.title.toLowerCase()
            ? props.setIsActive(false)
            : props.setIsActive(toggleName[props.title.toLowerCase()]);
        }}
      >
        {props.children}
      </ToggleButton>
    </div>
  );
}
