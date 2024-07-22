
import "./Card.css";
export default function Card ({name , img}){
    return(
        <div className="countryCard">
                <img className="flagImg" src={img} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}