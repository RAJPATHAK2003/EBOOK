
// import { ProductList } from "../pages/Products/ProductList";
import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";
 const filterInitalState={
    productList:[],
    onlyInStock:false,
    bestSellerOnly:false,
    sortBy:null,
    ratings:null
}
 const FilterContext=createContext(filterInitalState);

export const FilterProvider=({children})=>{
    let [state,dispatch]=useReducer(filterReducer,filterInitalState);


    function initialProductList(products){
        dispatch({
            type:"PRODUCT_LIST",
            payload:{
                products:products
            }
        })
    }
    function bestSeller(products){
        return state.bestSellerOnly ?products.filter(product=>product.best_seller===true) :products;
    }
    function inStock(products){
        return state.onlyInStock? products.filter(product=>product.in_stock===true):products;
    }

    function rating(products){
        if(state.ratings === "4STARSABOVE"){
            return products.filter(product => product.rating >= 4);
        }
        if(state.ratings === "3STARSABOVE"){
            return products.filter(product => product.rating >= 3);
        }
        if(state.ratings === "2STARSABOVE"){
            return products.filter(product => product.rating >= 2);
        }
        if(state.ratings === "1STARSABOVE"){
            return products.filter(product => product.rating >= 1);
        }
        return products;
    }

    const filteredProductList=rating(inStock(bestSeller(state.productList)));

    let value={
        state,
        dispatch,
        products:filteredProductList,
        initialProductList
    }
    return(
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}
export const useFilter=()=>{
    return useContext(FilterContext);
}

