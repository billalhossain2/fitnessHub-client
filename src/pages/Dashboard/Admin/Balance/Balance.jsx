import React from "react";
import useTitle from "../../../../hooks/useTitle";

const Balance = () => {
  useTitle("FitnessHub | Balance");

  return (
    <div>
      <div className="flex gap-5">
        <div className="bg-orange-500 p-3 rounded-md text-center text-white space-y-2">
          <h3 className="font-bold text-2xl">Remaining Balance</h3>
          <p className="text-3xl font-bold">$5500</p>
        </div>

        <div className="bg-orange-500 p-3 rounded-md text-center text-white space-y-2">
          <h3 className="font-bold text-2xl">Total Payment</h3>
          <p className="text-3xl font-bold">$5500</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
