import React from "react";
import { useState, useContext, useEffect, useRef} from "react";
import { Context } from "./App";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const RenderView = () => {

    const { selectedConfig, setSelectedConfig }= useContext(Context)
    const { selectedTemplate, setSelectedTemplate }= useContext(Context)
    const { inputText, setInputText } = useContext(Context)
    const [ templateConfig, setTemplateConfig ] = useState({})
    
    console.log("inputText", inputText)


    useEffect(() => {
        console.log("useEffect triggered")
        fetch(`http://localhost:3000/v1/configs/${selectedConfig}`)
        .then(response => response.json())
        .then((data) => {
            console.log("data in renderview useEffect fetch response", data)
            setTemplateConfig(data)
        })
    },[selectedConfig])

    

    const handlePrint = (elementToPrintId, name) => {
        const element = document.getElementById(elementToPrintId);
        html2canvas(element, {scale:2}).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({format: [1536 , 3072]});
        const imgProperties = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${name}.pdf`);
        });
    };

    // const generatePDF = async (elementToPrintId, name) => {
    //     const element = document.getElementById(elementToPrintId);
    //     if (!element) {
    //       throw new Error(`Element with id ${elementToPrintId} not found`);
    //     }
    //     const canvas = await html2canvas(element);
    //     const data = canvas.toDataURL("image/png");
    //     const pdf = new jsPDF({
    //       orientation: "portrait",
    //       unit: "mm",
    //       format: [129, 70],
    //     });
    //     const imgProperties = pdf.getImageProperties(data);
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      
    //     pdf.addImage(data, "PNG", 0, 0, pdfWidth/2, pdfHeight/2);
    //     pdf.save(`${name}.pdf`);
    // };
    



    const imageSource = `http://localhost:3000/v1/images/${selectedTemplate}`
    return (
        <div className="renderViewContainer">
            <h2 style={{ textAlign: 'center' }}>Illuminated Script</h2>
            <div id="illuminatedScript" className="renderView">
                <img className="renderViewImage" src={imageSource}></img>
                <p style={templateConfig.styles}>{inputText}</p>
            </div>
            <button className='majorButton' onClick={()=>{handlePrint("illuminatedScript", templateConfig.name)}}>Export to PDF</button>
        </div>
    )
}

export default RenderView;