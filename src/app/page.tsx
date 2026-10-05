export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Expense Tracker
          </h1>

          <p className="mt-2 text-gray-600">
            Manage and track your expenses easily.
          </p>
        </div>

        {/* Total Expense */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Total Expenses
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            ¥0.00
          </h2>
        </div>

        {/* Add Expense */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            Add Expense
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Title
              </label>

              <input
                type="text"
                placeholder="e.g. Lunch"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
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
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Category
              </label>

              <select
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-black"
                defaultValue=""
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
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
              />
            </div>

          </div>

          <button
            className="mt-6 rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Add Expense
          </button>
        </div>

        {/* Expense List */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Expenses
            </h2>

            <span className="text-sm text-gray-500">
              0 expenses
            </span>
          </div>

          {/* Empty State */}
          <div className="rounded-lg border border-dashed border-gray-300 py-12 text-center">
            <p className="text-gray-500">
              No expenses yet.
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Add your first expense above.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}