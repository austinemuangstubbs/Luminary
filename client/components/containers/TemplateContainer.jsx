import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import TemplateCard from "../TemplateCard.jsx";
import { Context } from "../App.js";


const TemplateContainer = () => {

    const [templateInfo, setTemplateInfo] = useState([])
    

    useEffect(() => {
        console.log("useEffect triggered")
        fetch(`http://localhost:3000/v1/templates`)
        .then(response => response.json())
        .then(data => {
            setTemplateInfo(data.templates)
            console.log("data from template fetch", data)
        })
    },[])


    const templateStyleCreator = (urlParam) => {
        const returnObj = {}
        returnObj['backgroundSize']='cover'
        returnObj['backgroundImage'] = `url(${urlParam})`
        console.log("returnObj", returnObj)
        return returnObj
    }

    
    const templateCards = templateInfo.map((i)=>{
        console.log("i insinde template cards map", i)
        const templateStyleAction = templateStyleCreator(i.url)
        console.log("templateStyleAction", templateStyleAction)
        return (
            < TemplateCard 
            key={i.id}
            name={i.name}
            id={i.id}
            // handleCardClick = {handleCardClick}
            style={templateStyleAction}
        />)
    })

    return(
        <div className="templateContainer">
            <h2 style={{ textAlign: 'center' }}>Templates</h2>
            <div className="templateInnerContainer">
                {templateCards}
            </div>
            {/* <button className='majorButton'>More Templates</button> */}
        </div>
    )
}


export default TemplateContainer;