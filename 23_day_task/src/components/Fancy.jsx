const Fancy=(props)=>{
    return(
        <div className="carddiv">
        <div className="topcard">
            <img className="imgtag" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
        </div>
        <div className="product">
            <h2>Fancy Product</h2>
            <p className="dollar">{props.dollar}</p>
        </div>
        <div className="product">
            <button className="pro-btn">View options</button>
        </div>
    </div>
    )
}
export default Fancy