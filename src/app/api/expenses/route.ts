import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Expense from "@/models/Expense";

export async function GET() {
  try {
    await connectToDatabase();

    const expenses = await Expense.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(expenses);
  } catch (error) {
    console.error("GET expenses error:", error);

    return NextResponse.json(
      { message: "Failed to fetch expenses" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();

    const expense = await Expense.create({
      title: body.title,
      amount: body.amount,
      category: body.category,
      date: body.date,
    });

    return NextResponse.json(expense, {
      status: 201,
    });
  } catch (error) {
    console.error("POST expense error:", error);

    return NextResponse.json(
      { message: "Failed to create expense" },
      { status: 500 }
    );
  }
}