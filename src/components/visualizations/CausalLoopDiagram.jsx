import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const CausalLoopDiagram = () => {
  // This is a simplified visual representation of a CLD, not a full interactive diagram
  
  return (
    <img src='src/components/visualizations/cld.png'></img>
  );
};

export default CausalLoopDiagram;
