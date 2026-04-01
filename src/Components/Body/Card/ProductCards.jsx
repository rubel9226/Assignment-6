import React, { use } from 'react';
import Card from './Card';

const CardsProductCards = ({ fetchCardData, selectCard, setSelectedCard }) => {
    const cardData = use(fetchCardData);
    // console.log(cardData);

    return (
        <div className='flex flex-wrap gap-5 mt-10 justify-around 2xl:px-30 container mx-auto'>
        {/* <div className=' bg-amber-100 grid md:grid-cols-2 xl:grid-cols-3 2xl:bg-green-500 2xl:px-30 gap-0 container mx-auto'> */}
            {
                cardData.map((data, index) => <Card key={index} data={data} setSelectedCard={setSelectedCard} selectCard={selectCard} />)
            }
        </div>
    );
};

export default CardsProductCards;