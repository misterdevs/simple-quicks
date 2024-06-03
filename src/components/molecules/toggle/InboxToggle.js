import { InboxIcon } from "@/components/atom/icon";
import InnerToggle from "./InnerToggle";

export default function InboxToggle(props) {
  return (
    <InnerToggle
      color="text-indicator-purple"
      bgColor="bg-indicator-purple"
      isActive={props.isActive}
      className={props.className}
    >
      <InboxIcon />
    </InnerToggle>
  );
}
