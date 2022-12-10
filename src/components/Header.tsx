const _Header = ():JSX.Element=>{
  return (
    <div className="flex flex-col w-max mx-auto">
      <div className="sticky -top-20 flex flex-col w-max bg-red-salsa p-3 mt-2 rounded-lg">
        <p className="text-3xl font-bold">Program </p>
        <p className="text-xl">Do opracowań geodezyjnych </p>
        <p className="mt-4 text-m font-semibold">Julia Kowalczyk</p>
      </div>
      <div className="relative -z-10">
        <div className="bg-red-salsa w-6 h-8 relative -top-2"></div>
        <div className="bg-seashell w-6 h-6 absolute top-0 rounded-tl-full"></div>
      </div>
    </div>
  )
};

export const Header = _Header;