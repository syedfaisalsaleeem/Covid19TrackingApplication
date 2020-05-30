import axios from 'axios';
const url="https://covid19.mathdro.id/api";
const url2="https://covid19.mathdro.id/api/daily";
export  const fetchData = async (country)=>{
    let changeableUrl=url;
    if (country){
        changeableUrl=`${url}/countries/${country}`
    }
    try{
        //const response = await axios.get(url);
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);
        //return response;
        // const modifiedData ={
        //     confirmed:data.confirmed,
        //     recovered:data.recovered,
        //     deaths:data.deaths,
        //     lastUpdate:data.lastUpdate
        // }
        return({confirmed,recovered,deaths,lastUpdate})

    }
    catch(error){

    }
    

}
export const fetchDailyData = async ()=>{
    try{
        //const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url2);
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));
        return modifiedData;

    }
    catch(error){

    }
}
 export const fetchcountries = async () =>{
     try{
        // const response=await axios.get(`${url}/countries`)
        // console.log(response)
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => (
            country.name)
            )

        
     }
     catch(error){

     }
 }