import React from 'react';
import Product from './Product';

const Cards = () => {
  return (
    <div className='flex-row items-center justify-center'>
      <div className='grid bg-gray-100 items-center justify-center gap-10 p-4 md:grid-cols-3 lg:grid-cols-4'>
        <Product
          id = {1}
          title = "Pink Sling Bag"
          image = "https://image.shutterstock.com/image-photo/handmade-bag-knitted-crochet-leather-600w-1941792079.jpg"
          price = "11.69"
          actualprice = "12.69"
          rating = {3}
        />
        <Product
          id = {2}
          title = "Cap"
          image = "https://image.shutterstock.com/image-photo/hobby-manual-knitting-warm-gray-600w-679294297.jpg"
          price = "11.69"
          actualprice = "12.69"
          rating = {3}
        />
        <Product
          id = {3}
          title = "Purse"
          image = "https://image.shutterstock.com/shutterstock/photos/1706459803/display_1500/stock-photo-gray-red-black-brown-knitted-bag-handmade-crochet-bag-close-up-of-monochrome-handbag-on-table-1706459803.jpg"
          price = "11.69"
          actualprice = "12.69"
          rating = {3}
        />
        <Product
          id = {4}
          title = "Pink Sling Bag"
          image = "https://image.shutterstock.com/image-photo/handmade-bag-knitted-crochet-leather-600w-1941792079.jpg"
          price = "11.69"
          actualprice = "12.69"
          rating = {3}
        />
        <Product
          id = {5}
          title = "Cap"
          image = "https://image.shutterstock.com/image-photo/hobby-manual-knitting-warm-gray-600w-679294297.jpg"
          price = "11.69"
          actualprice = "12.69"
          rating = {3}
        />
        <Product
          id = {6}
          title = "Purse"
          image = "https://image.shutterstock.com/shutterstock/photos/1706459803/display_1500/stock-photo-gray-red-black-brown-knitted-bag-handmade-crochet-bag-close-up-of-monochrome-handbag-on-table-1706459803.jpg"
          price = "11.69"
          actualprice = "12.69"
          rating = {3}
        />
      </div>
    </div>
  );
};

export default Cards;