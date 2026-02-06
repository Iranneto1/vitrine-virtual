import { Instagram, } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 backdrop-blur-xl bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/in_techstore/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Info Text */}
          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm">
              Catálogo visual, sem compra direta.
            </p>
            <p className="text-white/40 text-xs mt-1">
              © {new Date().getFullYear()} IN Tech Store. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
