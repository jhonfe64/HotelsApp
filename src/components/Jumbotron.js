import React, {useRef, useEffect, useContext, useState} from 'react';
import Container from '../elements/Container';
import Jumbo from '../elements/Jumbo';
import {JumboScrollContext} from '../states/JumbotronContext';
import {FilterContext} from '../states/FilterContext';

// import {JumbotronContext} from '../states';
// const {} = useContext(FilterContext);


function Jumbotron() {

    //Contex scroll  
    const {changeJumboScrollState} = useContext(JumboScrollContext);
    //context 
    const {filterValues} = useContext(FilterContext);
    const {country, price, large} = filterValues

   const transformDate = (date) => {

        let weekday = ['Lunes',
        'Martes',
        'miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
        'Domingo'][new Date(date).getDay()];


        const day = new Date(date).getDate();


        let month = ['Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
        ][new Date(date).getMonth()];

        const year = new Date(date).getFullYear()
    
        return {
            day,
            weekday,
            month,
            year
        }
   }


   const legibleDateFrom  = (transformDate(filterValues.dateFrom));
   const legibleDateTo = (transformDate(filterValues.dateTo));

   
//==========================>
   const event = new Date(filterValues.dateFrom);

    let refJumbo = useRef();

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            const jumboheight = refJumbo.current.clientHeight;
            const windowScroll = window.scrollY;
            if(windowScroll >= jumboheight ){
                changeJumboScrollState(true);
            }else{
                changeJumboScrollState(false);
            }
        });
    }, []);

    var fechaInicio = new Date(filterValues.dateFrom).getTime();
    var fechaFin = new Date(filterValues.dateTo).getTime();

    return (
        //asignamos la referencia
        <Jumbo name='jumbotron' ref={refJumbo}>
            <Container>
                <div>
                    <h1>Reserve Ahora</h1>
                    {
                        filterValues.dateFrom && filterValues.dateTo && fechaFin >= fechaInicio ?
                         <div>
                             <h3> Hoteles {`${large && large + "s"}`} {price && price === 1 ? " de bajo costo": price === 2 ? " de costo medio": price === 3 ? " de costo alto":  price === 4 ? "de lujo": ""} {country && "en " + country} Desde el {`${legibleDateFrom.weekday} ${legibleDateFrom.day+1} de ${legibleDateFrom.month} de ${legibleDateFrom.year} `} </h3> 
                             <h3>Hasta el  {` ${legibleDateTo.weekday} ${legibleDateTo.day+1} de ${legibleDateTo.month} de ${legibleDateTo.year}`} </h3> 
                        </div>
                        :<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellat earum magni praesentium veniam iste quam iusto accusantium commodi!</p>
                    }
                  
                </div>
            </Container>
        </Jumbo>
    )
}

export default Jumbotron