import React from "react";
import { useState, useContext, useEffect } from "react";
import { Context } from "./App";

const RenderView = () => {

    const { selectedConfig, setSelectedConfig }= useContext(Context)
    const { selectedTemplate, setSelectedTemplate }= useContext(Context)
    const { inputText, setInputText } = useContext(Context)
    const [configStyle, setConfigStyle] = useState()
    
    console.log("inputText", inputText)

    const overlayStyle = {
        "position": "absolute",
        "top": "60%",
        "left": "18%",
        "right":"18%",
        "bottom": "15%",
        "fontSize": "24px",
        "color": "#754021",
        "fontWeight": "bold",
        "padding": "20px",
        "font-family": "'MedievalSharp', serif",
        "font-weight": 600,
        "white-space": "pre-wrap",
        "overflow-wrap": "break-word"
    };

    const processedText = (text) => {
        return text.replace(/\n/g, '<br />');
    }


    useEffect(() => {
        console.log("useEffect triggered")
        fetch(`http://localhost:3000/v1/configs/${selectedConfig}`)
        .then(response => response.json())
        .then(data => setConfigStyle(data))
    },[selectedConfig])

    



    const imageSource = `http://localhost:3000/v1/images/${selectedTemplate}`
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Illuminated Script</h2>
            <div className="renderView">
                <img className="renderViewImage" src={imageSource}></img>
                <p style={configStyle}>{inputText}</p>
            </div>
        </div>
    )
}

export default RenderView;