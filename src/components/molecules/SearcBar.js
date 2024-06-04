import { SearchIcon } from "../atom/icon";

export default function SearchBar() {
  return (
    <div className="flex w-full space-x-2 border border-primary-gray-light text-gray-800 rounded-xl py-1 px-3 justify-between items-center">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        className="bg-transparent focus:outline-none w-full"
      />
      <div className="h-4 w-4 flex justify-center items-center text-primary-gray-light">
        <SearchIcon />
      </div>
    </div>
  );
}
