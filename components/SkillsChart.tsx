import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts'

const skillsData = [
  { skill: "Liderazgo", level: 90 },
  { skill: "Gestión de Equipos", level: 85 },
  { skill: "Análisis de Riesgos", level: 88 },
  { skill: "Mejora Continua", level: 92 },
  { skill: "Comunicación", level: 87 },
  { skill: "Resolución de Problemas", level: 89 },
  { skill: "Pensamiento Estratégico", level: 86 }
]

const toolsData = [
  { name: "Power BI", proficiency: 80 },
  { name: "Excel Avanzado", proficiency: 90 },
  { name: "AutoCAD", proficiency: 65 }
]

const languagesData = [
  { lang: "Español", level: 100 },
  { lang: "Inglés", level: 90 },
  { lang: "Portugués", level: 60 },
  { lang: "Francés", level: 40 }
]

const technicalSkills = [
  { skill: "ISO 9001:2015", description: "Implementación y auditoría de sistemas de gestión de calidad" },
  { skill: "ISO 14001:2015", description: "Gestión ambiental y sostenibilidad empresarial" },
  { skill: "ISO 45001:2018", description: "Sistemas de gestión de seguridad y salud en el trabajo" },
  { skill: "Lean Six Sigma", description: "Metodologías de mejora de procesos y reducción de variabilidad" },
  { skill: "Gestión de Proyectos (PMI)", description: "Planificación, ejecución y control de proyectos complejos" },
  { skill: "Auditoría Interna", description: "Evaluación de conformidad y eficacia de sistemas de gestión" }
]

const SkillsChart: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Competencias Técnicas</h2>
        {technicalSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card 
              className="cursor-pointer hover:shadow-md transition-all"
              onClick={() => setExpandedId(expandedId === index ? null : index)}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{skill.skill}</CardTitle>
                  <motion.div
                    animate={{ rotate: expandedId === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </div>
              </CardHeader>
              <AnimatePresence>
                {expandedId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}

        <Card>
          <CardHeader>
            <CardTitle>Competencias de Herramientas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <div className="grid grid-cols-1 gap-4">
                  {toolsData.map((tool, index) => (
                    <motion.div 
                      key={tool.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{tool.name}</span>
                        <span className="text-muted-foreground">{tool.proficiency}%</span>
                      </div>
                      <Progress value={tool.proficiency} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

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
                  <Radar 
                    name="Nivel" 
                    dataKey="level" 
                    stroke="#82ca9d" 
                    fill="#82ca9d" 
                    fillOpacity={0.6} 
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Idiomas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {languagesData.map((lang, index) => (
                <motion.div 
                  key={lang.lang}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{lang.lang}</span>
                    <span className="text-muted-foreground">{lang.level}%</span>
                  </div>
                  <Progress value={lang.level} className="h-2" />
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SkillsChart

