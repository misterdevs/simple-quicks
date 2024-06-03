import ToggleButton from "@/components/atom/button/ToggleButton";
import { FeatherIcon } from "@/components/atom/icon";

export default function ToggleMain(props) {
  return (
    <ToggleButton
      color="text-white"
      bg="bg-primary-blue"
      className={props.className}
      onClick={props.onClick}
    >
      <FeatherIcon />
    </ToggleButton>
  );
}
