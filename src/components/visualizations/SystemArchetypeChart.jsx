import React from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const SystemArchetypeChart = () => {
  const data = {
    labels: [
      'Fixes that Fail',
      'Shifting the Burden',
      'Reinforcing Feedback Loops',
      'Success to the Successful',
    ],
    datasets: [
      {
        data: [30, 25, 35, 10],
        backgroundColor: [
          'rgba(99, 102, 241, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(249, 115, 22, 0.7)',
          'rgba(239, 68, 68, 0.7)',
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            family: 'Inter',
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const archetypeDescriptions = {
              'Fixes that Fail': 'Short-term solutions making long-term problems worse',
              'Shifting the Burden': 'Symptomatic solutions reduce focus on fundamental fixes',
              'Reinforcing Feedback Loops': 'Self-reinforcing cycles amplifying problems',
              'Success to the Successful': 'Resources flow to entities with initial advantages'
            };
            
            const label = context.label || '';
            const value = context.parsed || 0;
            const description = archetypeDescriptions[label] || '';
            
            return [
              `${label}: ${value}%`,
              `${description}`
            ];
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-xl font-semibold text-neutral-800 mb-4">
          Distribution of System Archetypes
        </h3>
        
        <p className="text-neutral-600 mb-4">
          Our analysis identified several system archetypes operating in the obesity and lifestyle disease context in India. This chart shows the relative prevalence of each archetype in our observations.
        </p>
        
        <div className="space-y-4 mt-6">
          <div className="flex items-start">
            <div className="w-3 h-3 mt-1 rounded-full bg-primary-500 mr-3"></div>
            <div>
              <h4 className="font-medium text-neutral-800">Fixes that Fail</h4>
              <p className="text-sm text-neutral-600">Health campaigns have short-term effects but fail due to marketing and social norms</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-3 h-3 mt-1 rounded-full bg-secondary-500 mr-3"></div>
            <div>
              <h4 className="font-medium text-neutral-800">Shifting the Burden</h4>
              <p className="text-sm text-neutral-600">Reliance on medication instead of addressing root causes</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-3 h-3 mt-1 rounded-full bg-accent-500 mr-3"></div>
            <div>
              <h4 className="font-medium text-neutral-800">Reinforcing Feedback Loops</h4>
              <p className="text-sm text-neutral-600">Rising income → processed food → poor diet → lifestyle diseases → normalization</p>
            </div>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="aspect-square max-w-sm mx-auto"
      >
        <Pie data={data} options={options} />
      </motion.div>
    </div>
  );
};

export default SystemArchetypeChart;