"use client";

import { useEffect, useState } from "react";

import {
  loadExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} from "@/store/expenseSlice";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  getExpenses,
  createExpense,
  updateExpense as updateExpenseApi,
  deleteExpense as deleteExpenseApi,
} from "@/lib/api";

import Header from "@/components/Header";
import TotalExpense from "@/components/TotalExpense";
import ExpenseForm from "@/components/ExpenseForm";
import ExpenseList from "@/components/ExpenseList";
import EditExpenseModal from "@/components/EditExpenseModal";
import ExpenseChart from "@/components/ExpenseChart";
import ExpenseFilters from "@/components/ExpenseFilters";
import { Expense } from "@/types/expense";

export default function Home() {
  const dispatch = useAppDispatch();

  const expenses = useAppSelector((state) => state.expenses.expenses);

  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [categoryFilter, setCategoryFilter] = useState<
    "All" | Expense["category"]
  >("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Load expenses from MongoDB when the page opens
  useEffect(() => {
    async function loadData() {
      try {
        const data = await getExpenses();

        dispatch(loadExpenses(data));
      } catch (error) {
        console.error("Failed to load expenses:", error);
      }
    }

    loadData();
  }, [dispatch]);

  // Add expense
  const handleAddExpense = async (expense: Expense) => {
    try {
      const { id, ...expenseData } = expense;

      const createdExpense = await createExpense(expenseData);

      dispatch(addExpense(createdExpense));
    } catch (error) {
      console.error("Failed to add expense:", error);
    }
  };

  // Delete expense
  const handleDeleteExpense = async (id: string) => {
    try {
      await deleteExpenseApi(id);

      dispatch(deleteExpense(id));
    } catch (error) {
      console.error("Failed to delete expense:", error);
    }
  };

  // Start editing
  const handleEditExpense = (expense: Expense) => {
    setEditingExpense(expense);
    setIsEditModalOpen(true);
  };

  // Update expense
  const handleUpdateExpense = async (updatedExpense: Expense) => {
    try {
      const updated = await updateExpenseApi(updatedExpense);

      dispatch(updateExpense(updated));

      setEditingExpense(null);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Failed to update expense:", error);
    }
  };

  // Calculate total
  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  );

  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory =
      categoryFilter === "All" || expense.category === categoryFilter;

    const matchesStartDate = !startDate || expense.date >= startDate;

    const matchesEndDate = !endDate || expense.date <= endDate;

    return matchesCategory && matchesStartDate && matchesEndDate;
  });

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

        <ExpenseFilters
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
        />
        <EditExpenseModal
          isOpen={isEditModalOpen}
          expense={editingExpense}
          onOpenChange={setIsEditModalOpen}
          onAddExpense={handleAddExpense}
          onUpdateExpense={handleUpdateExpense}
        />

        <ExpenseList
          expenses={filteredExpenses}
          onEdit={handleEditExpense}
          onDelete={handleDeleteExpense}
        />
      </div>
    </main>
  );
}
