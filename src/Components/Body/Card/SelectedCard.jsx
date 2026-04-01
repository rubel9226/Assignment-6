import React from 'react';
import { toast } from 'react-toastify';
import { LuShoppingCart } from "react-icons/lu";


const SelectedCard = ({setSelectedCard, selectCard}) => {

    // This idea from chatgpt AI.
    const totalPrice = selectCard.reduce((total, data) => {
        return total + data.price;
    }, 0);
    console.log(totalPrice);

    const handleProceed = () => {
        setSelectedCard([]);
        toast.success( <span className="text-green-500 mr-2 text-xl font-bold"> Your all Cart is Proceed!</span> );

    }


    return (
        <div className='text-5xl container w-11/12 mx-auto bg-indigo-200 p-5 rounded-md mt-10'>
            <h4 className='text-2xl font-bold'>Your Cart</h4>
            {
                selectCard.length === 0 
                  ? 
                  <div className='w-full h-50 flex flex-col justify-center items-center'>
                    <LuShoppingCart className='text-4xl font-bold text-black/50' />
                    <p className='text-2xl'>Your cart is empty</p>
                  </div>
                  : 
                  <div>
                <div className='space-y-4'>
                    {
                        selectCard.map((data, index) => {
                            const {name, price, iconImg} = data;

                            const handleDelete = () => {
                                const removeSelectedCard = selectCard.filter(item => item.name != data.name);
                                setSelectedCard(removeSelectedCard);
                                toast.success( <div> <span className="text-green-500 mr-2 text-xl font-bold"> {data.name} </span> remove from card </div> );
                            }
                            
                            return(
                                <div key={index} className='bg-base-300'>
                                    <div className='flex justify-between items-center px-10 py-5'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <img src={iconImg} alt="" />
                                            </div>
                                            <div className='space-y-3'>
                                                <h4 className='text-xl font-semibold'>{name}</h4>
                                                <p className='font-medium text-[16px] text-black/50'>${price}</p>
                                            </div>
                                        </div>
                                        <button onClick={handleDelete} className='text-red-500 font-bold btn'>Remove</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='space-y-6 mt-6'>
                    <div className='text-[24px] font-semibold flex justify-between'>
                        <h4>Total: </h4>
                        <p className='text-2xl font-bold'>${totalPrice}</p>
                    </div>
                    <button onClick={handleProceed} className={`btn rounded-full btn-block btn-primary text-white`}>Proceed to Checkout</button>
                </div>
            </div>
            }
            
            
        </div>
    );
};

export default SelectedCard;