import React from 'react'
import { CDN_URL } from '../utils/constants'

const ItemList =({items})=> {
  return (
    <div>
      {items.map(item => 
        <div key={item?.card?.info?.id} className='flex justify-between items-center mb-7 border-b-4 pb-3'>
            <div className='flex flex-col w-3/4'>
            <div className='flex text-lg font-bold'>
            <span >{item?.card?.info?.name} </span> 
            <span> - ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
            </div>

            <p className='mt-2'>{item?.card?.info?.description}</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
            <img src={CDN_URL+item?.card?.info?.imageId} className='w-36 relative rounded-sm' alt="img" />
            <button className='bg-yellow-500 py-1 px-7 max-w-fit rounded-md text-white font-bold text-sm absolute mb-2 hover:bg-black'>Add +</button>
            </div>
        </div>
    )}
    </div>
  )
}

export default ItemList
