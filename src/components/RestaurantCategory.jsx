import React, { useState } from 'react'
import ItemList from './ItemList'

function RestaurantCategory({ data, showItems, setShowIndex }) {
    console.log(data)

    const handleAccordian =()=> {
      setShowIndex()
    }

  return (
    //Accordian  

    <div>
      <div className='p-6  bg-gray-100 rounded-lg mt-5 shadow-lg w-6/12 mx-auto flex flex-col'> 
        <div className='flex justify-between cursor-pointer' onClick={handleAccordian}>
        <span className='text-2xl font-bold'>{data?.title} ({data?.itemCards?.length})</span>
        <span className='text-xl'>{showItems?"▲":'▼'}</span>
        </div>
        <div className="mt-4">
        {showItems&&
        <ItemList items={data?.itemCards}/>}
        </div>
      </div> 
    </div>
  )
}

export default RestaurantCategory
