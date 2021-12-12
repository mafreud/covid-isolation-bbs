export default function StackedList(props: any) {
  return (
    <div className="bg-white shadow overflow-hidden">
      <a href="#" className="block hover:bg-gray-50">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-indigo-600 truncate">
              {props.title}
            </p>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                {/* <UsersIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                /> */}
                {props.body}
              </p>
              {/* <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                <LocationMarkerIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Location
              </p> */}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              {/* <CalendarIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              /> */}
              {/* <p>
                Closing on{" "}
                <time dateTime={position.closeDate}>
                  {position.closeDateFull}
                </time>
              </p> */}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
