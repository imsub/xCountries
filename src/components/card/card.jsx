
import styles from "./Card.module.css";
export default function Card ({name , img}){
    return(
        <div className={styles.cardContainer}>
            <div className={styles.imgDiv}>
                <img className={styles.flagImg} src={img} alt={name} />
            </div>
            <h3>{name}</h3>
            {/* <div className={styles.flagNameContainer}>
                <h3>India gdfhhsdhset argagag</h3>
            </div> */}
        </div>
    )
}