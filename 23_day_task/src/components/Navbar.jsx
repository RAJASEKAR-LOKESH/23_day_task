const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="nav-list"><a href="#">Start Bootstrap</a></div>
            <div className="nav-list1"><a href="#">Home</a></div>
            <div className="nav-list1"><a href="#">About</a></div>
            <div className="nav-list1">
                <ul>
                <li className="listitems1"><a href="#">Shop</a>
                    <ul className="listitems3">
                    <li className="listitems2 "><a href="#">All Products</a></li>
                    <li className="listitems2"><a href="#">Popular Items</a></li>
                    <li className="listitems2"><a href="#">New Arrivals</a></li>
                    </ul>
                </li>
                </ul>
                </div>
                <button className="btn">🛒 Cart  <span className="spntag">0</span></button>
        </div>
    )
}
export default Navbar