import { useState } from 'react';
import { motion } from 'motion/react';
import PageLayout from './PageLayout';
import { Crown, Award, Medal, Store } from 'lucide-react';

export default function SponsorshipPage() {
  const [rotatingIndex, setRotatingIndex] = useState<number | null>(null);

  const tiers = [
    {
      tier: 'Tier 1',
      title: 'Platinum Partner',
      subtitle: 'Title Sponsor',
      investment: 'Ksh 150,000',
      icon: <Crown className="w-12 h-12" />,
      color: 'from-yellow-400 via-yellow-300 to-yellow-500',
      borderColor: 'border-yellow-400',
      benefits: [
        '"Powered By" branding on all event assets',
        'Keynote speaking slot at Opening & Finale',
        'Lead Judge position in all 3 categories',
        'Premium Exhibition Booth',
        'Full access to Student CV Database',
      ],
    },
    {
      tier: 'Tier 2',
      title: 'Gold Partner',
      subtitle: 'Category Sponsor',
      investment: 'Ksh 100,000',
      icon: <Award className="w-12 h-12" />,
      color: 'from-yellow-500 via-yellow-400 to-green-500',
      borderColor: 'border-yellow-500',
      benefits: [
        'Exclusive branding of one category (e.g., "The Sika Structures Challenge")',
        'Judge position in that specific category',
        'Dedicated Workshop slot (1 Hour)',
        'Standard Exhibition Booth',
      ],
    },
    {
      tier: 'Tier 3',
      title: 'Silver Partner',
      subtitle: 'Session Sponsor',
      investment: 'Ksh 50,000',
      icon: <Medal className="w-12 h-12" />,
      color: 'from-green-500 via-green-400 to-yellow-400',
      borderColor: 'border-green-500',
      benefits: [
        'Branding during specific sessions (e.g., "Lunch Break by MAPEI")',
        'Shared Exhibition Space',
      ],
    },
    {
      tier: 'Tier 4',
      title: 'Technical Exhibitor',
      subtitle: 'Software/Startups',
      investment: 'Booth Fee',
      icon: <Store className="w-12 h-12" />,
      color: 'from-green-600 via-black to-yellow-600',
      borderColor: 'border-green-600',
      benefits: [
        '30-min Demo Slot (e.g., "Oracle Primavera Masterclass")',
        'Exhibition Booth for demos',
        'Direct networking with students',
      ],
    },
  ];

  return (
    <PageLayout title="Sponsorship & Participation Tiers">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
      >
        Flexible engagement packages for partners - Choose your level of impact
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.tier}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.6 + index * 0.2, type: 'spring', stiffness: 80 }}
            onHoverStart={() => setRotatingIndex(index)}
            onHoverEnd={() => setRotatingIndex(null)}
            className="perspective-1000"
          >
            <motion.div
              animate={{
                rotateY: rotatingIndex === index ? 360 : 0,
              }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${tier.color} p-1 rounded-3xl shadow-2xl border-4 ${tier.borderColor}`}>
                <div className="bg-white rounded-3xl p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="bg-black text-yellow-400 px-4 py-2 rounded-full font-bold text-sm">
                        {tier.tier}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-800 mt-3">{tier.title}</h3>
                      <p className="text-gray-600">{tier.subtitle}</p>
                    </div>
                    <motion.div
                      animate={{
                        rotate: rotatingIndex === index ? 360 : 0,
                        scale: rotatingIndex === index ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className={`bg-gradient-to-br ${tier.color} p-4 rounded-2xl text-white`}
                    >
                      {tier.icon}
                    </motion.div>
                  </div>

                  <div className={`bg-gradient-to-r ${tier.color} p-4 rounded-2xl mb-6`}>
                    <p className="text-center text-3xl font-bold text-white">{tier.investment}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-800 text-lg mb-3">Key Benefits:</h4>
                    {tier.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className={`bg-gradient-to-r ${tier.color} w-2 h-2 rounded-full mt-2 flex-shrink-0`}></span>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 100 }}
        className="bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 p-1 rounded-3xl shadow-2xl"
      >
        <div className="bg-white rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Value Proposition for Partners
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Early Talent Acquisition',
                desc: 'Access to the top 10% of engineering students demonstrating practical skills (Revit, EPANET, Civil 3D)',
              },
              {
                title: 'Brand Positioning',
                desc: 'Embed your products and standards into the minds of future engineers before they enter the market',
              },
              {
                title: 'Corporate Social Responsibility',
                desc: 'Support SDG 9 (Innovation & Infrastructure) and SDG 4 (Quality Education) by mentoring the next generation',
              },
              {
                title: 'Market Intelligence',
                desc: 'Gain visibility and feedback from a tech-savvy youth demographic',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200"
              >
                <h4 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
}
