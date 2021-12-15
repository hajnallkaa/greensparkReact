import React, {useState} from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai';

function Checkbox() {
    const [checked, setChecked] = useState(true);

    const handleChange = () => {
        setChecked(!checked);
    };
    
    return (
        <div className="content-flex">
        <p><a href="https://www.getgreenspark.com/"> Link to Public profile <AiOutlineInfoCircle/>
        <span className="span blacktextLink">This widget links directly to your public profile 
                    so that you can easily share your impact with your customers. 
                    Turn it off here if you do not want the badge to link to it.
                    <br></br>
                    <a className="greentextLink" href="https://www.getgreenspark.com/"><p>View Public Profile</p></a></span>
        </a></p>
    
        <label className="checkbox">
        <input type="checkbox" checked={checked} onChange={handleChange}/>
        <span className="circle"></span>
        <span className="checkmark"></span>
        </label>
    </div>
    )
}

export default Checkbox
