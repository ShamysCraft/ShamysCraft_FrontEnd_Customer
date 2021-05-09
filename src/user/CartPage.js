import React, { useState, useEffect } from "react";
import Item from "../core/components/Item/Item"
import { Grid, Typography } from "@material-ui/core"
import { loadCart } from "../core/helper/cartHelper";
import PaymentB from "./PaymentB";

const CartPage = () => {

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setProducts(loadCart())
    }, [reload])

    const loadAllProducts = (products) => {
        return (
            <div>
                <h2>Load Products</h2>
                {products.map((product, index) => (

                    <Item
                        key={index}
                        product={product}
                        removefromCart={true}
                        addtoCart={false}
                        setReload={setReload}
                        reload={reload}
                    />

                ))}
            </div>
        );
    };

    const loadCheckout = () => {
        return (
            <div>
                <h2>for checkout</h2>
            </div>
        )
    }

    return (

        <React.Fragment>
            <Typography align="center" style={{ padding: '10px', height: '60px', paddingTop: '15px', backgroundColor: '#d8e2dc' }} variant="h4">Ready to checkout!</Typography>

            <Grid container style={{ flexGrow: 1 ,padding:'2%'}}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {products.length > 0 ? loadAllProducts(products) : <h3>No Items in the cart!</h3>}
                    </Grid>
                    <Grid item xs={6}>
                        <PaymentB products = {products} setReload={setReload}/>
                    </Grid>

                </Grid>
            </Grid>
        </React.Fragment>

    )
}

export default CartPage;
