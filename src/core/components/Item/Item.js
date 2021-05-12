import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Button, Card, CardContent, Typography } from "@material-ui/core"
import { DeleteForeverSharp, ShoppingCart } from '@material-ui/icons';

import ImageHelper from "../../../user/helper/ImageHelper"
import { Redirect } from 'react-router-dom'
import { addItemToCart, removeItemFromCart } from '../../helper/cartHelper'

function Item({
  product,
  addtoCart = true,
  removefromCart = false,
  setReload = f => f,
  reload = undefined
}) {

  const [redirect, setRedirect] = useState(false)

  const [count, setCount] = useState(product.count)

  const cartTitle = product ? product.prodname : "A icon8 icon"
  const cartDescription = product ? product.description : "Default desc"
  const cartPrice = product ? product.price : "Default Price"
  const cartCategory = product ? product.category.Name : "Default Category"


  // add product to cart
  const addItemtoCart = () => {
    addItemToCart(product, () => { setRedirect(true) })
  }

  const getRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />
    }
  }

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <Button
          variant="contained"
          fullWidth endIcon={<ShoppingCart />}
          className={classes.btn2}
          onClick={addItemtoCart}
        > Add to Cart</Button>
      )
    )
  }
  const showRemoveFromCart = () => {
    return (
      removefromCart && (
        <Button
          variant="contained"
          fullWidth endIcon={<DeleteForeverSharp />}
          className={classes.btn3}
          onClick={() => {
            console.log(product.category._id)
            removeItemFromCart(product._id);
            setReload(!reload);
            
          }}
        > Remove from Cart</Button>
      ))
  }

  const classes = useStyles()


  return (
    <div>
      <Card className={classes.card}>
        {getRedirect(redirect)}

        <Typography className={classes.title} gutterBottom align="center" variant="h6" component="h2" >{cartTitle}</Typography>
        <div className={classes.img}>
        <ImageHelper product={product} />
        </div>
        <CardContent>

          <Typography align="center" variant="h5" component="h2">LKR {cartPrice}</Typography>
          <Typography align="center" gutterBottom variant="body2" color="textSecondary">Category: {cartCategory}</Typography>
          <Typography align="inherit" gutterBottom variant="body2" className={classes.desc} component="p">{cartDescription}</Typography>
          {showAddToCart(addtoCart)}
          {showRemoveFromCart(removefromCart)}

        </CardContent>
      </Card>

    </div>
  )
}

export default Item



const useStyles = makeStyles(theme => ({

  card: {
    width: '280px',
    height: '400px',
    margin: '10px',
    padding: '5px',
  },
  title: {
    // marginTop: '5px',
    backgroundColor: '#f0efeb',
    borderRadius: '5px',
    height: '35px'
  },
  desc: {
    height: '65px'

  },
  img: {
    height: '150px'
  },
  cardContent: {
    // display: "block",
  },

  media: {
    height: "100px",
    width: "50px",
  },

  btn2: {
    backgroundColor: '#38b000',
    color: 'white',

    "&:hover": {
      backgroundColor: '#38b000',
      color: 'white',
    },
    "&:focus": {
      backgroundColor: '#38b000',
      color: 'white',
    },
    "&:active": {
      backgroundColor: '#38b000',
      color: 'white',
    },
  },
  btn3: {
    backgroundColor: '#e63946',
    color: 'white',

    "&:hover": {
      backgroundColor: '#e63946',
      color: 'white',
    },
    "&:focus": {
      backgroundColor: '#e63946',
      color: 'white',
    },
    "&:active": {
      backgroundColor: '#e63946',
      color: 'white',
    },
  },

}));
