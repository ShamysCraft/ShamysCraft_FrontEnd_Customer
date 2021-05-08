import React, { useState, useEffect } from "react";
import { getProducts } from "./helper/coreapicalls"
import Item from "../core/components/Item/Item"
import { Grid, Typography } from "@material-ui/core"

const HomePage = () => {
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
  }, [reload])

  return (

    <React.Fragment>
      <Typography align="center" style={{ padding: '10px', height: '80px', paddingTop: '15px', backgroundColor: '#d8e2dc' }} variant="h4">Welcome to ShamysCraft</Typography>
      <Grid >

        <Grid
          container
          direction="row"
          justify="start"
          alignItems="center"
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
