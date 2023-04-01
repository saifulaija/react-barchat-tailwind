
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 rounded-md p-4 flex flex-col'>
            <h1 className='text-center'>
                <span className='text-3xl font-extrabold text-purple-800'>{price.monthlyFee}</span>
                <span className='text-2xl text-white'>/mon</span>
               
            </h1>
            <h1 className='text-2xl font-bold text-center'>{price.name}</h1>
            <p className='text-3xl underline text-white'>Features : {}</p>
            {
                price.features.map((feature, index)=> <Feature feature={feature} key={index}></Feature>)
            }
            <button className='w-full bg-green-400 font-bold p-2 hover:bg-green-800 rounded-sm mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCard;