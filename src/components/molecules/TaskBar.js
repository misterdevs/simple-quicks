import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  PenIcon,
  ThreeDots,
  TimeIcon,
} from "../atom/icon";

export default function TaskBar(props) {
  const taskNameRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const checkRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [isDueDate, setIsDueDate] = useState(false);
  const [isChecked, setIsChecked] = useState(props.isChecked);
  const [isOpenMore, setIsOpenMore] = useState(false);

  const date = new Date(props.date);
  const localStorageName = "taskList";
  const storage = JSON.parse(localStorage.getItem(localStorageName));

  function isDateLessAnd7Days(targetDate) {
    const today = new Date();
    const target = new Date(targetDate);
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    const diffInMs = target - today;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    return diffInDays <= 7 && diffInDays >= 0 ? diffInDays : false;
  }

  function updateTask() {
    const updatedTask = storage.map((task) => {
      if (task.id === props.id) {
        return {
          id: props.id,
          taskName: taskNameRef.current.value,
          date: dateRef.current.value,
          description: descriptionRef.current.value,
          isChecked: isChecked,
        };
      } else {
        return task;
      }
    });
    props.setTaskList(updatedTask);
    localStorage.setItem(localStorageName, JSON.stringify(updatedTask));
  }
  function updateCheck() {
    const updatedTask = storage.map((task) => {
      if (task.id === props.id) {
        return {
          ...task,
          isChecked: !isChecked,
        };
      } else {
        return task;
      }
    });
    props.setTaskList(updatedTask);
    localStorage.setItem(localStorageName, JSON.stringify(updatedTask));
  }

  function deleteTask() {
    const updatedTask = storage.filter((task) => task.id !== props.id);
    props.setTaskList(updatedTask);
    localStorage.setItem(localStorageName, JSON.stringify(updatedTask));
  }

  useEffect(() => {
    setIsDueDate(isDateLessAnd7Days(props.date));
  }, []);
  return (
    <div
      className={`flex flex-row py-4 space-x-3 hover:cursor-pointer items-start`}
      onBlur={() => setIsOpenMore(false)}
    >
      <input
        ref={checkRef}
        type="checkbox"
        name="check"
        className="mt-1"
        defaultChecked={isChecked}
        onClick={() => {
          setIsChecked(!isChecked);
          updateCheck();
        }}
      />
      <div className="flex flex-col space-y-3 w-full">
        <div
          className={`flex flex-row items-start space-x-3 w-full justify-between  ${
            isChecked && "opacity-50"
          }`}
        >
          {isOpen ? (
            <input
              ref={taskNameRef}
              type="text"
              name="taskName"
              defaultValue={props.taskName}
              className="focus:outline-none w-full"
              placeholder="Task Name"
              onBlur={(s) => updateTask()}
            />
          ) : (
            <span
              className={`font-semibold line-clamp-2 select-none ${
                isChecked && "line-through"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {props.taskName}
            </span>
          )}

          <div className="flex flex-row space-x-2  items-center text-xs shrink-0">
            {isDueDate && (
              <span className=" text-indicator-red">{isDueDate} Days Left</span>
            )}
            {props.date && <span>{date.toLocaleDateString("en-US")}</span>}
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-primary-gray-light" />
              ) : (
                <ChevronDown className="w-5 h-5 text-primary-gray-light" />
              )}
            </button>
            <button onClick={() => setIsOpenMore(!isOpenMore)}>
              <ThreeDots className="w-5 h-5 text-primary-gray-light" />
            </button>
            {isOpenMore && (
              <div className="origin-top-right absolute right-4 md:right-0 mt-20  w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="none">
                  <button
                    className="flex justify-start px-4 py-2 text-sm text-indicator-red hover:bg-gray-100  w-full "
                    onClick={() => {
                      deleteTask();
                      setIsOpenMore(false);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
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
                onBlur={(s) => updateTask()}
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
                defaultValue={props.description}
                onBlur={(s) => updateTask()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
