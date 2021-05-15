import {useState, createContext} from 'react';

const JumboScrollContext = createContext();

//if scrollY >= Jumbo height === update context to true
//logic in Jumbo component

function JumboScrollProvider({children}){

    const [jumboHeightState, setJumboHeightState] = useState(false);

    const changeJumboScrollState = (jumboState) => {
        setJumboHeightState(jumboState);
    }

    return (
        <JumboScrollContext.Provider value={{jumboHeightState, changeJumboScrollState}}>
            {children}
        </JumboScrollContext.Provider>    
    );

  
}



export {JumboScrollContext, JumboScrollProvider}


