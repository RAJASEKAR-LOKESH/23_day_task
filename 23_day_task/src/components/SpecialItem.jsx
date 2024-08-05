const SpecialItem=(props)=>{
    return(
        
            <div className="carddiv">
                <div className="topcard">
                    <div className="floatingsale">Sale</div>
                    <img className="imgtag" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                </div>
                <div className="product">
                    <h2>Special Item</h2>
                    <p className="star">⭐⭐⭐⭐⭐</p>
                    <p className="dollar"><strike className="strike">{props.actual}</strike> {props.discount}</p>
                </div>
                <div className="product">
                    <button className="fancy-btn">Add to Cart</button>
                </div>
            </div>
       
    )
}
export default SpecialItem