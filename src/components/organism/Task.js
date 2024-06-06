import { useEffect, useState } from "react";
import PopupContainer from "../atom/container/PopupContainer";
import TaskListContainer from "../atom/container/TaskListContainer";
import TaskBar from "../molecules/TaskBar";
import { nanoid } from "nanoid";
import NewTaskBar from "../molecules/NewTaskBar";
import SearchBar from "../molecules/SearcBar";
import LoadingCircle from "../molecules/LoadingCircle";

export default function Task() {
  const [isLoading, setIsLoading] = useState(true);
  const [taskList, setTaskList] = useState([]);
  const [isCreateMode, setIsCreateMode] = useState(false);

  // console.log(nanoid());

  useEffect(() => {
    if (!localStorage.getItem("taskList")) {
      localStorage.setItem("taskList", JSON.stringify(defaultTaskList));
      setTaskList(JSON.parse(localStorage.getItem("taskList")));
    } else {
      setTaskList(JSON.parse(localStorage.getItem("taskList")));
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <PopupContainer>
      <div className="flex flex-col w-full h-full space-y-3 text-sm">
        <div className="flex flex-row w-full justify-between items-center">
          <select className="w-1/2 px-3 py-2 focus:outline-none border border-primary-gray-light rounded-xl">
            <option value="my-task">My Task</option>
            <option value="works-task">Work's Task</option>
          </select>
          {!isCreateMode && (
            <button
              className={`text-white  rounded-md px-3 py-2 bg-primary-blue`}
              onClick={() => setIsCreateMode(true)}
            >
              New Task
            </button>
          )}
        </div>
        {/* Task Lisk */}

        {isLoading ? (
          <LoadingCircle title="Loading Task..." />
        ) : (
          <TaskListContainer>
            {isCreateMode && (
              <NewTaskBar
                setTaskList={setTaskList}
                setIsCreateMode={setIsCreateMode}
              />
            )}
            {taskList?.map((task) => {
              return (
                <TaskBar
                  key={task.id}
                  id={task.id}
                  taskName={task.taskName}
                  date={task.date}
                  description={task.description}
                  setTaskList={setTaskList}
                  isChecked={task.isChecked}
                />
              );
            })}
          </TaskListContainer>
        )}
      </div>
    </PopupContainer>
  );
}

export const defaultTaskList = [
  {
    id: "b9y_i_TUNOiPE44rzz8ho",
    taskName: "Close off Case #012920-RODRIGUES, Amiguel",
    date: "2021-05-06",
    description:
      "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!",
    isChecked: false,
  },
  {
    id: "3KopMD5sbTbpjVmxhgeOa",
    taskName: "Close off Case #012920-RODRIGUES, Amiguel",
    date: "",
    description: "",
    isChecked: false,
  },
];
