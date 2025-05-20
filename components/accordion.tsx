import { ChevronDownIcon } from "lucide-react";

const Accordion = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div>
        <details className="group peer">
          <summary className="flex cursor-pointer justify-between px-4 py-5 select-none">
            <span className="font-semibold text-gray-800">
              Accordion Item 1
            </span>
            <ChevronDownIcon className="w-5 h-5 transition-transform group-open:rotate-180" />
          </summary>
        </details>
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 peer-open:grid-rows-[1fr] overflow-hidden px-4 py-3 bg-white">
          <div className="text-gray-700">
            This is the content for the first accordion item. It is visible when
            the item is expanded.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
