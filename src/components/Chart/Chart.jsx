import React,{useState,useEffect} from 'react';
import {fetchDailyData} from "../../api";
import {Line,Bar} from 'react-chartjs-2';
import styles from "./Chart.module.css"
const Chart =({data,country})=>{
    const [dailyData,setDailyData]=useState([]);
    useEffect( ()=>{
        const fetchApi =async ()=>{
            setDailyData(await fetchDailyData());
        }
    
        fetchApi();
    },[]);

const lineChart=(
        dailyData.length
        ?(
        <Line
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:"infected",
                borderColor:"green",
                fill:true
            },{
                data:dailyData.map(({deaths})=>deaths),
                label:"death",
                borderColor:"red",
                backgroundColor:"yellow",
                fill:true
            }],
        }}
        />) : null
        
        );
        console.log(data.confirmed,data.recovered,data.deaths)
const barChart =(
    data.confirmed
    ? (<Bar
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label:'People',
                backgroundColor:[
                    'green',
                    'red',
                    'yellow'
                ],
                data:[data.confirmed.value,data.recovered.value,data.deaths.value]
            }],
            
        }}
        options={{
            legend:{ display:false},
            title:{ display:true,text:"Current"}
        }}
    
    />

    ):null
)    

    return(
        <div className={styles.container}>
            {country ? barChart:lineChart}
            
        </div>
            

    )
}
export default Chart;