"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Label,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";

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
  formId,
}: ExpenseFormProps) {
  const [title, setTitle] = useState(editingExpense?.title ?? "");

  const [amount, setAmount] = useState(
    editingExpense?.amount.toString() ?? ""
  );

  const [category, setCategory] = useState(
    editingExpense?.category ?? ""
  );

  const [date, setDate] = useState(
    editingExpense?.date ?? ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !amount || !category || !date) {
      alert("Please fill in all fields.");
      return;
    }

    const expenseData: Expense = {
      id: editingExpense
        ? editingExpense.id
        : crypto.randomUUID(),
      title,
      amount: Number(amount),
      category: category as Expense["category"],
      date,
    };

    if (editingExpense) {
      onUpdateExpense(expenseData);
    } else {
      onAddExpense(expenseData);

      setTitle("");
      setAmount("");
      setCategory("");
      setDate("");
    }
  };

  return (
    <div
      className={
        variant === "card"
          ? "mb-8 rounded-xl bg-white p-6 shadow-sm"
          : ""
      }
    >
      {variant === "card" && (
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Add Expense
        </h2>
      )}

      <form
        id={formId}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {/* Title */}
        <TextField
          name="title"
          isRequired
          className="w-full min-w-0"
        >
          <Label>Title</Label>

          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Lunch"
            className="w-full min-w-0"
          />
        </TextField>

        {/* Amount */}
        <TextField
          name="amount"
          isRequired
          className="w-full min-w-0"
        >
          <Label>Amount</Label>

          <Input
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 50"
            className="w-full min-w-0"
          />
        </TextField>

        {/* Category */}
        <Select
          name="category"
          value={category || null}
          onChange={(value) =>
            setCategory(value?.toString() ?? "")
          }
          isRequired
          className="w-full min-w-0"
        >
          <Label>Category</Label>

          <Select.Trigger className="w-full">
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              <ListBox.Item id="Food">
                Food
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Transport">
                Transport
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Shopping">
                Shopping
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Others">
                Others
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        {/* Date */}
        <TextField
          name="date"
          isRequired
          className="w-full min-w-0"
        >
          <Label>Date</Label>

          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full min-w-0"
          />
        </TextField>

        {/* Submit */}
        {showSubmitButton && (
          <div className="flex justify-center md:col-span-2">
            <Button type="submit">
              Add Expense
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}