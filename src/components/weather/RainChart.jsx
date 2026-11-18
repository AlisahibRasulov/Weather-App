import React from "react";
// import rainChart from '../../assets/rain-chart.png'
// const RainChart = () => {
//   return (
//     <div>
//       <img src={rainChart} alt="Rain Chart" />
//     </div>
//   )
// }

// export default RainChart

import rainChart from "../../images/rain-graph.png";

const RainChart = () => {
  return (
    <div className="w-[296px] rounded-[25px] p-5">
      <div className="mb-10">
        {/* <h2 className="text-white text-lg font-semibold">Chance Of Rain</h2> */}
        {/* <p className="text-white/50 text-sm mt-1">
          Precipitation forecast
        </p> */}
      </div>

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
