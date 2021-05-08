import React, { useState, useEffect } from "react";
import Item from "../core/components/Item/Item"
import { Grid, Typography } from "@material-ui/core"
import { loadCart } from "../core/helper/cartHelper";

const CartPage = () => {

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setProducts(loadCart())
    }, [reload])

    const loadAllProducts = () => {
        return (
            <div>
                <h2>this section load prods</h2>
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

            <Grid container style={{ flexGrow: 1 }} >
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {loadAllProducts()}
                    </Grid>
                    <Grid item xs={6}>
                        {/* {loadCheckout()} */}
                    </Grid>

                </Grid>
            </Grid>
        </React.Fragment>

    )
}

export default CartPage;
