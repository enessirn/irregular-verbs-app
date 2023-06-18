import React from "react";
function Mean({verb2, mean}) {
  return (
    <div className=" p-4 mt-14 bg-red-100">
      <div className="flex !flex-row items-center justify-center">
        <p className="text-4xl mt-4 ml-6">{verb2}</p>
      </div>

      <p className="text-5xl mt-8 ml-6 text-left text-green-400">{mean}</p>
    </div>
  );
}

export default Mean;
