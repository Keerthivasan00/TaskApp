import del from "../assets/delete.png";
import edit from "../assets/edit.png";
import { useState } from "react";

function TaskCard() {
  const tasks = [
    {
      id: 1,
      title: "java",
      desp: "dbfbkvafbhafbafbjafbjafjbafhaahugaugagabghfhaigsgughuaghaghuag",
      date: "11/12/2025",
    },
    {
      id: 2,
      title: "css",
      desp: "dbfbkvafbhafbafbjafbjafjbafhaahugaugagabghfhaigsgughuaghaghuag",
      date: "11/12/2025",
    },
    {
      id: 3,
      title: "js",
      desp: "dbfbkvafbhafbafbjafbjafjbafhaahugaugagabghfhaigsgughuaghaghuag",
      date: "11/12/2025",
    },
    {
      id: 4,
      title: "mysql",
      desp: "dbfbkvafbhafbafbjafbjafjbafhaahugaugagabghfhaigsgughuaghaghuag",
      date: "11/12/2025",
    },
    {
      id: 5,
      title: "spring",
      desp: "dbfbkvafbhafbafbjafbjafjbafhaahugaugagabghfhaigsgughuaghaghuag",
      date: "11/12/2025",
    },
    {
      id: 6,
      title: "tailwind",
      desp: "dbfbkvafbhafbafbjafbjafjbafhaahugaugagabghfhaigsgughuaghaghuag",
      date: "11/12/2025",
    },
    {
      id: 7,
      title: "bootstrap",
      desp: "dbfbkvafbhafbafbjafbjafjbafhaahugaugagabghfhaigsgughuaghaghuag",
      date: "11/12/2025",
    },
    {
        id:8,
        title:"swing",
        desp:"dbfbkvafbhafbafbjafbjafjbafhaahugaugagabghfhaigsgughuaghaghuag",
        date:"11/12/2025"
    },
    {
        id:9,
        title:"servlet",
        desp:"dbfbkvafbhafbafbjafbjafjbafhaahugaugagabghfhaigsgughuaghaghuag",
        date:"11/12/2025"
    },
    {
        id:10,
        title:"hibernate",
        desp:"dbfbkvafbhafbafbjafbjafjbafhaahugaugagabghfhaigsgughuaghaghuag",
        date:"11/12/2025"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(tasks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTasks = tasks.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {currentTasks.map((task, index) => (
        <div className="w-full h-40 bg-gray-100 border-2 border-gray-300 rounded-xl mb-2">
          <div className="w-full bg-purple-300 h-10  rounded-t-xl flex items-center">
            <input
              type="checkbox"
              className="scale-150 ml-4 accent-purple-600 text-purple-600"
            />
            <h1 className="ml-5 text-2xl font-bold">{task.title}</h1>
          </div>
          <div className="h-18 bg-purple-100 ">
            <p className="ml-10">{task.desp}</p>
          </div>
          <div className="w-full h-11 rounded-b-xl flex justify-between items-center bg-purple-200">
            <div className="ml-3 w-30 h-7 rounded-xl flex justify-center items-center border border-purple-500 bg-purple-300">
              <h3 className="text-purple-600 font-bold">{task.date}</h3>
            </div>
            <div className="flex gap-3">
              <button>
                <img src={del} alt="delete_logo" className="w-5 h-5" />
              </button>
              <button>
                <img src={edit} alt="delete_logo" className="w-5 h-5 mr-3" />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex gap-3 mt-4 justify-center">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-purple-500 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="font-semibold text-purple-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-purple-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default TaskCard;
