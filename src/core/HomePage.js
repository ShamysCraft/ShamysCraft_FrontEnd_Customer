import React, { useState, useEffect } from "react";
import { getProducts } from "./helper/coreapicalls"
import Item from "../core/components/Item/Item"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(()=>({
  welcome:{
     height: '20%', padding: '2%', backgroundColor: '#d8e2dc' ,
    
  },
  heading:{
    fontFamily: '"Lobster Two", cursive'
  },
  line:{
    fontFamily: "'Spectral', serif"
  },
  items:{
    padding: '1.5%'
  }
}))
const HomePage = () => {
  const classes = useStyles();

  // empty error
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")
  const [reload, setReload] = useState(false)

  // getProducts
  const loadAllProducts = () => {
    getProducts()
      .then(data => {
        if (data.error) {
          setError(data.error)
        }
        else {

          setProducts(data)
          console.log(data)

        }
      })
  }





  useEffect(() => {
    loadAllProducts()
  }, [products])

  return (

    <React.Fragment>
      <div className={classes.welcome}>
      <Typography align="center" gutterBottom className={classes.heading} variant="h4">Welcome to ShamysCraft</Typography>
      <Typography align="center"  className={classes.line} variant="h5">Explore the beatifully made handcrafts made just for you.</Typography>
      </div>
      <Grid >

        <Grid
          container
          direction="row"
          justify="start"
          alignItems="center"
          className={classes.items}
        >
          {products && products.map((product, index) => {

            return (

              <div key={index}>
                <Item product={product}
                  setReload={setReload}
                  reload={reload}
                />

              </div>
            )
          })}


        </Grid>
      </Grid>
    </React.Fragment>

  )
}

export default HomePage;
