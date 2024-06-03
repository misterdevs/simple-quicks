import { InboxIcon } from "@/components/atom/icon";
import InnerToggle from "./InnerToggle";

export default function InboxToggle(props) {
  const title = "Inbox";
  return (
    <InnerToggle
      color="text-indicator-purple"
      bgColor="bg-indicator-purple"
      className={`${
        props.isExpand
          ? props.isActive === false ||
            props.isActive === title.toLocaleLowerCase()
            ? "-translate-x-20"
            : "-translate-x-40"
          : ""
      } duration-300`}
      isExpand={props.isExpand}
      isActive={props.isActive}
      setIsActive={props.setIsActive}
      title={title}
    >
      <InboxIcon />
    </InnerToggle>
  );
}
