import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

const SkeletonCard = () => (
  <div className="w-48 h-64 bg-gray-300 animate-pulse rounded-md"></div>
);

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [products]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  return (
    <div className="mt-16 flex flex-col ">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl md:text-3xl font-medium uppercase">All Products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-6">
        {loading
          ? // Render 6 skeleton cards while loading
            Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
          : filteredProducts
              .filter((product) => product.inStock)
              .map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
    </div>
  );
};

export default AllProducts;
