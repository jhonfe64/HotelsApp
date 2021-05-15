import React, {useContext, useState} from 'react';
import FilterInput from '../elements/FilterInput';
import Container from '../elements/Container';
import {FilterContext} from '../states/FilterContext';
import ResetFilterStyles from '../elements/ResetFilterStyles';
import {JumboScrollContext} from '../states/JumbotronContext';

function Filters() {

    const {jumboHeightState} = useContext(JumboScrollContext);
    console.log('ESTE ES EL ESTADO ACTUAL ', jumboHeightState)
   
    //Global context for filters
    const {filterValues, changeDateFrom, changeDateTo, changeCountry, changePrice,  changeLarge} = useContext(FilterContext);
  
    //updating context filters
    const filters = (e) => {
        if(e.target.name === 'country'){
            changeCountry(e.target.value);
        }if(e.target.name === 'price'){
            changePrice(Number(e.target.value))
        }if(e.target.name === 'large'){
            changeLarge(e.target.value);
        }if(e.target.name === 'dateFrom'){
            changeDateFrom(e.target.value);
        }if(e.target.name === 'dateTo'){
            changeDateTo(e.target.value);
        }
    }

    //update context filters ResetFilterStyles
    const updateFilter = (e) => {
        if(e.target.getAttribute('name') === 'from'){
            changeDateFrom('');
        }
        if(e.target.getAttribute('name') === 'to'){
            changeDateTo('');
        }
        if(e.target.getAttribute('name') === 'country'){
            changeCountry('');
        }
        if(e.target.getAttribute('name') === 'price'){
            changePrice('');
        }
        if(e.target.getAttribute('name') === 'large'){
            console.log(filterValues.large);
            changeLarge('');
        }
    }

    const resetInputs = () => {
        filterValues.dateFrom = '';
        changeDateFrom('');
        filterValues.dateTo = '';
        changeDateTo('');
        filterValues.country = '';
        changeCountry('');
        filterValues.large = '';
        changeLarge('');
        filterValues.price = '';
        changePrice('');
    }


    return (
        <Container className={jumboHeightState && 'fixed'}>
            <Container d_flex wrap="true" bg_white shadow rounded mt_30 p_30 mt_negative75>
                <FilterInput onChange={filters} name='dateFrom' type="date" value={filterValues.dateFrom} />
                <FilterInput onChange={filters} name='dateTo' type="date"  value={filterValues.dateTo} />
                <FilterInput onChange={filters} as='select' value={filterValues.country} name="country" id="">
                    <option selected disabled value="">Pais</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Brasil">Brazil</option>
                    <option value="Chile">Chile</option>
                    <option value="Uruguay">Uruguay</option>
                </FilterInput>
                <FilterInput onChange={filters} as='select' name="price" id="" value={filterValues.price}>
                    <option selected disabled value="">Precio</option>
                    <option value="1">$</option>
                    <option value="2">$$</option>
                    <option value="3">$$$</option>
                    <option value="4">$$$$</option>
                </FilterInput>
                <FilterInput onChange={filters} as='select' name="large" id=""  value={filterValues.large}>
                    <option disabled selected value="">Tamaño</option>
                    <option value="Grande">Grande</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Pequeño">Pequeño</option>
                </FilterInput>
            </Container>
            {
               filterValues.dateFrom || filterValues.dateTo  || filterValues.country || filterValues.price || filterValues.large ?
               <ResetFilterStyles>
                    {filterValues.dateFrom && <div onClick={updateFilter}><h6 name="from">Desde: {filterValues.dateFrom}</h6></div>}
                    {filterValues.dateTo && <div onClick={updateFilter}><h6 name='to'>Hasta: {filterValues.dateTo}</h6></div>}
                    
                    {filterValues.country && <div onClick={updateFilter}><h6  name='country'>Pais: {filterValues.country}</h6></div>}
                    {filterValues.price === 1 && <div onClick={updateFilter}><h6 name='price'>Precio: $</h6></div>}
                    {filterValues.price === 2 && <div onClick={updateFilter}><h6 name='price'>Precio: $$</h6></div>}
                    {filterValues.price === 3 && <div onClick={updateFilter}><h6 name='price'>Precio: $$$</h6></div>}
                    {filterValues.price === 4 && <div onClick={updateFilter}><h6 name='price'>Precio: $$$$</h6></div>}
                    {filterValues.large && <div onClick={updateFilter}><h6 name='large'>Tamaño: {filterValues.large}</h6></div>}

                    {
                        filterValues.dateFrom || filterValues.dateTo  || filterValues.country || filterValues.price || filterValues.large ?
                            <button onClick={resetInputs}>Reset</button>: ""
                    }
                </ResetFilterStyles>: ""
            }
           
        </Container>
    )
}

export default Filters;
