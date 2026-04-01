import React from 'react';

const WorkFlow = () => {
    return (
        <div className='mt-25 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-25 text-center text-white'>
            <div className='space-y-4'>
                <h1 className='text-4xl font-extrabold'>Ready to Transform Your Workflow?</h1>
                <p className='text-gray-300'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            </div>

            <div className='mt-10 space-y-4'>
                <div className='flex gap-4 justify-center'>
                    <button className="btn rounded-full text-[#7c21f9] bg-white">Explore Products</button>
                    <button className="btn rounded-full btn-outline text-white hover:text-[#7c21f9] ">View Pricing</button>
                </div>
                <p className='text-gray-300'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default WorkFlow;