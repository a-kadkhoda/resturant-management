"use client";
import React, { useState } from "react";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  { month: "January", order: 800, inprocess: 2800 },
  { month: "February", order: 2000, inprocess: 600 },
  { month: "March", order: 980, inprocess: 1800 },
  { month: "April", order: 1925, inprocess: 1300 },
  { month: "May", order: 2600, inprocess: 2750 },
  { month: "June", order: 800, inprocess: 3000 },
];

const chartConfig = {
  order: {
    label: "Order",
    color: "#25A470",
  },
  inprocess: {
    label: "Inprocess",
    color: "#EAB308",
  },
} satisfies ChartConfig;

enum DatesFilter {
  Year = "This Year",
  Mounth = "This Month",
  Day = "This Day",
}

const filterDate = Object.values(DatesFilter);

const OrderStatistics = () => {
  const [value, setValue] = useState<DatesFilter>(DatesFilter.Mounth);

  return (
    <div className="size-full ">
      <Card className="bg-transparent shadow-none">
        <CardHeader className="flex justify-between py-2">
          <CardTitle className="text-xl font-bold leading-[150%] tracking-[-0.4px]">
            OrderStatistics
          </CardTitle>
          <Select defaultValue={value}>
            <SelectTrigger className="w-max ">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="dark:bg-dark-500  bg-white">
              {filterDate.map((item, index) => {
                return (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: -10,
                right: 12,
                top: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickCount={6}
                scale={"linear"}
                tickFormatter={(value) => `$${value}`}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent className="w-[150px]" />}
              />
              <defs>
                <linearGradient id="fillOrder" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--color-order)"
                    stopOpacity={0.25}
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-order)"
                    stopOpacity={0}
                  />
                </linearGradient>
                {/*                 <linearGradient id="fillInprocess" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-inprocess)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-inprocess)"
                    stopOpacity={0.1}
                  />
                </linearGradient> */}
              </defs>
              <Area
                dataKey="order"
                type="natural"
                fill="url(#fillOrder)"
                fillOpacity={0.7}
                stroke="var(--color-order)"
                strokeWidth={3}
              />
              <Area
                dataKey="inprocess"
                type="natural"
                fill="url(#fillInprocess)"
                fillOpacity={0.7}
                stroke="var(--color-inprocess)"
                strokeWidth={3}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderStatistics;
