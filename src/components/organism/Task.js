import PopupContainer from "../atom/container/PopupContainer";
import TaskListContainer from "../atom/container/TaskListContainer";
import TaskBar from "../molecules/TaskBar";

export default function Task() {
  return (
    <PopupContainer>
      <div className="flex flex-col w-full h-full space-y-3 text-sm">
        <div className="flex flex-row w-full justify-between items-center">
          <select className="w-1/2 px-3 py-2 focus:outline-none border border-primary-gray-light rounded-xl">
            <option value="my-task">My Task</option>
            <option value="works-task">Work's Task</option>
          </select>
          <button className="bg-primary-blue text-white  rounded-md px-3 py-2">
            New Task
          </button>
        </div>
        {/* Task Lisk */}
        <TaskListContainer>
          <TaskBar
            taskName="Close off Case #012920-RODRIGUES, Amiguel"
            date="2021-05-06"
            description="Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!"
          />
          <TaskBar
            taskName="Close off Case #012920-RODRIGUES, Amiguel"
            date=""
            description=""
          />
        </TaskListContainer>
      </div>
    </PopupContainer>
  );
}
