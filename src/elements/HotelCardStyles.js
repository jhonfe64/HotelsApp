import styled from 'styled-components';

const HotelCardStyles = styled.div`
    width: 32%;
    border: 1px solid #ecf0f1;
    margin-bottom: 50px;
    border-radius: 5px;
    overflow: hidden;

    &:hover {
        box-shadow: 2px 2px 7px rgba(0,0,0, .4);
        transition: 0.3s;
    }

    & div, img {
        width: 100%
    }

    & div.information {
        padding: 25px;
    }

    & div .location {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-top: 10px;
        padding-bottom: 20px;

    }

    & div .location img {
        width: 12px;
        margin-right: 12px;
    }

    & p {
        text-align: justify;
        height: 130px;
        overflow-y: hidden;
        overflow-y: scroll;
    }

        & p::-webkit-scrollbar{
        width: 5px;
    }

    & p::-webkit-scrollbar-thumb{
        background-color:#ecf0f1;
        border-radius: 10px;
    }

    & h2 {
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
    }

    & h4 {
        margin-right: 20px;
    }

    & span {
        font-weight: 900;
    }

    & .features {
        display: flex;
        padding: 10px;
        border-radius: 10px;
        margin-top: 20px;
        background-color: #34495e;
        color: #ffffff;
        padding: 15px 20px;
    }

    & .features div:first-child {
        display: flex;
    }

    & .features img {
        margin-right: 10px;
        width: 35px;
        height: 20px;
    }

    & .features .prices {
        width: 20%;
        justify-content: center;
        align-items: center;
        justify-content: flex-end;
        text-align: end;
    }

    @media only screen and (max-width: 993px){
        width: 49%;
    }

    @media only screen and (max-width: 702px){
        width: 100%;
    }
`

export default HotelCardStyles;