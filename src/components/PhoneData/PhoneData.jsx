
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const PhoneData = () => {

    const[phone,setPhone] = useState([])

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=> {
            const loadedData= data.data.data;
            console.log(loadedData);
            const phoneData= loadedData.map(phone=>{
                const parts = phone.slug.split('-');
                const price=parseInt(parts[1]);
                const phoneInfo={
                    name : phone.phone_name,
                    price: price
                }
                return phoneInfo
            })
            console.log(phoneData);
            setPhone(phoneData)
        })
    },[])
    return (
        <div className='w-100% h-100%'>
               

               <BarChart width={1000} height={400} data={phone}>
                <Bar dataKey='price' fill='#8884d8'></Bar>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>

            </BarChart>

               
            
        </div>
    );
};

export default PhoneData;