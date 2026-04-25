"use client";

import { motion } from "framer-motion";
import { Package, MapPin, Truck, ExternalLink } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Serviços Moto Frete",
      description: "Entregas rápidas de documentos e pequenos volumes de um ponto a outro da cidade incluindo serviços bancários, cartórios e despachos e retiradas em aeroportos.",
      icon: <Package className="w-8 h-8 text-[var(--color-primary)]" />,
      delay: 0.1,
    },
    {
      title: "Delivery",
      description: "Se sua empresa tem um grande volume de documentos ou encomendas leves, implantamos em sua empresa um serviço de delivery com o melhor custo benefício. Ideal para Farmácias, Pizzarias, Restaurantes e Auto Peças.",
      icon: <MapPin className="w-8 h-8 text-[var(--color-primary)]" />,
      delay: 0.2,
    },
    {
      title: "Fora da Capital",
      description: "Oferecemos transporte rápido e seguro para regiões fora da capital com preços competitivos. Confira nossa tabela de preços para saber os valores precisos das localidades atendidas.",
      icon: <Truck className="w-8 h-8 text-[var(--color-primary)]" />,
      delay: 0.3,
      action: {
        text: "Ver Tabela de Preços",
        href: "#pricing"
      }
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Nossos Serviços</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4 leading-tight">
            Soluções Sob Medida para <span className="text-[var(--color-primary-light)]">Sua Empresa</span>
          </h2>
          <p className="text-lg text-slate-600">
            Oferecemos uma variedade de modalidades de entrega para atender exatamente à sua necessidade com máxima eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              {service.action && (
                <a 
                  href={service.action.href} 
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-light)] transition-colors"
                >
                  {service.action.text}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
