import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi';
import { Mail } from 'lucide-react';

const Team = () => {
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
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center mix-blend-overlay z-0"
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
              Our Team
            </h1>
            
            <p className="text-xl text-neutral-100 mb-8">
              Meet the FSTE Hackathon 53 team behind the UrbanHealthScope project
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Team FSTE
            </h2>
            
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our interdisciplinary team brings together expertise in systems thinking, healthcare, data analysis, and research to tackle complex health challenges.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-800 mb-1">
                  {member.name}
                </h3>
                
                <p className="text-primary-600 font-medium mb-3">
                  {member.studentId}
                </p>
                
                
                
              
              </motion.div>
            ))}
          </div>
          
          <div className="bg-neutral-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-neutral-800 mb-6">
              About the Project
            </h3>
            
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>
                UrbanHealthScope was developed as part of FSTE Hackathon 53, focusing on addressing the rising rates of obesity and lifestyle diseases in middle-class India through a systems thinking approach.
              </p>
              
              <p>
                Our team spent extensive time analyzing the complex interactions between urban development, food systems, activity patterns, and health outcomes to develop a comprehensive understanding of the challenges and potential intervention points.
              </p>
              
              <p>
                Using causal loop diagrams, leverage point analysis, and systems archetypes, we identified key structural factors that contribute to these health challenges and proposed targeted interventions at multiple levels of the system.
              </p>
              
              <p>
                We believe that addressing India's growing health crisis requires looking beyond individual choices to the systems and structures that shape those choices. Our research aims to contribute to more effective and sustainable health interventions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const teamMembers = [
  {
    name: "Ayush Sahu",
    studentId: "2401010120",
    role: "System Dynamics Modeler",
    photo: "https://media-hosting.imagekit.io/4f18af7f7d7e4f30/1731358963902.jpg?Expires=1841239679&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yTB~Kqthab0ihNufzMbkLeozYTE3-C7u5KWPB2BgBty5aIBTQ8xO7gOlb5kko0pBe3yQO-kipJNJXraqmvbBVndvNAb8GrKzNFOl70mvisx-2l4bvEdymkf3ZzkV~vQQ-m1r4uxumpxVUQTYxaUt2ap~PbDNCvTm2P74YbQmZ6jJ0-gF~Woj5VkVWPVJzafKs1PyvHqydbMgbI8BZntmSLUSFB-lD~4Hm1dpTOnDJ2hIS~8dAt-rOEucHbA4YmqPhvnkGUL3T91S2rUzJP4JiIUzBKzLnl2yVOIgoqQE4AHpq8TuXyobnU44KDcKQjVutECVyyMM6VB4QTI3GG8NPg__"
   
  },
  {
    name: "Shaurya Mittal",
    studentId: "2402110028",
    role: "Systems Analysis & Research Lead",
    photo: "https://media-hosting.imagekit.io/eed59b3d49504489/WhatsApp Image 2025-05-07 at 20.48.39.jpeg?Expires=1841239318&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yk30PyZbGpAALnOBCA3mKx9Bhz~L9-mMyKGFXyBnPFgM7n4gu3EVcsV6xgykZgMyuw7IryLFAzN4GUPlPlfMDHjTOSomTPoZwvcIg7a6HwSJrefP71DjqkYEQz1RNp4RAhqKFT2iJcdfP6VIlrsY4irUMPOd49YrT1gYR0gguoqCrQ1YtRUEu04VERYwATLxHxV8elnb4H13SsT-lr7mLL8PkqarT1z4SsW4atMzYi4FBruA7HePL8i9WNIZluGhDEAE-L0tTB98nYoYkZW8sZtg~okdhp0APKTG0RtscftF6qbINYtHywbbTSsYqYa5nBKpw7ZN7yAlTcCuDUJmRA__"

  },
  {
    name: "Somil Thakur",
    studentId: "2402120004",
    role: "Data Visualization Specialist",
    photo: "https://media-hosting.imagekit.io/297afb74ff9445c9/WhatsApp%20Image%202025-05-07%20at%2020.54.15.jpeg?Expires=1841239528&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zKz91qgc9hvLIuFPkkXIKbmtHY0nsPr-CubPC1tC7gHjGva8psmWQBeIFZlnQ03ZS8ZCevs~c9rc0AQvMZ7tmTZtoXvk0uv8clE-7kPGNl3BPT5WxmsAWwpFiEQ~mmQI70gifyBkSjjX5zl8MYpKsoTWTnrlWZP8LRGz-wKXtFxa230tcFmdiojssB7rLKm8SYmdKp8UznhXSebWTIoJbjS5hanVfO5GLdEI~GLOtBiWDeTytTws87W2CC38CprLLdvpEOnZ7VH2ZNRnccGMSAWvlkio6w7cb0qbdbh95T6z5ZUZoUM~zd-GG4keijFhbCbemTlxfCCravK2hjWM~g__"

  },
  {
    name: "Archit Jaiswal",
    studentId: "2402110005",
    role: "Healthcare Research Analyst",
    photo: "https://media-hosting.imagekit.io/835cfd404ac54709/486582084_1177994490708190_5782411538485442520_n.jpg?Expires=1841239464&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wN1XHKtTDuc5guBFYgiUuWrRR~nNv7TOUa6Ji6d1psZsODRkEmfrASPq45dBnH2nnqgRmKvZzxKWeTKmia1tyGTTbUvwdesSHWNlTLlH-fuLkkSe2bfcCNR-Xd1J~pI82e7c~IGnN2kCE9nD8bVqu3iKR3TvUDEMr9tWY3X7fGECbqwgTX7pEwlpS1QsDKJS4eufpLHNKBzNjfZzt5oEJD7nDoOb7qf9BRiytUjhUqIQ3gkSq7do7s2NYsWW~VrSPJVxV7Qt5eMXkV6HfQK-VoVaYcbSfKnHYut6DvdyeIpaTvYjECKHi-Li-NxtKDhdjidQghF2RMZERrJRuaMM8A__"

  },
  {
    name: "Jiya Arora",
    studentId: "2402110013",
    role: "Urban Planning & Policy Researcher",
    photo: "https://media-hosting.imagekit.io/384062cf86544e69/491422272_18278250844253108_5582358803567603563_n.jpg?Expires=1841241367&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yuJ32Ww6cvafYNSaiVvCacImN-F1w72JMJCXPOZL40WIzjXZe~fchigPE1MPjMCu~1d8ainSSCSnpWr1SCKUkSz5bkGDcfhuk51MdasEPtaNHZBClgSYD60OiKa7mUTMFxZOrtYm0RTfiwQxAJGkDk7imn8CCqP36FIatVKi2KtzjUVtTXBKHm4lnRpAD7ax1u3V94j7jBAeSOupuyfbCL6XJhsNiF9g-xrUj4-OKIc9x3ply0e36yevx-IPgHn2WQ39WwkaOFTPKb0Y3~Uz3g9zH5ccXBVANx8BeeVloiN3pHnCNS3ivx9i1jtPBFKOnbk14czEJpEXNo3xaAnZ8Q__"
  },
  
];

export default Team;
