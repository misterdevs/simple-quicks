import ToggleButton from "@/components/atom/button/ToggleButton";
import { useEffect, useState } from "react";

export default function InnerToggle(props) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(props.isActive);
  }, [props.isActive]);

  return (
    <ToggleButton
      color={isActive ? "text-white" : props.color}
      bg={isActive ? props.bgColor : "bg-white"}
      onClick={() => setIsActive(!isActive)}
      className={`${props.className}`}
    >
      {props.children}
    </ToggleButton>
  );
}
