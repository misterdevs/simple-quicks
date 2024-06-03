import { useState } from "react";
import ToggleContainer from "../atom/container/ToggleContainer";
import InboxToggle from "../molecules/toggle/InboxToggle";
import TaskToggle from "../molecules/toggle/TaskToggle";
import ToggleMain from "../molecules/toggle/ToggleMain";

export default function Toggles() {
  const [isActive, setIsActive] = useState(true);
  return (
    <ToggleContainer>
      <div className="flex space-x-2">
        <div className="flex space-x-2">
          <TaskToggle
            className={`flex space-x-2  ${
              isActive ? "-translate-x-12" : "translate-x-12"
            } duration-300`}
          />
          <InboxToggle
            className={`flex space-x-2  ${
              isActive ? "-translate-x-12" : ""
            } duration-300`}
          />
        </div>
        <ToggleContainer>
          <ToggleMain onClick={() => setIsActive(!isActive)} />
        </ToggleContainer>
      </div>
    </ToggleContainer>
  );
}
