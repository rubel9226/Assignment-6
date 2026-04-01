import React from 'react';

const WorkFlow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-25 text-center'>
            <div className='space-y-4'>
                <h1 className='text-4xl font-extrabold'>Ready to Transform Your Workflow?</h1>
                <p className='text-black/60'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>

            <div className='mt-10 space-y-4'>
                <div className='flex gap-4 justify-center'>
                    <button class="btn rounded-full text-[#7c21f9] bg-white">Explore Products</button>
                    <button class="btn rounded-full btn-outline text-white hover:text-[#7c21f9] ">View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default WorkFlow;