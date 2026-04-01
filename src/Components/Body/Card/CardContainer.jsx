import React, { useState } from 'react';
import ProductCards from './ProductCards';
import SelectedCard from './SelectedCard';

const CardContainer = ({ fetchCardData, selectCard, setSelectedCard }) => {
    const [toggleBtn, setToggleBtn] = useState(true);

    return (
        <div className='mt-25 bg-[#F9FAFC]'>
            <div className='text-center space-y-4'>
                <h2 className='text-5xl font-extrabold'>Premium Digital Tools</h2>
                <p className='text-gray-500'>Choose from our curated collection of premium digital products <br /> designed to boost your productivity and creativity.</p>
            </div>
            <div className='flex  justify-center mt-4'>
                <div className="flex gap-2 justify-center btn btn-outline px-0 btn-active rounded-full text-[#9514FA] text-center">
                    <button onClick={()=> setToggleBtn(true)} className={`btn bg-transparent rounded-r-full ${toggleBtn && 'rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} `}>Products</button>
                    <button onClick={()=> setToggleBtn(false)} className={`btn bg-transparent rounded-r-full ${toggleBtn || 'rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} `}>Cart ({selectCard.length})</button>
                </div>
            </div>
                
            <div>
                {toggleBtn ? <ProductCards fetchCardData={fetchCardData} setSelectedCard={setSelectedCard} selectCard={selectCard} ></ProductCards> : <SelectedCard  selectCard={selectCard} setSelectedCard={setSelectedCard}></SelectedCard>}
            </div>
        </div> 
    );
};

export default CardContainer;