export default function LoadingState() {
  return (
    <div className="mb-8 rounded-xl bg-white p-8 text-center shadow-sm">
      <div className="flex flex-col items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />

        <p className="mt-4 text-sm font-medium text-gray-600">
          Loading expenses...
        </p>

        <p className="mt-1 text-xs text-gray-400">
          Please wait while we fetch your expenses.
        </p>
      </div>
    </div>
  );
}