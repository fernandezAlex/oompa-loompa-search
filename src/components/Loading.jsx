export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 mt-8"></div>
      <p className="text-lg mt-4">Loading...</p>
    </div>
  );
};
