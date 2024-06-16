import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducer";
const cartInitalState={
    cartList:[],
    total:0
}
const CartContext=createContext(cartInitalState);

export const CartProvider=({children})=>{
    let [state,dispatch]=useReducer(cartReducer,cartInitalState);

    function addtocart(product){
        let updateList=state.cartList.concat(product);
        let updatePrice=state.total+product.price;
        // console.log(updateList);
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                cartList:updateList,
                total:updatePrice
            }
        })
    }
   
    
    function removefromcart(product){
        let updateList=state.cartList.filter(item=>item.id!==product.id);
        let updatePrice=state.total-product.price;
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                cartList:updateList,
                total:updatePrice
            }
        })
    }
    function clearcart(){
        dispatch({
            type:"CLEAR_CART",
            payload:{
                cartList:[],
                total:0
            }
            
        })
    }
    let value={
        cartList: state.cartList,
        total: state.total,
        addtocart,
        removefromcart,
        clearcart
    }
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>{
    const context=useContext(CartContext);
    return context;
}