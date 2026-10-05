"use client";

import { useState } from "react";
import { Expense } from "@/types/expense";

type ExpenseFormProps = {
  onAddExpense: (expense: Expense) => void;
};

export default function ExpenseForm({
  onAddExpense,
}: ExpenseFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !amount || !category || !date) {
      alert("Please fill in all fields.");
      return;
    }

    const newExpense: Expense = {
      id: crypto.randomUUID(),
      title,
      amount: Number(amount),
      category: category as Expense["category"],
      date,
    };

    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-gray-900">
        Add Expense
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">

          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Title
            </label>

            <input
              type="text"
              placeholder="e.g. Lunch"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" text-black w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Amount
            </label>

            <input
              type="number"
              placeholder="e.g. 50"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className=" text-black w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-black"
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

          {/* Date */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
            />
          </div>

        </div>

        <button
          type="submit"
          className="mt-6 rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}