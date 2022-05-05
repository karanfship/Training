import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import axios from "../axios";
import { db } from '../firebase';
import { doc , setDoc } from 'firebase/firestore'

function Payment() {
    const navigate = useNavigate();
    const[{basket, user}, dispatch] = useStateValue()
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method:'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    },[basket]);

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            const ref = doc(db, "users", user?.uid, "orders", paymentIntent.id);
            setDoc(ref, {
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created
            });

            dispatch({
              type: "EMPTY_BASKET"
            });

            navigate('/orders');
        })
    }
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error: "");
    }

    return (
      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout ({<Link to="/checkout">{basket?.length} items</Link>})
          </h1>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  actualprice={item.actualprice}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </div>
                <div>
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                  {error && <div>{error}</div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Payment
