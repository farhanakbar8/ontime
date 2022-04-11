import React from "react";
import Header from "../components/header";
import Canvas from "../components/canvas";
import Task from "../components/task";
import Footer from "../components/footer";

function Home() {
  return (
    <Canvas>
      <Header page="Home" />
      <div className="mt-32 mx-5 text-white">
        <p className="text-xs">On Going Task</p>
        <Task
          type="Class"
          title="Calculus"
          date="End in 11 AM, 22 January"
          color="none"
          reminder="off"
          deadline={false}
        />
        <p className="text-xs">Reminder</p>
        <Task
          type="Submission"
          title="Calculus"
          date="22 January"
          color="violet"
          reminder="on"
          deadline={true}
        />
      </div>
      <Footer page="home" />
    </Canvas>
  );
}

export default Home;
