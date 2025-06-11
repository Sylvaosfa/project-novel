"use client"
import { createContext, useState, useEffect} from "react";
// import { Search, Getallproducts } from "@/utils/fetchData";         
import { trendingProducts } from "@/utils/fetchData";

export const SearchContext = createContext();//initializing a context called SearchContext

export const SearchContextProvider = ({children}) => {
    const [ result, setResult] = useState([])
 
    useEffect (() => {
 const fetchTrending = async () => {
   const data = await trendingProducts();
setResult(data);

 }
 fetchTrending();

}, [])


    return(
        <SearchContext.Provider value=
        {{result,setResult}}>
            {children}
        </SearchContext.Provider>
    )
} 