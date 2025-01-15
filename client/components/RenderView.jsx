import React from "react";
import { useState, useContext } from "react";
import { Context } from "./App";

const RenderView = () => {

    const { selectedTemplate, setSelectedTemplate }= useContext(Context)
    const { inputText, setInputText }= useContext(Context)

    console.log("inputText", inputText)

    const overlayStyle = {
        position: 'absolute',
        top: '60%',
        left: '11%',
        right:'11%',
        bottom: '9%',
        color: 'white',
        fontSize: '24px',
        color: '#754021',
        fontWeight: 'bold',
        padding: '20px',
        'font-family': "'MedievalSharp', serif",
        'font-weight': 600,
        'white-space': "pre-wrap"
    };

    const processedText = (text) => {
        return text.replace(/\n/g, '<br />');
    }


    const imageSource = `http://localhost:3000/v1/images/${selectedTemplate}`
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Illuminated Script</h2>
            <div className="renderView">
                <img className="renderViewImage" src={imageSource}></img>
                <p style={overlayStyle}>{inputText}</p>
            </div>
        </div>
    )
}

export default RenderView;