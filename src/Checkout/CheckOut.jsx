import style from './Checkout.module.css'
import Subtotal from "./Subtotal";

const CheckOut = () => {
    return (
        <div className={style.checkout}>
            <div className={style.checkout_left}>
                <img className={style.checkout__img}
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/img16/VPC/1008588_VPC_MB_1242x200_seeallcoupons._V278835038_.jpg'/>
                <div className={style.checkout__title}>
                    <h1>Your shopping bascet</h1>
                </div>
            </div>
            <div className={style.checkout__right}>
                <Subtotal />
                <h2 className={style.text}>The subtotal will go here</h2>
            </div>

        </div>
    )
}

export default CheckOut;