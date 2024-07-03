import Card from "../card/card";
import { useEffect,useState } from "react";
import getCountriesData from "../../api/api";
import styles from "./Grid.module.css";
export default function FlagGrid(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        getCountriesData().then(res =>{
            setData(res);
        }).catch(err => console.error("Error fetching data: ",err.message));
    },[])
    return (
        <div className={styles.gridContainer}>
            { 
            data.map((value) => {
                return <Card name={value.name} img={value.flag} key={value.abbr} />
            })
            }
        </div>
    )
}