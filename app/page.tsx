'use client';

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { LogInIcon, ShareIcon } from "lucide-react";
import Link from "next/link";



export default function Home() {
  return (
    <main>
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Seamless Cloud,<br /> Upload Service.

        
      </h2>
      <div className="relative z-10 flex gap-2 mb-4">
        <Link href="/sign-in">
          <button className="btn btn-outline text-white hover:bg-white hover:text-black w-full">
            <LogInIcon className="mr-2 h-5 w-5" />
            Sign-in
          </button>
        </Link>
        <Link href="/sign-up">
          <button className="btn btn-outline text-white hover:bg-white hover:text-black w-full">
            <ShareIcon className="mr-2 h-5 w-5" />
            Sign-up
          </button>
        </Link>
      </div>
      
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        'Upload once, deliver everywhere — your media, smarter and faster. From cloud to screen in seconds, we power your visuals with speed and style.'
      </p>
    </BackgroundLines>
    </main>
  );
}

