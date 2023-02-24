import React from "react";
import hogs from "../porkers_data";

function HogTiles(){
    
   const hogTiles = hogs.map(hog => {
    return <div>{hog.name}</div>
    })


    //name and image for each hog

    return (
        <div className="pigTile">{hogTiles}</div>
    )

}

export default HogTiles