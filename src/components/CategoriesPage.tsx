import { motion } from 'motion/react';
import PageLayout from './PageLayout';
import { Building, Droplet, Car } from 'lucide-react';

export default function CategoriesPage() {
  const categories = [
    {
      letter: 'A',
      icon: <Building className="w-12 h-12" />,
      title: 'Structures',
      subtitle: 'The Hillside Hostel Challenge',
      theme: 'Adapting to Terrain: Affordable & Resilient Housing on Challenging Sites',
      task: 'Design a conceptually complete multi-storey student hostel for 1,000 students on a steep, hypothetical 1-acre urban site (approx. 10% slope).',
      constraints: [
        'Topography: Must step the foundation to minimize excavation (Cut/Fill balance)',
        'Materials: Prioritize low-carbon options (e.g., ISSB, Green Concrete)',
        'Livability: Maximize natural ventilation and accessibility despite the slope',
      ],
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      letter: 'B',
      icon: <Droplet className="w-12 h-12" />,
      title: 'Water Resources',
      subtitle: 'The "Zero-Day" Campus System',
      theme: 'Every Drop Counts: Engineering Resilience Against Scarcity',
      task: 'Design an integrated water supply, harvesting, treatment, and reuse system for a campus of 10,000 students facing chronic shortages.',
      constraints: [
        'Scarcity: System must survive with municipal water available only 3 days/week',
        'Circular Economy: "Purple Pipe" system mandatory for reusing wastewater in irrigation/flushing',
        'Hydraulics: Gravity-fed design using EPANET modeling',
      ],
      color: 'from-green-500 to-green-700',
    },
    {
      letter: 'C',
      icon: <Car className="w-12 h-12" />,
      title: 'Transport',
      subtitle: 'The "Last Mile" Mobility Corridor',
      theme: 'Beyond the Potholes: Designing for People, Not Just Cars',
      task: 'Upgrade a 3km steep gravel access road and internal campus mobility loop to all-weather standards.',
      constraints: [
        'NMT Focus: ≥60% of space dedicated to Non-Motorized Transport (Walkways/Cycle tracks)',
        'Terrain: 80m elevation gain with a river crossing (requires bridge/culvert design)',
        'Resilience: Drainage design for 1-in-10-year flood events',
      ],
      color: 'from-yellow-500 to-green-500',
    },
  ];

  return (
    <PageLayout title="Competition Challenge Structure">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
      >
        Three technical competitions designed to mirror actual challenges facing Kenya's infrastructure sector
      </motion.p>

      <div className="space-y-12">
        {categories.map((category, index) => (
          <motion.div
            key={category.letter}
            initial={{ scale: 0.8, opacity: 0, rotateX: -30 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ delay: 0.6 + index * 0.3, type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className={`bg-gradient-to-r ${category.color} p-1 rounded-3xl shadow-2xl`}>
              <div className="bg-white rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-6 mb-6">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-white`}
                  >
                    {category.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-black text-yellow-400 px-4 py-2 rounded-full font-bold text-lg">
                        Category {category.letter}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-800">{category.title}</h3>
                    </div>
                    <h4 className="text-xl text-gray-600 mb-3">{category.subtitle}</h4>
                    <p className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-bold text-lg mb-4`}>
                      {category.theme}
                    </p>
                  </div>
                </div>

                <div className="mb-6 p-6 bg-gray-50 rounded-2xl border-2 border-gray-200">
                  <h5 className="font-bold text-gray-800 mb-2 text-lg">The Task:</h5>
                  <p className="text-gray-700">{category.task}</p>
                </div>

                <div>
                  <h5 className="font-bold text-gray-800 mb-4 text-lg">Key Constraints:</h5>
                  <div className="grid gap-3">
                    {category.constraints.map((constraint, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.3 + idx * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200"
                      >
                        <span className={`bg-gradient-to-r ${category.color} w-3 h-3 rounded-full mt-1.5 flex-shrink-0`}></span>
                        <span className="text-gray-700">{constraint}</span>
                      </motion.div>
                    ))}
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
