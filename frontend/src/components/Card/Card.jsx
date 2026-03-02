import "./Card.css";
import useCart from "../../store/useCart";

function Card(props) {
  
  const { id, name, price, category, description, image } = props;

  const items = useCart((state) => state.items);
  const addItem = useCart((state) => state.addItem);
  const removeItem = useCart((state) => state.removeItem);

  
  const inCart = items.find((item)=>String(item.id) === String(id))

  
  return (
    <div className="card">
      <div className="card-header">
        <h2>{image}</h2>
      </div>
      <div className="card-body">
        <div>
          <h3 className="product-category">{category}</h3>
          <h2 className="product-name">{name}</h2>
          <p className="product-description">{description}</p>
        </div>
        <div>
          <div className="price-section">
            <span className="price">${price}</span>
            <span className="cart-status">
              {inCart ? "In cart" : "Not in cart"}
            </span>
          </div>
          <div>
            {!inCart ? 
            <button className="card-btn-add" onClick={() => addItem(props)}>
              Add To Cart
            </button> : 
            <button className="card-btn-remove" onClick={() => removeItem(props)}>
              Remove from cart
            </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
