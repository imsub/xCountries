import Card from "../card/card";
import { useEffect,useState } from "react";
import getCountriesData from "../../api/api";
import styles from "./Grid.module.css";
export default function FlagGrid(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        getCountriesData().then(res =>{
            setData(res);
            console.log(res);
        });
    },[])
    return (
        <div className={styles.gridContainer}>
            {  data.length ? data.map((value) => {
                return <Card name={value.name.common} img={value.flags.png} key={value.name.official} />
                }) : <></>
            }
        </div>
    )
}