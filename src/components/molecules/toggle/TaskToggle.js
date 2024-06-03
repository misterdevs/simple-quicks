import { TaskIcon } from "@/components/atom/icon";
import InnerToggle from "./InnerToggle";

export default function TaskToggle(props) {
  return (
    <InnerToggle
      color="text-indicator-orange"
      bgColor="bg-indicator-orange"
      className={`${
        props.isExpand ? "-translate-x-12" : "translate-x-12"
      } duration-300`}
      isExpand={props.isExpand}
      title="Task"
    >
      <TaskIcon />
    </InnerToggle>
  );
}
