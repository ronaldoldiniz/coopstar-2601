"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const pricingData = [
    { city: "Alphaville", price: "R$ 40,00" },
    { city: "Mauá", price: "R$ 65,00" },
    { city: "Arujá", price: "R$ 65,00" },
    { city: "Mogi das Cruzes", price: "R$ 100,00" },
    { city: "Barueri", price: "R$ 45,00" },
    { city: "Mogi Guaçu", price: "R$ 190,00" },
    { city: "Bonsucesso", price: "R$ 55,00" },
    { city: "Outras Regiões", price: "Sob Consulta" },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900 border-t border-slate-800 text-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-primary-light)] font-bold tracking-wider uppercase text-sm">Tabela de Preços</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 leading-tight">
            Valores para <span className="text-[var(--color-primary)]">Fora da Capital</span>
          </h2>
          <p className="text-lg text-slate-400">
            Confira nossa tabela atualizada. Para destinos que não constam abaixo, entre em contato para um orçamento rápido.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Split data into two columns for desktop */}
            <div className="flex flex-col">
              {pricingData.slice(0, 4).map((item, index) => (
                <div key={index} className={`flex justify-between items-center p-6 ${index !== 3 ? 'border-b border-slate-700' : ''}`}>
                  <span className="text-lg font-medium text-slate-200">{item.city}</span>
                  <span className="text-xl font-bold text-white bg-slate-700/50 px-4 py-2 rounded-lg">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col border-t md:border-t-0 md:border-l border-slate-700 bg-slate-800/80">
              {pricingData.slice(4, 8).map((item, index) => (
                <div key={index} className={`flex justify-between items-center p-6 ${index !== 3 ? 'border-b border-slate-700' : ''}`}>
                  <span className="text-lg font-medium text-slate-200">{item.city}</span>
                  <span className="text-xl font-bold text-white bg-slate-700/50 px-4 py-2 rounded-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[var(--color-primary)] p-6 text-center">
            <p className="font-semibold text-white">
              Precisa de um orçamento para outra cidade? <a href="#contact" className="underline underline-offset-2 hover:text-blue-200 transition-colors">Fale conosco agora!</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
