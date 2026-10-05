"use client";

import { useState } from "react";
import { Expense } from "@/types/expense";

type ExpenseFormProps = {
  onAddExpense: (expense: Expense) => void;
  onUpdateExpense: (expense: Expense) => void;
  editingExpense: Expense | null;
  variant?: "card" | "modal";
  showSubmitButton?: boolean;
  formId?: string;
};

export default function ExpenseForm({
  onAddExpense,
  onUpdateExpense,
  editingExpense,
  variant = "card",
  showSubmitButton = true,
  formId
}: ExpenseFormProps) {
  const [title, setTitle] = useState(editingExpense?.title ?? "");

  const [amount, setAmount] = useState(editingExpense?.amount.toString() ?? "");

  const [category, setCategory] = useState(editingExpense?.category ?? "");

  const [date, setDate] = useState(editingExpense?.date ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !amount || !category || !date) {
      alert("Please fill in all fields.");
      return;
    }

    const expenseData: Expense = {
      id: editingExpense ? editingExpense.id : crypto.randomUUID(),
      title,
      amount: Number(amount),
      category: category as Expense["category"],
      date,
    };

    if (editingExpense) {
      onUpdateExpense(expenseData);
    } else {
      onAddExpense(expenseData);
    }

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <div
      className={
        variant === "card" ? "mb-8 rounded-xl bg-white p-6 shadow-sm" : ""
      }
    >
      <h2 className="mb-6 text-xl font-semibold text-gray-900">
        {editingExpense ? "Edit Expense" : "Add Expense"}
      </h2>

      <form id={formId} onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Title
            </label>

            <input
              type="text"
              placeholder="e.g. Lunch"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-black outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Amount
            </label>

            <input
              type="number"
              placeholder="e.g. 50"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-black outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-black outline-none focus:border-black"
            >
              <option value="" disabled>
                Select category
              </option>

              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-black outline-none focus:border-black"
            />
          </div>
        </div>

        {showSubmitButton && (
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            {editingExpense ? "Update Expense" : "Add Expense"}
          </button>
        )}
      </form>
    </div>
  );
}
