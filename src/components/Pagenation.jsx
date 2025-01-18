import React from 'react';

function Pagenation( {handlePrev, handleNext, pageNo } ) {

  

  return (
    <div className='bg-gray-400 text-center flex flex-wrap items-center justify-center gap-4 p-4'>
        <div onClick={handlePrev} className="font-bold bg-gray-400 rounded-full p-2  hover:bg-slate-300 hover:cursor-pointer duration-100 transition-transform"><i className="fa-solid fa-arrow-left"></i></div>
        <div className="font-bold text-xl">{pageNo}</div>
        <div onClick={handleNext} className='font-bold bg-gray-400 rounded-full p-2 hover:bg-slate-300 hover:cursor-pointer duration-100 transition-transform'><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagenation;