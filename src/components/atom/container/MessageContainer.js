export default function MessageContainer({ children }) {
  return (
    <div className="p-2 overflow-y-auto h-full divide-y divide-primary-gray-light">
      {children}
    </div>
  );
}
