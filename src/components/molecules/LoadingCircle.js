import { SpinnerIcon } from "../atom/icon";

export default function LoadingCircle(props) {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="flex flex-col justify-center text-center space-y-2">
        <span className="flex justify-center items-center">
          <SpinnerIcon />
        </span>
        <div className="text-gray-800">{props.title}</div>
      </div>
    </div>
  );
}
