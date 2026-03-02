import "./CartItem.css"
import useCart from "../../store/useCart";

function CartItem(props){
     
    const { id, name, price, category, description, image } = props

  const removeItem = useCart((state) => state.removeItem);

    return(
        <div className="cart-item">
            <div>
                <h3>{category}</h3>
                <h2>{name}</h2>
                <span className="price">${price}</span>
            </div>
            <div>
                <button onClick={()=>removeItem(props)}>Remove from cart</button>
            </div>
        </div>
    )

}

export default CartItem;