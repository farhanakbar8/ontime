import React from "react";
import Canvas from "../components/canvas";
import Footer from "../components/footer";
import Header from "../components/header";
import Task from "../components/task";

function Appointment() {
  return (
    <Canvas>
      <Header page="Schedules" />
      <div className="mt-20 mx-5 text-white">
        <Task
          type="Submission"
          title="Calculus"
          date="22 January"
          color="violet"
          reminder="on"
          deadline={true}
        />
        <Task
          type="Meeting"
          title="RPL/GDC"
          date="19 PM, 22 January"
          reminder="off"
        />
        <Task
          type="Class"
          title="Statistic"
          date="2 PM, 23 January"
          reminder="off"
        />
        <Task
          type="Class"
          title="Statistic"
          date="2 PM, 23 January"
          reminder="off"
        />
      </div>
      <Footer page="Schedules" />
    </Canvas>
  );
}

export default Appointment;
