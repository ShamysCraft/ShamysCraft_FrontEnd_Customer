//body create the layouts
import React from 'react'
import RightNav from "../RightNavBar/RightNavBar"
import SideNav from "../SideNavBar/SideNavBar"
import Content from "../Content/Content"

function Body(props) {
    return (
        <div className="Body">
             {props.children}
        </div>
    )
}

export default Body
