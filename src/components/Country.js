import React from 'react';
//import { withRouter } from 'react-router';
//import './Country.css';
import {Card} from 'antd';

class Country extends React.Component{

    onClick = () =>{
        console.log("OnClick called");
        this.props.onClick(this.props.countryData);
    };
   
    render(){
        const Data = this.props.countryData;
        const styles = {border:"1px solid whitesmoke",borderRadius:"1em",marginTop:"0px",marginLeft:"0px",marginRight:"0px"};
        //console.log(this.props.countryData, Data.name);
        return(
            <div className="card-container" onClick={this.onClick}>
            <Card className="country-container" style={styles} hoverable>
                <div className="country-img">
                    <img src={Data.flag} alt={Data.name} />
                </div>
                <div className="country-details">
                    <h3>{Data.name}</h3>
                    <div className="country-text">
                        <div className="text-title">Population :</div>
                        <div className="text-content">{Data.population}</div>
                    </div>
                    <div className="country-text">
                        <div className="text-title">Region :</div>
                        <div className="text-content">{Data.region}</div>
                    </div>
                    <div className="country-text">
                        <div className="text-title">Capital :</div>
                        <div className="text-content">{Data.capital}</div>
                    </div>
                </div>
            </Card>
            </div>
        );
    }
}
export default Country;