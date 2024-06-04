export default function PopupContainer({ children }) {
  return (
    <div className="fixed bottom-24 md:right-5 w-full px-4 md:px-0 md:w-5/6 xl:w-2/5 h-3/4">
      <div className="flex flex-col w-full h-full  px-4 md:px-8 py-6 bg-white rounded-2xl">
        {children}
      </div>
    </div>
  );
}
