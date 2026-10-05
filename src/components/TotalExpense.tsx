type TotalExpenseProps = {
  total: number;
};

export default function TotalExpense({
  total,
}: TotalExpenseProps) {
  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-gray-500">
        Total Expenses
      </p>

      <h2 className="mt-2 text-3xl font-bold text-gray-900">
        ¥{total.toFixed(2)}
      </h2>
    </div>
  );
}