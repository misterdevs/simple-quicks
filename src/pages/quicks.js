import Inbox from "@/components/organism/Inbox";
import Task from "@/components/organism/Task";
import Toggles from "@/components/organism/Toggles";
import { toggleName } from "@/constants/constants";
import { useState } from "react";

export default function Quicks() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex w-full h-screen bg-gradient-to-r from-indigo-400 to-cyan-400">
      <div className="flex justify-center items-center h-full w-full text-white text-3xl">
        Simple Quicks
      </div>
      {isActive && (isActive == toggleName.inbox ? <Inbox /> : <Task />)}
      <Toggles isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
