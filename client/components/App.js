import React, { useState } from 'react';
import MainContainer from './containers/MainContainer.jsx';

export const Context = React.createContext()

const App = () => {

    const [selectedTemplate,setSelectedTemplate]= useState('RNNWnI7t')
    const [selectedConfig,setSelectedConfig]= useState('RNNWnI7t')
    const [inputText, setInputText] = useState('');
    const [templateConfig, setTemplateConfig] = useState({})
    const [renderViewStyle, setRenderViewStyle] = useState({});

    const toggleStyle = () => {
        setRenderViewStyle(prevStyle => ({
          backdropFilter: prevStyle.backdropFilter === 'blur(8px)' ? '' : 'blur(8px)',
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