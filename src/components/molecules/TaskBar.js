import { useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  PenIcon,
  ThreeDots,
  TimeIcon,
} from "../atom/icon";

export default function TaskBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDueDate, setIsDueDate] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const date = new Date(props.date);
  return (
    <div
      className={`flex flex-row py-4 space-x-3 hover:cursor-pointer ${
        isOpen ? "items-start" : "items-center"
      }`}
    >
      <input
        type="checkbox"
        name="check"
        className="mt-1"
        onClick={() => setIsChecked(!isChecked)}
      />
      <div className="flex flex-col space-y-3 w-full">
        <div
          className={`flex flex-row items-center space-x-3 w-full justify-between  ${
            isChecked && "opacity-50"
          }`}
        >
          <span
            className={`font-semibold line-clamp-2 select-none ${
              isChecked && "line-through"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {props.taskName}
          </span>
          <div className="flex flex-row space-x-3  items-center text-xs">
            {isDueDate && (
              <span className=" text-indicator-red">2 Days Left</span>
            )}
            {props.date && <span>{date.toLocaleDateString("en-US")}</span>}
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <ChevronDown className="w-5 h-5 text-primary-gray-light" />
              ) : (
                <ChevronUp className="w-5 h-5 text-primary-gray-light" />
              )}
            </button>
            <ThreeDots className="w-5 h-5 text-primary-gray-light" />
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-3 items-center">
              <span className="w-5 h-5">
                <TimeIcon
                  className={`w-5 h-5 ${
                    props.date ? "text-primary-blue" : "text-primary-gray-light"
                  }`}
                />
              </span>
              <input
                type="date"
                defaultValue={props.date}
                className="px-3 py-2 border border-primary-gray-light rounded-xl"
              />
            </div>
            <div className="flex flex-row space-x-3 items-start">
              <span className="w-5 h-5">
                <PenIcon
                  className={`w-4 h-4 ${
                    props.description
                      ? "text-primary-blue"
                      : "text-primary-gray-light"
                  }`}
                />
              </span>
              <textarea
                className="w-full focus:outline-none"
                placeholder="No Description"
              >
                {props.description}
              </textarea>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
