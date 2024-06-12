"use client";

import React from 'react';
import { IoRocket } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";




import { Carousel } from "flowbite-react";
import Image from 'next/image';

const Intro = () => {
    return (
        <>
            <div className="container m-auto">
                <div className="h-60 sm:h-72 xl:h-96 2xl:h-96">
                    <Carousel slideInterval={5000} className='carouselM'>
                        <Image fill={true} src={"/img/slider1.jpg"} priority  alt={"..."} />
                        <Image fill={true} src={"/img/slider2.jpg"} alt={"..."} />
                        <Image fill={true} src={"/img/slider3.jpg"} alt={"..."} />
                        <Image fill={true} src={"/img/slider4.jpg"} alt={"..."} />
                        <Image fill={true} src={"/img/slider5.jpg"} alt={"..."} />
                    </Carousel>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start py-5">
                    <div className="flex items-center justify-center flex-row lg-mb-0 mb-2">
                        <div className='w-[70px] h-[70px] rounded-full mr-3 bg-gray-100 flex items-center justify-center'>
                            <IoRocket className='text-primary text-2xl' />
                        </div>
                        <div className="text-black">
                            <h2 className='text-[20px]'>Free Delivery</h2>
                            <p className='text-gray-500'>We will ship free if your order exceeds $150.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center flex-row lg-mb-0 mb-2">
                        <div className='w-[70px] h-[70px] rounded-full mr-3 bg-gray-100 flex items-center justify-center'>
                            <FaHandshake className='text-primary text-2xl' />
                        </div>
                        <div className="text-black">
                            <h2 className='text-[20px]'>Money Back</h2>
                            <p className='text-gray-500'>If goods have problem we&apos;ll return your good.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center flex-row lg-mb-0 mb-2">
                        <div className='w-[70px] h-[70px] rounded-full mr-3 bg-gray-100 flex items-center justify-center'>
                            <IoChatbubblesSharp className='text-primary text-2xl' />
                        </div>
                        <div className="text-black">
                            <h2 className='text-[20px]'>24/7 Support</h2>
                            <p className='text-gray-500'>Our dedicated support is available 24/7
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}

export default Intro;
