"use client";

import { Select, ListBox } from "@heroui/react";

import { Expense } from "@/types/expense";

type ExpenseFiltersProps = {
  categoryFilter: "All" | Expense["category"];
  onCategoryChange: (
    category: "All" | Expense["category"]
  ) => void;

  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;

  onClearFilters: () => void;
};

export default function ExpenseFilters({
  categoryFilter,
  onCategoryChange,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onClearFilters,
}: ExpenseFiltersProps) {
  return (
    <div className="mb-8 rounded-xl bg-white p-4 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-gray-900">
          Filters
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Filter your expenses by category or date.
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Category */}
        <div className="min-w-0">
          <label
            htmlFor="category-filter"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Category
          </label>

          <Select
            className="w-full"
            selectedKey={categoryFilter}
            onSelectionChange={(key) => {
              onCategoryChange(
                key as "All" | Expense["category"]
              );
            }}
          >
            <Select.Trigger className="w-full">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>
              <ListBox>
                <ListBox.Item id="All">
                  All
                  <ListBox.ItemIndicator />
                </ListBox.Item>

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
        </div>

        {/* Start Date */}
        <div className="min-w-0">
          <label
            htmlFor="start-date"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Start Date
          </label>

          <input
            id="start-date"
            type="date"
            value={startDate || ""}
            onChange={(event) =>
              onStartDateChange(event.target.value)
            }
            className="h-10 w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
          />
        </div>

        {/* End Date */}
        <div className="min-w-0">
          <label
            htmlFor="end-date"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            End Date
          </label>

          <input
            id="end-date"
            type="date"
            value={endDate || ""}
            onChange={(event) =>
              onEndDateChange(event.target.value)
            }
            className="h-10 w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
          />
        </div>
      </div>

      {/* Clear Filters Button */}
      <div className="mt-5 flex justify-end">
        <button
          type="button"
          onClick={onClearFilters}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 sm:w-auto"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}