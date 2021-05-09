import React, {useContext} from 'react';
import FilterInput from '../elements/FilterInput';
import Container from '../elements/Container';
import {FilterContext} from '../states/FilterContext';

function Filters() {
    //Global context
    const {filterValues, changeDateFrom, changeDateTo, changeCountry, changePrice,  changeLarge} = useContext(FilterContext);

    //updating context
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

    console.log('filterValues updated', filterValues);


    return (
        <Container>
            <Container d_flex wrap="true" bg_white shadow rounded mt_30 p_30 mt_negative75>
                <FilterInput onChange={filters} name='dateFrom' type="date" />
                <FilterInput onChange={filters} name='dateTo' type="date" />
                <FilterInput onChange={filters} as='select' name="country" id="">
                    <option selected disabled value="">Pais</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Brasil">Brazil</option>
                    <option value="Chile">Chile</option>
                    <option value="Uruguay">Uruguay</option>
                </FilterInput>
                <FilterInput onChange={filters} as='select' name="price" id="">
                    <option selected disabled value="">Precio</option>
                    <option value="1">$</option>
                    <option value="2">$$</option>
                    <option value="3">$$$</option>
                    <option value="4">$$$$</option>
                </FilterInput>
                <FilterInput onChange={filters} as='select' name="large" id="">
                    <option disabled selected value="">Tamaño</option>
                    <option value="Grande">Grande</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Pequeño">Pequeño</option>
                </FilterInput>
            </Container>
        </Container>
    )
}

export default Filters;
