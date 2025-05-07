import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAlertCircle, FiTrendingUp, FiMapPin } from 'react-icons/fi';

const Problem = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-primary-700">
        <div 
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3943882/pexels-photo-3943882.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center mix-blend-overlay z-0"
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
              Problem Domain
            </h1>
            
            <div className="flex items-center mb-6">
              <div className="bg-accent-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                Domain 1.3
              </div>
              <div className="ml-4 text-white text-lg">
                High Obesity and Lifestyle Diseases in Middle-Class India
              </div>
            </div>
            
            <p className="text-xl text-neutral-100 mb-8">
              Despite fitness trends, why are rates of obesity, hypertension, and diabetes rising among India's middle-income population?
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Problem Statement Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                ref={contentRef}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold text-neutral-800 mb-6">
                  Introduction to the Problem
                </h2>
                
                <div className="prose prose-lg max-w-none text-neutral-700">
                  <p>
                    India's urban middle class is facing a sharp rise in obesity and related non-communicable diseases (NCDs) such as hypertension and type-2 diabetes. Around 23–24% of adults are overweight, 28.5% have hypertension, and over 212 million had diabetes in 2022, with most cases untreated.
                  </p>
                  
                  <p>
                    This health burden is especially high among working-age adults (15–60 years) due to sedentary lifestyles, high-calorie diets, and urban living conditions. National studies reveal alarming rates of abdominal obesity and metabolic risks, amplified by India's unique "thin–fat" phenotype.
                  </p>
                  
                  <p>
                    These issues are systemic, driven by urbanisation, lifestyle changes, food environment, stress, and weak preventive policies—not merely personal choices. Addressing them requires a holistic, multi-level systems approach.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
                    Why This Is a Systemic Issue in India
                  </h3>
                  
                  <p>
                    The surge in lifestyle diseases among India's middle class is driven by deep structural changes. Rising incomes have led to greater consumption of unhealthy, convenient foods and increased sedentary behaviour (TV, smartphones). National data (e.g., NFHS-5) shows a sharp rise in obesity across most states.
                  </p>
                  
                  <p>
                    Urban areas often lack walkable infrastructure, while long work hours and stress encourage overeating. Cultural norms like large portion sizes and weak food marketing regulations worsen the trend. Historically, India's health system focused on infectious diseases, with recent NCD initiatives (e.g., IHCI) arriving late.
                  </p>
                  
                  <p>
                    These conditions create reinforcing feedback loops (urban lifestyle → weight gain → more sedentary habits) and reflect under-addressed systemic drivers like policy gaps, food environments, and social norms, making a systemic approach essential.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                ref={statsRef}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-neutral-50 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                  Key Statistics
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 text-error-500">
                      <FiAlertCircle className="w-5 h-5" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-neutral-800">Overweight Adults</p>
                      <p className="text-neutral-600">23-24% of Indian adults are overweight or obese according to NFHS-5 data (2019-21).</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 text-warning-500">
                      <FiTrendingUp className="w-5 h-5" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-neutral-800">Rising Hypertension</p>
                      <p className="text-neutral-600">28.5% of adults have hypertension, with prevalence rising in urban areas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 text-primary-500">
                      <FiMapPin className="w-5 h-5" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-neutral-800">Diabetes Epidemic</p>
                      <p className="text-neutral-600">Over 212 million Indians had diabetes in 2022, with most cases undiagnosed or untreated.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-100">
                  <h4 className="font-medium text-primary-700 mb-2">
                    Unique Challenge: "Thin-Fat" Phenotype
                  </h4>
                  <p className="text-neutral-700 text-sm">
                    Indians develop metabolic diseases at lower BMIs than Western populations due to higher body fat percentages at the same BMI, requiring India-specific health interventions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">
            Our Research Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={process.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-700 rounded-lg mb-4">
                  <span className="text-xl font-bold">{process.id}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  {process.title}
                </h3>
                
                <p className="text-neutral-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const processes = [
  {
    id: 1,
    title: "Stakeholder Perspectives",
    description: "Engaged with public health experts, doctors, and middle-class individuals to explore root causes, such as long work hours and reliance on takeout food."
  },
  {
    id: 2,
    title: "Variable Identification",
    description: "Extracted key influencing factors from research, including physical activity, fast-food access, stress, health awareness, and policy action."
  },
  {
    id: 3,
    title: "Initial Causal Mapping",
    description: "Created and refined a Causal Loop Diagram (CLD) to visualise interrelations, using polarity signs (+/–), expert feedback, and existing literature."
  },
  {
    id: 4,
    title: "Refinement & Validation",
    description: "Cross-checked variable definitions and feedback loop logic with credible sources, simplifying complex factors into core system variables."
  },
  {
    id: 5,
    title: "Leverage Point Analysis",
    description: "Applied Donella Meadows' 12 leverage point framework to the CLD to pinpoint effective intervention areas."
  },
  {
    id: 6,
    title: "System Archetypes",
    description: "Identified recurring behavioural patterns using archetypes like Shifting the Burden and Fixes That Fail by comparing with system loops."
  }
];

export default Problem;