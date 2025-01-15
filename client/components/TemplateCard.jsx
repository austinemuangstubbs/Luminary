import React, {useState, useContext} from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import { Context } from "./App";

const TemplateCard = (props) => {

    console.log("props", props)
    const style = props.style
    
    // const [cardImage, setCardImage] = useState(null)

    // useEffect(() => {
    //     fetch(`http://localhost:3000/v1/images/${key}`)
    //     .then(response => response.json())
    //         // 4. Setting *dogImage* to the image url that we received from the response above
    //     .then(data => setCardImage(data))
    //   },[])
    
    

    const [selectedTemplate,setSelectedTemplate]= useContext(Context)
    const handleCardClick = (param) => {
        console.log("handleCardClick param", param)
        setSelectedTemplate(param)
    }

    

    return (
        <button 
        className="templateCard" 
        key={props.key}
        style={style}
        onClick={()=>{handleCardClick(props.id)}}
        />
    )
}

export default TemplateCard;