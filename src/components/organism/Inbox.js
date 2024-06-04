import { useEffect, useRef, useState } from "react";
import PopupContainer from "../atom/container/PopupContainer";
import LoadingCircle from "../molecules/LoadingCircle";
import RoomList from "../molecules/RoomList";
import SearchBar from "../molecules/SearcBar";
import RoomListContainer from "../atom/container/RoomListContainer";
import RoomContainer from "../atom/container/RoomContainer";
import ArrowLeftIcon from "../atom/icon/ArrowLeftIcon";
import CrossIcon from "../atom/icon/CrossIcon";
import BubbleChat from "../molecules/BubbleChat";

export default function Inbox(props) {
  const room = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [roomChat, setRoomChat] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    if (roomChat !== null) {
      room.current.scrollIntoView({
        block: "end",
      });
    }
  }, [roomChat]);
  return (
    <PopupContainer>
      {roomChat !== null && (
        <RoomContainer>
          <div className="flex flex-row w-full justify-between items-center space-x-3 pb-3 border-b-2 text-sm">
            <div className="flex flex-row space-x-3 items-center">
              <button onClick={() => setRoomChat(null)}>
                <ArrowLeftIcon className="w-6 h-6" />
              </button>
              <div className="flex flex-col space-y-1 h-11 justify-center ">
                <span className="text-primary-blue font-semibold line-clamp-1">
                  {roomChatList[roomChat].roomName}
                </span>
                {roomChatList[roomChat].isGroup && (
                  <span className="font-light text-xs">3 Participants</span>
                )}
              </div>
            </div>
            <div>
              <CrossIcon className="w-6 h-6" />
            </div>
          </div>
          <div className="overflow-y-auto h-full py-3 text-sm">
            <div className="flex flex-col space-y-5 pr-3 " ref={room}>
              {chatList[roomChat]?.map((chat, index) => {
                return (
                  <>
                    {index > 0 &&
                      (chat.dateTime !==
                        chatList[roomChat][index - 1].dateTime ||
                        chat.isUnreadMessage) && (
                        <div className="flex justify-between items-center">
                          <span
                            className={`border-b w-full ${
                              chat.isUnreadMessage ? "border-indicator-red" : ""
                            }`}
                          ></span>

                          <span
                            className={`flex justify-center font-semibold w-full ${
                              chat.isUnreadMessage ? "text-indicator-red" : ""
                            }`}
                          >
                            {chat.isUnreadMessage
                              ? "New Message"
                              : new Date().toDateString() ==
                                new Date(chat.dateTime).toDateString()
                              ? "Today"
                              : new Date(chat.dateTime).toDateString()}
                          </span>
                          <span
                            className={`border-b w-full ${
                              chat.isUnreadMessage ? "border-indicator-red" : ""
                            }`}
                          ></span>
                        </div>
                      )}
                    <BubbleChat
                      key={index}
                      isMe={chat.isMe}
                      sender={chat.sender}
                      message={chat.message}
                      dateTime={chat.dateTime}
                      bgColor={chat.bgColor}
                      color={chat.color}
                    />
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex flex-row space-x-3 py-2">
            <div className="w-full border-2 py-2 px-3 rounded-xl">
              <input
                type="text"
                name="typing"
                id="typing"
                placeholder="Type a new message"
                className="bg-transparent focus:outline-none w-full"
              />
            </div>
            <button className="bg-primary-blue px-5 py-1 rounded-xl text-white">
              Send
            </button>
          </div>
        </RoomContainer>
      )}
      {roomChat === null && (
        <>
          <div className="flex w-full">
            <SearchBar />
          </div>
          {isLoading ? (
            <LoadingCircle title="Loading chats..." />
          ) : (
            <RoomListContainer>
              {roomChatList.map((room, index) => {
                const lastMassage =
                  chatList[index] &&
                  chatList[index][chatList[index].length - 1];
                return (
                  <RoomList
                    key={index}
                    index={index}
                    isGroup={room.isGroup}
                    roomName={room.roomName}
                    recentMessage={
                      chatList[index] ? lastMassage.message : room.recentMessage
                    }
                    lastSender={
                      chatList[index] ? lastMassage.sender : room.lastSender
                    }
                    isUnreadMessage={
                      chatList[index] ? lastMassage.isUnreadMessage : false
                    }
                    setRoomChat={setRoomChat}
                  />
                );
              })}
            </RoomListContainer>
          )}
        </>
      )}
    </PopupContainer>
  );
}

export const chatList = [
  [
    {
      sender: "",
      message:
        "No worries. It will be completed ASAP. I've asked him yesterday.",
      dateTime: "2021-06-08T19:32:00",
      isMe: true,
      isUnreadMessage: false,
    },
    {
      sender: "Mary Hilda",
      message:
        "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
      dateTime: "2021-06-09T19:32:00",
      isMe: false,
      isUnreadMessage: false,
    },
    {
      sender: "",
      message:
        "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
      dateTime: "2021-06-09T19:32:00",
      isMe: true,
      isUnreadMessage: false,
    },
    {
      sender: "Mary Hilda",
      message: "Sure thing, Claren.",
      dateTime: "2021-06-09T19:32:00",
      isMe: false,
      isUnreadMessage: false,
    },
    {
      sender: "Obaidullah Amarkhil",
      message: "Morning. I’ll try to do them. Thanks",
      dateTime: "2021-06-09T19:32:00",
      isMe: false,
      isUnreadMessage: true,
    },
  ],
];

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
    roomName: "M Ridho",
    lastSender: "M Ridho",
    recentMessage: "Hey there! Welcome to your inbox.",
    date: "01/06/2021",
    time: "12:19",
    isUnreadMessage: false,
  },
];
