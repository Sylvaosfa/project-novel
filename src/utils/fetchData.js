// const BASE_URL ='https://fakestoreapi.com'
// const options = {
//        method: "GET",
// }

// export const Search = async  (param) => {
//     const response = await fetch(`${BASE_URL}/${param}`, options)

//     const result = await response.json();
//     return result;
// }

// //lets implement the "trending now" endpoint

// export const trendingproducts = async () => {
//     const response = await fetch (`${BASE_URL}/trending/lang=en&country=us&sectiion=Now`,options)  
//     const result = await response.json();
//     console.log(result)
//     return result;
// }

// export const Getallproducts = async () => {
//     try{
//     const response = await fetch (`${BASE_URL}/products`, {
//         method: 'GET'
//     });
        
    
//     const data= await response.json();
//     console.log(data)  
//     return data;
// }
// catch (error) {
//     console.error(error)
//    return[]}
// }

// export const trendingproducts = async () => {
//     try {
//         const response = await fetch(`${BASE_URL}/products?limit=5`, options); // get first 5 as "trending"
//         const result = await response.json();
//         console.log("Trending products:", result);
//         return result;
//     } catch (error) {
//         console.error("Error fetching trending products:", error);
//         return [];
//     }
// };
const BASE_URL = 'https://fakestoreapi.com';

const options = {
  method: 'GET',
};

// Get all products
export const Getallproducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`, options);
    const data = await response.json();
    console.log("All products:", data);
    return data;
  } catch (error) {
    console.error("GetAllProducts Error:", error);
    return [];
  }
};

// Get trending products (limit to 5)
export const trendingProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=20`, options);
    const data = await response.json();
    console.log("Trending products:", data);
    return data;
  } catch (error) {
    console.error("TrendingProducts Error:", error);
    return [];
  }
};

// export const Search = async (param) => {
//   try {
//     const response = await fetch(`${BASE_URL}/${param}`, options);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Search API Error:", error);
//     return null;
//   }
// };

