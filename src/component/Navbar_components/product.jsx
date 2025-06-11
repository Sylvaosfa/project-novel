// Example: src/components/ProductList.jsx

import { useContext } from "react";
import { SearchContext } from "@/Context/SearchContext";

export default function ProductList() {
  const { result } = useContext(SearchContext);

  console.log(result)

  return (
    <div>
      <h2>Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {result.length === 0 ? (
          <p>No products found.</p>
        ) : (
          result.map((product) => (
            <div key={product.id} className="border p-4">
              <img src={product.image} alt={product.title} className="w-full h-32 object-contain" />
              <h3 className="font-semibold text-sm mt-2">{product.title}</h3>
              <p className="text-green-600 font-bold">${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
