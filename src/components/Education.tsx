"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-900" id="education">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20">
            <GraduationCap className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/30 hover:bg-slate-900/60 transition-all group"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">{item.degree}</h3>
              <p className="text-slate-400 mb-4 font-medium">{item.school}</p>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
                {item.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
