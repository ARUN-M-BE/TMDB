import React from 'react';
import banner1 from '../../public/banner1.jpg';

function Banner() {

    function bannerImageChange () {
        let bannerImages = [banner1, banner1, banner1, banner1];
        let bannerIndex = 0;
        setInterval(() => {
            bannerIndex++;
            if(bannerIndex >= bannerImages.length){
                bannerIndex = 0;
            }
            document.querySelector('.bg-cover').style.backgroundImage = `url(${bannerImages[bannerIndex]})`;
        }, 3000);
    }


  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover items-end flex bg-center' onChange={bannerImageChange}>
        <div className="flex bg-black bg-opacity-50 w-[100vw] justify-center">
            <h1 className='text-2xl font-bold text-white p-2'>Mission Impossible Dead Reckoning</h1>
        </div> 
        
    </div>
  )
}

export default Banner