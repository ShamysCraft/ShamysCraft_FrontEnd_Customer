
import { Typography } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import { makeStyles } from "@material-ui/core/styles"
import { MoreVert, } from "@material-ui/icons"
import { COLOURS } from "../../../theme/colors"

import { getCategories } from "../../helper/coreapicalls"



const SideNavBar = () => {
    const classes = useStyles();
    // state of categories
    const [values, setValues] = useState({
        error: "",
        categories: [],
        formData: ""
    })

    const { error, categories, formData } = values;
    // preload data
    const preLoadCategories = () => {
        getCategories()
            .then(data => {
                if (data.err) {
                    setValues({ ...values, error: data.error })
                } else {
                    console.log(categories)

                    setValues({ ...values, categories: data })
                    console.log(categories)
                }
            })

    }
    // use useEffect to preload categories
    useEffect(() => {
        preLoadCategories()
    }, [])

    return (
        <div className={classes.sidebar}>

            <ul className={classes.sidebarList}>
                {categories && categories.map((category, index) => (
                    <li className={classes.row} key={index} value={category._id}>
                        <MoreVert /><Link style={{ textDecoration: 'none' }} to={`/category/filter/${category._id}`}><Typography className={classes.title}>{category.Name}</Typography></Link>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default SideNavBar



const useStyles = makeStyles((theme) => ({

    sidebar: {
        // position: 'fixed',
        // height: '80%',
        width: '200px',
        backgroundColor: 'white',
        margin: '50px 0 25px 0',
        borderRadius: '5px',

    },

    sidebarList: {
        height: 'auto',
        marginTop: '20px',
        // width: '100%',
        padding: '8px'
    },

    row: {
        width: '100%',
        height: '45px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        outline: '0 !important',
        backgroundColor: '#E3E3E3',
        paddingLeft: '10px',
        borderRadius: '2px'
    },

    title: {
        flex: '70%',
        display: 'grid',
        placeItems: 'center',
        padding: '20px',
        textDecoration: 'none',
        color: 'black',
        outline: 0,


        "&:active": {
            color: 'black',

        },
        "&:focus": {
            color: 'black',



        },
        "&:hover": {
            textDecoration: ` 2px underline ${COLOURS.darkBlue}`,
            // width: '100px',
            // backgroundColor: '#d8e2dc',
            // boxShadow: '0px 0px 10px 8px #d8e2dc'
        }
        ,
        "&:visited": {
            color: 'black',
            textDecoration: 'none'

        }
    }

}));