import "./CartPage.css"
import useCart from "../../store/useCart";
import CartItem from "../../components/CartItem/CartItem";

function CartPage(){
    
    const items = useCart((state)=>state.items);
    const clearItems = useCart((state)=>state.clearItems);
    
    return(
        <>
        <main>
            <section className="cart-section">
                <div className="cart-items">
                    {items.map((item)=>{
                        return (<CartItem {...item}/>)
                    })}
                </div>
                <div className="summary-section">
                    <h2>Order Summary </h2>
                    <ul>
                        <li>Total items : {items.length}</li>
                        <li>Total Price : {items.reduce((accumulator, currentObj) => accumulator + currentObj.price, 0)}</li>
                    </ul>
                    <button onClick={clearItems}>Clear Cart</button>
                </div>
            </section>

        </main>
        </>
    )
}

export default CartPage;