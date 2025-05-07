import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ icon, label, value, description, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-soft hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-primary-50 rounded-lg">
          {icon}
        </div>
        <h3 className="ml-3 text-lg font-semibold text-neutral-700">{label}</h3>
      </div>
      
      <p className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">
        {value}
      </p>
      
      <p className="text-neutral-600">
        {description}
      </p>
    </motion.div>
  );
};

export default StatCard;