import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  delay?: number;
}

export function ProductCard({ name, description, price, image, delay = 0 }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá! Gostaria de mais informações sobre o produto ${name}.`);
    window.open(`https://wa.me/+5583994189699?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 transition-all hover:shadow-2xl hover:shadow-[var(--tech-neon-green)]/10"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl bg-white/5 mb-4 h-75">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <h3 className="text-white text-xl mb-2">
            {name}
          </h3>
          <p className="text-white/70 text-sm">
            {description}
          </p>
        </div>

        {price && (
          <p className="text-[var(--tech-white)] text-2xl">
            {price}
          </p>
        )}

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleWhatsAppClick}
          className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[var(--tech-vibrant-blue)] to-[var(--tech-vibrant-blue)] text-[var(--tech-white)] font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[var(--tech-neon-green)]/50 transition-all"
        >
          Comprar pelo WhatsApp
        </motion.button>
      </div>
    </motion.div>
  );
}