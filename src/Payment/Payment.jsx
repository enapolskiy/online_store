import style from './Payment.module.css'
import {useStateValue} from "../StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import {NavLink} from "react-router-dom";

const Payment = () => {
    const [{basket, user}] = useStateValue()
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

                   </div>

               </div>
           </div>

       </div>
    )
}
export default Payment;