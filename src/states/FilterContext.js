import {useState, createContext} from 'react';

const FilterContext = createContext();

function FilterContextProvider({children}){
    const [filterValues, setFilterValues] = useState({
        dateFrom: '',
        dateTo: '',
        country: '',
        price: '',
        large: ''
    })

    const changeDateFrom = (dateFrom) => {
        setFilterValues(
            {
                ...filterValues,
                dateFrom: dateFrom
            }
        )
    }

    const changeDateTo = (dateTo) => {
        setFilterValues(
            {
                ...filterValues,
                dateTo: dateTo
            }
        )
    }

    const changeCountry = (country) => {
        setFilterValues(
            {
                ...filterValues,
                country: country
            }
        )
    }

    const changePrice = (price) => {
        setFilterValues(
            {
                ...filterValues,
                price: price
            }
        )
    }

    const changeLarge = (large) => {
        setFilterValues(
            {
                ...filterValues,
                large: large
            }
        )
    }

    //console.log(filterValues);

    return (
        <FilterContext.Provider value={{filterValues, changeDateFrom, changeDateTo, changeCountry, changePrice, changeLarge}}>
            {children}
        </FilterContext.Provider>
    );
}


export {FilterContext, FilterContextProvider}
