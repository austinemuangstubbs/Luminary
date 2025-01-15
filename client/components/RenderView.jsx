import React from "react";
import { useState, useContext } from "react";
import { Context } from "./App";

const RenderView = () => {

    const [selectedTemplate,setSelectedTemplate]= useContext(Context)

    const imageSource = `http://localhost:3000/v1/images/${selectedTemplate}`
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Render</h2>
            <div className="renderView">
                <img className="renderViewImage" src={imageSource}></img>
            </div>
        </div>
    )
}

export default RenderView;