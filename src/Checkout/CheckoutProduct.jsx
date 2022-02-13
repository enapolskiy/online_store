import style from './CheckoutProduct.module.css'
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import {useStateValue} from "../StateProvider";

const CheckoutProduct = ({id, title, img, price, rating}) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //удаляем из корзины
       dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className={style.checkoutProduct}>
            <img className={style.img} src={img}/>
            <div className={style.info}>
                <p className={style.title}>{title}</p>
                <p className={style.price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={style.rating}>
                    {Array(rating).fill().map((_, i) =>
                        <StarIcon/>)}
                </div>
                <button className={style.button} onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>

    )
}

export default CheckoutProduct;