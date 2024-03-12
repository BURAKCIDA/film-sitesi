"use client"
import React from 'react'
import Link from "next/link";
import { useSearchParams } from 'next/navigation';

const Tabs = () => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
    const tabs = [
        {
            name: "En Populer",
            url: "populer"
        },
        {
            name: "En Son",
            url: "latest"
        },
        {
            name: "Yakında Gelecekler",
            url: "upcoming"
        }
    ]
    return (
        <div className='p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7'>
            {
                tabs.map((tab, i) => (
                    <Link className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-orange-600" : ""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
                ))
            }
        </div>
    )
}

export default Tabs