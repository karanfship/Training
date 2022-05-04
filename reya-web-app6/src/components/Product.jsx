import React from 'react'
import { useStateValue } from '../StateProvider';

function Product({ id, title, image, rating, price, actualprice }) {
  const [ state, dispatch ] = useStateValue('');
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        actualprice: actualprice,
        rating: rating,
      },
    });
  };
  return (
    <div className="card">
      <img className="w-full h-full object-cover" src={image} alt={title} />
      <div className="p-5 flex flex-col gap-3">
        <h2 className='product-title'>{title}</h2>
        <p className="text-xl font-bold">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='flex items-center gap-2 mt-1'>
          <p className="text-sm line-through opacity-50">
            <small>$</small>
            <strong>{actualprice}</strong>
          </p>
          <span className='discount-percent'>
            save {(actualprice - price) / 100}%
          </span>
        </div>

        <div className="flex items-center mt-1 pt-3 justify-start">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p className='text-yellow-400'>🌟</p>
            ))}
        </div>

        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 content-center' onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  )
}

export default Product