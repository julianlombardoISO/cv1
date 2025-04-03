import React from "react"

interface TimelineItemProps {
  title: string
  date: string
  children: React.ReactNode
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, children }) => {
  return (
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-primary-foreground">{date.slice(-2)}</h1>
      </div>
      <div className="order-1 bg-secondary rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-primary text-xl">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-secondary-foreground">{date}</p>
        <div className="mt-2 text-sm text-secondary-foreground">{children}</div>
      </div>
    </div>
  )
}

export const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="container mx-auto w-full h-full">{children}</div>
}

