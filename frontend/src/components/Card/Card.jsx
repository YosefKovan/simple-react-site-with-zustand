import "./Card.css";

function Card({product}) {
  return (
    <div>
      <div className="card-header">
        <h2></h2>
      </div>
      <div className="card-body">
        <div>
          <h3 className="product-category"></h3>
          <h2 className="product"></h2>
          <p className="product-description"></p>
        </div>
        <div>
            <span className="price"></span>
            <span className="cart-status"></span>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default Card;
