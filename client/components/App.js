import React, { useState } from 'react';
import MainContainer from './containers/MainContainer.jsx';

export const Context = React.createContext()

const App = () => {

    const [selectedTemplate,setSelectedTemplate]= useState('RNNWnI7t')
    const [selectedConfig,setSelectedConfig]= useState('RNNWnI7t')
    const [inputText, setInputText] = useState('');
    const [templateConfig, setTemplateConfig] = useState({});
    const [renderViewStyle, setRenderViewStyle] = useState({});

    const toggleStyle = () => {
        console.log("toggleStyle ran")
        setRenderViewStyle(prevStyle => ({
          filter: prevStyle.filter === 'blur(8px)' ? 'none' : 'blur(8px)',
          opacity: prevStyle.opacity === '0.6' ? '1' : '0.6',
          transition: 'all 0.3s ease-in-out'
        }));
    };


    const contextValue = {
        selectedTemplate,
        setSelectedTemplate,
        inputText,
        setInputText,
        selectedConfig,
        setSelectedConfig,
        templateConfig, 
        setTemplateConfig,
        renderViewStyle, 
        setRenderViewStyle,
        toggleStyle
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