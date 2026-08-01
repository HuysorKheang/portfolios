"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Container, GitBranch, Terminal, Server, Layers, Settings } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const iconMap: Record<string, React.ElementType> = {
  Code2, Database, Globe, Container, GitBranch, Terminal, Server, Layers, Settings
};

export default function Skills() {
  const { skills, languages } = portfolioData;

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-900" id="skills">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Skills Column */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <span className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                <Code2 className="w-5 h-5" />
              </span>
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const Icon = iconMap[skill.icon] || Code2;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 transition-colors"
                  >
                    <Icon className={`w-5 h-5 ${skill.color}`} />
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Languages Column */}
          <div className="w-full md:w-80">
            <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <span className="p-2 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                <Globe className="w-5 h-5" />
              </span>
              Languages
            </h2>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  key={index}
                  className="flex justify-between items-center p-4 rounded-xl bg-slate-900/40 border border-slate-800"
                >
                  <span className="text-slate-200 font-bold">{lang.name}</span>
                  <span className="text-slate-400 text-sm bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                    {lang.proficiency}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
