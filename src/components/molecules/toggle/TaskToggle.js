import { TaskIcon } from "@/components/atom/icon";
import InnerToggle from "./InnerToggle";

export default function TaskToggle(props) {
  return (
    <InnerToggle
      color="text-indicator-orange"
      bgColor="bg-indicator-orange"
      isActive={props.isActive}
      className={props.className}
    >
      <TaskIcon />
    </InnerToggle>
  );
}
