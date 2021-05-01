import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles"
import { ItemData } from "../core/components/Item/ItemData"
import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core"

import Item from "../core/components/Item/Item"
import {COLOURS} from "../theme/colors"

const HomePage = (props) => {
  const classes = useStyles()

  return (

    <React.Fragment>
      <Grid className={classes.root} spacing={3}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {ItemData.map((val, key) => {
            return (
              <Item
                title={val.title}
                price={val.price}
              />
            )
          })}

        </Grid>
      </Grid>
    </React.Fragment>

  )
}

export default HomePage;
const useStyles = makeStyles(theme => ({

  card: {
    width: '240px',
    height: '300px',
    margin: '10px',
    pointer: 'cursor'

  },
  cardContent: {
    display: "block",


  },
  img: {
    height: '180px',
    width: '180px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  price: {
    fontWeight: 'bold'

  }
}));