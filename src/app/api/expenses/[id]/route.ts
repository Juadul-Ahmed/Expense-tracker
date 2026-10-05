import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Expense from "@/models/Expense";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PUT(
  request: Request,
  { params }: RouteContext
) {
  try {
    await connectToDatabase();

    const { id } = await params;
    const body = await request.json();

    const expense = await Expense.findByIdAndUpdate(
      id,
      {
        title: body.title,
        amount: body.amount,
        category: body.category,
        date: body.date,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!expense) {
      return NextResponse.json(
        { message: "Expense not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(expense);
  } catch (error) {
    console.error("PUT expense error:", error);

    return NextResponse.json(
      { message: "Failed to update expense" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: RouteContext
) {
  try {
    await connectToDatabase();

    const { id } = await params;

    const expense = await Expense.findByIdAndDelete(id);

    if (!expense) {
      return NextResponse.json(
        { message: "Expense not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Expense deleted successfully",
    });
  } catch (error) {
    console.error("DELETE expense error:", error);

    return NextResponse.json(
      { message: "Failed to delete expense" },
      { status: 500 }
    );
  }
}