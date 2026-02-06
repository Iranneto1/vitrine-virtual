import { motion } from "framer-motion";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { Footer } from "./components/Footer";
import Silk from "./components/Silk";


{/* Aqui é onde você altera os produtos. Para REMOVER basta apagar o conteúdo entre {}. Para ADICIONAR, copie um produto e cole abaixo do outro e altere os valores e informações. */}
const products = [
  {
    id: 1,
    name: "Fone de ouvido P2 Lehmox",
    description: "Conexão universal com áudio nítido.",
    price: "R$ 15,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287655/Fone_de_ouvido_P2_Lehmox_xyycd3.jpg",
  },
  {
    id: 2,
    name: "Capinha Silicone Apple",
    description: "Toque suave e proteção interna aveludada.",
    price: "R$ 20,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287657/Capinha_Silicone_Apple_zpndbu.jpg",
  },
  {
    id: 3,
    name: "Capinha Transparente Apple",
    description: "Proteção discreta que mantém o design original.",
    price: "R$ 20,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287656/Capinha_Transparente_Apple_peso9n.jpg",
  },
  {
    id: 4,
    name: "Cabo Tipo C-C",
    description: "Carregamento veloz para dispositivos modernos.",
    price: "R$ 25,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287660/Cabo_Tipo_C-C_dzgrdt.jpg",
  },
  {
    id: 5,
    name: "Cabo Tipo C-Lightning",
    description: "Padrão Apple para carga e sincronização.",
    price: "R$ 25,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287659/Cabo_Tipo_C-Lightning_rmpyi9.jpg",
  },
  {
    id: 6,
    name: "Cabo USB-Tipo C Kaidi",
    description: "Resistente e eficiente para uso diário.",
    price: "R$ 25,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287658/Cabo_USB-Tipo_C_Kaidi_gcl3ph.jpg",
  },
  {
    id: 7,
    name: "Cabo USB-Lightning",
    description: "Conexão estável para modelos clássicos iPhone.",
    price: "R$ 25,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287658/Cabo_USB-Lightning_bsdrwf.jpg",
  },
  {
    id: 8,
    name: "Capinha Space Apple",
    description: "Design premium com proteção reforçada.",
    price: "R$ 30,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287656/Capinha_Space_Apple_ezer6m.jpg",
  },
  {
    id: 9,
    name: "Fone Cabo Tipo C",
    description: "Qualidade sonora digital via entrada C.",
    price: "R$ 30,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287655/Fone_Cabo_Tipo_C_qmueps.jpg",
  },
  {
    id: 10,
    name: "Fone Cabo Lightning",
    description: "Conforto e controle direto no conector Apple.",
    price: "R$ 30,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287655/Fone_Cabo_Lightning_orstpq.jpg",
  },
  {
    id: 11,
    name: "Fonte USB-C 20w",
    description: "Carga rápida e segura para seu smartphone.",
    price: "R$ 35,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287662/Fonte_USB-C_20w_dgtcio.jpg",
  },
  {
    id: 12,
    name: "Carregador IOS Completo",
    description: "Conjunto pronto para uso: fonte e cabo.",
    price: "R$ 40,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287655/Carregador_IOS_Completo_zv3r8z.jpg",
  },
  {
    id: 13,
    name: "Fonte USB Turbo 30w",
    description: "Potência extra para carregamentos rápidos.",
    price: "R$ 45,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287655/Fonte_USB_Turbo_30w_y1shy0.jpg",
  },
  {
    id: 14,
    name: "Cabo Baseus 20w Tipo C-Lightning",
    description: "Alta durabilidade e performance garantida.",
    price: "R$ 50,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287660/Cabo_Baseus_20w_Tipo_C-Lightning_x7mrok.jpg",
  },
  {
    id: 15,
    name: "Fonte Turbo 120w + Cabo C",
    description: "Velocidade máxima para dispositivos compatíveis.",
    price: "R$ 50,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287655/Fonte_Turbo_120w_Cabo_C_jza1nb.jpg",
  },
  {
    id: 16,
    name: "Cabo Turbo Essager 29w Tipo C-Lightning",
    description: "Tecnologia avançada para carga inteligente.",
    price: "R$ 60,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287659/Cabo_Turbo_Essager_29w_Tipo_C-Lightning_q6ju3w.jpg",
  },
  {
    id: 17,
    name: "AirPods Pro",
    description: "Imersão sonora e cancelamento de ruído.",
    price: "R$ 130,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287661/AirPods_Pro_m9nwmh.jpg",
  },
  {
    id: 18,
    name: "Fonte Original Apple",
    description: "Qualidade oficial e segurança total Apple.",
    price: "R$ 160,00",
    image: "https://res.cloudinary.com/dpnlypvpc/image/upload/v1770287662/Fonte_Original_Apple_ha72va.jpg",
    featured: true,
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-[var(--tech-neon-green)] selection:text-black">
      {/* CAMADA DE BACKGROUND FIXA */}
      <div className="fixed inset-0 -z-10 bg-[#020617]">
        <Silk
          speed={4}
          scale={1}
          color="#1e293b"
          noiseIntensity={1.2}
          rotation={0}
        />
        {/* Overlay para suavizar e dar profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b]/20 via-[#020617]/0 to-[#000000]/60 pointer-events-none" />
      </div>

      {/* CONTEÚDO DA PÁGINA */}
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl mb-4 py-3 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent font-bold tracking-tight">
            Catálogo de Produtos
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Tecnologia premium selecionada para elevar sua produtividade e
            entretenimento.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center pb-12"
        >
          <div className="inline-block px-10 py-8 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl">
            <h2 className="text-3xl text-white font-medium mb-3">
              Não encontrou o que procurava?
            </h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Temos um catálogo exclusivo sob encomenda. <br />Converse com nosso
              time.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent(
                  "Olá! Gostaria de saber mais sobre os produtos da IN Tech Store.",
                );
                window.open(
                  `https://wa.me/+5583994189699?text=${message}`,
                  "_blank",
                );
              }}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[var(--tech-neon-green)] to-[var(--tech-vibrant-blue)] text-[var(--tech-white)] font-bold shadow-lg shadow-[var(--tech-neon-green)]/20 transition-all"
            >
              Falar com Especialista
            </motion.button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
