import React from 'react'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(theme=>({
card:{
    width: '100%', 
    height: '200px',
    backgroundColor: '#F3F3F3',
    color: 'white',
    fontSize: '30px',
    margin: '0 20px', 
    display:'flex',
    justifyContent: 'center',
    alignItems:'center'
}
}))
function Carouselcomp({number}) {
    const classes = useStyles()
    return (
        <div className={classes.card}>
            
        </div>
    )
}

export default Carouselcomp
 