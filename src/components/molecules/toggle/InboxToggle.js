import { InboxIcon } from "@/components/atom/icon";
import InnerToggle from "./InnerToggle";

export default function InboxToggle(props) {
  return (
    <InnerToggle
      color="text-indicator-purple"
      bgColor="bg-indicator-purple"
      className={`${props.isExpand ? "-translate-x-12" : ""} duration-300`}
      isExpand={props.isExpand}
      title="Inbox"
    >
      <InboxIcon />
    </InnerToggle>
  );
}
