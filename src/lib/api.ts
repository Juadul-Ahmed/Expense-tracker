import { Expense } from "@/types/expense";

type ApiExpense = {
  _id: string;
  title: string;
  amount: number;
  category: Expense["category"];
  date: string;
};

function mapExpense(expense: ApiExpense): Expense {
  return {
    id: expense._id,
    title: expense.title,
    amount: expense.amount,
    category: expense.category,
    date: expense.date,
  };
}

export async function getExpenses(): Promise<Expense[]> {
  const response = await fetch("/api/expenses");

  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }

  const data: ApiExpense[] = await response.json();

  return data.map(mapExpense);
}

export async function createExpense(
  expense: Omit<Expense, "id">
): Promise<Expense> {
  const response = await fetch("/api/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  if (!response.ok) {
    throw new Error("Failed to create expense");
  }

  const data: ApiExpense = await response.json();

  return mapExpense(data);
}

export async function updateExpense(
  expense: Expense
): Promise<Expense> {
  const response = await fetch(
    `/api/expenses/${expense.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: expense.title,
        amount: expense.amount,
        category: expense.category,
        date: expense.date,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update expense");
  }

  const data: ApiExpense = await response.json();

  return mapExpense(data);
}

export async function deleteExpense(
  id: string
): Promise<void> {
  const response = await fetch(
    `/api/expenses/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete expense");
  }
}