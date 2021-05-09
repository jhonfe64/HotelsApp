import styled from 'styled-components';

const FilterInput = styled.input`
    border: none;
    padding: 15px;
    font-size: 1rem;
    width: 200px;

    &:first-child {
        padding-left: 0;
    }

    &:focus {
        outline: 0;
    }

    @media (max-width: 1072px){
        width: 100%;
        border-bottom: 1px solid #ecf0f1;
        margin-bottom: 10px;
        padding-right: 0;
        padding-left: 0;
    }
`

export default FilterInput;