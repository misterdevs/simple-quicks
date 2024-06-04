export default function RoomContainer({ children }) {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      {children}
    </div>
  );
}
