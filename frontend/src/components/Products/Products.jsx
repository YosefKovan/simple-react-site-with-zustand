import "./Products.css"
import json from "../../../public/products.json";
import Card from "../Card/Card";

function Products(){
    
    const [products, setPorducts] = useState(json);


    return(
        <main className="products-section">
            {products.map((product)=>(<Card key={product.id} product={product}/>))}
        </main>
    )
}

export default Products;