import React, {useState} from "react";
import Slider from "./Slider";
import Colors from "./Colors";
import Logo from "../assets/Greenspark.png";
import Logo2 from "../assets/Greenspark2.png";
import Checkbox from "./Checkbox";


function Card({type, amount, action, backColor, txColor, logos}) {
    const [color, setColor] = useState(backColor);
    const[textcolor, setTextColor] = useState(txColor);
    const[logo, setLogo] = useState(logos);


    const backgroundChange = (e) => {
            
            setColor(e.target.value)
            if(e.target.value === "#F2EBDB" || e.target.value === "#FFFFFF"){
                setTextColor("#3B755F");
                setLogo(Logo2)
            } else {
                setTextColor("#FFFFFF");
                setLogo(Logo)
            }       
    }

    return (
        <div className="grid-container" >
        

        <div className="logo" style={{background:color}}><img src={logo} alt="Logo" width="100px"/></div>
        <div className="title" id='title' style={{background:color, color: textcolor}}>{"This product " + action}</div>  
        <div className="subtitle" style={{background:color, color: textcolor}} id="bottles">
            {type ==='carbon' ? amount +"kgs of "+type : amount + " " + type}                     
        </div>

        <div className="content">
           <Checkbox/>
            <Colors backgroundChange={backgroundChange}/>
           <Slider />
        </div>

      </div>
    )
}

export default Card
