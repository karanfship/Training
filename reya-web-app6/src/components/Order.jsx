import React from 'react'
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './Order.css'
import moment from 'moment';
import { useStateValue } from '../StateProvider';

function Order({ order }) {
    const [{basket}, dispatch] = useStateValue();
    return (
      <div className="order">
        <h4>Order</h4>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mm")}</p>

        <p className="order__id">
          <small>{order.id}</small>
        </p>
        {order.data.basket?.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            actualprice={item.actualprice}
            rating={item.rating}
            hidebutton={true}
          />
        ))}
        <p className='order__total'>
          <CurrencyFormat
            renderText={(value) => (
              <p>
                {/* Part of the homework */}
                Order Total: <strong>{value}</strong>
              </p>
            )}
            decimalScale={2}
            value={order.data.amount/100} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </p>
      </div>
    );
}

export default Order
