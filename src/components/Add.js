import React,{useEffect, useState} from 'react'
import axios from 'axios';
function Add() {
    const[data,setData]=useState([])

   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://interview-plus.onrender.com/api/items');
        setData(response.data);
      } catch (error) {
    console.log(error.message);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <>
    <h1 className='text-center font-bold my-3'>Choose your items...</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-4 mt-5'>
    {
        data.map((item)=>(
                 
          
            <div className="max-w-xs bg-white rounded-xl overflow-hidden shadow-md">
            <img className="object-cover object-center w-full h-56" src={item.image} alt="Product Image" />
            <div className="p-4">
              <h2 className="text-center text-xl font-semibold mb-2">{item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}</h2>
              <p className="text-center text-gray-600 mb-4">{item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description}</p>
              <div className="flex justify-center mb-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 1a1 1 0 0 1 .74.336l2.932 3.197a1 1 0 0 1 .127 1.128l-.878 3.927a1 1 0 0 1-.545.667l-3.645 1.737a1 1 0 0 1-1.156-1.532L9.2 9.162a1 1 0 0 1 .3-.9l3.3-2.847a1 1 0 0 1 1.372.185l1.306 1.517a1 1 0 0 1-.278 1.418l-2.754 1.795a1 1 0 0 1-.41.102l.89 3.996a1 1 0 0 1-1.465 1.054l-3.494-2.313a1 1 0 0 1-.406-.597L5.663 5.73a1 1 0 0 1 .172-1.187l2.787-2.67A1 1 0 0 1 9.8 2.111L10 1zm-1.5 14a1 1 0 0 1-1-1V7.883L5.45 6.416a1 1 0 0 1-.363-1.383l1.047-1.894 1.616-.161a1 1 0 0 1 .522.147l2.255 1.42 2.289-1.378a1 1 0 0 1 1.028.003l2.258 1.378 2.255-1.42a1 1 0 0 1 .522-.147l1.616.16 1.048 1.894a1 1 0 0 1-.363 1.383l-3.05 1.467-.624 3.05a1 1 0 0 1-.97.81l-3.388.337-1.518 2.937a1 1 0 0 1-.895.548l-2.882.277z"/>
                  </svg>
                  <span className="text-gray-700">4.5</span>
                </div>
              </div>
              <p className="text-center text-lg font-semibold text-gray-800 mb-4">$99.99</p>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300">Buy Now</button>
            </div>
          </div>
         

        ))
    }
    </div>
    </>
  )
}

export default Add