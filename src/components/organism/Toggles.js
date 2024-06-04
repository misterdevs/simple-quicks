import { useState } from "react";
import ToggleContainer from "../atom/container/ToggleContainer";
import InboxToggle from "../molecules/toggle/InboxToggle";
import TaskToggle from "../molecules/toggle/TaskToggle";
import ToggleMain from "../molecules/toggle/ToggleMain";

export default function Toggles(props) {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <ToggleContainer>
      <div
        className={`flex space-x-6 duration-300 ${
          props.isActive && "translate-x-20"
        }`}
      >
        <TaskToggle
          isExpand={isExpand}
          isActive={props.isActive}
          setIsActive={props.setIsActive}
        />
        <InboxToggle
          isExpand={isExpand}
          isActive={props.isActive}
          setIsActive={props.setIsActive}
        />
      </div>
      {!props.isActive && (
        <ToggleContainer>
          <ToggleMain onClick={() => setIsExpand(!isExpand)} />
        </ToggleContainer>
      )}
    </ToggleContainer>
  );
}
