import React from 'react';

const Status = () => {
    return (
        <div className='w-full p-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA] '>
            
            <div className=' container mx-auto xl:px-30'>            
                <div className="flex w-full flex-col lg:flex-row justify-between">
                    <div className="card rounded-box text-center">
                        <h2 className='text-5xl font-extrabold text-white'>50K+</h2>
                        <p className='text-2xl font-medium text-white/80 mt-3'>Active Users</p>
                    </div>
                    <div className="divider lg:divider-horizontal before:bg-gray-400 after:bg-gray-400"></div>
                    <div className="card rounded-box text-center text-white">
                        <h2 className='text-5xl font-extrabold'>200+</h2>
                        <p className='text-2xl font-medium text-white/80 mt-3'>Premium Tools</p>
                    </div>
                    <div className="divider lg:divider-horizontal before:bg-gray-400 after:bg-gray-400"></div>
                    <div className="card rounded-box text-center text-white">
                        <h2 className='text-5xl font-extrabold'>4.9</h2>
                        <p className='text-2xl font-medium text-white/80 mt-3'>Rating</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Status;