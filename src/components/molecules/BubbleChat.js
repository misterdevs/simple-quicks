import { ThreeDots } from "../atom/icon";

export default function BubbleChat(props) {
  const color = {
    // purple: {
    //   bgColor: "bg-chat-primary-purple",
    //   color: "text-chat-secondary-purple",
    // },
    yellow: {
      bgColor: "bg-chat-primary-yellow",
      color: "text-chat-secondary-yellow",
    },
    green: {
      bgColor: "bg-chat-primary-green",
      color: "text-chat-secondary-green",
    },
  };
  const randomColor = () =>
    Object.keys(color)[
      ((Math.abs((props.sender.length * 1000) / 656) -
        Math.floor(Math.abs((props.sender.length * 1000) / 656))) *
        Object.keys(color).length) |
        0
    ];
  return (
    <div
      className={`flex flex-col font-light text-sm ${
        props.isMe ? "items-end" : "items-start"
      }`}
    >
      <span
        className={`font-semibold ${
          props.isMe
            ? "text-chat-secondary-purple"
            : color[randomColor()]["color"]
        }`}
      >
        {props.isMe ? "You" : props.sender}
      </span>
      <div
        className={`flex flex-row items-start ${
          !props.isMe && "flex-row-reverse"
        }`}
      >
        <button>
          <ThreeDots className="h-5 w-5 shrink-0" />
        </button>
        <div
          className={`flex flex-col max-w-md py-2 px-3 rounded-lg space-y-1 ${
            props.isMe
              ? "bg-chat-primary-purple"
              : color[randomColor()]["bgColor"]
          }`}
        >
          <p className="break-words">{props.message}</p>
          <span className="text-xs">
            {new Date(props.dateTime).getHours().toString().padStart(2, "0") +
              ":" +
              new Date(props.dateTime).getMinutes().toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
