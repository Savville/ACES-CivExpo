import { motion } from 'motion/react';
import PageLayout from './PageLayout';
import { Package, Building2, Monitor, Shield, Zap } from 'lucide-react';

export default function PartnersPage() {
  const partnerCategories = [
    {
      title: 'Construction Materials & Specialized Solutions',
      subtitle: 'Leading the way in chemical technologies, sustainability, and rapid delivery',
      icon: Package,
      color: 'from-yellow-400 to-yellow-600',
      partners: ['SIKA', 'MAPEI', 'VIVA'],
    },
    {
      title: 'Public Infrastructure & Regulatory Bodies',
      subtitle: 'The custodians of national scale and standards',
      icon: Building2,
      color: 'from-green-600 to-green-800',
      partners: ['KeNHA', 'KURA', 'Gauff Engineering'],
    },
    {
      title: 'Digital Construction & Software Solutions',
      subtitle: 'Providing the digital backbone for modern engineering',
      icon: Monitor,
      color: 'from-yellow-500 to-green-500',
      partners: ['ORACLE (Primavera)', 'JENGA APP', 'ADCC', 'CITECH'],
    },
    {
      title: 'Professional Services & Risk Management',
      subtitle: 'Ensuring project viability and safety',
      icon: Shield,
      color: 'from-green-500 to-yellow-500',
      partners: ['Noitech', 'NAS', 'Somers Engineering'],
    },
    {
      title: 'The Innovation Hub (Startups & SMEs)',
      subtitle: 'Agile pioneers transforming the industry',
      icon: Zap,
      color: 'from-yellow-400 to-green-600',
      partners: ['Makuti Consulting Ltd', 'CracksFox', 'Batir', 'Jumba', 'BuildX Studio', 'Maji Milele'],
    },
  ];

  return (
    <PageLayout title="Partnership Ecosystem">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
      >
        Companies and organizations we would love and we are seeking to partner with for this event
      </motion.p>

      <div className="space-y-8">
        {partnerCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.15, type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className={`bg-gradient-to-r ${category.color} p-1 rounded-3xl shadow-xl`}>
              <div className="bg-white rounded-3xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-gradient-to-br ${category.color} p-4 rounded-xl text-white`}
                  >
                    <category.icon className="w-8 h-8" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{category.title}</h3>
                    <p className="text-gray-600">{category.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.partners.map((partner, idx) => (
                    <motion.div
                      key={partner}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.15 + idx * 0.05, type: 'spring', stiffness: 150 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`bg-gradient-to-r ${category.color} px-6 py-3 rounded-full text-white font-bold shadow-lg`}
                    >
                      {partner}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
