import { Expense } from "@/types/expense";

type ExpenseCardProps = {
  expense: Expense;
};

export default function ExpenseCard({
  expense,
}: ExpenseCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="font-semibold text-gray-900">
          {expense.title}
        </h3>

        <p className="text-sm text-gray-500">
          {expense.date}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
          {expense.category}
        </span>

        <span className="font-semibold text-gray-900">
          ¥{expense.amount.toFixed(2)}
        </span>
      </div>
    </div>
  );
}