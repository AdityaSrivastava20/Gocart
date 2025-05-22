import React from 'react';
import { categories } from '../assets/assets';
import { useAppContext } from '../context/AppContext.jsx';
import { motion } from 'framer-motion';

const Categories = () => {
  const { navigate } = useAppContext();

  return (
    <div className="mt-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10 ">
        Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-5">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07, duration: 0.4 }}
            className="cursor-pointer rounded-xl flex flex-col justify-center items-center p-5 shadow-md hover:shadow-lg transition-shadow duration-300 group"
            style={{ backgroundColor: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            <img
              src={category.image}
              alt={category.text}
              className="group-hover:scale-110 transition-transform duration-300 max-w-24 mb-2"
            />
            <p className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
              {category.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
