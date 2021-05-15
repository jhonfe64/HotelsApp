import styled from 'styled-components';

const ResetFilterStyles  = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    cursor: context-menu;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #ecf0f1;
    box-shadow: 1px 1px 1px rgba(0,0,0,.2);
     & div {
         margin-right: 20px;
         border-radius: 5px;
         padding: 5px 15px;
         background-color: #ecf0f1;;
         color: #000000;
         box-shadow: 1px 1px 3px rgba(0,0,0,.2);
     }

     & button {
         background-color: #34495e;
         color: #ffffff;
         padding-left: 15px;
         padding-right: 15px;
         border: none;
         border-radius: 5px;
         cursor: pointer;
     }
`


export default ResetFilterStyles;