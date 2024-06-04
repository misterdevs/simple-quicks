import MessageContainer from "../atom/container/RoomListContainer";
import { PersonIcon } from "../atom/icon";

export default function RoomList(props) {
  return (
    <div
      className="flex space-x-3 py-8 hover:cursor-pointer"
      onClick={() => props.setRoomChat(props.index)}
    >
      {/* profile picture */}
      <div className="flex shrink-0 justify-center w-12">
        {props.isGroup && (
          <div className="flex shrink-0 justify-center items-center h-8 w-8 bg-primary-white rounded-full -mr-4">
            <PersonIcon className="h-6 w-6 text-gray-500" />
          </div>
        )}
        <div className="flex shrink-0 justify-center items-center h-8 w-8 bg-primary-blue rounded-full">
          {props.isGroup ? (
            <PersonIcon className="h-6 w-6 text-white" />
          ) : (
            <span className="flex justify-center items-center h-6 w-6 text-white">
              {props.roomName?.split("")[0]}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-1 w-full">
        <div className="flex space-x-3 w-full justify-between md:justify-normal ">
          <div className=" text-sm font-semibold text-primary-blue ">
            <div className="line-clamp-2">{props.roomName}</div>
          </div>
          <div className="flex space-x-1 text-xs">
            <span>02/26/2021 </span>
            <span className="hidden sm:flex">10:45</span>
          </div>
        </div>
        <div className="flex flex-col text-xs font-light">
          {props.isGroup && (
            <div className="font-semibold">{props.lastSender} :</div>
          )}
          <div className="flex justify-between items-center space-x-2">
            <div className="line-clamp-1">{props.recentMessage}</div>
            {props.isUnreadMessage && (
              <span className="shrink-0 h-2 w-2 bg-indicator-red rounded-full" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
