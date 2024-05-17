import React from 'react'
import Image from 'next/image'
import heroImg from '../../../../public//images/illustration-hero.svg'
import musicIco from "../../../../public//images/icon-music.svg";


const index = () => {
  return (
    <main className="h-[600px] w-full sm:w-[400px] rounded-3xl overflow-hidden font-rhd bg-white">
      <Image src={heroImg} alt="hero img" className="bg-cover w-full " />
      {/* container of infos */}
      <div className="flex flex-col justify-between items-center space-y-6 p-6">
        <h1 className="text-3xl font-black">Order Summary</h1>
        <p className="text-center p-1 text-neutral-desaturated-blue font-semibold ">
          {" "}
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <div className="bg-neutral-very-pale-blue w-full flex justify-around p-1f py-3 rounded-xl">
          <div className="bg-red-100g flex gap-4">
            <Image src={musicIco} alt="music icon" className="" />
            <div className="flex flex-col">
              <div className=" font-bold">Annual Plan</div>
              <div className="text-neutral-desaturated-blue font-semibold">
                $59.99/year
              </div>
            </div>
          </div>

          <button className="text-bright-blue font-bold text-lg underline hover:no-underline hover:text-neutral-dark-blue">
            Change
          </button>
        </div>

        <button className="bg-bright-blue w-full py-3 rounded-xl shadow-bright-blue shadow-3xl text-white font-bold hover:bg-violet-500">
          Proceed to Payment
        </button>

        <p className="text-neutral-desaturated-blue font-bold hover:text-black hover:cursor-pointer">
          Cancel Order
        </p>
      </div>
    </main>
  );
}

export default index