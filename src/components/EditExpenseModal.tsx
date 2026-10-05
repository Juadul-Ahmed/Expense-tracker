"use client";

import { Button, Modal } from "@heroui/react";

import ExpenseForm from "./ExpenseForm";
import { Expense } from "@/types/expense";

type EditExpenseModalProps = {
  isOpen: boolean;
  expense: Expense | null;
  onOpenChange: (isOpen: boolean) => void;
  onAddExpense: (expense: Expense) => void;
  onUpdateExpense: (expense: Expense) => void;
};

export default function EditExpenseModal({
  isOpen,
  expense,
  onOpenChange,
  onAddExpense,
  onUpdateExpense,
}: EditExpenseModalProps) {
  return (
    <Modal>
      <Modal.Backdrop
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        variant="blur"
      >
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[560px]">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Edit Expense</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              {expense && (
                <ExpenseForm
                  key={expense.id}
                  onAddExpense={onAddExpense}
                  onUpdateExpense={onUpdateExpense}
                  editingExpense={expense}
                  variant="modal"
                  showSubmitButton={false}
                  formId="edit-expense-form"
                />
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button variant="ghost" slot="close">
                Cancel
              </Button>

              <Button
                type="submit"
              
                form="edit-expense-form"
              >
                Update Expense
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
