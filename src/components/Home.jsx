import React, { useState } from "react";

import Navbar from "./Navbar";
import TaskCard from "./TaskCard";
import addIcon from "../assets/Add.png";
import EnterTask from "./EnterTask";

function Home() {
  const [edit, setEdit] = useState(false);

  function handleAdd() {
    setEdit(!edit);
  }

  return (
    <>
      <Navbar />

      <div className="w-full h-screen bg-purple-200 flex items-center justify-center">
        {edit && <EnterTask onClose={() => setEdit(false)} />} {/* popup */}
        <div className="w-3/6 h-3/4 bg-gray-200 border rounded-xl">
          <div className="w-full h-12 border-b flex items-center justify-between p-3">
            <h3 className="font-serif font-extrabold text-xl">My Task</h3>
            <button
              className="flex gap-1 font-bold text-purple-500 text-xl"
              onClick={handleAdd}
            >
              <img src={addIcon} alt="" />
              New
            </button>
          </div>
          <div className="w-full h-16 flex items-center">
            <form action="">
              <input
                type="text"
                id="textField"
                placeholder="Search"
                className="border rounded-xl w-96 pl-2 p-1 ml-1"
              />
            </form>
          </div>
          <div className="w-full h-5/6 rounded-b-xl bg-ambe flex justify-center">
            <ul className="w-full p-3">
              <li className="w-full">
                <TaskCard />
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Home;
