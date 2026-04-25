"use client";

import { motion } from "framer-motion";

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Solicite o Serviço",
      description: "Entre em contato conosco por telefone ou formulário para solicitar o seu serviço de coleta rapidamente.",
    },
    {
      number: "02",
      title: "Coleta Rápida",
      description: "Nossa equipe designa o motoboy mais próximo para realizar a coleta do seu pacote no local agendado.",
    },
    {
      number: "03",
      title: "Entrega Garantida",
      description: "Seu documento ou mercadoria é entregue com total segurança e você pode acompanhar o status.",
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Como Funciona</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4 leading-tight">
            Processo Simples e <span className="text-[var(--color-primary-light)]">Transparente</span>
          </h2>
          <p className="text-lg text-slate-600">
            Veja como é prático solicitar e acompanhar suas entregas com a Coopstar Express em apenas três passos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-slate-200 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border-[6px] border-slate-50 shadow-lg flex items-center justify-center text-3xl font-black text-[var(--color-primary)] mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-center px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
