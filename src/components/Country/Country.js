import React from 'react';
import './Country.css'

const Country = (props) => {
    
    const{name,area,flag,population,region,capital,callingCodes}=props.country;
    const handelAddCountry = props.btnHandelClick;
    const buttonStyle= {
        cursor: 'pointer',
        margin: "0,auto",
        padding: "5px",
        backgroundColor:"lightgreen",
        border:"1px solid gray",
        borderRadius:"5px",
    }
    
    return (
        
        <div className="countries">
            <div className="container">
            <h2>This Country is {name}</h2>
            <h3>Capital: {capital}</h3>
            <h4>This {name} area is {area} KM</h4>
            <p>Calling Code: {callingCodes[0]}</p>
            <img style={{width: '90px',height: '50px'}} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Region:{region}</small></p>
            <button className="btn"style={buttonStyle} onClick={() => handelAddCountry(props.country)}>Add Country</button>
            </div>
            
        </div>
    );
};

export default Country;