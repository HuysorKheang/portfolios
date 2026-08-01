"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function Experience() {
  const { experience } = portfolioData;
  
  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-900" id="experience">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
            <Briefcase className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Work Experience</h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {experience.map((exp, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index} 
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-500/50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-current" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors backdrop-blur-sm">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-1">{exp.role}</h3>
                <h4 className="text-lg text-slate-400 mb-6 font-medium">{exp.company}</h4>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
