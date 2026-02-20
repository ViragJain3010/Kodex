'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function LogoutOverlay() {
  const { showsLogoutFeedback } = useAuth();

  return (
    <AnimatePresence>
      {showsLogoutFeedback && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-gray-900 border border-cyan-500/30 p-8 rounded-2xl shadow-2xl flex flex-col items-center space-y-4"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="h-16 w-16 bg-red-500 rounded-full flex items-center justify-center"
              >
                <LogOut className="h-8 w-8 text-white ml-1" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -inset-2 border-2 border-red-500/50 rounded-full"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Logged Out</h3>
              <p className="text-gray-400 mt-1">See you again soon!</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
