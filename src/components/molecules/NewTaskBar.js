import { useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  PenIcon,
  ThreeDots,
  TimeIcon,
} from "../atom/icon";
import { nanoid } from "nanoid";

export default function NewTaskBar(props) {
  const taskNameRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();

  const [isOpen, setIsOpen] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const localStorageName = "taskList";
  const storage = JSON.parse(localStorage.getItem(localStorageName));

  function addTask() {
    const task = [
      ...storage,
      {
        id: nanoid(),
        taskName:
          taskNameRef.current.value === ""
            ? "New Task"
            : taskNameRef.current.value,
        date: dateRef.current.value,
        description: descriptionRef.current.value,
        isChecked: false,
      },
    ];
    props.setTaskList(task);
    localStorage.setItem(localStorageName, JSON.stringify(task));
    resetInput();
  }

  function resetInput() {
    taskNameRef.current.value = "";
    dateRef.current.value = "";
    descriptionRef.current.value = "";
  }
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
          <input
            ref={taskNameRef}
            type="text"
            name="taskName"
            className="focus:outline-none w-full"
            placeholder="Task Name"
          />

          <div className="flex flex-row space-x-3  items-center text-xs">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-primary-gray-light" />
              ) : (
                <ChevronDown className="w-5 h-5 text-primary-gray-light" />
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
                ref={dateRef}
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
                ref={descriptionRef}
                className="w-full focus:outline-none"
                placeholder="No Description"
              />
            </div>
            <div className="flex w-full space-x-3 justify-end">
              <button
                className="bg-indicator-red rounded-md px-3 py-2 text-white"
                onClick={() => props.setIsCreateMode(false)}
              >
                Cancel
              </button>
              <button
                className="bg-primary-blue rounded-md px-3 py-2 text-white"
                onClick={() => {
                  addTask();
                  props.setIsCreateMode(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
