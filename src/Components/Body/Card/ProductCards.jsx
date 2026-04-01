import React, { use } from 'react';
import Card from './Card';

const CardsProductCards = ({ fetchCardData, selectCard, setSelectedCard }) => {
    const cardData = use(fetchCardData);
    // console.log(cardData);

    return (
        <div className='flex flex-wrap justify-center gap-5 mt-10 2xl:px-30 lg:container mx-auto'>
            {
                cardData.map((data, index) => <Card key={index} data={data} setSelectedCard={setSelectedCard} selectCard={selectCard} />)
            }
        </div>
    );
};

export default CardsProductCards;