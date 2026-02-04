import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--tech-glass-bg)] border-b border-[var(--tech-glass-border)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Container centralizado */}
        <div className="flex items-center justify-center">
          
          <motion.a
            href="/" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block"
          >
            <img 
              src="https://res.cloudinary.com/dqkpkmicx/image/upload/v1770156859/Logo_instagram_yxrvpr.png" 
              alt="Logo"
              className="w-18 h-18 object-contain rounded-lg" 
            />
          </motion.a>

        </div>
      </div>
    </motion.header>
  );
}