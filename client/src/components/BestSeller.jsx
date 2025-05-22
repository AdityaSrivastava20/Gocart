import React from 'react';
import ProductCard from './ProductCard.jsx';
import { useAppContext } from '../context/AppContext.jsx';
import { motion } from 'framer-motion';

const BestSeller = () => {
  const { products } = useAppContext();

  const productList = products.filter((product) => product.inStock).slice(0, 5);

  return (
    <div className="mt-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">
        Best Sellers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {productList.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
            className="w-full flex justify-center"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
