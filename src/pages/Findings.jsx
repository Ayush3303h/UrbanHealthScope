import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LeveragePointCard from '../components/findings/LeveragePointCard';
import SystemArchetypeChart from '../components/visualizations/SystemArchetypeChart';

const Findings = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [leverageRef, leverageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-primary-700">
        <div 
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center mix-blend-overlay z-0"
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
              Research Findings
            </h1>
            
            <p className="text-xl text-neutral-100 mb-8">
              Key insights and intervention opportunities from our systems analysis of obesity and lifestyle diseases
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Leverage Points Analysis */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-neutral-800 mb-6">
              Leverage Points Analysis
            </h2>
            
            <div className="prose prose-lg max-w-none text-neutral-700 mb-10">
              <p>
                Using Donella Meadows' framework, we identified key intervention points where changes could have the greatest impact on reducing obesity and lifestyle diseases among India's middle class. These leverage points range from relatively simple policy changes to deeper paradigm shifts.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            ref={leverageRef}
            initial={{ opacity: 0, y: 30 }}
            animate={leverageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {leveragePoints.map((point, index) => (
              <LeveragePointCard
                key={point.name}
                name={point.name}
                description={point.description}
                category={point.category}
                impact={point.impact}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Event-Pattern-Structure Analysis */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">
            Event → Pattern → Structure Analysis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {eventPatternStructure.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full" style={{ backgroundColor: item.color }}>
                  <span className="text-white text-lg font-bold">{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  {item.title}
                </h3>
                
                <div className="space-y-3">
                  {item.items.map((listItem, i) => (
                    <div key={i} className="flex items-start">
                      <div className="min-w-[8px] h-2 mt-2 rounded-full bg-primary-300 mr-3"></div>
                      <p className="text-neutral-600">
                        {listItem}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm mb-12">
            <h3 className="text-xl font-semibold text-neutral-800 mb-4">
              Analysis of Existing Interventions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h4 className="font-medium text-neutral-800 mb-2">Current Approaches</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 mt-2 rounded-full bg-error-500 mr-2"></span>
                    <span>Most programs target symptoms (e.g., screening, awareness), not systemic causes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 mt-2 rounded-full bg-error-500 mr-2"></span>
                    <span>Weak enforcement leads to minimal structural change</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 mt-2 rounded-full bg-error-500 mr-2"></span>
                    <span>Individual responsibility is overemphasized while systemic factors are underaddressed</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg">
                <h4 className="font-medium text-primary-800 mb-2">Proposed Structural Interventions</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 mt-2 rounded-full bg-primary-600 mr-2"></span>
                    <span>Food Systems: Redirect subsidies, regulate marketing, ban harmful ingredients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 mt-2 rounded-full bg-primary-600 mr-2"></span>
                    <span>Urban Design: Promote walkable, active environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 mt-2 rounded-full bg-primary-600 mr-2"></span>
                    <span>Healthcare & Education: Emphasize lifestyle prevention and curriculum integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 mt-2 rounded-full bg-primary-600 mr-2"></span>
                    <span>Cultural Norms: Shift public values using media and policy alignment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-neutral-800 mb-6">
            System Archetypes in Action
          </h3>
          
          <div className="bg-white p-6 rounded-xl shadow-sm mb-12">
            <SystemArchetypeChart />
          </div>
        </div>
      </section>
      
      {/* Additional Insights */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">
            Additional Insights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  {insight.title}
                </h3>
                
                <p className="text-neutral-600 mb-4">
                  {insight.description}
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-neutral-200">
                  <h4 className="font-medium text-primary-700 mb-2 text-sm">
                    Implication for Interventions
                  </h4>
                  <p className="text-neutral-700 text-sm">
                    {insight.implication}
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

const leveragePoints = [
  {
    name: "Public Health Awareness",
    description: "Increase in targeted awareness campaigns and education about healthy living.",
    category: "Paradigm Shift",
    impact: "High – Can shift long-term behavior and societal norms about food and exercise."
  },
  {
    name: "Aggressive Food Marketing Regulation",
    description: "Implement stricter laws on junk food advertisements and promotions.",
    category: "Rules of the System",
    impact: "High – Directly curbs exposure to unhealthy diet stimuli, especially among youth."
  },
  {
    name: "Processed Food Availability",
    description: "Promote local, fresh, and whole foods through supply chain incentives.",
    category: "Structure of Material Stocks & Flows",
    impact: "Medium – Alters accessibility and convenience, nudging better choices."
  },
  {
    name: "Western Diet Adoption",
    description: "Reverse cultural shifts by promoting traditional Indian diets rich in nutrients.",
    category: "Goals of the System",
    impact: "High – Realigns societal dietary norms and aspirations."
  },
  {
    name: "Physical Inactivity",
    description: "Redesign cities for walkability, biking, and accessible fitness infrastructure.",
    category: "Structure of Material Stocks & Flows",
    impact: "Medium – Gradually builds a more active daily routine for the population."
  },
  {
    name: "Dietary Changes Support",
    description: "Provide subsidies for healthy food, and impose taxes on sugary/processed items.",
    category: "Rules of the System",
    impact: "High – Direct economic incentives change behaviour quickly at scale."
  }
];

const eventPatternStructure = [
  {
    title: "Event (Symptoms)",
    color: "#f97316",
    items: [
      "Visible rise in obesity, diabetes, and hypertension, especially among urban youth",
      "Increased fast food consumption, screen time, and sedentary habits",
      "Media reports highlight younger heart attack cases"
    ]
  },
  {
    title: "Pattern (Trends)",
    color: "#f59e0b",
    items: [
      "Consistent growth in overweight and blood pressure cases (NFHS data)",
      "Long-term trends: reduced physical activity, higher calorie intake, and post-COVID weight gain",
      "Shift from traditional diets to processed convenience foods"
    ]
  },
  {
    title: "Structure (Underlying Drivers)",
    color: "#6366f1",
    items: [
      "Policy and economic incentives favor unhealthy foods",
      "Urban design discourages physical activity",
      "Weak regulation of food marketing",
      "Cultural norms glorify fast food and large meals",
      "Healthcare prioritizes treatment over prevention"
    ]
  }
];

const additionalInsights = [
  {
    title: "COVID-19 Impact",
    description: "Lockdowns caused weight gain due to inactivity and snacking, but some shifted to healthier home cooking—showing both positive and negative habit changes from environmental disruptions.",
    implication: "Crisis periods represent opportunities to reshape habits, suggesting targeted interventions during recovery phases could establish healthier norms."
  },
  {
    title: "Thin–Fat Phenotype",
    description: "Indians develop metabolic diseases at lower BMIs than Western benchmarks. India needs specific BMI standards and earlier screening to prevent underdiagnosis.",
    implication: "Treatment protocols require India-specific thresholds, and awareness campaigns should emphasize that even 'normal-looking' body compositions can harbor health risks."
  },
  {
    title: "Double Burden of Malnutrition",
    description: "India faces both undernutrition and obesity—often side by side (e.g., urban slums vs. rural areas). Calorie-based interventions risk worsening obesity without nutritional quality focus.",
    implication: "Nutritional interventions must balance adequacy with quality, avoiding approaches that simply increase caloric intake without addressing nutritional composition."
  },
  {
    title: "Gender & Regional Differences",
    description: "Obesity rates vary by state and gender (e.g., higher in Punjab/Kerala; more abdominal obesity in women), requiring region- and culture-specific strategies.",
    implication: "One-size-fits-all national policies may fail; interventions should be tailored to geographic, cultural and gender-specific contexts."
  }
];

export default Findings;