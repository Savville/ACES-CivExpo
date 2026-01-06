import { motion } from 'motion/react';
import PageLayout from './PageLayout';
import { Mail, Phone, Users, Sparkles } from 'lucide-react';
import logo from 'figma:asset/1fa51700170362a802877d387e9efd586bb1a631.png';

export default function ContactPage() {
  return (
    <PageLayout title="Join Us in Building Kenya's Tomorrow">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 p-1 rounded-3xl shadow-2xl mb-12">
          <div className="bg-white rounded-3xl p-10">
            <div className="flex flex-col items-center mb-8">
              <motion.img
                src={logo}
                alt="ACES KU Logo"
                className="w-40 h-40 mb-6"
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
                Call to Action
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <p className="text-xl text-gray-700 text-center">
                  Whether as a Title Sponsor, Technical Mentor, or Exhibitor
                </p>
                <Sparkles className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-yellow-600 via-green-600 to-yellow-600 bg-clip-text text-transparent text-center">
                Your contribution will shape the resilience of our future infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-2xl border-2 border-yellow-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Email Us</h3>
                </div>
                <a
                  href="mailto:aceskenyattauniversity@gmail.com"
                  className="text-gray-700 hover:text-yellow-600 transition-colors block break-all"
                >
                  aceskenyattauniversity@gmail.com
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl border-2 border-green-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-700 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Call Us</h3>
                </div>
                <a
                  href="tel:0710731021"
                  className="text-gray-700 hover:text-green-600 transition-colors text-xl font-bold"
                >
                  0710 731 021
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border-2 border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-yellow-400 via-green-500 to-yellow-400 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  ACES Kenyatta University Chapter
                </h3>
              </div>
              <p className="text-gray-700 italic">
                Association of Civil Engineering Students
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-4 text-center"
        >
          {['SDG 4: Quality Education', 'SDG 9: Innovation & Infrastructure', 'SDG 11: Sustainable Cities'].map(
            (sdg, idx) => (
              <motion.div
                key={sdg}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-yellow-400 to-green-500 p-4 rounded-2xl shadow-lg"
              >
                <p className="text-white font-bold text-sm">{sdg}</p>
              </motion.div>
            )
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-gray-600 mt-12 text-lg"
        >
          Together, we're building a resilient future for Kenya's infrastructure! 🏗️🌍✨
        </motion.p>
      </motion.div>
    </PageLayout>
  );
}
