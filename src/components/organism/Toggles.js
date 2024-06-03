import { useState } from "react";
import ToggleContainer from "../atom/container/ToggleContainer";
import InboxToggle from "../molecules/toggle/InboxToggle";
import TaskToggle from "../molecules/toggle/TaskToggle";
import ToggleMain from "../molecules/toggle/ToggleMain";

export default function Toggles() {
  const [isExpand, setIsExpand] = useState(true);
  return (
    <ToggleContainer>
      <div className="flex space-x-2">
        <TaskToggle isExpand={isExpand} />
        <InboxToggle isExpand={isExpand} />
      </div>
      <ToggleContainer>
        <ToggleMain onClick={() => setIsExpand(!isExpand)} />
      </ToggleContainer>
    </ToggleContainer>
  );
}
