import { IoSearchOutline } from "react-icons/io5";

const SearchFilters = () => {
  return (
    <div className="h-[48px] lg:h-[64px] flex flex-row items-center rounded-full justify-between border shadow-lg group">
      <div className="cursor-pointer flex flex-col w-[250px] h-[48px] lg:h-[64px] px-8 justify-center hover:bg-gray-100 border-r-[1px] group-hover:border-none hover:rounded-full">
        <p className="font-semibold hidden xl:block">Where</p>
        <p className="text-sm lg:text-md">Search Location</p>
      </div>
      <div className="hidden xl:block">
        <div className="flex flex-row justify-between items-center">
          <div className="cursor-pointer flex flex-col h-[48px] lg:h-[64px] px-8 justify-center hover:bg-gray-100 border-r-[1px] group-hover:border-none hover:rounded-full">
            <p className="font-semibold">Check in</p>
            <p className="text-sm lg:text-md">Add dates</p>
          </div>
          <div className="cursor-pointer flex flex-col h-[48px] lg:h-[64px] px-8 justify-center hover:bg-neutral-100 border-r-[1px] group-hover:border-none hover:rounded-full">
            <p className="font-semibold">Check out</p>
            <p className="text-sm lg:text-md">Add dates</p>
          </div>
          <div className="cursor-pointer flex flex-col h-[48px] lg:h-[64px] px-8 justify-center hover:bg-neutral-100 hover:rounded-full">
            <p className="font-semibold">Who</p>
            <p className="text-sm lg:text-md">Add guests</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="rounded-full p-2 lg:p-4 bg-airbnb text-white text-xl font-bold">
          <IoSearchOutline />
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
