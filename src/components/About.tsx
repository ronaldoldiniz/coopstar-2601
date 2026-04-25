"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Quem Somos</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-6 leading-tight">
                Mais de 9 Anos de <span className="text-[var(--color-primary-light)]">Excelência</span> em Entregas
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A <strong className="text-slate-800">Coopstar Express</strong> é uma empresa especializada no serviço de entregas e coletas, atuando com destaque no mercado. Oferecemos ótimos serviços e desempenhamos uma função importante para nossos clientes: agilizar os mais diversos serviços, tornando-nos uma empresa de destaque neste segmento.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Atendemos em <strong className="text-slate-800">São Paulo (Capital) e Grande São Paulo</strong>, contando com uma equipe rigorosamente selecionada para suprir a necessidade e garantir o êxito da sua empresa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Funcionamento 24 Horas",
                "Segunda a Segunda-feira",
                "Agendamento com hora marcada",
                "Agilidade e Segurança"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-slate-100 flex items-center justify-center">
                {/* Abstract geometric placeholder for the company photo instead of generic image to look modern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
                <div className="absolute top-10 right-10 w-40 h-40 bg-[var(--color-primary-light)]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-60 h-60 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 text-center">
                   <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 inline-block">
                      <span className="text-6xl font-black text-[var(--color-primary)]">9+</span>
                      <p className="text-slate-500 font-medium uppercase tracking-widest text-xs mt-2">Anos de Experiência</p>
                   </div>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
