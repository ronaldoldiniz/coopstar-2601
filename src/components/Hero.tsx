"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.png"
          alt="Entregador de moto em alta velocidade"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col items-start pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-primary)]/20 text-blue-300 rounded-full text-sm font-semibold mb-6 border border-[var(--color-primary)]/30">
            <Clock className="w-4 h-4" />
            Atendimento 24 horas
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Agilidade e Confiança em <span className="text-[var(--color-primary-light)]">Serviços de Moto Frete</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
            Há mais de 9 anos no mercado, garantimos que suas entregas e coletas cheguem ao destino com segurança e rapidez. Atendimento especializado para a capital e grande São Paulo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/30">
              Solicitar Motoboy <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#pricing" className="inline-flex justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all">
              Ver Tabela de Preços
            </a>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 w-full max-w-4xl border-t border-white/10 pt-8"
        >
          <div className="flex items-center gap-3 text-slate-200">
            <ShieldCheck className="w-6 h-6 text-[var(--color-primary-light)]" />
            <span className="text-sm font-medium">Equipe Segurada</span>
          </div>
          <div className="flex items-center gap-3 text-slate-200">
            <Clock className="w-6 h-6 text-[var(--color-primary-light)]" />
            <span className="text-sm font-medium">Pontualidade</span>
          </div>
          <div className="flex items-center gap-3 text-slate-200">
            <MapPin className="w-6 h-6 text-[var(--color-primary-light)]" />
            <span className="text-sm font-medium">Rastreamento</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
