import React, {useEffect, useState, useContext} from 'react';
import Container from '../elements/Container';
import  HotelCard from './HotelCard';
import {FilterContext} from '../states/FilterContext';
import {hotelsData} from '../data';


function Results() {
     //context
     const {filterValues} = useContext(FilterContext);
     const [filteredList, setFilteredList] = useState(hotelsData);
 
     useEffect(()=>{
        const filterByCountry = filteredList.filter(function(country){
            return country.country === filterValues.country;
        });

        if(filterByCountry){
            //setFilteredList(filterByCountry);
            console.log(filterByCountry);
            
        }
        
    }, [filterValues.country]);
    

     console.log(filteredList);


    
    return (
        <div>
            <Container>
                <h1>Resultados</h1>
            </Container>
            <Container d_flex wrap="true">
                <HotelCard hotelsData={filteredList}/>
            </Container>    
        </div>
    )
}

export default Results
