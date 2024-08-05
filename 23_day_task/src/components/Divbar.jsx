
const Divbar=()=>{
    
    return(
        <>
        <div className="divbar">
            <button className="overview">← Overview Page</button>
            <div className="icon">🖥️</div>
            <div className="desktop">Desktop View</div>
            <div className="icon">⬛</div>
            <div className="icon">📱</div>
            <img className="image" src="/github.svg" alt="" />
            <button className="download-free"><img  className="download" src="/download.png" alt="" /> Free Download</button>
            <button onClick={onclose} className="X-btn">X</button>        
        </div>
        </>
    )
}
export default Divbar