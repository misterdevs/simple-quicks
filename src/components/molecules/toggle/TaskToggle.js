import { TaskIcon } from "@/components/atom/icon";
import InnerToggle from "./InnerToggle";

export default function TaskToggle(props) {
  const title = "Task";
  return (
    <InnerToggle
      color="text-indicator-orange"
      bgColor="bg-indicator-orange"
      className={`${
        props.isExpand
          ? props.isActive == title.toLocaleLowerCase()
            ? "translate-x-0"
            : "-translate-x-20"
          : "translate-x-20"
      } duration-300`}
      isExpand={props.isExpand}
      isActive={props.isActive}
      setIsActive={props.setIsActive}
      title={title}
    >
      <TaskIcon />
    </InnerToggle>
  );
}
