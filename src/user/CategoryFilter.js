import React, { useState, useEffect } from "react";

import Item from "../core/components/Item/Item"
import { Grid, Typography } from "@material-ui/core"
import { getProducts } from "../core/helper/coreapicalls";

const CategoryFilter = ({match}) => {
  // empty error
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")
  const [reload, setReload] = useState(false)
  const [CategoryId, setCategoryId] = useState("")
  
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

  const LoadCatId = (categoryId) =>{
      console.log(categoryId)
        setCategoryId(categoryId)
        
  }
// reload every time when category id change
  useEffect(() => {
    LoadCatId(match.params.categoryId);
  }, [match.params.categoryId, reload])
 

  useEffect(() => {
    loadAllProducts();
    
  }, [reload])

  return (

    <React.Fragment>
      <Grid >
      
        <Grid
          container
          direction="row"
          justify="start"
          alignItems="center"
        >
          {products && products.map((product, index) => {
            if(product.category._id === CategoryId){
            return (
              
              <div key={index}>
                <Item product={product}
                setReload={setReload}
                reload={reload}
                />
                
              </div>
            )}
          })}


        </Grid>
      </Grid>
    </React.Fragment>

  )
}

export default CategoryFilter;
