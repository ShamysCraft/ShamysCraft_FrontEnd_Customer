import React, { useState, useEffect } from 'react'
import { cartEmpty, loadCart } from '../core/helper/cartHelper'

import { Link } from "react-router-dom"
import { getMeToken, processPayment } from '../core/helper/paymentBhelper'
import { createOrder } from '../core/helper/orderHelper'
import { isAuthenticated } from '../auth/helper'
import {Button} from "@material-ui/core"

import DropIn from 'braintree-web-drop-in-react'



function PaymentB({ products, setReload = f => f, reload = undefined }) {

    const [info, setInfo] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: "",
        instance: {}
    });

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;

    const getToken = (userId, token) => {
        console.log("userId", userId)
        console.log("token", token)
        getMeToken(userId, token)
            .then(data => {
                console.log("data", data)
                if (data?.err) {
                    setInfo({ ...info, error: data.err })
                } else {
                    const clientToken = data?.clientToken;
                    setInfo({ clientToken })
                }
            })
    }

    const showBrainTreeDropIn = () => {
        return (
            <div>
                {info.clientToken !== null && products.length > 0 ? (
                    <div>
                        <DropIn
                            options={{ authorization: info.clientToken }}
                            onInstance={(instance) => (info.instance = instance)}
                        />
                        <Button 
                        variant="contained"  
                        style={{
                            marginLeft: '35%', 
                            height:'70%', 
                            width: '30%',
                            backgroundColor: '#38b000',
                            color: 'white',
                            fontSize: '16px'
                            }}  
                        onClick={onPurchase}>Buy</Button >
                    </div>
                ) : (
                    <h3>Please Login or add something to cart</h3>
                )}
            </div>
        )
    }

    useEffect(() => {
        getToken(userId, token)
    }, [])


    const onPurchase = () =>{
        setInfo({loading: true})
        let nonce;
        let getNonce = info?.instance?.requestPaymentMethod()?.then(data => {
                nonce = data.nonce;
                const paymentData = {
                    paymentMethodNonce :nonce,
                    amount: getAmount()
                }
                processPayment(userId, token, paymentData)
                .then(response => {
                    setInfo({...info, success: response.success, loading: false})
                    console.log("Payment sucess")
                    
                    const orderData = {
                        products: products,
                        transaction_id: response.transaction_id,
                        amount: response.transaction.amount,
                    }
                    console.log("order data", orderData)
                    createOrder(userId, token, orderData)
                    // empty cart
                    cartEmpty(()=>{
                        console.log("Did we crash->")
                    })
                    // force reload
                    setReload(!reload)
                })
                .catch(err =>{
                    setInfo({...info, loading: false, success: false,})
                    console.log("Payment failed")

                })
            })
            
    }

    const getAmount = () =>{
        let amount = 0
        products.map(p=>{
            amount = amount + p.price;
        })


        return amount;
    }

    return (
        <div>
            <h3>Your bill is LKR: {getAmount()}</h3>
            {showBrainTreeDropIn()}
        </div>
    )
}

export default PaymentB
