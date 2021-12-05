/* This example requires Tailwind CSS v2.0+ */
export default function CardHeadings() {
  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 shadow overflow-hidden">
      <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            新着順
          </h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            新規投稿
          </button>
        </div>
      </div>
    </div>
  );
}
