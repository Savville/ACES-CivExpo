import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

export default function BusinessCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000">
      <motion.div
        className="relative w-96 h-56 cursor-pointer"
        onClick={handleFlip}
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 rounded-xl shadow-2xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-white/30 rounded-full"></div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-1">Alex Morgan</h1>
              <p className="text-purple-100 text-lg">Creative Director</p>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-white/80 text-sm">Tap to reveal details</p>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 rounded-xl shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="h-full bg-gradient-to-br from-slate-800 to-slate-900 p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Details</h2>
              
              <div className="flex items-center gap-3 text-slate-200">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="text-sm">alex.morgan@studio.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Website</p>
                  <p className="text-sm">www.alexmorgan.studio</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <p className="text-white/60 text-sm text-right">Tap to flip back</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
