import style from './Subtotal.module.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../reducer";
import {useNavigate} from "react-router-dom";

const Subtotal = () => {
    const [{basket}] = useStateValue();
    const navigate = useNavigate();

    return (

        <div className={style.subtotal}>
            <CurrencyFormat

                renderText={(value)=> (
                    <>
                    <p>Subtotal ({basket.length} items) :
                        <strong>{value}</strong>
                    </p>
                        <small className={style.subtotal__gift}>
                            <input className={style.input} type='checkbox'/>This order contains a gift
                        </small>
                    </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button className={style.button} onClick={event => navigate('/payment')}>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal;