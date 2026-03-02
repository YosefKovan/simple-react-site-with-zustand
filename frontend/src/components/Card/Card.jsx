import "./Card.css";
import useCart from "../../store/useCart";

function Card({ id, name, price, category, description, image }) {
  const items = useCart((state) => state.items);
  const addItem = useCart((state) => state.addItem);

  function handleClick(id) {
    if (!items.includes(id)) {
      addItem(id);
    }
  }

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
              {items.includes(id) ? "In cart" : "Not in cart"}
            </span>
          </div>
          <div>
            <button className="card-btn" onClick={() => handleClick(id)}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
