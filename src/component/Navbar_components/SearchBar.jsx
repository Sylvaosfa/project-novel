"use client"

import { Getallproducts } from '@/utils/fetchData'
import React, { useContext } from 'react'
import { useState, } from 'react'
import Image from 'next/image'
import { SearchContext } from '@/Context/SearchContext'
import style from './Navbar.module.css'
import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState("")
  const { setResult } = useContext(SearchContext)

  // const handleSearch = async (e) => {
  //   // e.preventDefault()
  //   setLoading(true)
  //   try {
  //     const data = await Search(`search/?query=${query}`)
  //     console.log(data)
  //     setResult(data.products)
  //   } catch (error) {
  //     console.error("Search error:", error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const allProducts = await Getallproducts();
      const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setResult(filtered);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      border: "2px solid black",
      borderRadius: "25px",
      justifyContent: "space-between",
      padding: "5px 10px",
      width: "800px",
      cursor: "pointer",
      marginLeft: "20px",
      height: "50px",
      marginBottom: "5px",
      overflow: "hidden",
      position: 'relative'
    }}>
      <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <input
          type="text"
          placeholder='Search for anything'
          style={{
            flex: 1,
            border: "none",
            fontSize: "14px",
            outline: "none",
            padding: "5px 10px",
            borderRadius: "20px",
            backgroundColor: "transparent"
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className='search' style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <IoIosSearch size={24} />
        </button>
      </form>
    </div>
  )
}

// export default SearchBar
