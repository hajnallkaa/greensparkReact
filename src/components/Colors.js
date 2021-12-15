import React from 'react'

function Colors({backgroundChange}) {

    const colors = ["#2E3A8C", "#3B755F", "#F2EBDB","#FFFFFF", "#212121" ];

    return (
        <div className="content-flex">
                <p>Badge colour</p>
                <div>
                    {colors.map((colorbutton, i) => 
                        <button key={i} className="color" value={colorbutton} 
                            style={{background: colorbutton}} 
                            onClick={e => backgroundChange(e) } ></button>
                    )}
                </div>
        </div>
    )
}

export default Colors
