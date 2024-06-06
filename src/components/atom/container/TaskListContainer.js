export default function TaskListContainer({ children }) {
  return (
    <div className="flex flex-col py-2 divide-y overflow-y-auto h-full">
      {children}
    </div>
  );
}
