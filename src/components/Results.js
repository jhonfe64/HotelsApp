import React, {useEffect, useState, useContext} from 'react';
import Container from '../elements/Container';
import  HotelCard from './HotelCard';
import {FilterContext} from '../states/FilterContext';
import {hotelsData} from '../data';
import NotFound from './NotFound';

//const today = new Date()
//console.log(today.valueOf() + 432000000);
const fecha = new Date();
// availabilityFrom: today.valueOf(),
// availabilityTo: today.valueOf() + 432000000, // 5 days
//{dateFrom: "", dateTo: "", country: "Chile", price: "", large: true}


//cuando carga filteredList es la lista inicial para enviarla
function Results() {
    //context
    const {filterValues} = useContext(FilterContext);
    const [filteredList, setFilteredList] = useState([]);


    useEffect(()=>{

        console.log(filterValues);

        let filteredHotels = hotelsData.filter((country)=>{
            if(filterValues.country !== ''){
                return country.country === filterValues.country;
            }else{
                return country;
            }
        }).filter((price)=>{
            if(filterValues.price !== ''){
                return price.price === filterValues.price;
            }else{
                return price;
            }
        }).filter((hotelSize)=>{
            if(filterValues.large === 'Pequeño' && filterValues.large !== ''){
                return hotelSize.rooms <=  10;
            }else if(filterValues.large === 'Mediano' && filterValues.large !== ''){
                return hotelSize.rooms > 10 && hotelSize.rooms <= 20;
            }else if(filterValues.large === 'Grande' && filterValues.large !== ''){
                return hotelSize.rooms > 20;
            }
            return hotelSize;
        })
        setFilteredList(filteredHotels);
        //console.log(filteredHotels)
        
    }, [filterValues.country, filterValues.price, filterValues.dateFrom, filterValues.dateTo, filterValues.large]);



    /////////////////////////////

    return (
        <div>
            <Container>
                <h1>Resultados</h1>
            </Container>
            <Container d_flex wrap="true">
                {
                    filteredList.length > 0 ? <HotelCard hotelsData={filteredList}/> : <NotFound />
                }
            </Container>    
        </div>
    )
}

export default Results;
