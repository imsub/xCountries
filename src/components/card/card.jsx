
import "./Card.css";
export default function Card ({name , img}){
    return(
        <div className="countryCard">
            <div className="imgDiv">
                <img className="flagImg" src={img} alt={name} />
            </div>
            <h2>{name}</h2>
        </div>
    )
}