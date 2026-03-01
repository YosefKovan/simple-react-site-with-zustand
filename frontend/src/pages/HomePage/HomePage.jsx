import Header from "../../components/Header/Header"
import "./HomePage.css"
import Products from "../../components/Products/Products";

function HomePage(){

    return(
        <div className="home-page">
            <Header/>
            <Products/>
        </div> 
    )
}

export default HomePage;