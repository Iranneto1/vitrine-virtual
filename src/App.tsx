import { motion } from "framer-motion";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { Footer } from "./components/Footer";
import Silk from "./components/Silk";


{/* Aqui é onde você altera os produtos. Para REMOVER basta apagar o conteúdo entre {}. Para ADICIONAR, copie um produto e cole abaixo do outro e altere os valores e informações. */}
const products = [
  {
    id: 1,
    name: "Headset Premium Wireless",
    description: "Áudio de alta fidelidade",
    price: "R$ 1.299,00",
    image:
      "https://images.unsplash.com/photo-1741770067276-a10e15ff5197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd2lyZWxlc3MlMjBoZWFkcGhvbmVzJTIwYmxhY2t8ZW58MXx8fHwxNzcwMTE4NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    id: 2,
    name: "Headset VR Next-Gen",
    description: "Experiência imersiva em realidade virtual",
    price: "R$ 2.499,00",
    image:
      "https://images.unsplash.com/photo-1758523670550-223a01cd7764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMGhlYWRzZXQlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3MDA2NDcxOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Fones Pro Elite",
    description: "Design minimalista com som cristalino",
    price: "R$ 899,00",
    image:
      "https://images.unsplash.com/photo-1695634463658-52463b8f2209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGVhcmJ1ZHMlMjBtb2Rlcm58ZW58MXx8fHwxNzcwMTI2MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "Gaming Headset RGB",
    description: "Som surround 7.1 para gamers profissionais",
    price: "R$ 699,00",
    image:
      "https://images.unsplash.com/photo-1679533662345-b321cf2d8792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBoZWFkcGhvbmVzJTIwYmxhY2t8ZW58MXx8fHwxNzcwMTI2MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    name: "Smartwatch Tech Pro",
    description: "Monitoramento avançado de saúde e fitness",
    price: "R$ 1.599,00",
    image:
      "https://images.unsplash.com/photo-1687078426457-89ce2b562eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwdGVjaCUyMHByZW1pdW18ZW58MXx8fHwxNzcwMTI2MTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    name: "Speaker Bluetooth 360°",
    description: "Som omnidirecional de alta potência",
    price: "R$ 549,00",
    image:
      "https://images.unsplash.com/photo-1762328498684-e597f4ceaa43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVldG9vdGglMjBzcGVha2VyJTIwbW9kZXJufGVufDF8fHx8MTc3MDAxNjYyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    name: "Teclado Mecânico Wireless",
    description: "Switches premium para máxima produtividade",
    price: "R$ 799,00",
    image:
      "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGtleWJvYXJkJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAxMDIzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    name: "Suporte Laptop Premium",
    description: "Design em alumínio com ajuste ergonômico",
    price: "R$ 349,00",
    image:
      "https://images.unsplash.com/photo-1554994610-7897470458df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBzdGFuZCUyMGFsdW1pbnVtfGVufDF8fHx8MTc3MDEyNjEwOXww&ixlib=rb-4.1.0&q=80&w=1080",
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue/950/20 via-transparent to-black/60 pointer-events-none" />
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
