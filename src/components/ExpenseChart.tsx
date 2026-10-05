"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Expense } from "@/types/expense";

type ExpenseChartProps = {
  expenses: Expense[];
};

export default function ExpenseChart({
  expenses,
}: ExpenseChartProps) {
  const categoryTotals = expenses.reduce(
    (totals, expense) => {
      totals[expense.category] += expense.amount;
      return totals;
    },
    {
      Food: 0,
      Transport: 0,
      Shopping: 0,
      Others: 0,
    }
  );

  const chartData = [
    {
      name: "Food",
      value: categoryTotals.Food,
      color: "#f97316",
    },
    {
      name: "Transport",
      value: categoryTotals.Transport,
      color: "#3b82f6",
    },
    {
      name: "Shopping",
      value: categoryTotals.Shopping,
      color: "#a855f7",
    },
    {
      name: "Others",
      value: categoryTotals.Others,
      color: "#6b7280",
    },
  ];

  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Expenses by Category
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Breakdown of your spending
        </p>
      </div>

      {expenses.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-gray-500">
            Add some expenses to see the chart.
          </p>
        </div>
      ) : (
        <div className="relative h-[360px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="45%"
                innerRadius={72}
                outerRadius={112}
                paddingAngle={3}
                stroke="white"
                strokeWidth={3}
              >
                {chartData.map((entry) => (
                  <Cell
                    key={entry.name}
                    fill={entry.color}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) =>
                  `¥${Number(value).toFixed(2)}`
                }
                contentStyle={{
                  borderRadius: "10px",
                  border: "1px solid #e5e7eb",
                  boxShadow:
                    "0 4px 12px rgba(0, 0, 0, 0.08)",
                }}
              />

              <Legend
                verticalAlign="bottom"
                iconType="circle"
                wrapperStyle={{
                  fontSize: "14px",
                  paddingTop: "10px",
                }}
              />

              <text
                x="50%"
                y="42%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-gray-400 text-xs"
              >
                Total
              </text>

              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-gray-900 text-lg font-semibold"
              >
                ¥{totalExpense.toFixed(2)}
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}