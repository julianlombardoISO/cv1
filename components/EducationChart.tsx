import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts'

// Datos de educación
const educationData = [
  {
    title: "Tecnicatura Universitaria en Seguridad e Higiene",
    institution: "Universidad Tecnológica Nacional",
    year: "2022 - 2025",
    description: "Formación especializada en prevención de riesgos laborales, normativas de seguridad y gestión ambiental."
  },
  {
    title: "Licenciatura en Organización Industrial",
    institution: "Universidad Tecnológica Nacional de Gral. Pacheco (UTNFRGP)",
    year: "2019 - 2021",
    description: "Formación avanzada en gestión y organización industrial. Título intermedio obtenido: Técnico en Organización Industrial. (Licenciatura no finalizada)"
  },
  {
    title: "Diplomatura en Dirección de Proyectos",
    institution: "Universidad Tecnológica Nacional",
    year: "2018 - 2019",
    description: "Formación en gestión de proyectos, incluyendo planificación, ejecución y control de proyectos complejos."
  },
  {
    title: "Auditor de Sistema de Gestión Integrado (ISO 9001, 14001, 45001)",
    institution: "Instituto de IRAM",
    year: "2017 - 2018",
    description: "Capacitación en auditoría de sistemas de gestión integrados, abarcando normativas de calidad, medio ambiente y seguridad en el trabajo."
  },
  {
    title: "Certificación Lean Six Sigma Green Belt",
    institution: "Universidad Tecnológica Nacional",
    year: "2016",
    description: "Especialización en metodologías de mejora de procesos y reducción de variabilidad."
  }
];

// Datos de habilidades
const skillsData = [
  { skill: "Gestión de Proyectos", level: 95 },
  { skill: "Sistemas ISO", level: 90 },
  { skill: "Auditoría", level: 85 },
  { skill: "Seguridad Industrial", level: 88 },
  { skill: "Análisis de Datos", level: 82 },
  { skill: "Lean Six Sigma", level: 80 },
  { skill: "Gestión de Riesgos", level: 87 }
];

const EducationChart: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Columna izquierda: Tarjetas desplegables de educación */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Educación</h2>
        {/* Tarjetas desplegables */}
        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card className="cursor-pointer hover:shadow-md transition-all" onClick={() => setExpandedId(expandedId === index ? null : index)}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{edu.title}</CardTitle>
                    <motion.div animate={{ rotate: expandedId === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </div>
                </CardHeader>
                <AnimatePresence>
                  {expandedId === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                        <p className="text-sm text-muted-foreground">{edu.institution} - {edu.year}</p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Columna derecha: Gráfico radar de habilidades */}
      <div className="space-y-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Habilidades Profesionales</CardTitle>
            <CardDescription>Niveles de competencia por área</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Nivel" dataKey="level" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default EducationChart

