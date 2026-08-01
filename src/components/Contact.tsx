"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-900" id="contact">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 mb-6 tracking-tight">
          {contact.title}
        </h2>
        <p className="text-slate-400 mb-12 text-lg max-w-xl mx-auto">
          {contact.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            href={`tel:${contact.phoneLink}`}
            className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform group-hover:bg-cyan-500 group-hover:text-slate-950">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Call Me At</p>
              <p className="text-lg font-bold text-slate-200">{contact.phone}</p>
            </div>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            href={`mailto:${contact.email}`}
            className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900/80 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform group-hover:bg-purple-500 group-hover:text-slate-950">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Email Me</p>
              <p className="text-lg font-bold text-slate-200">{contact.email}</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
