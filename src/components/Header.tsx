import { useEffect, useRef } from "react";

const _Header = ():JSX.Element=>{
  const headerRef = useRef<HTMLDivElement>(null);
  const tailRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(headerRef.current && tailRef.current){
      const header = headerRef.current;
      const tail = tailRef.current;
      tail.style.left = `${header.getBoundingClientRect().left}px`;
    }
  }, []);
  return (
    <>
      <div ref={headerRef} className="sticky -top-20 mx-auto flex-col w-max bg-red-salsa p-3 mt-2 rounded-lg">
        <p className="text-3xl font-bold">Program </p>
        <p className="text-xl">Do opracowań geodezyjnych </p>
        <p className="mt-4 text-m font-semibold">Julia Kowalczyk</p>
      </div>
      <div ref={tailRef} className="relative -z-10">
          <div className="bg-red-salsa w-6 h-8 relative -top-2"></div>
          <div className="bg-seashell w-6 h-6 absolute top-0 rounded-tl-full"></div>
      </div>
    </>
  )
};

export const Header = _Header;