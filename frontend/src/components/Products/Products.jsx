import "./Products.css"
import json from "../../../public/products.json";
import Card from "../Card/Card";
import { useState } from "react";

function Products(){
    
    const [products, setPorducts] = useState(json);


    return(
        <main className="products-section">
            {products.map((product)=>(<Card key={product.id} {...product}/>))}
        </main>
    )
}

export default Products;