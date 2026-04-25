"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Vocês atendem apenas a capital de São Paulo?",
      answer: "Não, atendemos a Capital de São Paulo e toda a Grande São Paulo. Também possuímos uma tabela especial para entregas em cidades do interior e litoral (Fora da Capital).",
    },
    {
      question: "Quais são os horários de funcionamento?",
      answer: "Funcionamos 24 horas por dia, de segunda a segunda-feira. No entanto, é importante ressaltar que os serviços fora do horário comercial regular podem depender de agendamento prévio.",
    },
    {
      question: "Os motoboys são registrados na empresa?",
      answer: "Sim, todos os nossos profissionais são selecionados e devidamente registrados para garantir a segurança e confiabilidade do serviço prestado.",
    },
    {
      question: "Como funciona o serviço de Delivery para empresas?",
      answer: "Se a sua empresa (como farmácias, restaurantes, ou autopeças) tiver alto volume de entregas, podemos designar um motoboy exclusivo ou criar pacotes que oferecem o melhor custo-benefício.",
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Dúvidas Frequentes</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4 leading-tight">
            Perguntas & Respostas
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={index}
                className="bg-white border text-left border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <div className="flex justify-between items-center p-6">
                  <h3 className="text-lg font-bold text-slate-800 pr-4">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isActive ? "rotate-180" : ""}`} />
                </div>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
