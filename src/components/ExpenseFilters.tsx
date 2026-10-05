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
};

export default function ExpenseFilters({
  categoryFilter,
  onCategoryChange,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: ExpenseFiltersProps) {
  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-gray-900">
          Filters
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Filter your expenses by category or date.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {/* Category */}
        <div>
          <label
            htmlFor="category-filter"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Category
          </label>

          <Select
            id="category-filter"
            className="w-full"
            selectedKey={categoryFilter}
            onSelectionChange={(key) => {
              onCategoryChange(
                key as "All" | Expense["category"]
              );
            }}
          >
            <Select.Trigger>
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
        <div>
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
            className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
          />
        </div>

        {/* End Date */}
        <div>
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
            className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
          />
        </div>
      </div>
    </div>
  );
}