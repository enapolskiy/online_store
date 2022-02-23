import style from './Payment.module.css'
import {useStateValue} from "../StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import {NavLink, useNavigate} from "react-router-dom";
import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js";
import {useEffect, useState} from "react";
import {getBasketTotal} from "../reducer";
import CurrencyFormat from "react-currency-format";
import axios from "axios";


const Payment = () => {
    const [{basket, user}] = useStateValue();
    const navigate = useNavigate;
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)


    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    console.log('The secret is >>>', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }) .then(({ paymentIntent }) => {
            setSucceeded(true);
            setProcessing(false);
            setError(null);

            navigate.replace('/orders')
        })
    };
    const handleChange = event => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : '')
    };
    return (
       <div className={style.payment}>
           <div className={style.container}>

               <h1>
                   Checkout <NavLink to='/checkout'>{basket?.length} items</NavLink>
               </h1>

               <div className={style.section}>
                   <div className={style.title}>
                       <h3>Delivery Adress</h3>
                   </div>
                   <div className={style.adress}>
                       <p>{user?.email}</p>
                       <p>Tomsk аrеа</p>
                       <p>Kogevnikovo settlement. Lenina str. 50</p>
                   </div>

               </div>
               <div className={style.section}>
                   <div className={style.title}>
                       <h3>Review items and devilery</h3>
                   </div>
                   <div className={style.items}>
                       {basket.map(item => (
                           <CheckoutProduct
                               id={item.id}
                               title={item.title}
                               img={item.img}
                               price={item.price}
                               rating={item.rating}
                           />
                       ))
                       }
                   </div>

               </div>
               <div className={style.section}>
                   <div className={style.title}>
                       <h3>Payment Method</h3>
                   </div>
                   <div className={style.details}>
                       <form className={style.form} onSubmit={handleSubmit}>
                           <CardElement onChange={handleChange}/>
                           <div className={style.priceContainer}>
                               <CurrencyFormat

                                   renderText={(value) => (
                                       <>
                                           <p>Subtotal ({basket.length} items) :
                                               <strong>{value}</strong>
                                           </p>
                                           <small className={style.subtotal__gift}>
                                               <input className={style.input} type='checkbox'/>This order contains a
                                               gift
                                           </small>
                                       </>
                                   )}
                                   decimalScale={2}
                                   value={getBasketTotal(basket)}
                                   displayType={"text"}
                                   thousandSeparator={true}
                                   prefix={"$"}
                               />
                               <button className={style.buyButton} disabled={processing || disabled || succeeded}>
                                   <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                               </button>

                           </div>
                           {error && <div>{error}</div>}
                       </form>
                   </div>

               </div>
           </div>

       </div>
    )
}
export default Payment;