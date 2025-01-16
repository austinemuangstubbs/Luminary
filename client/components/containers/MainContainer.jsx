import React from 'react';
import TextBox from '../TextBox.jsx';
import TemplateContainer from './TemplateContainer.jsx';
import RenderView from '../RenderView.jsx';

const MainContainer = () => {

    return (
        <div className='mainContainer'>
            <TextBox/>
            <TemplateContainer/>
            <RenderView/>
        </div>
    )
}

export default MainContainer;