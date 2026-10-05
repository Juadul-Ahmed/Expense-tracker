import { Expense } from "@/types/expense";

type ExpenseCardProps = {
  expense: Expense;
  onEdit: (expense: Expense) => void;
  onDelete: (id: string) => void;
};

export default function ExpenseCard({
  expense,
  onEdit,
  onDelete,
}: ExpenseCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-200 p-4 md:flex-row md:items-center md:justify-between">
      
      <div>
        <h3 className="font-semibold text-gray-900">
          {expense.title}
        </h3>

        <p className="text-sm text-gray-500">
          {expense.date}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
          {expense.category}
        </span>

        <span className="font-semibold text-gray-900">
          ¥{expense.amount.toFixed(2)}
        </span>

        <button
          onClick={() => onEdit(expense)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(expense.id)}
          className="rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}