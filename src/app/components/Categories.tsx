'use client'

import Image from "next/image";
import { useState, useRef } from "react";

const Categories = () => {
    const [category, setCategory] = useState('Icons');

    const handleCategoryChange = (newCategory: string) => {
        setCategory(newCategory);
    };

    const categoriesData = [
        { name: "Icons", src: "/categories/icons.png" },
        { name: "Amazing Pools", src: "/categories/AmazingPools.jpg" },
        { name: "Castles", src: "/categories/Castle.jpg" },
        { name: "Farms", src: "/categories/Farms.jpg" },
        { name: "Omg", src: "/categories/Omg.jpg" },
        { name: "Rooms", src: "/categories/Rooms.jpg" },
        { name: "Amazing Views", src: "/categories/AmazingViews.jpg"}
    ];

    return (
        <main className="flex gap-2">
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12 w-[75%] border">
            {categoriesData.map((cat) => (
                <div
                    key={cat.name}
                    onClick={() => handleCategoryChange(cat.name)}
                    className={`flex flex-col space-y-2 pb-4 border-b-2 ${category === cat.name ? 'border-black opacity-100' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100 items-center`}
                >
                    <Image
                        src={cat.src}
                        alt={cat.name}
                        width={24}
                        height={24}
                    />
                    <span className="text-xs">{cat.name}</span>
                </div>
            ))}
        </div>
        <div className="my-auto ">
            <div className="border rounded-lg border-gray-200 flex gap-2 ">
            <p>Filters</p>
            </div>            
        </div>
        </main>
    );
};

export default Categories;
