import React from "react";

function Canvas({ children }) {
  return (
    <div className="flex justify-center h-screen items-center font-sans">
      <div className="bg-gradient-to-t from-black to-grad3 w-wmobile h-hmobile rounded-2xl overflow-hidden relative">
        <div className="h-full w-full overflow-y-auto scrollbar-hide relative">
          {/*Canvas is here */}
          {children}
          {/*End of canvas*/}
        </div>
      </div>
    </div>
  );
}

export default Canvas;
