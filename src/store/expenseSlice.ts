import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "@/types/expense";

type ExpenseState = {
  expenses: Expense[];
};

const initialState: ExpenseState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },

    updateExpense: (
      state,
      action: PayloadAction<Expense>
    ) => {
      const index = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );

      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },

    deleteExpense: (
      state,
      action: PayloadAction<string>
    ) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

export const {
  addExpense,
  updateExpense,
  deleteExpense,
} = expenseSlice.actions;

export default expenseSlice.reducer;