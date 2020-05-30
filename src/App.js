import React from 'react';


import {Cards,Chart,CountryPicker} from './components/index'
import styles from "./App.module.css";
import {fetchData} from './api';
class App extends React.Component{
    state={
        data:{},
        tree:{},
        country:""
    }
    async componentDidMount(){
        const edata = await fetchData();
        //console.log(edata);
        this.setState({data:edata})
        //this.setState({tree:edata})
//<Cards data={this.state.edata}/>
    }
    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData,country:country})
        console.log(fetchedData);
    }
    render(){
        const {data,country}=this.state;
        const {tree1}=this.state;
        return(
        <div className={styles.container}>
            <h1> Covid-19 Application</h1>
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>
            
        </div>
        )
    }
}
export default App;