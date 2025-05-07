import React from 'react';
import { motion } from 'framer-motion';

const getImpactColor = (impact) => {
  if (impact.includes('High')) return 'bg-success-500';
  if (impact.includes('Medium')) return 'bg-warning-500';
  return 'bg-neutral-500';
};

const LeveragePointCard = ({ name, description, category, impact, delay = 0 }) => {
  const impactColor = getImpactColor(impact);
  
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-lg font-semibold text-neutral-800 mb-3">
        {name}
      </h3>
      
      <p className="text-neutral-600 text-sm mb-4">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
          {category}
        </span>
      </div>
      
      <div className="flex items-center">
        <div className={`h-3 w-3 rounded-full mr-2 ${impactColor}`}></div>
        <p className="text-sm text-neutral-600">
          {impact}
        </p>
      </div>
    </motion.div>
  );
};

export default LeveragePointCard;