const _Header = ():JSX.Element=>{  
  return (
    <>
      <div className="sticky -top-20 mx-auto flex-col w-80 bg-red-salsa p-3 mt-4 rounded-lg z-10">
        <p className="text-3xl font-bold">Program </p>
        <p className="text-xl">Do opracowań geodezyjnych </p>
        <p className="mt-4 text-m font-semibold">Julia Kowalczyk & Marcin Wolder</p>
      </div>
      <div className="w-80 mx-auto relative -z-10">
          <div className="bg-red-salsa w-6 h-8 relative -top-2 rounded-br-full"></div>
          <div className="bg-seashell w-6 h-6 absolute top-0 rounded-tl-full"></div>
      </div>
    </>
  )
};

export const Header = _Header;