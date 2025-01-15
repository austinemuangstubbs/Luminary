import React, {useState, useContext} from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import { Context } from "./App";

const TemplateCard = (props) => {

    const { selectedTemplate, setSelectedTemplate } = useContext(Context)
    const handleCardClick = (param) => {
        console.log("handleCardClick param", param)
        setSelectedTemplate(param)
    }

    

    return (
        <button 
        className="templateCard" 
        key={props.key}
        style={props.style}
        onClick={()=>{handleCardClick(props.id)}}
        />
    )
}

export default TemplateCard;