import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import StatCard from '../components/ui/StatCard';
import { FiArrowRight, FiActivity, FiBarChart2, FiUsers } from 'react-icons/fi';

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [overviewRef, overviewInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { 
      id: 1, 
      label: 'Overweight Adults', 
      value: '23-24%', 
      icon: <FiUsers className="w-6 h-6 text-accent-500" />,
      description: 'of Indian adults are overweight or obese'
    },
    { 
      id: 2, 
      label: 'Hypertension', 
      value: '28.5%', 
      icon: <FiActivity className="w-6 h-6 text-error-500" />,
      description: 'suffer from high blood pressure' 
    },
    { 
      id: 3, 
      label: 'Diabetes', 
      value: '212M+', 
      icon: <FiBarChart2 className="w-6 h-6 text-primary-500" />,
      description: 'Indians had diabetes in 2022' 
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-700 z-0 opacity-95" />
        <div 
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3619067/pexels-photo-3619067.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center mix-blend-overlay z-0"
        />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Understanding India's <br />
                <span className="text-secondary-400">Urban Health Crisis</span>
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-100 mb-8">
                Exploring the systemic factors behind rising obesity and lifestyle diseases in middle-class India
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/problem" 
                  className="btn btn-secondary"
                >
                  Explore Our Research
                </Link>
                <Link 
                  to="/team" 
                  className="btn bg-white text-primary-700 hover:bg-neutral-100"
                >
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 50">
            <path d="M0,32L80,26.7C160,21,320,11,480,16C640,21,800,43,960,42.7C1120,43,1280,21,1360,10.7L1440,0L1440,50L1360,50C1280,50,1120,50,960,50C800,50,640,50,480,50C320,50,160,50,80,50L0,50Z"></path>
          </svg>
        </motion.div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {stats.map((stat, index) => (
              <StatCard 
                key={stat.id}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                description={stat.description}
                delay={index * 0.2}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Problem Overview */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={overviewRef}
              initial={{ opacity: 0, x: -30 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                The Growing Health Crisis in <span className="text-primary-600">Urban India</span>
              </h2>
              
              <p className="text-lg text-neutral-700 mb-6">
                Despite fitness trends, rates of obesity, hypertension, and diabetes are rising rapidly among India's middle-income population. Our research explores the complex systemic factors behind this paradox.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-primary-100 p-2 rounded-full">
                    <FiActivity className="w-5 h-5 text-primary-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-neutral-800">Sedentary Lifestyles</h3>
                    <p className="text-neutral-600">
                      Long work hours, urban design, and technology contribute to dramatically reduced physical activity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-primary-100 p-2 rounded-full">
                    <FiBarChart2 className="w-5 h-5 text-primary-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-neutral-800">Changing Diets</h3>
                    <p className="text-neutral-600">
                      Processed foods, fast food culture, and shifting away from traditional diets affect nutrition quality.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-primary-100 p-2 rounded-full">
                    <FiUsers className="w-5 h-5 text-primary-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-neutral-800">Systemic Factors</h3>
                    <p className="text-neutral-600">
                      Urban design, policy gaps, and commercial interests create an environment that promotes obesity.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/analysis" 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Explore our detailed analysis
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="w-full h-0 pb-[75%] rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Urban Indian lifestyle" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 p-4 bg-white rounded-lg shadow-md max-w-xs">
                <p className="text-neutral-700 font-medium">
                  "The rise in lifestyle diseases is systemic, driven by urbanisation, food environments, and policy gaps."
                </p>
                <p className="text-primary-600 font-semibold mt-2">— Research Finding</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Research Findings
          </h2>
          
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            Discover how systems thinking can help address India's growing health challenges
          </p>
          
          <Link 
            to="/findings" 
            className="btn bg-white text-primary-700 hover:bg-neutral-100"
          >
            View Detailed Findings
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;