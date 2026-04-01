import React from 'react';
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='py-10 bg-neutral text-neutral-content'>
            <div className='container mx-auto'>

                <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                    <nav className='w-80 space-y-4'>
                        <h1 className=" text-5xl font-bold">DigiTools</h1>
                        <p className=''>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templates</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Press</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social Links</h6>
                        <div className='flex text-2xl gap-3'>
                            <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                                <TbBrandInstagramFilled className='text-black/90' />
                            </div>
                            <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                                <FaFacebookSquare className='text-black/90' />
                            </div>
                            <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                                <FaXTwitter className='text-black/90' />
                            </div>
                        </div>
                    </nav>
                </div>
                
                <hr className='text-gray-800' />
                <div className='mt-8 flex justify-between'>
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by MD RUBEL HOSSEN</p>
                    </aside>

                    <div className='space-x-4 capitalize'>
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms of Service</a>
                        <a className="link link-hover">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;