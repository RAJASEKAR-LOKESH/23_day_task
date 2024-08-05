import Fancy from "./Fancy"
import PopularItem from "./PopularItem"
import SaleItem from "./SaleItem"
import SpecialItem from "./SpecialItem"

const Card=()=>{
    return(
        <>
        <div className="maindiv">
            <Fancy dollar={"$40.00 - $80.00"}/>
            <SpecialItem actual={"$20.00"} discount={"$18.00"}/>
            <SaleItem actual={"$50.00"} discount={"$25.00"}/>
            <PopularItem  actual={"$50.00"}/>
            <SaleItem actual={"$50.00"} discount={"$25.00"}/>
            <Fancy dollar={"$40.00 - $80.00"}/>
            <SpecialItem actual={"$20.00"} discount={"$18.00"}/>
            <PopularItem  actual={"$50.00"}/>
        </div>
        </>
        
    )
}
export default Card