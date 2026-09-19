"use client";

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "./utils"

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<string, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps>({
  config: {},
})

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a ChartProvider")
  }
  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"]
}) {
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        id={id}
        className={cn("h-full w-full", className)}
        {...props}
      >
        <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const Chart = RechartsPrimitive.LineChart
const ChartArea = RechartsPrimitive.Area
const ChartBar = RechartsPrimitive.Bar
const ChartLine = RechartsPrimitive.Line
const ChartXAxis = RechartsPrimitive.XAxis
const ChartYAxis = RechartsPrimitive.YAxis
const ChartTooltip = RechartsPrimitive.Tooltip
const ChartLegend = RechartsPrimitive.Legend
const ChartPie = RechartsPrimitive.Pie
const ChartCell = RechartsPrimitive.Cell

export {
  Chart,
  ChartArea,
  ChartBar,
  ChartCell,
  ChartContainer,
  ChartLegend,
  ChartLine,
  ChartPie,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
  useChart,
}
