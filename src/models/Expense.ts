import mongoose, { Schema, Model } from "mongoose";

export type ExpenseDocument = {
  title: string;
  amount: number;
  category: "Food" | "Transport" | "Shopping" | "Others";
  date: string;
};

const expenseSchema = new Schema<ExpenseDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String,
      enum: ["Food", "Transport", "Shopping", "Others"],
      required: true,
    },

    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Expense: Model<ExpenseDocument> =
  mongoose.models.Expense ||
  mongoose.model<ExpenseDocument>("Expense", expenseSchema);

export default Expense;