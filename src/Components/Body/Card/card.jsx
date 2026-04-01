import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";

const Card = ({ data, selectCard, setSelectedCard }) => {
    const {name, price, description, tag, period, features, iconImg} = data;
    
    const [selectBtn, setSelectBtn] = useState(false);


    const handleSelectedCard = () => {
        
        const filterNewCard = selectCard.filter(selectData => data.name === selectData.name);
        console.log(filterNewCard);

        if(filterNewCard.length === 0){
            const newCard = [...selectCard, data]
            // console.log(newCard);
            toast.success( <div> <span className="text-green-500 mr-2 text-xl font-bold"> {data.name} </span> is selected! </div> );
            setSelectedCard( newCard );
            setSelectBtn(true);
        }else{
            toast.warning( <div> <span className="text-red-500 mr-2 text-xl font-bold"> {data.name} </span> already selected! </div> );
        }
        
    }

  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-sm border-2 border-black/5 transition-all duration-300 ease-in-out hover:-translate-y-3 hover:shadow-xl hover:bg-indigo-100">
            <div className="card-body flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <div className="w-15 h-15 border border-black/20 rounded-full flex items-center justify-center">
                        <img className="w-8" src={iconImg} alt="" />
                    </div>
                    <span className={`px-4 py-1.5 rounded-full font-medium ${
                    tag === 'best seller' ? 'bg-[#FEF3C6] text-[#BB4D00]' 
                    : tag === 'popular' ? 'bg-[#E1E7FF] text-[#7127F8]' 
                        : tag === 'new' ? 'bg-[#DBFCE7] text-[#083E]' : 'text-bold'}`}>{tag}</span>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p>{description}</p>
                </div>
                <span className="text-xl"><span className="text-2xl font-bold">${price}</span>/{period}</span>
                <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
                    {
                        features.map((feature, index) => <div key={index} className="flex gap-2"> <FaCheck className="text-green-400" /> <p>{feature}</p></div>)
                    }
                </ul>
                <div className="mt-6">
                    <button onClick={handleSelectedCard} className={`btn rounded-full btn-block ${selectBtn ? 'btn-success' : 'btn-primary'}  text-white`}>{selectBtn ? <> <FaCheck /> Add to Cart! </> : 'Bye Now'}</button>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Card;
