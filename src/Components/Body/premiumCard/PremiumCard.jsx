import React from 'react';

const PremiumCard = () => {


    return (
        <div>
            <div className='text-center mt-25'>
                <h1 className='text-5xl font-extrabold'>Simple, Transparent Pricing</h1>
                <p className='text-black/60 mt-2'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='flex container mx-auto justify-between w-11/12 mt-10'>

                {/* card 1 */}
                <div className="card w-96 bg-base-200 shadow-sm ">
                    <div className="card-body">
                        
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p>Perfect for getting started</p>
                        </div>

                        <div className='mt-6 text-4xl font-bold'>
                            <span className="">$0/<span className='text-black/50 text-2xl font-normal'>Month</span></span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-primary btn-block">Get Started Free</button>
                        </div>
                    </div>
                </div>

                
                {/* card 2 */}
                <div className="card w-96 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-sm ">
                    <div className="card-body">
                        
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p>Best for professionals</p>
                        </div>

                        <div className='mt-6 text-4xl font-bold'>
                            <span className="">$29/<span className='text-gray-200 text-2xl font-normal'>Month</span></span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn rounded-full btn-block">Start Pro Trial</button>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div className="card w-96 bg-base-200 shadow-sm ">
                    <div className="card-body">
                        
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p>For teams and businesses</p>
                        </div>

                        <div className='mt-6 text-4xl font-bold'>
                            <span className="">$99/<span className='text-black/50 text-2xl font-normal'>Month</span></span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-primary btn-block">Contact Sales</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PremiumCard;