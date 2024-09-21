import Image from "next/image";
import SearchFilters from "./SearchFilters";
import AddPropertyButton from "./AddPropertyButton";
import UserOptions from "./UserOptions";


const Navbar = ()=>{
    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
                <div className="flex justify-between items-center gap-3 md:gap-0">
                   <div>
                   <Image
                    src="/logo.png"
                    alt="myAirbnb logo"
                    width={140}
                    height={38}
                    />

                   </div>

                <div className="flex space-x-6">
                    <SearchFilters/>
                </div>

                <div className="flex space-x-6">
                    <AddPropertyButton/>
                    <UserOptions userId="abcde"/>
                </div>
                </div>
              

            </div>
        </nav>
    )
}

export default Navbar;