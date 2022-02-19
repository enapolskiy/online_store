import style from './Checkout.module.css'
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "../StateProvider";


const CheckOut = () => {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className={style.checkout}>
            <div className={style.checkout_left}>
                <img className={style.checkout__img}
                     src='https://images-eu.ssl-images-amazon.com/images/G/31/img16/VPC/1008588_VPC_MB_1242x200_seeallcoupons._V278835038_.jpg'/>
                <div className={style.checkout__title}>
                    <h3>Hello,  {user.email}</h3>
                    <h1>Your shopping basket</h1>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className={style.checkout__right}>
                <Subtotal/>
                <h2 className={style.text}>The subtotal will go here</h2>
            </div>

        </div>
    )
}

export default CheckOut;