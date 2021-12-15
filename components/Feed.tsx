export default function Feed(props: any) {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 border border-gray-300 rounded-lg shadow-sm overflow-hidden m-2"
    >
      <li className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
        <div className="flex justify-between space-x-3">
          <div className="min-w-0 flex-1">
            <a href="#" className="block focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900 truncate">
                {props.sender}
              </p>
            </a>
          </div>
        </div>
        <div className="mt-1">
          <p className="line-clamp-2 text-sm text-gray-600">{props.text}</p>
        </div>
      </li>
    </ul>
  );
}
