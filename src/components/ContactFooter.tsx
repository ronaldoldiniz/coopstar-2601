"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="container mx-auto px-4 md:px-8 py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 p-8 md:p-10 rounded-3xl border border-slate-700/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary-light)]/20 rounded-full blur-3xl"></div>
            <h3 className="text-3xl font-extrabold text-white mb-2 relative z-10">Envie uma mensagem</h3>
            <p className="text-slate-400 mb-8 relative z-10">Preencha o formulário abaixo e retornaremos o mais rápido possível.</p>
            
            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Seu Nome</label>
                  <input type="text" id="name" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all" placeholder="Nome Completo" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Telefone / WhatsApp</label>
                  <input type="tel" id="phone" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all" placeholder="(11) 90000-0000" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">E-mail</label>
                <input type="email" id="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all" placeholder="exemplo@email.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Mensagem (Serviço, Origem, Destino, etc)</label>
                <textarea id="message" rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>
              
              {/* For UI demonstration only - in real prod, use Server Actions or API route */}
              <button type="submit" className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="mb-10">
              <span className="text-[var(--color-primary-light)] font-bold tracking-wider uppercase text-sm">Contato / Localização</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-8 leading-tight">
                Estamos Perto de Você
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 text-[var(--color-primary-light)]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Telefones</h4>
                    <p className="text-slate-400 font-medium text-lg leading-relaxed">
                      (11) 5052-3563<br/>
                      (11) 5051-4442
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 text-[var(--color-primary-light)]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">E-mail</h4>
                    <a href="mailto:coopstar_express@hotmail.com" className="text-slate-400 hover:text-[var(--color-primary-light)] transition-colors">
                      coopstar_express@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 text-[var(--color-primary-light)]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Endereço</h4>
                    <p className="text-slate-400">
                      Av. Jurucê, 898 - Moema<br/>
                      São Paulo - SP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow w-full min-h-[250px] rounded-3xl overflow-hidden shadow-lg border border-slate-800 isolate">
              {/* Google Maps link replacing the legacy shadowbox implementation */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x94ce5a1a1dbbaeb5%3A0xe24aef60cf0b809a!2sAv.%20Juruc%C3%AA%2C%20898%20-%20Indian%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004080-012!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Coopstar Express. Todos os direitos reservados. Serviços de Moto Frete.
        </p>
      </div>
    </footer>
  );
}
