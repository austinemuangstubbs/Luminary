import React, { useState } from 'react';
import MainContainer from './containers/MainContainer.jsx';

export const Context = React.createContext()

const App = () => {

    const [selectedTemplate,setSelectedTemplate]= useState('RNNWnI7t')
    const [inputText, setInputText] = useState('');

    const contextValue = {
        selectedTemplate,
        setSelectedTemplate,
        inputText,
        setInputText,
      };

    return(
        <Context.Provider value={contextValue}>
            <div>
                <MainContainer/>
            </div>
        </Context.Provider>
    );
}



export default App;