"use client";

import { useState } from "react";

import Header from "@/components/Header";
import TotalExpense from "@/components/TotalExpense";
import ExpenseForm from "@/components/ExpenseForm";
import ExpenseList from "@/components/ExpenseList";
import EditExpenseModal from "@/components/EditExpenseModal";
import { Expense } from "@/types/expense";
import ExpenseChart from "@/components/ExpenseChart";

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // Add expense
  const handleAddExpense = (expense: Expense) => {
    setExpenses((currentExpenses) => [...currentExpenses, expense]);
  };

  // Delete expense
  const handleDeleteExpense = (id: string) => {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== id),
    );
  };

  // Start editing
  const handleEditExpense = (expense: Expense) => {
    setEditingExpense(expense);
    setIsEditModalOpen(true);
  };

  // Update expense
  const handleUpdateExpense = (updatedExpense: Expense) => {
    setExpenses((currentExpenses) =>
      currentExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense,
      ),
    );

    setEditingExpense(null);
    setIsEditModalOpen(false);
  };

  // Calculate total
  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  );

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <Header />

        <TotalExpense total={totalExpense} />

        <ExpenseForm
          onAddExpense={handleAddExpense}
          onUpdateExpense={handleUpdateExpense}
          editingExpense={null}
        />
        <ExpenseChart expenses={expenses} />

        <EditExpenseModal
          isOpen={isEditModalOpen}
          expense={editingExpense}
          onOpenChange={setIsEditModalOpen}
          onAddExpense={handleAddExpense}
          onUpdateExpense={handleUpdateExpense}
        />

        <ExpenseList
          expenses={expenses}
          onEdit={handleEditExpense}
          onDelete={handleDeleteExpense}
        />
      </div>
    </main>
  );
}
