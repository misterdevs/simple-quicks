export default function ToggleButton(props) {
  return (
    <button
      className={`flex items-center justify-center h-10 w-10 rounded-full ${props.bg} ${props.className}`}
      onClick={props.onClick}
    >
      <span
        className={`${props.color} h-5 w-5  flex items-center justify-center`}
      >
        {props.children}
      </span>
    </button>
  );
}
