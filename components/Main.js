import Link from 'next/link';
import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {social} from "../info.config";

export default function Main() {

useEffect(() => {
    Aos.init({ duration : 1500,
               offset: 100,
               delay : 500})
    }, []); 

    return(
    <div id="home"className='overflow-hidden flex flex-col'>
        <div className="w-full h-screen flex flex-col items-center justify-center relative">
        <img
          src="/webimage2.png"
          className="w-screen object-cover"
        />
        <div className='mt-6 left-[40px] absolute fex flex-col'>

          <div className='flex flex-row items-center text-start'>
            <div className='mr-6  border-b-4 border-brand-yellow'>
                <h1 className='font-Kanit text-[60px] text-white font-semibold uppercase'> Make your own story <br/>
                <span className='text-[75px] text-brand-yellow'>IN DEXBATTLE</span></h1>

                <div class="flex justify-start mt-10 mb-[60px]">
            <a href={social.googlePlayStore}><div class="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8"/>
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Download on </p>
                        <p class="text-sm md:text-base text-gray-200"> Google Play Store </p>
                    </div>
                </div></a>
                <a href={social.appleAppStore}><div class="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8"/>
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Download on </p>
                        <p class="text-sm md:text-base text-gray-200"> Apple App Store </p>
                    </div>
                </div></a>
            </div>

            {/*Social media buttons*/}
            <div className='flex gap-6'>

            {/* facebook */}
            <a href={social.facebook}>
            <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style="background-color: #1877f2;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4">
                  <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
              </svg>
            </button>
            </a>

            {/* Twitter */}
            <a href={social.twitter}>
            <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style="background-color: #1da1f2;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4">
            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
            </svg>
            </button>
            </a>

            {/* Telegram */}
            <a href={social.telegram}>
            <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style="background-color: #0088cc;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-4 h-4">
            <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/>
            </svg>
            </button>
            </a>

            {/* Discord */}
            <a href={social.discordf}>
            <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style="background-color: #7289da;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-4 h-4">
            <path fill="currentColor" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
            </svg>
            </button>
            </a>
            </div>
            

            </div>

            <div className='w-[600px] h-[600px] mt-[80px]'>
              <img src='webimage1.png'
              className='object-cover'/>
            </div>

          </div>
        </div>
       
        </div>
        
        <div data-aos ="fade-up"className='flex flex-row mx-16 justify-between  bg-gray-700/40 backdrop-blur-sm rounded-lg items-center'>
          <div className='flex flex-col my-4 w-[70%] mx-10'>
            <h1 data-aos="fade-right" className='text-5xl font-Kanit text-white tracking-wide'>What is DexBattale?</h1>
            <h1 data-aos="fade-right" className='text-[18px] font-Kanit text-gray-400 text-justify mt-6'>
            Welcome to the ever-evolving Dex battle universe! Hone your shooting skills, compete in tournaments, and complete missions with your
Clan to earn NFTs and coveted rewards. Collect weapons, and so much more items. But most importantly, have fun and work together
Dex battle is a community-owned skill-based shooter with different PvP and PvE game modes for every type of player. The core shooter
game is set on top of a land control-oriented, social strategy game with a deep emphasis on clans, alliances, and social mechanics. The
game economy rewards social behavior and is designed to be an endless experience built by and for the player community.
Thus, Metaverse structures can be applied immensely in the Dex battle but it all depends on the player&apos;s feedback when the voting takes
place. Dex battle metaverse will bring the best experience ever when players combine a shooting skill-based game with a wisdom strategy
for each character. It is fun beyond the limit.
            </h1>

            <h1 data-aos="fade-up" className='text-3xl font-Kanit text-white tracking-wide mt-6'>Features</h1>
            <h1 data-aos="fade-up" className='text-[16px] font-Kanit text-gray-400 text-justify mt-4'>
            Dex battle features blockchain-based digital assets known as &ldquo;NFTs&ldquo; that operate on an eco-friendly proof-of-stake blockchain. Because
blockchain technology enables actual digital ownership, Dex battle characters may be exchanged not just on the specific Dex battle
marketplace, but also on a variety of other platforms. Given the massive trading volume and profits generated by these NFT markets, this
is a wonderful financial incentive for merely profit-driven users and a chance for next-generation green investment. With NFTs now
selling for millions of dollars, these fees may outweigh the revenue earned by in-game transactions.
            </h1>

          </div>
          
             <img
            data-aos="flip-up"
            src='/DexBattle PNG/DexBattle-nostore.jpg'
            className='mx-10 h-full w-[30%]  border border-gray-400 rounded-lg'/>

           

        </div>
        
        {/* <div  className="w-screen h-auto mt-5 flex justify-center my-5 md:my-8">
          <div><Link className="cursor-pointer" href='/mint'>
            <div
            className="cursor-pointer font-Righteous p-2 bg-gradient-to-br from-brand-03 to-brand-04
            shadow-md rounded-md md:text-2xl text-[20px] text-black hover:shadow-gray-400/50 hover:text-bold tracking-wide uppercase">
                  <span className="cursor-pointer p-4 md:px-20 lg:px-32">Go To Minting portal </span>
            </div>
            </Link>
          </div>

        
        </div> */}
      </div>
    )
}
