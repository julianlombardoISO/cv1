import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const achievementsData = [
  { name: "Eficiencia Operativa", value: 20 },
  { name: "Reducción de No Conformidades", value: 35 },
  { name: "Reducción de Costos", value: 15 },
  { name: "Reducción de Defectos", value: 25 },
  { name: "Incremento de Trazabilidad", value: 50 },
  { name: "Mejora en Satisfacción del Cliente", value: 30 }
]

const impactOverTimeData = [
  { year: 2018, impact: 20 },
  { year: 2019, impact: 40 },
  { year: 2020, impact: 60 },
  { year: 2021, impact: 80 },
  { year: 2022, impact: 100 }
]

const projectSuccessData = [
  { project: "Implementación ISO 9001", success: 95 },
  { project: "Optimización de Procesos", success: 88 },
  { project: "Reducción de Residuos", success: 75 },
  { project: "Mejora de Seguridad Laboral", success: 92 },
  { project: "Digitalización de Auditorías", success: 85 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d']

const keyAchievements = [
  {
    title: "Liderazgo en Implementación ISO",
    description: "Dirigí con éxito la implementación de ISO 9001:2015 en 2 plantas industriales, logrando la certificación en tiempo récord."
  },
  {
    title: "Optimización de Costos Operativos",
    description: "Reduje los costos operativos en un 15% a través de la implementación de metodologías Lean y Six Sigma."
  },
  {
    title: "Mejora en Seguridad Laboral",
    description: "Disminuí el índice de accidentes laborales en un 40% mediante la implementación de un programa integral de seguridad."
  },
  {
    title: "Innovación en Gestión de Calidad",
    description: "Desarrollé e implementé un sistema digital de auditorías que aumentó la eficiencia del proceso en un 30%."
  }
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2 rounded-lg shadow">
        <p className="text-gray-900 dark:text-gray-100">{`${payload[0].payload.name} : ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const AchievementsCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4 flex flex-col h-full">
        <h2 className="text-2xl font-bold">Logros Destacados</h2>
        <div className="grid grid-cols-1 gap-4 flex-grow">
          {keyAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-[300px] flex flex-col justify-center">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Métricas de Rendimiento</CardTitle>
            <CardDescription>Distribución de logros por área</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={achievementsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {achievementsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Impacto en el Tiempo</CardTitle>
            <CardDescription>Evolución profesional anual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={impactOverTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="impact" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Éxito en Proyectos</CardTitle>
            <CardDescription>Tasa de éxito por proyecto</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectSuccessData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="project" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="success" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AchievementsCharts

