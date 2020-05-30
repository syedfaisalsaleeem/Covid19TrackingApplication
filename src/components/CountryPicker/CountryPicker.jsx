import React,{useState,useEffect} from 'react';
import { NativeSelect,FormControl} from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import {fetchcountries} from "../../api";

const CountryPicker =({handleCountryChange})=>{
    const [fetchCountries1,setFetchCountries] =useState([]);
    useEffect(()=>{
        const fetchapi=async()=>{
            setFetchCountries(await fetchcountries());
        }
        fetchapi();
    },[setFetchCountries]);
    console.log(fetchCountries1)
    return(
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value=""> Global</option>
    {fetchCountries1.map((country,i) => <option key={i} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>

    )
}
export default CountryPicker;