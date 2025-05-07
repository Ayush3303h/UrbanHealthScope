import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiDownload, FiBook } from 'react-icons/fi';

const Resources = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-primary-700">
        <div 
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center mix-blend-overlay z-0"
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
              Resources
            </h1>
            
            <p className="text-xl text-neutral-100 mb-8">
              Research references and further reading on obesity and lifestyle diseases in India
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* References Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-800 mb-6">
              Research References
            </h2>
            
            <p className="text-lg text-neutral-600 mb-10">
              Our analysis draws on a wide range of academic studies, government reports, and health surveys. Below are key references that informed our systems analysis.
            </p>
            
            <div className="space-y-6">
              {references.map((reference, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-6 bg-neutral-50 rounded-lg border border-neutral-100"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <FiBook className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                        {reference.title}
                      </h3>
                      <p className="text-neutral-600 mb-3">
                        {reference.authors} ({reference.year})
                      </p>
                      <p className="text-sm text-neutral-500 italic mb-4">
                        {reference.publication}
                      </p>
                      
                      {reference.url && (
                        <a 
                          href={reference.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
                        >
                          View Source <FiExternalLink className="ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Additional Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 mb-6">
              Further Reading
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {furtherReading.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-lg shadow-sm border border-neutral-100"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4">
                      {resource.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-neutral-600 mb-4">
                        {resource.description}
                      </p>
                      
                      <a 
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors font-medium"
                      >
                        {resource.linkText} <FiExternalLink className="ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Systems Thinking Resources */}
          <div>
            <h2 className="text-3xl font-bold text-neutral-800 mb-6">
              Systems Thinking Resources
            </h2>
            
            <div className="bg-neutral-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                Understanding Systems Thinking for Health Challenges
              </h3>
              
              <p className="text-neutral-600 mb-6">
                For those interested in learning more about systems thinking approaches to health challenges, these resources provide an excellent starting point.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {systemsResources.map((resource, index) => (
                  <motion.a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-all"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-primary-600 mb-3">
                      {resource.icon}
                    </div>
                    <h4 className="font-medium text-neutral-800 mb-2">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-neutral-500">
                      {resource.source}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const references = [
  {
    title: "National Family Health Survey (NFHS-5), 2019-21",
    authors: "International Institute for Population Sciences (IIPS)",
    year: "2021",
    publication: "Ministry of Health and Family Welfare, Government of India",
    url: "http://rchiips.org/nfhs/factsheet_NFHS-5.shtml"
  },
  {
    title: "Prevalence of diabetes and prediabetes in 15 states of India: results from the ICMR–INDIAB population-based cross-sectional study",
    authors: "Anjana RM, Pradeepa R, Deepa M, et al.",
    year: "2023",
    publication: "Lancet Diabetes Endocrinology",
    url: "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(17)30174-2/fulltext"
  },
  {
    title: "National Noncommunicable Disease Monitoring Survey (NNMS) 2017-18",
    authors: "ICMR-National Centre for Disease Informatics & Research",
    year: "2020",
    publication: "Ministry of Health and Family Welfare, Government of India"
  },
  {
    title: "The thin-fat phenotype and global metabolic disease risk",
    authors: "Mukhopadhyay B, Forouhi NG, Ong KK, et al.",
    year: "2020",
    publication: "Obesity Medicine",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S2451847620300245"
  },
  {
    title: "Impact of COVID-19 on lifestyle-related behaviours- a cross-sectional audit of responses from nine hundred and ninety-five participants from India",
    authors: "Basu S, Karmakar A, Bidhan V, et al.",
    year: "2022",
    publication: "Physiology & Behavior",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0031938422000312"
  }
];

const furtherReading = [
  {
    title: "WHO Global Action Plan for the Prevention and Control of NCDs 2013-2020",
    description: "Comprehensive framework for addressing noncommunicable diseases globally, with relevance to the Indian context",
    url: "https://www.who.int/publications/i/item/9789241506236",
    linkText: "Access WHO Resource",
    icon: <FiBook size={24} />
  },
  {
    title: "India Hypertension Control Initiative (IHCI)",
    description: "A collaborative initiative to improve blood pressure control among adults with hypertension in India",
    url: "https://www.who.int/india/health-topics/hypertension",
    linkText: "Learn About IHCI",
    icon: <FiExternalLink size={24} />
  },
  {
    title: "Food Marketing to Children in India",
    description: "Report on advertising practices and their influence on children's food preferences and choices",
    url: "#",
    linkText: "Download Report",
    icon: <FiDownload size={24} />
  },
  {
    title: "Traditional Indian Diets: Nutritional and Health Benefits",
    description: "Scientific review of traditional dietary patterns and their potential role in preventing modern lifestyle diseases",
    url: "#",
    linkText: "Read Review",
    icon: <FiBook size={24} />
  }
];

const systemsResources = [
  {
    title: "Thinking in Systems: A Primer",
    source: "By Donella H. Meadows",
    url: "#",
    icon: <FiBook size={20} />
  },
  {
    title: "Systems Thinking for Health Systems Strengthening",
    source: "World Health Organization",
    url: "https://www.who.int/alliance-hpsr/resources/9789241563895/en/",
    icon: <FiBook size={20} />
  },
  {
    title: "The Fifth Discipline",
    source: "By Peter M. Senge",
    url: "#",
    icon: <FiBook size={20} />
  },
  {
    title: "Systems Archetypes Basics",
    source: "The Systems Thinker",
    url: "#",
    icon: <FiDownload size={20} />
  }
];

export default Resources;