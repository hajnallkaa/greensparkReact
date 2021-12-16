import React from 'react';
import { colors } from '../utils/utils';

function Colors({backgroundChange, color}) {

    return (
        <div className="content-flex">
                <p>Badge colour</p>
                <div>
                    {colors.map((colorbutton, i) => 
                        <button key={i} className={colorbutton === color ? "selected": "color"} value={colorbutton} 
                            style={{background: colorbutton}} 
                            onClick={e => backgroundChange(e) } ></button>
                    )}
                </div>
        </div>
    )
}

export default Colors
