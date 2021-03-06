/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";

export default function Header() {
  return (
    <>
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                新型コロナ隔離者・情報交換掲示板
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
