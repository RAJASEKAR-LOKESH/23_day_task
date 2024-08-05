const PopularItem=(props)=>{
    return(
        <div className="carddiv">
                <div className="topcard">
                    <img className="imgtag" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                </div>
                <div className="product">
                    <h2>Popular Item</h2>
                    <p className="star">⭐⭐⭐⭐⭐</p>
                    <p className="dollar">{props.actual}</p>
                </div>
                <div className="product">
                    <button className="fancy-btn">Add to Cart</button>
                </div>
            </div>
    )
}
export default PopularItem