import { Card, CardContent } from "@/components/ui/card"
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

const experiences = [
  {
    year: 2025,
    company: "MUNICIPALIDAD 3 DE FEBRERO",
    role: "Inspector de Seguridad, Higiene y Medio Ambiente",
    achievements: [
      "Realizo inspección de seguridad, higiene y medio ambiente de las industrias radicadas.",
      "Verificación del cumplimiento legal aplicable según rubro."
    ]
  },
  {
    year: 2021,
    company: "GP INDUSTRIAL ASESORÍA",
    role: "Asesor Industrial – Auditor Interno",
    achievements: [
      "Optimización de sistemas de gestión: +20% eficiencia",
      "Liderazgo en auditorías internacionales"
    ]
  },
  {
    year: 2018,
    company: "PLIMER S.A.",
    role: "Responsable de Sistema de Gestión",
    achievements: [
      "Transición exitosa ISO 9001:2015",
      "Reducción 35% en no conformidades"
    ]
  },
  {
    year: 2015,
    company: "PRAXAIR S.R.L.",
    role: "Analista de Productividad",
    achievements: [
      "Reducción 15% en costos operativos",
      "Implementación Lean Six Sigma"
    ]
  },
  {
    year: 2012,
    company: "PSA PEUGEOT CITROEN",
    role: "Analista de Calidad",
    achievements: [
      "Supervisión de estándares europeos",
      "Reducción 25% en defectos críticos"
    ]
  }
]

const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.year}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card 
            className="cursor-pointer hover:shadow-md transition-all"
            onClick={() => setExpandedId(expandedId === index ? null : index)}
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold bg-primary text-primary-foreground px-2 py-1 rounded">
                    {exp.year}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedId === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {expandedId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t mt-4">
                      <p className="text-lg mb-2 text-foreground/80">{exp.role}</p>
                      <ul className="list-disc list-inside space-y-1 text-foreground/70">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default ExperienceTimeline

