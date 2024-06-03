export default function ToggleButton(props) {
  return (
    <button
      className={`flex items-center justify-center h-14 w-14 rounded-full ${props.bg} ${props.className}`}
      onClick={props.onClick}
    >
      <span
        className={`${props.color} h-6 w-6  flex items-center justify-center`}
      >
        {props.children}
      </span>
    </button>
  );
}
