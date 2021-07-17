import React, {useEffect, useState, useContext} from 'react';
import Container from '../elements/Container';
import  HotelCard from './HotelCard';
import {FilterContext} from '../states/FilterContext';
import {JumboScrollContext} from '../states/JumbotronContext';
import {hotelsData} from '../data';
import NotFound from './NotFound';
import DateWarningAlert from './DateWarningAlert';

function Results() {
    //filter context
    const {filterValues} = useContext(FilterContext);
    //jumbotron context
    const {jumboHeightState} = useContext(JumboScrollContext);

    
    const [filteredList, setFilteredList] = useState([]);
    const [dateFromUnix, setDateFromUnix] = useState('');
    const [dateToUnix, setDateToUnix] = useState('');

    const [originalDayFrom, setOriginalDayFrom] = useState('');
    const [originalMonthFrom, setOriginalMonthFrom] = useState('');
    const [originalYearFrom, setOriginalYearFrom] = useState('');

    const [originalDayTo, setOriginalDayTo] = useState('');
    const [originalMonthTo, setOriginalMonthTo] = useState('');
    const [originalYearTo, setOriginalYearTo] = useState('');

    const [originalActualDay, setOriginalActualDay] = useState('');
    const [originalActualMonth, setOriginalActualMont] = useState('');
    const [originalActualYear, setOriginalActualYear] = useState('');

    const [dateAlert, setDateAlert] = useState(false);
    const [alertDateTo, setDateTo] = useState(false);
    //si date from unix es menor que la fecha actual en unix mostrar una alerta que diga que seleccione otra fecha

    console.log(filterValues.dateFrom);

    useEffect(()=>{
        const actualDate = new Date();
      
        setOriginalActualDay(actualDate.getDate())
        setOriginalActualMont(actualDate.getMonth())
        setOriginalActualYear(actualDate.getFullYear())
    },[])
   
    //console.log(actualDateUnix);

   useEffect(()=>{
       if(originalDayFrom < originalActualDay || originalMonthFrom < originalActualMonth || originalYearFrom < originalActualYear){
        setDateAlert(true);
       }else{
        setDateAlert(false);
       }
       if(filterValues.dateFrom === ""){
        setDateAlert(false);
       }
       if(originalDayTo < originalDayFrom  || originalMonthTo < originalMonthFrom || originalYearTo < originalYearFrom){
        setDateTo(true)
       }else{
           setDateTo(false)
       }
       if(filterValues.dateFrom === ""){
        setDateTo(false)
       }
   },[originalDayFrom, originalMonthFrom, originalYearFrom, filterValues.dateFrom, originalDayTo, originalMonthTo,  originalYearTo])

   useEffect(()=>{
    console.log('estado actual de la alerta', dateAlert)
   },[dateAlert])

    useEffect(()=>{
        //DATE FROM, from date picker
        if(filterValues.dateFrom !== ''){
            const dateFrom = new Date(filterValues.dateFrom);

            setOriginalDayFrom(dateFrom.getDate()+1);
            setOriginalMonthFrom(dateFrom.getMonth());
            setOriginalYearFrom(dateFrom.getFullYear());

            const utcDateFrom = dateFrom.toUTCString();
            const utcDateUnixFrom = new Date(utcDateFrom).getTime();
            setDateFromUnix(utcDateUnixFrom);
        }

        //DATE TO, from date pickker
        if(filterValues.dateTo !== ''){
            const dateTo = new Date(filterValues.dateTo);

            setOriginalDayTo(dateTo.getDate()+1);
            setOriginalMonthTo(dateTo.getMonth());
            setOriginalYearTo(dateTo.getFullYear());

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
                     dateAlert === true &&
                    <DateWarningAlert message="¡No puede seleccinar fechas anteriores a la actual!"/>
                }
                {
                    alertDateTo === true && originalDayTo &&
                    <DateWarningAlert message="¡La fecha de reserva no pude ser menor que la inicial!"/>
                }
                {
                    filteredList.length > 0 ? <HotelCard hotelsData={filteredList}/> : <NotFound />
                }
            </Container>
        </div>
    )
}

export default Results;
