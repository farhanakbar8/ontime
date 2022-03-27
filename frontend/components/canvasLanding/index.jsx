import React from "react";

function CanvasLanding({ children }) {
  return (
    <div className="flex justify-center h-screen items-center font-sans">
      <div className="bg-gradient-to-b from-black to-grad3 w-wmobile h-hmobile rounded-2xl overflow-hidden relative">
        {/*Canvas is here */}
        {children}
        {/*End of canvas*/}
      </div>
    </div>
  );
}

export default CanvasLanding;
