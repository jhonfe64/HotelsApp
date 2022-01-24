import styled from 'styled-components';

const Jumbo = styled.div`
    background-image: url("../images/hotel.jpg");
    height: 60vh;
    background-repeat: no-repeat, repeat;
    background-position: center; 
    background-size: cover;
    color: #ffffff;
    display: flex;
    align-items: center;

    & > div h1 {
        margin-bottom: 15px;
        font-size: 4rem ;
    }

    & > div p {
        font-size: 1.8rem ;
    }

    & h3 {
        display: inline-block;
        font-weight: 600;
        &:last-child {
            margin-left: 10px;
        }
    }

    @media (max-width: 500px){
        h1 {
            font-size: 2.5rem !important;
            text-align: center;
        }

        p {
            font-size: 1.2rem !important;
            text-align: justify;
        }
    }
`

export default Jumbo;
