import Inbox from "@/components/organism/Inbox";
import Task from "@/components/organism/Task";
import Toggles from "@/components/organism/Toggles";
import { toggleName } from "@/constants/constants";
import { useState } from "react";

export default function Quicks() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex w-full h-screen">
      {isActive && (isActive == toggleName.inbox ? <Inbox /> : <Task />)}
      <Toggles isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
