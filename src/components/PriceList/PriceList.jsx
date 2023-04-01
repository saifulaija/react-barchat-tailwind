
import React, { useEffect, useState } from 'react';
import PriceCard from '../Pricecard/PriceCard';
 
const PriceList = () => {
    const [prices, setPrices] = useState([])
    useEffect(()=>{
        fetch(`price.json`)
        .then(res => res.json())
        .then(data=> setPrices(data))
    },[])
    return (
        <div>
            <h1 className='bg-purple-300 text-purple-900 text-center my-12 p-8 text-5xl font-bold'>Awesome Affordable Price</h1>
            <div className=' grid md:grid-cols-3 gap-4 mx-12'>
                {
                    prices.map(price=><PriceCard price={price} key={price.id}></PriceCard>)
                }
            </div>
            
        </div>
    );
};

export default PriceList;