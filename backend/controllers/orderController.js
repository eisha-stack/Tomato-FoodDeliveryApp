import orderModel from "../models/orderModels.js";
import userModel from "../models/userModel.js"
import Stripe from "stripe"


//placing user order from frontend

const placeOrder = async (req,res) =>{

    try {
        const newOrder = newModel({
            userId:req.body.userId,
            item:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100
            },
            qunatity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100
            },
            quantity:1
        })
    } catch (error) {
        
    }
}

export {placeOrder}