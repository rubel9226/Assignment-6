import React from 'react';

const startedData = [
  {
    id: 1,
    name: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
    iconImg: "https://i.ibb.co.com/KQHhrFj/user.png"
  },
  {
    id: 2,
    name: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    iconImg: "https://i.ibb.co.com/Kjkt0L57/package.png"
  },
  {
    id: 3,
    name: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    iconImg: "https://i.ibb.co.com/S4YJRSL9/rocket.png"
  }
];

const Started = () => {
    return (
        <div className='mt-25 bg-[#F9FAFC] py-25'>
            <div className='text-center space-y-4'>
                <h1 className='text-5xl font-extrabold'>Get Started in 3 Steps</h1>
                <p className='text-black/50'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='mt-10 lg:container mx-auto '>
                <div className='flex flex-wrap justify-center gap-10'>
                    {
                        startedData.map((data, index) => {
                            return (
                                <div key={index} className=' bg-white max-w-100 rounded-xl shadow-md p-6 transition-all duration-300 ease-in-out hover:-translate-y-3'>
                                    <div className='flex justify-end'>
                                        <p className='bg-indigo-500 text-white w-10 h-10 rounded-full flex justify-center items-center'>0{data.id}</p>
                                    </div>
                                    <div className='flex flex-col justify-center items-center space-y-4  pt-6 pb-22'>
                                        <div className='bg-[#6D29F8]/15 w-25 h-25 rounded-full flex justify-center items-center'>
                                            <img src={data.iconImg} alt="" />
                                        </div>
                                        <h4 className='text-2xl font-bold'>{data.name}</h4>
                                        <p className='text-black/50 text-center'>{data.description}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default Started;