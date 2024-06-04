import { useEffect, useState } from "react";
import PopupContainer from "../atom/container/PopupContainer";
import { PersonIcon, SpinnerIcon } from "../atom/icon";
import SearchBar from "../molecules/SearcBar";
import LoadingCircle from "../molecules/LoadingCircle";
import RoomList from "../molecules/RoomList";
import MessageContainer from "../atom/container/MessageContainer";

export default function Inbox(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <PopupContainer>
      <div className="flex w-full">
        <SearchBar />
      </div>
      {isLoading ? (
        <LoadingCircle title="Loading chats..." />
      ) : (
        <MessageContainer>
          {roomChatList.map((room) => {
            return (
              <RoomList
                isGroup={room.isGroup}
                roomName={room.roomName}
                recentMessage={room.recentMessage}
                lastSender={room.lastSender}
                isUnreadMessage={room.isUnreadMessage}
              />
            );
          })}
        </MessageContainer>
      )}
    </PopupContainer>
  );
}

export const roomChatList = [
  {
    isGroup: true,
    roomName: "109220-Naturalization",
    lastSender: "Cameron Pillips",
    recentMessage: "Please check this out!",
    date: "January 1,2021",
    time: "19:10",
    isUnreadMessage: true,
  },
  {
    isGroup: true,
    roomName:
      "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
    lastSender: "Ellen",
    recentMessage: "Hey, please read.",
    date: "02/06/2021",
    time: "10:45",
    isUnreadMessage: false,
  },
  {
    isGroup: true,
    roomName: "8045-Diana SALAZAR MUNGUIA",
    lastSender: "Cameron Pillips",
    recentMessage:
      "I understand your initial concerns and thats very valid, Elizabeth.",
    date: "01/06/2021",
    time: "12:19",
    isUnreadMessage: false,
  },
  {
    isGroup: false,
    roomName: "FastVisa Support",
    lastSender: "FastVisa Support",
    recentMessage: "Hey there! Welcome to your inbox.",
    date: "01/06/2021",
    time: "12:19",
    isUnreadMessage: false,
  },
  {
    isGroup: false,
    roomName: "FastVisa Support",
    lastSender: "FastVisa Support",
    recentMessage: "Hey there! Welcome to your inbox.",
    date: "01/06/2021",
    time: "12:19",
    isUnreadMessage: false,
  },
];
