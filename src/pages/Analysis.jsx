import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';
import CausalLoopDiagram from '../components/visualizations/CausalLoopDiagram';
import VariableExplanation from '../components/analysis/VariableExplanation';

const Analysis = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [diagramRef, diagramInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-primary-700">
        <div 
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7473087/pexels-photo-7473087.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center mix-blend-overlay z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 opacity-90 z-0" />
        
        <div className="container relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Systems Analysis
            </h1>
            
            <p className="text-xl text-neutral-100 mb-8">
              Exploring the interconnected factors driving obesity and lifestyle diseases in urban India through a systemic lens
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Process Followed Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-neutral-800 mb-6">
              The Research Process
            </h2>
            
            <div className="prose prose-lg max-w-none text-neutral-700 mb-10">
              <p>
                Our team used a comprehensive systems thinking approach to understand the complex factors contributing to rising obesity and lifestyle diseases in middle-class India. Rather than viewing this as simply an individual behavioral issue, we examined the interacting social, economic, environmental, and policy factors creating these health challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                  Research Methodology
                </h3>
                
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center min-w-[24px] h-6 bg-primary-100 text-primary-700 rounded-full mr-3 text-sm font-medium">1</span>
                    <span>Engaged with public health experts, doctors, and middle-class individuals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center min-w-[24px] h-6 bg-primary-100 text-primary-700 rounded-full mr-3 text-sm font-medium">2</span>
                    <span>Extracted key influencing factors from research and stakeholder input</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center min-w-[24px] h-6 bg-primary-100 text-primary-700 rounded-full mr-3 text-sm font-medium">3</span>
                    <span>Created and refined Causal Loop Diagrams to visualize system relationships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center min-w-[24px] h-6 bg-primary-100 text-primary-700 rounded-full mr-3 text-sm font-medium">4</span>
                    <span>Cross-checked variable definitions and feedback loop logic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center min-w-[24px] h-6 bg-primary-100 text-primary-700 rounded-full mr-3 text-sm font-medium">5</span>
                    <span>Applied Donella Meadows' leverage point framework to identify intervention areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center min-w-[24px] h-6 bg-primary-100 text-primary-700 rounded-full mr-3 text-sm font-medium">6</span>
                    <span>Identified system archetypes and compiled insights into a comprehensive analysis</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                  Systems Perspective Benefits
                </h3>
                
                <ul className="space-y-4 text-neutral-700">
                  <li className="flex items-start">
                    <div className="min-w-[32px] h-8 flex items-center justify-center bg-secondary-100 text-secondary-700 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Identifies interconnections between factors often studied in isolation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-[32px] h-8 flex items-center justify-center bg-secondary-100 text-secondary-700 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Reveals feedback loops that reinforce unhealthy patterns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-[32px] h-8 flex items-center justify-center bg-secondary-100 text-secondary-700 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Points to high-leverage intervention points beyond individual behavior</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-[32px] h-8 flex items-center justify-center bg-secondary-100 text-secondary-700 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Accounts for time delays between cause and effect in health outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-[32px] h-8 flex items-center justify-center bg-secondary-100 text-secondary-700 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Enables more effective and sustainable intervention strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Causal Loop Diagram Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <motion.div
            ref={diagramRef}
            initial={{ opacity: 0, y: 30 }}
            animate={diagramInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Causal Loop Diagram (CLD)
            </h2>
            
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our causal loop diagram visualizes the interconnected factors contributing to obesity and lifestyle diseases in urban India, showing reinforcing and balancing feedback loops.
            </p>
          </motion.div>
          
          <div className="mb-16">
            <CausalLoopDiagram />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {keyVariables.map((variable, index) => (
              <VariableExplanation
                key={variable.name}
                name={variable.name}
                definition={variable.definition}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <div className="flex justify-center">
            <motion.a
              href="/findings"
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Explore our leverage points analysis
              <FiArrowRight className="ml-2" />
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* System Archetypes Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">
            System Archetypes Identified
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {archetypes.map((archetype, index) => (
              <motion.div
                key={archetype.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  {archetype.title}
                </h3>
                
                <p className="text-neutral-600 mb-4">
                  {archetype.description}
                </p>
                
                <div className="p-4 bg-neutral-100 rounded-lg">
                  <h4 className="text-sm font-semibold text-neutral-700 uppercase mb-2">
                    Example
                  </h4>
                  <p className="text-neutral-700 italic">
                    {archetype.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const keyVariables = [
  {
    name: "Rapid Urbanization",
    definition: "Expansion of cities leading to lifestyle shifts such as reduced physical activity and more access to fast food."
  },
  {
    name: "Rising Income Level",
    definition: "Increased household earnings enabling higher consumption of processed foods and services that reduce physical effort."
  },
  {
    name: "Processed Food Availability",
    definition: "Widespread access to convenient, calorie-dense, and nutrient-poor foods."
  },
  {
    name: "Western Diet Adoption",
    definition: "Shift toward Western-style eating habits high in sugar, fat, and processed items."
  },
  {
    name: "Physical Inactivity",
    definition: "Lack of regular physical movement due to sedentary work, motorised travel, and leisure habits."
  },
  {
    name: "Poor Awareness & Control",
    definition: "Inadequate knowledge or ability to manage lifestyle diseases like obesity, diabetes, and hypertension."
  }
];

const archetypes = [
  {
    title: "Fixes that Fail",
    description: "Short-term solutions that address symptoms without addressing underlying causes, eventually worsening the original problem.",
    example: "Public health campaigns have short-term effects but fail long-term due to aggressive food marketing and normalization of unhealthy diets."
  },
  {
    title: "Shifting the Burden",
    description: "Reliance on symptomatic solutions rather than addressing fundamental problems, leading to atrophy of fundamental solution capability.",
    example: "Reliance on medication or reactive healthcare instead of addressing root causes like diet and physical inactivity."
  },
  {
    title: "Reinforcing Feedback Loops (Vicious Cycles)",
    description: "Self-reinforcing cycles where an initial change sparks a chain reaction that amplifies the original change.",
    example: "Rising income → processed food availability → poor diet → lifestyle diseases → normalization → further poor diet."
  },
  {
    title: "Success to the Successful",
    description: "Situations where resources flow to successful entities, further enhancing their success while depriving others.",
    example: "Companies with greater reach dominate food marketing, making it harder for healthier alternatives to compete."
  }
];

export default Analysis;