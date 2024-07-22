import Card from "../card/card";
import styles from "./Grid.module.css";
export default function FlagGrid(props){
    const {data} = props;
    return (
        <div className={styles.gridContainer}>
            { 
            data.searchData.map((value) => {
                return <Card name={value.name.common} img={value.flags.png} key={value.name.official} />
            })
            }
        </div>
    )
}