"use client"

import React, { useState } from "react";
import Navbar from "@/component/Navbar_components/Navbar";
import { SideContext } from "@/Context/SideContext";
import  Feeds from "@/component/MainComponent/Feeds";
import { SearchContextProvider } from "@/Context/SearchContext";
import SearchBar from "@/component/Navbar_components/SearchBar";
import ProductList from "@/component/Navbar_components/product";

export default function Home() {
    
    const [ count, setCount ] = useState ("data")
    return(
        // <SearchContextProvider>
        <div className="container page_container">
            <Navbar/> 

        {/* 🛍 Show the filtered/trending products */}
        <div className="px-4">
          <ProductList />
        </div>

          <div className="px-4">
<Feeds cou={count}/>
            
          </div>
        </div>
        // </SearchContextProvider>
    );
}

