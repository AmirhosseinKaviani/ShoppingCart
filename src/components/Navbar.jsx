/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import './Navbar.css'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';

function Navbar({addedToCart,setAddedToCart,addedProducts}){

return(
    <nav>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div className='bag'>
            <Link to="/cart"><TiShoppingCart color='white' fontSize='30px'/></Link>
            {addedToCart > 0 && <span>{addedToCart}</span>}
        </div>
    </nav>
)
}
export default Navbar