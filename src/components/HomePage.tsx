import { motion } from 'motion/react';
import PageLayout from './PageLayout';
import logo from 'figma:asset/1fa51700170362a802877d387e9efd586bb1a631.png';
import { Building2, Calendar, MapPin, Target } from 'lucide-react';

export default function HomePage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          className="mb-8"
        >
          <img src={logo} alt="ACES KU Logo" className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-yellow-500 via-green-600 to-yellow-500 bg-clip-text text-transparent">
            ACES CivExpo 2026
          </span>
        </motion.h1>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl text-center mb-8 text-gray-800 max-w-4xl px-4"
        >
          Building Kenya's Tomorrow: Sustainable Infrastructure for a Resilient Future
        </motion.h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12"
        >
          <InfoCard icon={<Calendar />} title="Date" value="May 2026" delay={0.9} />
          <InfoCard icon={<MapPin />} title="Venue" value="Kenyatta University" delay={1.0} />
          <InfoCard icon={<Building2 />} title="Host" value="ACES KU Chapter" delay={1.1} />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
          className="bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 p-8 rounded-3xl shadow-2xl max-w-3xl"
        >
          <div className="flex items-start gap-4">
            <div className="bg-black/10 p-3 rounded-full">
              <Target className="w-8 h-8 text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">Executive Summary</h3>
              <p className="text-gray-900 leading-relaxed">
                The ACES CivExpo 2026 is the premier student-industry interface for the built environment in Kenya. 
                Moving beyond theoretical coursework, CivExpo challenges students to solve real-world engineering 
                problems using modern digital tools and sustainable practices. We bridge the gap between established 
                industry giants and agile, tech-driven startups, creating a talent pipeline ready for the future of 
                Kenyan infrastructure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}

function InfoCard({ icon, title, value, delay }: { icon: React.ReactNode; title: string; value: string; delay: number }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="bg-white border-4 border-black p-6 rounded-2xl shadow-xl"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-gradient-to-br from-yellow-400 to-green-500 p-2 rounded-lg text-black">
          {icon}
        </div>
        <h3 className="font-bold text-gray-600">{title}</h3>
      </div>
      <p className="text-xl font-bold text-black">{value}</p>
    </motion.div>
  );
}
