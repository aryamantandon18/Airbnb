import Image from "next/image";
import Categories from "./components/(Home)/Categories";

export default function Home() {
  return (
    <main className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <Categories/>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      
      </div>
    </main>
  );
}
