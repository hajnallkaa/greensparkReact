import React, {useState} from 'react'

function Slider() {
    const [slider, setSlider] = useState(true);
    const handleSlider = () => {
        setSlider(!slider);
    };
    return (
        <div className="content-flex">
        <p>Activate badge</p>
        <label className="switch">
            <input type="checkbox" checked={slider} onChange={handleSlider}/>
            <span className="slider round"></span>
        </label>
    </div>
    )
}

export default Slider
