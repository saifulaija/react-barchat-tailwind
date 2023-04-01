
import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'


const Feature = ({feature}) => {
    return (
        <div className='flex items-center ml-2'>
           <span className='w-4 me-2 text-green-700' > <CheckBadgeIcon ></CheckBadgeIcon></span>
           <span> {feature}</span>
        </div>
    );
};

export default Feature;