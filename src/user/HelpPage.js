import React, {useState} from "react";
import {api} from '../backend'
const HelpPage = (props)=>{
    console.log(api)
    return(
        <div className="Help">
            <h1>
                Im in Help Page
            </h1>
        </div>
    )
}

export default HelpPage;