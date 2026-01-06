import { motion } from 'motion/react';
import PageLayout from './PageLayout';
import { Rocket, Code, Trophy } from 'lucide-react';

export default function ProgramsPage() {
  const phases = [
    {
      title: 'WEDNESDAY',
      duration: 'Day 1',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-yellow-400 to-yellow-600',
      items: [
        'Virtual rollout of the Technical Briefs',
        'Industry Skills Workshops: Partner-led sessions on specialized topics (e.g., "BIM with ADCC", "Sustainable Concrete with Sika")',
        'Software bootcamps (Revit, EPANET, Civil 3D)',
      ],
    },
    {
      title: 'THURSDAY',
      duration: 'Day 2',
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-500 to-green-700',
      items: [
        'Project Exhibition: Top teams present their designs to judges',
        'Submission of Concept Reports and Digital Models',
        'Awards Ceremony: Crowning the winners of the 2026 Challenge',
      ],
    },
    {
      title: 'FRIDAY',
      duration: 'Day 3',
      icon: <Trophy className="w-8 h-8" />,
      color: 'from-yellow-500 to-green-500',
      items: [
        'Corporate Booths: Partners exhibit products and recruit talent',
        'Panel Discussions: Leaders from KeNHA, KURA, and Private Sector discuss Resilience in Infrastructure',
        'Site Visit: Field experience and practical industry exposure',
      ],
    },
  ];

  return (
    <PageLayout title="Summary of Programmes">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
      >
        CivExpo is not just a single event but a structured season of learning, innovation, and competition.
      </motion.p>

      <div className="space-y-8">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.title}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.2, type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? -1 : 1 }}
            className="relative"
          >
            <div className={`bg-gradient-to-r ${phase.color} p-1 rounded-3xl`}>
              <div className="bg-white rounded-3xl p-8">
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-gradient-to-br ${phase.color} p-4 rounded-2xl text-white flex-shrink-0`}
                  >
                    {phase.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{phase.title}</h3>
                      <span className="bg-black text-yellow-400 px-4 py-2 rounded-full font-bold text-sm">
                        {phase.duration}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {phase.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.8 + index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className={`bg-gradient-to-r ${phase.color} w-2 h-2 rounded-full mt-2 flex-shrink-0`}></span>
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}