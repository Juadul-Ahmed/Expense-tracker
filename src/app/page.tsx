"use client";

import { useState } from "react";

import Header from "@/components/Header";
import TotalExpense from "@/components/TotalExpense";
import ExpenseForm from "@/components/ExpenseForm";
import ExpenseList from "@/components/ExpenseList";

import { Expense } from "@/types/expense";

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses((currentExpenses) => [
      ...currentExpenses,
      expense,
    ]);
  };

  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">

        <Header />

        <TotalExpense total={totalExpense} />

        <ExpenseForm onAddExpense={handleAddExpense} />

        <ExpenseList expenses={expenses} />

      </div>
    </main>
  );
}