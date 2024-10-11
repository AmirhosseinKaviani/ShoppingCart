/* eslint-disable react/prop-types */
import Navbar from "../../components/Navbar.jsx"
import ProductList from "../../components/Products/ProductList.jsx"


function Homepage({addedToCart,setAddedToCart,addedProducts,setAddedProducts}){
    return(
        <>
        <Navbar addedToCart={addedToCart} setAddedToCart={setAddedToCart} addedProducts={addedProducts}/>
        <ProductList addedToCart={addedToCart} setAddedToCart={setAddedToCart} addedProducts={addedProducts} setAddedProducts={setAddedProducts}/>
        </>
    )
}
export default Homepage