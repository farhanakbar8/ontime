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
          color="none"
          reminder="off"
          deadline={true}
        />
      </div>
      <Footer page="Schedules" />
    </Canvas>
  );
}

export default Appointment;
