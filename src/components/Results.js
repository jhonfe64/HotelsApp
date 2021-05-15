import React, {useEffect, useState, useContext} from 'react';
import Container from '../elements/Container';
import  HotelCard from './HotelCard';
import {FilterContext} from '../states/FilterContext';
import {JumboScrollContext} from '../states/JumbotronContext';
import {hotelsData} from '../data';
import NotFound from './NotFound';



function Results() {
    //filter context
    const {filterValues} = useContext(FilterContext);
    //jumbotron context
    const {jumboHeightState} = useContext(JumboScrollContext);

    
    const [filteredList, setFilteredList] = useState([]);
    const [dateFromUnix, setDateFromUnix] = useState('');
    const [dateToUnix, setDateToUnix] = useState('');

    useEffect(()=>{
        console.log(filterValues);

        //DATE FROM, from date picker
        if(filterValues.dateFrom !== ''){
            const dateFrom = new Date(filterValues.dateFrom);
            console.log('DATEFROM', dateFrom);
            const utcDateFrom = dateFrom.toUTCString();
            const utcDateUnixFrom = new Date(utcDateFrom).getTime();
            setDateFromUnix(utcDateUnixFrom);
        }

        //DATE TO, from date pickker
        if(filterValues.dateTo !== ''){
            const dateTo = new Date(filterValues.dateTo);
            console.log('DATEFROM', dateTo);
            const utcDateTo = dateTo.toUTCString();
            const utcDateUnixTo = new Date(utcDateTo).getTime();
            setDateToUnix(utcDateUnixTo);
        }

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
        }).filter((hotelBook)=>{
            if(dateFromUnix !== '' && dateToUnix !== ''){
                return dateFromUnix+86400000 >= hotelBook.availabilityFrom && dateToUnix+86400000 <= hotelBook.availabilityTo;
            }
            return hotelBook;
            
        });
        
        if(filterValues.dateFrom === ''){
            setDateFromUnix('')
        }
        if(filterValues.dateTo === ''){
            setDateToUnix('');
        }

        setFilteredList(filteredHotels);
        
    }, [filterValues.country, filterValues.price, filterValues.dateFrom , filterValues.dateTo, filterValues.large, dateFromUnix, dateToUnix, filterValues]);


    return (
        <div className={jumboHeightState ? 'resultsTopmargin' : undefined}>
            <Container>
                <h1>Resultados</h1>
            </Container>
            <Container d_flex wrap="true">
                {
                    filteredList.length > 0  ? <HotelCard hotelsData={filteredList}/> : <NotFound />
                }
            </Container>
        </div>
    )
}

export default Results;
