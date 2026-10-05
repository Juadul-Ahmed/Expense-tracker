import { Expense } from "@/types/expense";
import ExpenseCard from "./ExpenseCard";

type ExpenseListProps = {
  expenses: Expense[];
};

export default function ExpenseList({
  expenses,
}: ExpenseListProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Expenses
        </h2>

        <span className="text-sm text-gray-500">
          {expenses.length}{" "}
          {expenses.length === 1 ? "expense" : "expenses"}
        </span>
      </div>

      {expenses.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 py-12 text-center">
          <p className="text-gray-500">
            No expenses yet.
          </p>

          <p className="mt-1 text-sm text-gray-400">
            Add your first expense above.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {expenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
            />
          ))}
        </div>
      )}
    </div>
  );
}