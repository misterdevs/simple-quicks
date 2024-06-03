import ToggleButton from "@/components/atom/button/ToggleButton";
import { useEffect, useState } from "react";

export default function InnerToggle(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${props.className}`}>
      {props.isExpand && (
        <div className={`text-center text-xs font-light mb-1`}>
          {props.title}
        </div>
      )}
      <ToggleButton
        color={isActive ? "text-white" : props.color}
        bg={isActive ? props.bgColor : "bg-white"}
        onClick={() => setIsActive(!isActive)}
      >
        {props.children}
      </ToggleButton>
    </div>
  );
}
