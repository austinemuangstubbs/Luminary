import React, { useState } from 'react';
import MainContainer from './containers/MainContainer.jsx';

export const Context = React.createContext()

const App = () => {

    const [selectedTemplate,setSelectedTemplate]= useState('RNNWnI7t')

    return(
        <Context.Provider value={[selectedTemplate, setSelectedTemplate]}>
            <div>
                <MainContainer/>
            </div>
        </Context.Provider>
    );
}



export default App;