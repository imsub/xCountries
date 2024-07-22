
import styles from "./Card.module.css";
export default function Card ({name , img}){
    return(
        <div className={styles.countryCard}>
                <img className={styles.flagImg} src={img} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}