import React from 'react';
import { motion } from 'framer-motion';

const VariableExplanation = ({ name, definition, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white p-5 rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-lg font-semibold text-neutral-800 mb-2">
        {name}
      </h3>
      
      <p className="text-neutral-600 text-sm">
        {definition}
      </p>
    </motion.div>
  );
};

export default VariableExplanation;