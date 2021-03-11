import React, {useState} from "react";
import Body from "../../components/Body/Body"
import {Container, Typography} from "@material-ui/core"
import Item from "../../components/Item/Item"
import {COLOURS} from "../../theme/colors"

const HomePage = (props)=>{
    return(
        <div>
          <React.Fragment>
          
            <h2>Im In Home</h2>
            <Item/>
      
          </React.Fragment>
        </div>
    )
}

export default HomePage;
