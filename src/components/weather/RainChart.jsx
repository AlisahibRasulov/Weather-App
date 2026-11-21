import React from "react";
import rainChart from "../../images/rain-graph.png";

const RainChart = () => {
  return (
    <div className="w-[296px] rounded-[25px] p-5">
      <div className="w-full overflow-hidden">
        <img
          src={rainChart}
          alt="Rain Chart"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default RainChart;
