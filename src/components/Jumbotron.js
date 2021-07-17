import React, {useRef, useEffect, useContext} from 'react';
import Container from '../elements/Container';
import Jumbo from '../elements/Jumbo';
import {JumboScrollContext} from '../states/JumbotronContext';
import {FilterContext} from '../states/FilterContext';

// import {JumbotronContext} from '../states';
// const {} = useContext(FilterContext);


function Jumbotron() {
    //2. como es un hook va dentro del componente pero no puede ir dentro de ninguna función
    //3.esto arroja un objeto con la propiedad current con el componente {current: div#jumbotron.sc-gtsrHT.RcJBt}
    //4.para acceder al elemento debemos colocar refJumbo.current
    //5.console.log(refJumbo);

    //Contex scroll  
    const {changeJumboScrollState} = useContext(JumboScrollContext);
    //context 
    const {filterValues} = useContext(FilterContext);


   const transformDate = (date) => {
        const actualDate = new Date(date);
        return {
            day: actualDate.getDate(),
            month: actualDate.getMonth(),
            year: actualDate.getFullYear()
        }
   }

   const legibleDateFrom  = (transformDate(filterValues.dateFrom));
   const legibleDateTo = (transformDate(filterValues.dateTo));

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
  

    return (
        //asignamos la referencia
        <Jumbo name='jumbotron' ref={refJumbo}>
            <Container>
                <div>
                    <h1>Reserve Ahora</h1>
                    {
                        filterValues.dateFrom && filterValues.dateTo ?
                         <div>
                             <h3>Desde: </h3> {
                                legibleDateFrom.day+1 > 0 && legibleDateFrom.day+1 < 9 ? `0${legibleDateFrom.day+1} / `: `${legibleDateFrom.day+1} / ` 
                            }
                            {
                                legibleDateFrom.month+1 > 0 && legibleDateFrom.month+1 < 9 ? `0${legibleDateFrom.month+1} /`: `${legibleDateFrom.month+1} / `
                            }
                            {legibleDateFrom.year } <h3>Hasta: </h3> {
                                legibleDateTo.day+1 > 0 && legibleDateTo.day+1 < 9 ? `0${legibleDateTo.day+1} / `: `${legibleDateTo.day+1} / ` 
                            }
                            {
                                legibleDateTo.month+1 > 0 && legibleDateTo.month+1 < 9 ? `0${legibleDateTo.month+1} /`: `${legibleDateTo.month+1} / `
                            }  
                            { legibleDateTo.year}
                        </div>
                        :<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellat earum magni praesentium veniam iste quam iusto accusantium commodi!</p>
                    }
                  
                </div>
            </Container>
        </Jumbo>
    )
}

export default Jumbotron
